import { addUserUsingPost } from '@/services/backend/userController';
import { ProColumns, ProForm, ProFormDigit, ProFormInstance, ProFormSelect, ProFormText, ProFormTextArea, ProFormDatePicker } from '@ant-design/pro-components';
import '@umijs/max';
import { Alert, Cascader, Divider, Form, message, Modal, Typography, Upload, Button, Image, Row, Col, Input } from 'antd';
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons';
import React, { useRef, useState } from 'react';
import styles from './modal.less';
import regionData from '@/constants/regionData';
import moment from 'moment';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';

interface Props {
  visible: boolean;
  columns: ProColumns<API.User>[];
  onSubmit: (values: API.UserAddRequest) => void;
  onCancel: () => void;
}

/**
 * 添加节点
 * @param fields
 */
const handleAdd = async (fields: API.UserAddRequest) => {
  const hide = message.loading('正在添加');
  try {
    await addUserUsingPost(fields);
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
 * 创建弹窗
 * @param props
 * @constructor
 */
const CreateModal: React.FC<Props> = (props) => {
  const { visible, columns, onSubmit, onCancel } = props;
  const formRef = useRef<ProFormInstance>();
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [uploading, setUploading] = useState<boolean>(false);

  // 处理级联选择器的变化
  const handleCascaderChange = (value: string[]) => {
    if (value && value.length > 0) {
      formRef.current?.setFieldsValue({
        province: value[0] || '',
        city: value[1] || '',
        district: value[2] || '',
      });
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
        formRef.current?.setFieldsValue({ userAvatar: imageUrl });
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
      title={<Typography.Title level={4} style={{ margin: 0, textAlign: 'left' }}>创建新用户</Typography.Title>}
      open={visible}
      footer={null}
      width={800}
      className={styles.modalWrapper}
      onCancel={() => {
        onCancel?.();
      }}
      styles={{
        body: { padding: '24px 24px 12px' }
      }}
    >
      <Alert
        message="请填写用户信息，带 * 为必填项"
        type="info"
        showIcon
        style={{ marginBottom: 24 }}
      />
      
      <ProForm
        formRef={formRef}
        layout="horizontal"
        labelAlign="right"
        grid={true}
        rowProps={{
          gutter: [16, 16],
        }}
        submitter={{
          searchConfig: {
            submitText: '确认创建',
            resetText: '取消',
          },
          render: (_, dom) => dom.pop(),
          submitButtonProps: {
            size: 'large',
            style: { width: 120 },
          },
          resetButtonProps: {
            style: { display: 'none' },
          },
        }}
        onFinish={async (values: API.UserAddRequest) => {
          const success = await handleAdd(values);
          if (success) {
            onSubmit?.(values);
          }
        }}
      >
        <div style={{ width: '100%' }}>
          <Typography.Title level={5} style={{ textAlign: 'left' }}>基本信息</Typography.Title>
          <Divider style={{ margin: '8px 0 16px' }} />
        </div>
        
        <Form.Item
          label="头像"
          name="userAvatar"
          help="请上传用户头像或输入头像URL"
          tooltip="支持jpg/png格式，大小不超过2MB"
          style={{ gridColumn: 'span 2' }}
        >
          <Row gutter={16} align="middle">
            <Col span={6} style={{ textAlign: 'center' }}>
              {fileList.length > 0 && (fileList[0].url || fileList[0].thumbUrl) ? (
                <Image 
                  src={fileList[0].url || fileList[0].thumbUrl} 
                  alt="头像预览" 
                  style={{ width: '100px', height: '100px', borderRadius: '8px', objectFit: 'cover' }}
                />
              ) : (
                <div style={{ width: '100px', height: '100px', backgroundColor: '#f5f5f5', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span>暂无头像</span>
                </div>
              )}
            </Col>
            <Col span={18}>
              <Input 
                placeholder="请输入头像URL" 
                style={{ marginBottom: '8px', width: '100%' }}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Button 
                  icon={<PlusOutlined />} 
                  onClick={() => {
                    const uploadElement = document.querySelector('.avatar-upload input[type="file"]');
                    if (uploadElement) {
                      (uploadElement as HTMLElement).click();
                    }
                  }}
                >
                  {fileList.length >= 1 ? '更换头像' : '上传头像'}
                </Button>
                <Upload
                  name="file"
                  action="/api/file/upload"
                  listType="text"
                  fileList={fileList}
                  onChange={handleUploadChange}
                  beforeUpload={beforeUpload}
                  maxCount={1}
                  showUploadList={false}
                  className="avatar-upload"
                >
                  <div style={{ display: 'none' }}>
                    {uploadButton}
                  </div>
                </Upload>
                <div style={{ marginLeft: '12px', fontSize: '12px', color: '#999' }}>
                  支持JPG/PNG格式，大小不超过2MB
                </div>
              </div>
            </Col>
          </Row>
        </Form.Item>
        
        <ProFormText
          name="userAccount"
          label="账号"
          placeholder="请输入账号"
          colProps={{ span: 12 }}
          rules={[
            { required: true, message: '请输入账号!' },
            { min: 5, max: 20, message: '账号长度必须在5-20个字符之间' },
            { pattern: /^[a-zA-Z0-9_]+$/, message: '账号只能包含字母、数字和下划线' }
          ]}
        />

        <ProFormText.Password
          name="userPassword"
          label="密码"
          placeholder="请输入密码"
          colProps={{ span: 12 }}
          rules={[
            { required: true, message: '请输入密码!' },
            { min: 6, message: '密码长度不能少于6个字符' },
            { pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, message: '密码必须包含大小写字母和数字' }
          ]}
        />
        
        <ProFormText
          name="userName"
          label="用户名"
          placeholder="请输入用户名"
          colProps={{ span: 12 }}
          rules={[
            { max: 20, message: '用户名长度不能超过20个字符' }
          ]}
        />
        
        <ProFormSelect
          name="userGender"
          label="性别"
          placeholder="请选择性别"
          colProps={{ span: 12 }}
          options={[
            { value: 0, label: '男' },
            { value: 1, label: '女' },
            { value: 2, label: '保密' },
          ]}
        />
        
        <ProFormDatePicker
          name="birthday"
          label="生日"
          placeholder="请选择生日"
          colProps={{ span: 12 }}
          fieldProps={{
            disabledDate: (current: moment.Moment | null) => current && current > moment(),
          }}
        />
        
        <ProFormSelect
          name="userRole"
          width="md"
          label="权限"
          placeholder="请选择用户权限"
          colProps={{ span: 12 }}
          options={[
            { value: 'student', label: '学生' },
            { value: 'teacher', label: '教师' },
            { value: 'admin', label: '管理员' },
            { value: 'ban', label: '封禁' },
          ]}
          rules={[{ required: true, message: '请选择用户权限!' }]}
        />
        
        <div style={{ width: '100%' }}>
          <Typography.Title level={5} style={{ textAlign: 'left', marginTop: 24 }}>联系方式</Typography.Title>
          <Divider style={{ margin: '8px 0 16px' }} />
        </div>
        
        <ProFormText
          name="userPhone"
          label="手机号"
          placeholder="请输入手机号"
          colProps={{ span: 12 }}
          rules={[
            { pattern: /^1[3-9]\d{9}$/, message: '请输入有效的手机号码' }
          ]}
        />
        
        <ProFormText
          name="userEmail"
          label="邮箱"
          placeholder="请输入邮箱"
          colProps={{ span: 12 }}
          rules={[
            { 
              type: 'email',
              message: '请输入有效的邮箱地址!',
            }
          ]}
        />
        
        <ProFormText
          name="wechatId"
          label="微信号"
          placeholder="请输入微信号"
          colProps={{ span: 12 }}
          rules={[
            { pattern: /^[a-zA-Z0-9_-]{6,20}$/, message: '请输入有效的微信号' }
          ]}
        />
        
        <div style={{ width: '100%' }}>
          <Typography.Title level={5} style={{ textAlign: 'left', marginTop: 24 }}>地址信息</Typography.Title>
          <Divider style={{ margin: '8px 0 16px' }} />
        </div>
        
        <Form.Item
          label="地区选择"
          name="regionCascader"
          style={{ marginBottom: 0 }}
          wrapperCol={{ span: 24 }}
        >
          <Cascader
            options={regionData}
            placeholder="请选择地区"
            onChange={handleCascaderChange}
            fieldNames={{ label: 'name', value: 'name', children: 'children' }}
            style={{ width: '100%' }}
            changeOnSelect
          />
        </Form.Item>
        
        <ProFormText
          name="province"
          label="省份"
          placeholder="请输入省份"
          colProps={{ span: 8 }}
          hidden
        />
        
        <ProFormText
          name="city"
          label="城市"
          placeholder="请输入城市"
          colProps={{ span: 8 }}
          hidden
        />
        
        <ProFormText
          name="district"
          label="区/县"
          placeholder="请输入区/县"
          colProps={{ span: 8 }}
          hidden
        />
        
        <div style={{ width: '100%' }}>
          <Typography.Title level={5} style={{ textAlign: 'left', marginTop: 24 }}>其他信息</Typography.Title>
          <Divider style={{ margin: '8px 0 16px' }} />
        </div>
        
        <ProFormTextArea
          name="userProfile"
          label="简介"
          placeholder="请输入用户简介"
          colProps={{ span: 24 }}
          fieldProps={{
            rows: 4,
            maxLength: 200,
            showCount: true,
          }}
          rules={[
            { max: 200, message: '简介最多200个字符' }
          ]}
        />
      </ProForm>
    </Modal>
  );
};
export default CreateModal;
