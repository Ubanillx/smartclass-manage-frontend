import { addDailyWordUsingPost } from '@/services/backend/dailyWordController';
import { ProColumns } from '@ant-design/pro-components';
import '@umijs/max';
import { message, Modal, Form, Input, Button, DatePicker, InputNumber, Select } from 'antd';
import React, { useState } from 'react';
import moment from 'moment';

interface Props {
  visible: boolean;
  columns: ProColumns<API.DailyWordVO>[];
  onSubmit: (values: API.DailyWordAddRequest) => void;
  onCancel: () => void;
}

/**
 * 添加每日单词
 * @param fields
 */
const handleAdd = async (fields: API.DailyWordAddRequest) => {
  const hide = message.loading('正在创建');
  try {
    await addDailyWordUsingPost(fields);
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
 * 创建每日单词弹窗
 * @param props
 * @constructor
 */
const CreateModal: React.FC<Props> = (props) => {
  const { visible, columns, onSubmit, onCancel } = props;
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState<boolean>(false);

  // 提交表单
  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      setSubmitting(true);
      
      // 处理日期格式
      let publishDate = values.publishDate;
      if (publishDate) {
        publishDate = moment(publishDate).format('YYYY-MM-DD');
      }
      
      // 处理表单数据
      const postData: API.DailyWordAddRequest = {
        ...values,
        publishDate,
      };
      
      const success = await handleAdd(postData);
      if (success) {
        form.resetFields();
        onSubmit?.(postData);
      }
      setSubmitting(false);
    } catch (error) {
      setSubmitting(false);
    }
  };

  return (
    <Modal
      destroyOnClose
      title="创建每日单词"
      open={visible}
      onCancel={() => {
        form.resetFields();
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
          difficulty: 1,
          publishDate: moment(),
        }}
      >
        <Form.Item
          name="word"
          label="单词"
          rules={[{ required: true, message: '请输入单词' }]}
        >
          <Input placeholder="请输入单词" maxLength={50} />
        </Form.Item>
        
        <Form.Item
          name="translation"
          label="翻译"
          rules={[{ required: true, message: '请输入翻译' }]}
        >
          <Input placeholder="请输入翻译" maxLength={200} />
        </Form.Item>
        
        <Form.Item
          name="pronunciation"
          label="音标"
        >
          <Input placeholder="请输入音标，如 [həˈləʊ]" />
        </Form.Item>
        
        <Form.Item
          name="example"
          label="例句"
        >
          <Input.TextArea 
            placeholder="请输入例句" 
            rows={3} 
            maxLength={500} 
            showCount 
          />
        </Form.Item>
        
        <Form.Item
          name="exampleTranslation"
          label="例句翻译"
        >
          <Input.TextArea 
            placeholder="请输入例句翻译" 
            rows={3} 
            maxLength={500} 
            showCount 
          />
        </Form.Item>
        
        <Form.Item
          name="category"
          label="分类"
        >
          <Input placeholder="请输入分类，如：生活、职场、学术等" />
        </Form.Item>
        
        <Form.Item
          name="difficulty"
          label="难度"
          rules={[{ required: true, message: '请选择难度' }]}
        >
          <Select>
            <Select.Option value={1}>简单</Select.Option>
            <Select.Option value={2}>中等</Select.Option>
            <Select.Option value={3}>较难</Select.Option>
            <Select.Option value={4}>困难</Select.Option>
          </Select>
        </Form.Item>
        
        <Form.Item
          name="audioUrl"
          label="音频URL"
        >
          <Input placeholder="请输入音频URL" />
        </Form.Item>
        
        <Form.Item
          name="notes"
          label="补充说明"
        >
          <Input.TextArea 
            placeholder="请输入补充说明" 
            rows={3} 
            maxLength={500} 
            showCount 
          />
        </Form.Item>
        
        <Form.Item
          name="publishDate"
          label="发布日期"
          rules={[{ required: true, message: '请选择发布日期' }]}
        >
          <DatePicker 
            style={{ width: '100%' }} 
            placeholder="请选择发布日期"
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateModal; 