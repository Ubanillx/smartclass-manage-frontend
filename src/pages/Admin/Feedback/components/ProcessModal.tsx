import { ProForm, ProFormInstance, ProFormRadio } from '@ant-design/pro-components';
import '@umijs/max';
import { Alert, Modal, Typography } from 'antd';
import React, { useRef } from 'react';

interface Props {
  feedback?: API.UserFeedback;
  visible: boolean;
  onSubmit: (values: { status: number }) => void;
  onCancel: () => void;
}

/**
 * 处理反馈的模态框
 */
const ProcessModal: React.FC<Props> = (props) => {
  const { visible, feedback, onSubmit, onCancel } = props;
  const formRef = useRef<ProFormInstance>();

  return (
    <Modal
      destroyOnClose
      title={<Typography.Title level={4} style={{ margin: 0 }}>处理反馈</Typography.Title>}
      open={visible}
      footer={null}
      width={600}
      onCancel={onCancel}
    >
      <Alert
        message={`您正在处理标题为 "${feedback?.title}" 的反馈`}
        type="info"
        showIcon
        style={{ marginBottom: 24 }}
      />

      <ProForm
        formRef={formRef}
        initialValues={{ status: feedback?.status || 0 }}
        layout="vertical"
        submitter={{
          searchConfig: {
            submitText: '确认',
            resetText: '取消',
          },
          render: (_, dom) => dom.pop(),
          submitButtonProps: {
            size: 'large',
            style: { width: 120 },
          },
          resetButtonProps: {
            style: {
              display: 'none',
            },
          },
        }}
        onFinish={async (values) => {
          onSubmit?.(values as { status: number });
        }}
      >
        <ProFormRadio.Group
          name="status"
          label="处理状态"
          options={[
            {
              label: '未处理',
              value: 0,
            },
            {
              label: '处理中',
              value: 1,
            },
            {
              label: '已完成',
              value: 2,
            },
          ]}
          rules={[{ required: true, message: '请选择处理状态' }]}
        />
      </ProForm>
    </Modal>
  );
};

export default ProcessModal; 