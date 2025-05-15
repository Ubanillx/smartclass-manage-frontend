import { CommentOutlined, DeleteOutlined, EditOutlined, MessageOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import '@umijs/max';
import { Button, Card, message, Popconfirm, Space, Tag, Tooltip, Typography } from 'antd';
import React, { useRef, useState } from 'react';
import {
  deleteUserFeedbackUsingPost,
  listUserFeedbackByPageUsingPost,
  processUserFeedbackUsingPost,
} from '@/services/backend/userFeedbackController';
import styles from './index.less';
import ProcessModal from './components/ProcessModal';
import ViewModal from './components/ViewModal';
import ReplyModal from './components/ReplyModal';

const { Title } = Typography;

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
 * 用户反馈管理页面
 *
 * @constructor
 */
const FeedbackManagement: React.FC = () => {
  // 是否显示处理窗口
  const [processModalVisible, setProcessModalVisible] = useState<boolean>(false);
  // 是否显示查看窗口
  const [viewModalVisible, setViewModalVisible] = useState<boolean>(false);
  // 是否显示回复窗口
  const [replyModalVisible, setReplyModalVisible] = useState<boolean>(false);
  
  const actionRef = useRef<ActionType>();
  // 当前选中的反馈数据
  const [currentRow, setCurrentRow] = useState<API.UserFeedback>();

  /**
   * 删除反馈
   *
   * @param row
   */
  const handleDelete = async (row: API.UserFeedback) => {
    const hide = message.loading('正在删除');
    if (!row) return true;
    try {
      await deleteUserFeedbackUsingPost({
        id: row.id as any,
      });
      hide();
      message.success('删除成功');
      actionRef?.current?.reload();
      return true;
    } catch (error: any) {
      hide();
      message.error('删除失败，' + error.message);
      return false;
    }
  };

  /**
   * 处理反馈状态
   * 
   * @param id 反馈ID
   * @param status 状态值 (1-已处理，2-处理中，0-未处理)
   */
  const handleProcess = async (id: number, status: number) => {
    const hide = message.loading('正在更新状态');
    try {
      await processUserFeedbackUsingPost({
        id,
        status,
      });
      hide();
      message.success('状态更新成功');
      actionRef?.current?.reload();
      return true;
    } catch (error: any) {
      hide();
      message.error('状态更新失败，' + error.message);
      return false;
    }
  };

  // 渲染反馈状态
  const renderFeedbackStatus = (status?: number) => {
    if (status === 2) {
      return <Tag color="success">已完成</Tag>;
    } else if (status === 1) {
      return <Tag color="processing">处理中</Tag>;
    } else {
      return <Tag color="warning">未处理</Tag>;
    }
  };

  const columns: ProColumns<API.UserFeedback>[] = [
    {
      title: 'ID',
      dataIndex: 'id',
      valueType: 'text',
      width: 80,
      fixed: 'left',
    },
    {
      title: '标题',
      dataIndex: 'title',
      valueType: 'text',
      width: 200,
      ellipsis: true,
      formItemProps: {
        rules: [
          {
            required: true,
            message: '标题不能为空',
          },
        ],
      },
      render: (_, record) => (
        <Typography.Text
          ellipsis={{ tooltip: record.title }}
          style={{ cursor: 'pointer' }}
          onClick={() => {
            setCurrentRow(record);
            setViewModalVisible(true);
          }}
        >
          {record.title}
        </Typography.Text>
      ),
    },
    {
      title: '类型',
      dataIndex: 'feedbackType',
      valueType: 'select',
      width: 120,
      valueEnum: {
        '问题反馈': { text: '问题反馈', status: 'error' },
        '功能建议': { text: '功能建议', status: 'processing' },
        '内容问题': { text: '内容问题', status: 'warning' },
        '其他': { text: '其他', status: 'default' },
      },
      render: (_, record) => {
        return record.feedbackType || '其他';
      },
    },
    {
      title: '内容',
      dataIndex: 'content',
      valueType: 'text',
      width: 300,
      ellipsis: true,
      hideInSearch: true,
      render: (_, record) => (
        <Tooltip title={record.content}>
          <Typography.Paragraph ellipsis={{ rows: 2 }} style={{ marginBottom: 0 }}>
            {record.content}
          </Typography.Paragraph>
        </Tooltip>
      ),
    },
    {
      title: '附件',
      dataIndex: 'attachment',
      valueType: 'text',
      width: 120,
      hideInSearch: true,
      render: (_, record) =>
        record.attachment ? (
          <a href={record.attachment} target="_blank" rel="noreferrer">
            查看附件
          </a>
        ) : (
          '无'
        ),
    },
    {
      title: '用户ID',
      dataIndex: 'userId',
      valueType: 'text',
      width: 100,
    },
    {
      title: '状态',
      dataIndex: 'status',
      valueType: 'select',
      width: 100,
      valueEnum: {
        0: { text: '未处理', status: 'warning' },
        1: { text: '处理中', status: 'processing' },
        2: { text: '已完成', status: 'success' },
      },
      render: (_, record) => renderFeedbackStatus(record.status),
      fieldProps: {
        options: [
          { label: '未处理', value: 0 },
          { label: '处理中', value: 1 },
          { label: '已完成', value: 2 },
        ],
      },
    },
    {
      title: '处理时间',
      dataIndex: 'processTime',
      valueType: 'dateTime',
      width: 170,
      hideInSearch: true,
      hideInForm: true,
      render: (_, record) => {
        if (record.status === 0) {
          return '未处理';
        }
        return formatDateTime(record.processTime);
      },
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      valueType: 'dateTime',
      width: 170,
      hideInSearch: true,
      hideInForm: true,
      sorter: true,
      render: (_, record) => formatDateTime(record.createTime),
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      width: 120,
      fixed: 'right',
      render: (_, record) => (
        <Space size="small" direction="vertical" style={{ width: '100%' }}>
          <Button
            type="link"
            icon={<EditOutlined />}
            onClick={() => {
              setCurrentRow(record);
              setProcessModalVisible(true);
            }}
            style={{ padding: '0px 0px' }}
          >
            处理
          </Button>
          <Button
            type="link"
            icon={<MessageOutlined />}
            onClick={() => {
              setCurrentRow(record);
              setReplyModalVisible(true);
            }}
            style={{ padding: '0px 0px' }}
          >
            回复
          </Button>
          <Popconfirm
            title="确定要删除该反馈吗？"
            onConfirm={() => handleDelete(record)}
            okText="确定"
            cancelText="取消"
          >
            <Button type="link" danger icon={<DeleteOutlined />} style={{ padding: '0px 0px' }}>
              删除
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <PageContainer
      header={{
        title: '',
        ghost: true,
      }}
    >
      <Card>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
          <CommentOutlined style={{ fontSize: 24, marginRight: 8, color: '#1890ff' }} />
          <Title level={4} style={{ margin: 0 }}>用户反馈管理</Title>
        </div>
        <ProTable<API.UserFeedback>
          headerTitle="反馈列表"
          actionRef={actionRef}
          rowKey="id"
          search={{
            labelWidth: 'auto',
            defaultCollapsed: false,
            layout: 'vertical',
            span: 6,
          }}
          request={async (params, sort, filter) => {
            const sortField = Object.keys(sort)?.[0];
            const sortOrder = sortField ? sort[sortField] : undefined;

            const requestParams = { ...params };
            if (requestParams.feedbackType === undefined || requestParams.feedbackType === null || requestParams.feedbackType === '') {
              delete requestParams.feedbackType;
            }
            if (requestParams.status === undefined || requestParams.status === null || requestParams.status === '') {
              delete requestParams.status;
            }

            const { data, code } = await listUserFeedbackByPageUsingPost({
              ...requestParams,
              sortField,
              sortOrder,
              pageSize: params.pageSize,
              current: params.current,
            } as API.UserFeedbackQueryRequest);

            return {
              success: code === 0,
              data: data?.records || [],
              total: Number(data?.total) || 0,
            };
          }}
          columns={columns}
          pagination={{
            showQuickJumper: true,
            showSizeChanger: true,
            pageSizeOptions: ['10', '20', '50'],
            showTotal: (total) => `共 ${total} 条记录`,
          }}
          scroll={{ x: 1500 }}
          rowClassName={() => styles.tableRow}
        />
      </Card>

      {/* 查看反馈详情的模态框 */}
      <ViewModal
        visible={viewModalVisible}
        feedback={currentRow}
        onCancel={() => {
          setViewModalVisible(false);
        }}
      />

      {/* 处理反馈的模态框 */}
      <ProcessModal
        visible={processModalVisible}
        feedback={currentRow}
        onSubmit={async (values) => {
          const success = await handleProcess(currentRow?.id as number, values.status as number);
          if (success) {
            setProcessModalVisible(false);
            setCurrentRow(undefined);
          }
        }}
        onCancel={() => {
          setProcessModalVisible(false);
        }}
      />

      {/* 回复反馈的模态框 */}
      <ReplyModal
        visible={replyModalVisible}
        feedback={currentRow}
        onSubmit={() => {
          setReplyModalVisible(false);
          setCurrentRow(undefined);
          actionRef.current?.reload();
        }}
        onCancel={() => {
          setReplyModalVisible(false);
        }}
      />
    </PageContainer>
  );
};

export default FeedbackManagement; 