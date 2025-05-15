import { ProForm, ProFormInstance, ProFormTextArea } from '@ant-design/pro-components';
import '@umijs/max';
import { Alert, Modal, Typography, message, Upload, Button, Divider, Space, Tag } from 'antd';
import React, { useRef, useState, useEffect } from 'react';
import { processAndReplyUsingPost } from '@/services/backend/userFeedbackController';
import { uploadFileUsingPost } from '@/services/backend/fileController';
import { UploadOutlined, MessageOutlined } from '@ant-design/icons';
import type { UploadFile } from 'antd/es/upload/interface';
import { listRepliesUsingGet } from '@/services/backend/userFeedbackReplyController';

interface Props {
  feedback?: API.UserFeedback;
  visible: boolean;
  onSubmit: () => void;
  onCancel: () => void;
}

/**
 * 格式化日期时间
 * @param dateTimeString ISO格式的日期时间字符串
 */
const formatDateTime = (dateTimeString: string | undefined): string => {
  if (!dateTimeString) return '-';
  
  try {
    const date = new Date(dateTimeString);
    return date.toLocaleString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });
  } catch (error) {
    console.error('日期格式化错误:', error);
    return dateTimeString;
  }
};

/**
 * 回复反馈的模态框
 */
const ReplyModal: React.FC<Props> = (props) => {
  const { visible, feedback, onSubmit, onCancel } = props;
  const formRef = useRef<ProFormInstance>();
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [uploading, setUploading] = useState(false);
  const [fileUrl, setFileUrl] = useState<string>('');
  const [replies, setReplies] = useState<API.UserFeedbackReplyVO[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // 获取该反馈的回复列表
  const fetchReplies = async () => {
    if (!feedback?.id) return;
    setLoading(true);
    try {
      const { data, code } = await listRepliesUsingGet({ feedbackId: feedback.id });
      if (code === 0 && data) {
        setReplies(data);
      }
    } catch (error) {
      console.error('获取回复列表失败', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (visible && feedback?.id) {
      fetchReplies();
    }
  }, [visible, feedback]);

  // 处理文件上传
  const handleUpload = async (options: any) => {
    const { file, onSuccess, onError } = options;
    
    setUploading(true);
    try {
      const { data, code } = await uploadFileUsingPost(
        { filename: file.name, description: '反馈回复附件' },
        {},
        file,
      );

      if (code === 0 && data) {
        setFileUrl(data);
        onSuccess('上传成功');
        message.success('文件上传成功');
      } else {
        onError('上传失败');
        message.error('文件上传失败');
      }
    } catch (error) {
      onError('上传出错');
      message.error('上传出错');
      console.error('上传出错', error);
    } finally {
      setUploading(false);
    }
  };

  // 处理回复提交
  const handleReply = async (values: API.UserFeedbackReplyAddRequest) => {
    if (!feedback?.id) {
      message.error('反馈ID不能为空');
      return false;
    }

    const hide = message.loading('正在提交');
    try {
      // 将上传的文件URL添加到表单
      const formData = {
        ...values,
        feedbackId: feedback.id,
        attachment: fileUrl || '',
      };

      await processAndReplyUsingPost(formData);
      hide();
      message.success('回复成功');
      // 刷新回复列表
      fetchReplies();
      return true;
    } catch (error: any) {
      hide();
      message.error('回复失败，' + error.message);
      return false;
    }
  };

  // 表单提交前清空
  const handleCancel = () => {
    setFileList([]);
    setFileUrl('');
    onCancel();
  };

  // 渲染反馈状态
  const renderFeedbackStatus = (status?: number) => {
    if (status === 0) {
      return <Tag color="warning">未处理</Tag>;
    } else if (status === 1) {
      return <Tag color="processing">处理中</Tag>;
    } else if (status === 2) {
      return <Tag color="success">已完成</Tag>;
    } else {
      return <Tag color="default">未知状态</Tag>;
    }
  };

  return (
    <Modal
      destroyOnClose
      title={<Typography.Title level={4} style={{ margin: 0 }}>回复反馈</Typography.Title>}
      open={visible}
      footer={null}
      width={800}
      onCancel={handleCancel}
    >
      <Alert
        message={
          <Space>
            <span>您正在回复标题为 "{feedback?.title}" 的反馈</span>
            <span>状态: {feedback?.status !== undefined && renderFeedbackStatus(feedback.status)}</span>
          </Space>
        }
        type="info"
        showIcon
        style={{ marginBottom: 24 }}
      />

      {/* 历史沟通记录 */}
      <div style={{ marginBottom: 24 }}>
        <Divider>
          <Space>
            <MessageOutlined />
            <span>历史沟通记录</span>
          </Space>
        </Divider>

        {replies.length > 0 ? (
          <div style={{ maxHeight: 300, overflow: 'auto', marginBottom: 24 }}>
            {replies.map((reply) => (
              <div
                key={reply.id}
                style={{
                  padding: 16,
                  marginBottom: 16,
                  border: '1px solid #f0f0f0',
                  borderRadius: 4,
                  backgroundColor: reply.senderRole === 1 ? '#f6f6f6' : '#e6f7ff',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <Space>
                    <Typography.Text strong>
                      {reply.senderRole === 1 ? '管理员' : '用户'}: {reply.sender?.userName || reply.senderId}
                    </Typography.Text>
                  </Space>
                  <Typography.Text type="secondary">{formatDateTime(reply.createTime)}</Typography.Text>
                </div>
                <Typography.Paragraph style={{ whiteSpace: 'pre-wrap', margin: 0 }}>
                  {reply.content}
                </Typography.Paragraph>
                {reply.attachment && (
                  <div style={{ marginTop: 8 }}>
                    <Typography.Text type="secondary">附件：</Typography.Text>
                    <Button type="link" href={reply.attachment} target="_blank">
                      查看附件
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <Typography.Text type="secondary" style={{ display: 'block', textAlign: 'center', marginBottom: 24 }}>
            暂无沟通记录
          </Typography.Text>
        )}
      </div>

      <Divider>
        <Space>
          <MessageOutlined />
          <span>回复内容</span>
        </Space>
      </Divider>

      <ProForm
        formRef={formRef}
        layout="vertical"
        submitter={{
          searchConfig: {
            submitText: '提交回复',
            resetText: '取消',
          },
          render: (_, dom) => dom.pop(),
          submitButtonProps: {
            size: 'large',
            style: { width: 120 },
            loading: uploading,
          },
          resetButtonProps: {
            style: {
              display: 'none',
            },
          },
        }}
        onFinish={async (values) => {
          const success = await handleReply(values as API.UserFeedbackReplyAddRequest);
          if (success) {
            setFileList([]);
            setFileUrl('');
            formRef.current?.resetFields();
            // 不关闭窗口，允许继续回复
          }
        }}
      >
        <ProFormTextArea
          name="content"
          label="回复内容"
          placeholder="请输入回复内容"
          rules={[
            {
              required: true,
              message: '请输入回复内容',
            },
            {
              max: 500,
              message: '回复内容不能超过500个字符',
            },
          ]}
          fieldProps={{
            rows: 6,
            maxLength: 500,
            showCount: true,
          }}
        />

        <div style={{ marginBottom: 24 }}>
          <Typography.Text style={{ marginBottom: 8, display: 'block' }}>
            上传附件（可选）
          </Typography.Text>
          <Upload
            fileList={fileList}
            customRequest={handleUpload}
            maxCount={1}
            onChange={({ fileList }) => setFileList(fileList)}
            onRemove={() => {
              setFileUrl('');
              setFileList([]);
            }}
          >
            <Button icon={<UploadOutlined />}>选择文件</Button>
            <Typography.Text type="secondary" style={{ marginLeft: 8 }}>
              支持图片、文档等格式
            </Typography.Text>
          </Upload>
          {fileUrl && (
            <Typography.Text type="success" style={{ display: 'block', marginTop: 8 }}>
              文件已上传，提交表单时将自动添加附件
            </Typography.Text>
          )}
        </div>
      </ProForm>
    </Modal>
  );
};

export default ReplyModal; 