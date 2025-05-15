import '@umijs/max';
import { Modal, Typography, Descriptions, Tag, Image, Button, Space, Divider } from 'antd';
import React, { useEffect, useState } from 'react';
import { FormOutlined, MessageOutlined } from '@ant-design/icons';
import { listRepliesUsingGet } from '@/services/backend/userFeedbackReplyController';

interface Props {
  feedback?: API.UserFeedback;
  visible: boolean;
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
 * 查看反馈详情的模态框
 */
const ViewModal: React.FC<Props> = (props) => {
  const { visible, feedback, onCancel } = props;
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

  // 渲染反馈类型
  const renderFeedbackType = (type?: string) => {
    return type || '其他';
  };

  // 是否显示图片附件
  const isImageAttachment = feedback?.attachment?.match(/\.(jpeg|jpg|gif|png)$/i);

  return (
    <Modal
      destroyOnClose
      title={<Typography.Title level={4} style={{ margin: 0 }}>反馈详情</Typography.Title>}
      open={visible}
      footer={null}
      width={800}
      onCancel={onCancel}
    >
      <Descriptions column={2} bordered style={{ marginBottom: 24 }}>
        <Descriptions.Item label="标题" span={2}>
          {feedback?.title}
        </Descriptions.Item>
        <Descriptions.Item label="反馈类型">
          {renderFeedbackType(feedback?.feedbackType)}
        </Descriptions.Item>
        <Descriptions.Item label="处理状态">
          {renderFeedbackStatus(feedback?.status)}
        </Descriptions.Item>
        <Descriptions.Item label="用户ID">
          {feedback?.userId}
        </Descriptions.Item>
        <Descriptions.Item label="创建时间">
          {formatDateTime(feedback?.createTime)}
        </Descriptions.Item>
        <Descriptions.Item label="处理时间" span={2}>
          {feedback?.status === 0 ? '未处理' : formatDateTime(feedback?.processTime)}
        </Descriptions.Item>
        <Descriptions.Item label="反馈内容" span={2}>
          <Typography.Paragraph style={{ whiteSpace: 'pre-wrap' }}>
            {feedback?.content}
          </Typography.Paragraph>
        </Descriptions.Item>
        {feedback?.attachment && (
          <Descriptions.Item label="附件" span={2}>
            {isImageAttachment ? (
              <Image
                src={feedback.attachment}
                alt="附件"
                style={{ maxWidth: '100%', maxHeight: 400 }}
              />
            ) : (
              <Button type="link" href={feedback.attachment} target="_blank">
                查看附件
              </Button>
            )}
          </Descriptions.Item>
        )}
      </Descriptions>

      <Divider>
        <Space>
          <MessageOutlined />
          <span>回复记录</span>
        </Space>
      </Divider>

      {replies.length > 0 ? (
        <div style={{ maxHeight: 300, overflow: 'auto' }}>
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
        <Typography.Text type="secondary" style={{ display: 'block', textAlign: 'center' }}>
          暂无回复记录
        </Typography.Text>
      )}
    </Modal>
  );
};

export default ViewModal; 