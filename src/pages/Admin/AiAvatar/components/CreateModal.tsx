import { addAiAvatarUsingPost } from '@/services/backend/aiAvatarController';
import { ProColumns } from '@ant-design/pro-components';
import '@umijs/max';
import { message, Modal, Form, Input, Button, Radio, InputNumber, Upload, Select, Image, Row, Col } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';

interface Props {
  visible: boolean;
  columns: ProColumns<API.AiAvatar>[];
  onSubmit: (values: API.AiAvatarAddRequest) => void;
  onCancel: () => void;
}

/**
 * 添加AI分身
 * @param fields
 */
const handleAdd = async (fields: API.AiAvatarAddRequest) => {
  const hide = message.loading('正在创建');
  try {
    await addAiAvatarUsingPost(fields);
    hide();
    message.success('创建成功');
    return true;
  } catch (error: any) {
    hide();
    message.error('创建失败，' + error.message);
    return false;
  }
};

/**
 * 创建AI分身弹窗
 * @param props
 * @constructor
 */
const CreateModal: React.FC<Props> = (props) => {
  const { visible, columns, onSubmit, onCancel } = props;
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [uploading, setUploading] = useState<boolean>(false);

  // 提交表单
  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      setSubmitting(true);
      
      // 处理表单数据
      const postData: API.AiAvatarAddRequest = {
        name: values.name,
        description: values.description,
        avatarImgUrl: values.avatarImgUrl,
        abilities: values.abilities,
        personality: values.personality,
        avatarAuth: values.avatarAuth,
        tags: values.tags ? values.tags.filter((tag: string) => tag.trim() !== '').join(',') : '',
        baseUrl: values.baseUrl,
        isPublic: values.isPublic,
        sort: values.sort
      };
      
      const success = await handleAdd(postData);
      if (success) {
        form.resetFields();
        setFileList([]);
        onSubmit?.(postData);
      }
      setSubmitting(false);
    } catch (error) {
      setSubmitting(false);
    }
  };

  // 处理上传图片的变化
  const handleUploadChange: UploadProps['onChange'] = (info) => {
    if (info.file.status === 'uploading') {
      setUploading(true);
      return;
    }
    
    if (info.file.status === 'done') {
      // 获取上传成功后的URL
      const imageUrl = info.file.response?.data;
      if (imageUrl) {
        form.setFieldsValue({ avatarImgUrl: imageUrl });
        message.success('上传成功');
      }
      setUploading(false);
    } else if (info.file.status === 'error') {
      message.error('上传失败');
      setUploading(false);
    }
    
    setFileList(info.fileList.slice(-1)); // 只保留最后一个文件
  };

  // 上传前检查
  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('只能上传JPG/PNG格式的图片!');
      return false;
    }
    
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('图片大小不能超过2MB!');
      return false;
    }
    
    return true;
  };

  // 上传按钮
  const uploadButton = (
    <div>
      {uploading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>上传</div>
    </div>
  );

  return (
    <Modal
      destroyOnClose
      title="创建AI分身"
      open={visible}
      onCancel={() => {
        form.resetFields();
        setFileList([]);
        onCancel?.();
      }}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          取消
        </Button>,
        <Button key="submit" type="primary" loading={submitting} onClick={handleSubmit}>
          创建
        </Button>,
      ]}
      width={600}
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          isPublic: 1,
          sort: 0
        }}
      >
        <Form.Item
          name="name"
          label="名称"
          rules={[{ required: true, message: '请输入AI分身名称' }]}
        >
          <Input placeholder="请输入AI分身名称" maxLength={50} />
        </Form.Item>
        
        <Form.Item
          name="description"
          label="描述"
          rules={[{ required: true, message: '请输入AI分身描述' }]}
        >
          <Input.TextArea 
            placeholder="请输入AI分身描述" 
            rows={4} 
            maxLength={500} 
            showCount 
          />
        </Form.Item>
        
        <Form.Item
          name="baseUrl"
          label="基础URL"
        >
          <Input placeholder="请输入基础URL" />
        </Form.Item>
        
        <Form.Item label="头像">
          <Row gutter={16} align="middle">
            <Col span={8} style={{ textAlign: 'center' }}>
              {fileList.length > 0 && fileList[0].url ? (
                <Image 
                  src={fileList[0].url} 
                  alt="头像预览" 
                  style={{ width: '100%', maxWidth: '104px', borderRadius: '4px' }}
                />
              ) : (
                <div style={{ width: '104px', height: '104px', backgroundColor: '#f5f5f5', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span>暂无头像</span>
                </div>
              )}
            </Col>
            <Col span={16}>
              <Form.Item
                name="avatarImgUrl"
                label="头像URL"
                help="请输入头像URL或上传图片"
                style={{ marginBottom: 0 }}
                noStyle={false}
              >
                <Input 
                  placeholder="请输入头像URL" 
                  onChange={(e) => {
                    const url = e.target.value;
                    if (url && url.trim() !== '') {
                      setFileList([
                        {
                          uid: '-1',
                          name: 'avatar.png',
                          status: 'done',
                          url: url,
                        },
                      ]);
                    } else {
                      setFileList([]);
                    }
                  }}
                />
              </Form.Item>
              <div style={{ marginTop: '8px' }}>
                <Upload
                  name="file"
                  action="/api/file/upload"
                  onChange={handleUploadChange}
                  beforeUpload={beforeUpload}
                  maxCount={1}
                  showUploadList={false}
                >
                  <Button icon={<PlusOutlined />}>
                    {fileList.length >= 1 ? '更换头像' : '上传头像'}
                  </Button>
                </Upload>
              </div>
            </Col>
          </Row>
        </Form.Item>
        
        <Form.Item
          name="abilities"
          label="能力"
        >
          <Input.TextArea 
            placeholder="请输入AI分身能力" 
            rows={3} 
            maxLength={500} 
            showCount 
          />
        </Form.Item>
        
        <Form.Item
          name="personality"
          label="性格"
        >
          <Input.TextArea 
            placeholder="请输入AI分身性格" 
            rows={3} 
            maxLength={500} 
            showCount 
          />
        </Form.Item>
        
        <Form.Item
          name="avatarAuth"
          label="鉴权秘钥"
        >
          <Input.TextArea 
            placeholder="请输入AI分身鉴权秘钥" 
            rows={3} 
            maxLength={500} 
            showCount 
          />
        </Form.Item>
        
        <Form.Item
          name="tags"
          label="标签"
          help="输入标签后按Enter键添加"
        >
          <Select
            mode="tags"
            placeholder="请输入标签"
            style={{ width: '100%' }}
            tokenSeparators={[',']}
          />
        </Form.Item>

        <Form.Item
          name="isPublic"
          label="是否公开"
          rules={[{ required: true, message: '请选择是否公开' }]}
        >
          <Radio.Group>
            <Radio value={1}>公开</Radio>
            <Radio value={0}>私密</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="sort"
          label="排序"
          rules={[{ required: true, message: '请输入排序号' }]}
        >
          <InputNumber min={0} placeholder="请输入排序号" style={{ width: '100%' }} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateModal; 