import { updateUserUsingPost } from '@/services/backend/userController';
import { ProColumns, ProForm, ProFormDigit, ProFormInstance, ProFormSelect, ProFormText, ProFormTextArea, ProFormDatePicker } from '@ant-design/pro-components';
import '@umijs/max';
import { Alert, Cascader, Divider, Form, message, Modal, Typography } from 'antd';
import React, { useRef } from 'react';
import styles from './modal.less';
import regionData from '@/constants/regionData';
import moment from 'moment';

interface Props {
  oldData?: API.User;
  visible: boolean;
  columns: ProColumns<API.User>[];
  onSubmit: (values: API.UserAddRequest) => void;
  onCancel: () => void;
}

/**
 * 更新节点
 *
 * @param fields
 */
const handleUpdate = async (fields: API.UserUpdateRequest) => {
  const hide = message.loading('正在更新');
  try {
    await updateUserUsingPost(fields);
    hide();
    message.success('更新成功');
    return true;
  } catch (error: any) {
    hide();
    message.error('更新失败，' + error.message);
    return false;
  }
};

/**
 * 更新弹窗
 * @param props
 * @constructor
 */
const UpdateModal: React.FC<Props> = (props) => {
  const { oldData, visible, columns, onSubmit, onCancel } = props;
  const formRef = useRef<ProFormInstance>();

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

  // 获取默认的级联选择器值
  const getDefaultCascaderValue = () => {
    if (oldData) {
      const { province, city, district } = oldData;
      if (province) {
        const values = [];
        if (province) values.push(province);
        if (city) values.push(city);
        if (district) values.push(district);
        return values.length > 0 ? values : undefined;
      }
    }
    return undefined;
  };

  if (!oldData) {
    return <></>;
  }

  return (
    <Modal
      destroyOnClose
      title={<Typography.Title level={4} style={{ margin: 0, textAlign: 'left' }}>修改用户信息</Typography.Title>}
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
        message="请修改用户信息，带 * 为必填项"
        type="info"
        showIcon
        style={{ marginBottom: 24 }}
      />
      
      <ProForm
        formRef={formRef}
        initialValues={oldData}
        layout="horizontal"
        labelAlign="right"
        grid={true}
        rowProps={{
          gutter: [16, 16],
        }}
        submitter={{
          searchConfig: {
            submitText: '确认修改',
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
          const success = await handleUpdate({
            ...values,
            id: oldData.id as any,
          });
          if (success) {
            onSubmit?.(values);
          }
        }}
      >
        <div style={{ width: '100%' }}>
          <Typography.Title level={5} style={{ textAlign: 'left' }}>基本信息</Typography.Title>
          <Divider style={{ margin: '8px 0 16px' }} />
        </div>
        
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
          initialValue={getDefaultCascaderValue()}
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
export default UpdateModal;
