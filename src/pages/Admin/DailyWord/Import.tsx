import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-components';
import { Card, Upload, Button, message, Steps, Typography, Table, Space, Alert } from 'antd';
import { InboxOutlined, DownloadOutlined, FileExcelOutlined } from '@ant-design/icons';
import type { UploadFile, UploadProps } from 'antd/es/upload/interface';
import { importDailyWordUsingPost } from '@/services/backend/dailyWordController';
import './import.less';

const { Dragger } = Upload;
const { Title, Paragraph, Text } = Typography;
const { Step } = Steps;

/**
 * 每日单词导入页面
 */
const DailyWordImport: React.FC = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [uploading, setUploading] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [importResult, setImportResult] = useState<any>({
    total: 0,
    success: 0,
    fail: 0,
    failList: [],
  });

  // CSV模板列定义
  const templateColumns = [
    { title: '字段', dataIndex: 'field', key: 'field' },
    { title: '说明', dataIndex: 'description', key: 'description' },
    { title: '是否必填', dataIndex: 'required', key: 'required' },
    { title: '示例', dataIndex: 'example', key: 'example' },
  ];

  // CSV模板数据
  const templateData = [
    {
      field: 'word',
      description: '单词',
      required: '是',
      example: 'apple',
    },
    {
      field: 'translation',
      description: '翻译',
      required: '是',
      example: '苹果',
    },
    {
      field: 'pronunciation',
      description: '音标',
      required: '否',
      example: '/ˈæpl/',
    },
    {
      field: 'example',
      description: '例句',
      required: '否',
      example: 'I eat an apple every day.',
    },
    {
      field: 'exampleTranslation',
      description: '例句翻译',
      required: '否',
      example: '我每天吃一个苹果。',
    },
    {
      field: 'category',
      description: '分类',
      required: '否',
      example: '水果',
    },
    {
      field: 'difficulty',
      description: '难度(1:简单,2:中等,3:较难,4:困难)',
      required: '否',
      example: '1',
    },
    {
      field: 'audioUrl',
      description: '音频URL',
      required: '否',
      example: 'https://example.com/audio/apple.mp3',
    },
    {
      field: 'notes',
      description: '补充说明',
      required: '否',
      example: '常见水果名称',
    },
    {
      field: 'publishDate',
      description: '发布日期(YYYY-MM-DD)',
      required: '否',
      example: '2023-06-01',
    },
  ];

  // 失败列表展示列
  const failColumns = [
    { title: '行号', dataIndex: 'row', key: 'row', width: 80 },
    { title: '单词', dataIndex: 'word', key: 'word', width: 150 },
    { title: '失败原因', dataIndex: 'reason', key: 'reason' },
  ];

  // 下载CSV模板
  const downloadTemplate = () => {
    // 表头
    const header = templateData.map(item => item.field).join(',');
    // 示例数据行
    const exampleRow = templateData.map(item => item.example).join(',');
    // 构建CSV内容
    const csvContent = `${header}\n${exampleRow}`;
    
    // 创建Blob对象
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    
    // 创建一个临时链接并触发下载
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', '每日单词导入模板.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // 上传文件属性
  const uploadProps: UploadProps = {
    name: 'file',
    multiple: false,
    fileList: fileList,
    accept: '.csv',
    beforeUpload: (file) => {
      // 验证文件类型
      const isCSV = file.type === 'text/csv' || file.name.endsWith('.csv');
      if (!isCSV) {
        message.error('只能上传CSV文件!');
        return Upload.LIST_IGNORE;
      }
      
      // 限制文件大小(10MB)
      const isLt10M = file.size / 1024 / 1024 < 10;
      if (!isLt10M) {
        message.error('文件大小不能超过10MB!');
        return Upload.LIST_IGNORE;
      }
      
      setFileList([file]);
      return false; // 阻止自动上传
    },
    onRemove: () => {
      setFileList([]);
      return true;
    },
  };

  // 上传CSV文件
  const handleUpload = async () => {
    if (fileList.length === 0) {
      message.warning('请先选择要上传的CSV文件');
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append('file', fileList[0] as any);
    
    try {
      const res = await importDailyWordUsingPost(formData);
      
      setUploading(false);
      setCurrentStep(1);
      
      if (res.code === 0 && res.data) {
        setImportResult({
          total: res.data.total || 0,
          success: res.data.success || 0,
          fail: res.data.fail || 0,
          failList: res.data.failList || [],
        });
      } else {
        message.error('导入失败: ' + (res.message || '未知错误'));
      }
    } catch (error: any) {
      setUploading(false);
      message.error('导入失败: ' + error.message);
    }
  };

  // 重置表单
  const resetImport = () => {
    setFileList([]);
    setCurrentStep(0);
    setImportResult({
      total: 0,
      success: 0,
      fail: 0,
      failList: [],
    });
  };

  // 渲染上传步骤
  const renderUploadStep = () => {
    return (
      <div>
        <Alert
          message="导入说明"
          description={
            <ul>
              <li>请先下载CSV模板，按照模板格式填写数据后上传</li>
              <li>CSV文件第一行必须是字段头，符合模板中的字段名称</li>
              <li>CSV文件编码建议使用UTF-8，避免中文乱码</li>
              <li>单次导入数据不要超过1000条</li>
            </ul>
          }
          type="info"
          showIcon
          style={{ marginBottom: 24 }}
        />
        
        <Card title="CSV模板说明" style={{ marginBottom: 24 }}>
          <Table
            columns={templateColumns}
            dataSource={templateData}
            rowKey="field"
            pagination={false}
            size="small"
            bordered
          />
          <div style={{ marginTop: 16, textAlign: 'center' }}>
            <Button 
              type="primary" 
              icon={<DownloadOutlined />} 
              onClick={downloadTemplate}
            >
              下载CSV模板
            </Button>
          </div>
        </Card>
        
        <Card title="上传CSV文件">
          <Dragger {...uploadProps}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">点击或拖拽文件到此区域上传</p>
            <p className="ant-upload-hint">
              支持单个CSV文件上传，请确保CSV格式正确
            </p>
          </Dragger>
          <div style={{ marginTop: 16, textAlign: 'center' }}>
            <Button
              type="primary"
              onClick={handleUpload}
              loading={uploading}
              disabled={fileList.length === 0}
              icon={<FileExcelOutlined />}
            >
              {uploading ? '导入中' : '开始导入'}
            </Button>
          </div>
        </Card>
      </div>
    );
  };

  // 渲染导入结果
  const renderResultStep = () => {
    const { total, success, fail, failList } = importResult;
    
    return (
      <div>
        <Card title="导入结果" style={{ marginBottom: 24 }}>
          <div className="import-result-summary">
            <div className="result-item">
              <div className="result-title">总数据量</div>
              <div className="result-value">{total}</div>
            </div>
            <div className="result-item success">
              <div className="result-title">导入成功</div>
              <div className="result-value">{success}</div>
            </div>
            <div className="result-item fail">
              <div className="result-title">导入失败</div>
              <div className="result-value">{fail}</div>
            </div>
          </div>
          
          {fail > 0 && (
            <div style={{ marginTop: 24 }}>
              <Title level={5}>失败记录列表</Title>
              <Table
                columns={failColumns}
                dataSource={failList}
                rowKey="row"
                pagination={false}
                bordered
                size="small"
              />
            </div>
          )}
          
          <div style={{ marginTop: 16, textAlign: 'center' }}>
            <Space>
              <Button type="primary" onClick={resetImport}>
                继续导入
              </Button>
              <Button onClick={() => window.history.back()}>
                返回列表
              </Button>
            </Space>
          </div>
        </Card>
      </div>
    );
  };

  return (
    <PageContainer>
      <div className="daily-word-import">
        <div className="import-header">
          <Space align="center">
            <FileExcelOutlined style={{ fontSize: 24, color: '#52c41a' }} />
            <Title level={4} style={{ margin: 0 }}>每日单词批量导入</Title>
          </Space>
        </div>
        
        <Steps
          current={currentStep}
          items={[
            {
              title: '上传CSV文件',
              description: '选择或拖拽CSV文件',
            },
            {
              title: '导入结果',
              description: '查看导入结果',
            },
          ]}
          style={{ margin: '24px 0 36px' }}
        />
        
        {currentStep === 0 && renderUploadStep()}
        {currentStep === 1 && renderResultStep()}
      </div>
    </PageContainer>
  );
};

export default DailyWordImport; 