import { updateDailyArticleUsingPut } from '@/services/backend/dailyArticleController';
import { ProColumns } from '@ant-design/pro-components';
import '@umijs/max';
import { message, Modal, Form, Input, Button, DatePicker, InputNumber, Select, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';

interface Props {
  oldData?: API.DailyArticleVO;
  visible: boolean;
  columns: ProColumns<API.DailyArticleVO>[];
  onSubmit: (values: API.DailyArticleUpdateRequest) => void;
  onCancel: () => void;
}

/**
 * 更新每日一文
 *
 * @param fields
 */
const handleUpdate = async (fields: API.DailyArticleUpdateRequest) => {
  const hide = message.loading('正在更新');
  try {
    await updateDailyArticleUsingPut({ id: fields.id as number }, fields);
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
 * 更新每日美文弹窗
 * @param props
 * @constructor
 */
const UpdateModal: React.FC<Props> = (props) => {
  const { oldData, visible, columns, onSubmit, onCancel } = props;
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  useEffect(() => {
    if (oldData && visible) {
      // 处理日期格式，将字符串转为moment对象
      const initialValues = {
        ...oldData,
        publishDate: oldData.publishDate ? moment(oldData.publishDate) : undefined,
      };
      form.setFieldsValue(initialValues);
      
      // 如果有封面图片，设置到文件列表
      if (oldData.coverImage) {
        setFileList([
          {
            uid: '-1',
            name: 'cover.png',
            status: 'done',
            url: oldData.coverImage,
          },
        ]);
      } else {
        setFileList([]);
      }
    }
  }, [oldData, visible, form]);

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
      const postData: API.DailyArticleUpdateRequest = {
        ...values,
        id: oldData?.id,
        publishDate,
      };
      
      const success = await handleUpdate(postData);
      if (success) {
        onSubmit?.(postData);
      }
      setSubmitting(false);
    } catch (error) {
      setSubmitting(false);
    }
  };

  // 处理上传图片预览
  const handleUploadChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    
    // 如果有新文件上传，读取为base64并设置到表单
    if (newFileList.length > 0 && newFileList[0].originFileObj) {
      getBase64(newFileList[0].originFileObj as RcFile, (url) => {
        form.setFieldsValue({ coverImage: url });
      });
    } else if (newFileList.length > 0 && newFileList[0].url) {
      // 保持现有URL
      form.setFieldsValue({ coverImage: newFileList[0].url });
    } else {
      form.setFieldsValue({ coverImage: undefined });
    }
  };

  // 文件转base64
  const getBase64 = (file: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(file);
  };

  // 上传前检查
  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('只能上传JPG/PNG格式的图片!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('图片大小不能超过2MB!');
    }
    return false; // 阻止自动上传
  };

  if (!oldData) {
    return <></>;
  }

  return (
    <Modal
      destroyOnClose
      title="编辑每日美文"
      open={visible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          取消
        </Button>,
        <Button key="submit" type="primary" loading={submitting} onClick={handleSubmit}>
          更新
        </Button>,
      ]}
      width={800}
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{}}
      >
        <Form.Item
          name="title"
          label="标题"
          rules={[{ required: true, message: '请输入标题' }]}
        >
          <Input placeholder="请输入标题" maxLength={100} />
        </Form.Item>
        
        <Form.Item
          name="author"
          label="作者"
          rules={[{ required: true, message: '请输入作者' }]}
        >
          <Input placeholder="请输入作者" maxLength={50} />
        </Form.Item>

        <Form.Item
          name="summary"
          label="摘要"
          rules={[{ required: true, message: '请输入摘要' }]}
        >
          <Input.TextArea 
            placeholder="请输入摘要" 
            rows={2} 
            maxLength={200} 
            showCount 
          />
        </Form.Item>
        
        <Form.Item
          name="content"
          label="内容"
          rules={[{ required: true, message: '请输入内容' }]}
        >
          <Input.TextArea 
            placeholder="请输入内容" 
            rows={10} 
            maxLength={10000} 
            showCount 
          />
        </Form.Item>
        
        <Form.Item
          name="category"
          label="分类"
        >
          <Input placeholder="请输入分类，如：文学、科技、生活等" />
        </Form.Item>
        
        <Form.Item
          name="tags"
          label="标签"
          help="多个标签请用逗号分隔，如：散文,小说,励志"
        >
          <Input placeholder="请输入标签，多个标签用逗号分隔" />
        </Form.Item>
        
        <Form.Item
          name="coverImage"
          label="封面图片"
        >
          <Input placeholder="请输入封面图片URL或上传图片" />
        </Form.Item>
        
        <Form.Item label="上传封面">
          <Upload
            listType="picture-card"
            fileList={fileList}
            onChange={handleUploadChange}
            beforeUpload={beforeUpload}
            maxCount={1}
          >
            {fileList.length === 0 && <div>
              <UploadOutlined />
              <div style={{ marginTop: 8 }}>上传</div>
            </div>}
          </Upload>
        </Form.Item>
        
        <Form.Item
          name="source"
          label="来源"
        >
          <Input placeholder="请输入文章来源" />
        </Form.Item>
        
        <Form.Item
          name="sourceUrl"
          label="来源URL"
        >
          <Input placeholder="请输入来源URL" />
        </Form.Item>
        
        <Form.Item
          name="difficulty"
          label="难度"
          rules={[{ required: true, message: '请选择难度' }]}
        >
          <Select>
            <Select.Option value={1}>初级</Select.Option>
            <Select.Option value={2}>中级</Select.Option>
            <Select.Option value={3}>高级</Select.Option>
            <Select.Option value={4}>专家</Select.Option>
          </Select>
        </Form.Item>
        
        <Form.Item
          name="readTime"
          label="阅读时长(秒)"
          rules={[{ required: true, message: '请输入阅读时长' }]}
        >
          <InputNumber 
            min={1} 
            max={3600} 
            placeholder="请输入阅读时长(秒)" 
            style={{ width: '100%' }} 
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

export default UpdateModal; 