import CreateModal from '@/pages/Admin/DailyWord/components/CreateModal';
import UpdateModal from '@/pages/Admin/DailyWord/components/UpdateModal';
import { 
  addDailyWordUsingPost,
  deleteDailyWordUsingPost, 
  listDailyWordVoByPageUsingPost, 
  updateDailyWordUsingPost
} from '@/services/backend/dailyWordController';
import { PlusOutlined, BookOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import '@umijs/max';
import { Button, message, Space, Typography, Tag, Popconfirm, Card, Rate, Badge } from 'antd';
import React, { useRef, useState } from 'react';
import './index.less';

const { Title, Paragraph } = Typography;

/**
 * 每日单词管理页面
 *
 * @constructor
 */
const DailyWordManagement: React.FC = () => {
  // 是否显示新建窗口
  const [createModalVisible, setCreateModalVisible] = useState<boolean>(false);
  // 是否显示更新窗口
  const [updateModalVisible, setUpdateModalVisible] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  // 当前点击的数据
  const [currentRow, setCurrentRow] = useState<API.DailyWordVO>();

  /**
   * 删除每日单词
   *
   * @param row
   */
  const handleDelete = async (row: API.DailyWordVO) => {
    const hide = message.loading('正在删除');
    if (!row) return true;
    try {
      await deleteDailyWordUsingPost({
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

  // 渲染难度等级
  const renderDifficulty = (difficulty?: number) => {
    switch (difficulty) {
      case 1:
        return <Badge color="green" text="简单" />;
      case 2:
        return <Badge color="blue" text="中等" />;
      case 3:
        return <Badge color="orange" text="较难" />;
      case 4:
        return <Badge color="red" text="困难" />;
      default:
        return <Badge color="default" text="未知" />;
    }
  };

  /**
   * 表格列配置
   */
  const columns: ProColumns<API.DailyWordVO>[] = [
    {
      title: 'ID',
      dataIndex: 'id',
      valueType: 'text',
      hideInForm: true,
      width: 80,
      search: {
        transform: (value) => ({ id: value }),
      },
    },
    {
      title: '单词',
      dataIndex: 'word',
      valueType: 'text',
      width: 150,
      formItemProps: {
        rules: [{ required: true, message: '请输入单词' }]
      },
      render: (_, record) => (
        <div>
          <Space>
            <span style={{ fontWeight: 'bold', minWidth: '100px' }}>{record.word}</span>
          </Space>
        </div>
      ),
    },
    {
      title: '翻译',
      dataIndex: 'translation',
      valueType: 'text',
      hideInSearch: false,
      width: 200,
      formItemProps: {
        rules: [{ required: true, message: '请输入翻译' }]
      },
      render: (_, record) => (
        <Paragraph ellipsis={{ rows: 2 }} style={{ marginBottom: 0, minWidth: '150px' }}>
          {record.translation}
        </Paragraph>
      ),
    },
    {
      title: '音标',
      dataIndex: 'pronunciation',
      valueType: 'text',
      hideInSearch: true,
      width: 150,
    },
    {
      title: '例句',
      dataIndex: 'example',
      valueType: 'textarea',
      hideInSearch: true,
      width: 250,
      render: (_, record) => (
        <Paragraph ellipsis={{ rows: 2 }} style={{ marginBottom: 0, minWidth: '200px' }}>
          {record.example}
        </Paragraph>
      ),
    },
    {
      title: '例句翻译',
      dataIndex: 'exampleTranslation',
      valueType: 'textarea',
      hideInSearch: true,
      width: 250,
      render: (_, record) => (
        <Paragraph ellipsis={{ rows: 2 }} style={{ marginBottom: 0, minWidth: '200px' }}>
          {record.exampleTranslation}
        </Paragraph>
      ),
    },
    {
      title: '分类',
      dataIndex: 'category',
      valueType: 'text',
      width: 120,
    },
    {
      title: '难度',
      dataIndex: 'difficulty',
      valueType: 'select',
      valueEnum: {
        1: { text: '简单' },
        2: { text: '中等' },
        3: { text: '较难' },
        4: { text: '困难' }
      },
      width: 100,
      render: (_, record) => renderDifficulty(record.difficulty),
    },
    {
      title: '音频URL',
      dataIndex: 'audioUrl',
      valueType: 'text',
      hideInSearch: true,
      hideInTable: true,
    },
    {
      title: '补充说明',
      dataIndex: 'notes',
      valueType: 'textarea',
      hideInSearch: true,
      hideInTable: true,
    },
    {
      title: '发布日期',
      dataIndex: 'publishDate',
      valueType: 'date',
      width: 120,
      sorter: true,
    },
    {
      title: '点赞数',
      dataIndex: 'likeCount',
      valueType: 'text',
      width: 100,
      hideInForm: true,
      sorter: true,
      search: false,
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      valueType: 'dateTime',
      width: 160,
      hideInForm: true,
      sorter: true,
      search: false,
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      width: 120,
      fixed: 'right',
      render: (_, record) => (
        <Space direction="vertical" size="small" style={{ width: '100%' }}>
          <Button
            type="link"
            icon={<EditOutlined />}
            onClick={() => {
              setCurrentRow(record);
              setUpdateModalVisible(true);
            }}
            style={{ padding: '0px 0px' }}
          >
            编辑
          </Button>
          <Popconfirm
            title="确定要删除该单词吗？"
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
    <div className="daily-word-management">
      <Card>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
          <BookOutlined style={{ fontSize: 24, marginRight: 8, color: '#52c41a' }} />
          <Title level={4} style={{ margin: 0 }}>每日单词管理</Title>
        </div>
        <ProTable<API.DailyWordVO>
          headerTitle="每日单词列表"
          actionRef={actionRef}
          rowKey="id"
          search={{
            labelWidth: 'auto',
            defaultCollapsed: false,
            layout: 'vertical',
            span: 6,
          }}
          toolBarRender={() => [
            <Button
              type="primary"
              key="create"
              onClick={() => {
                setCreateModalVisible(true);
              }}
            >
              <PlusOutlined /> 新建
            </Button>,
          ]}
          request={async (params, sort, filter) => {
            const sortField = Object.keys(sort)?.[0];
            const sortOrder = sortField ? sort[sortField] as string : undefined;
            
            // 构建日期查询范围
            let queryParams: API.DailyWordQueryRequest = {
              ...params,
              sortField,
              sortOrder,
              pageSize: params.pageSize,
              current: params.current,
            };
            
            // 如果有日期范围查询
            if (params.publishDate) {
              const dateRange = params.publishDate as any;
              if (Array.isArray(dateRange)) {
                queryParams.publishDateStart = dateRange[0];
                queryParams.publishDateEnd = dateRange[1];
              }
              // 删除非API请求参数
              delete (queryParams as any).publishDate;
            }
            
            const { data, code } = await listDailyWordVoByPageUsingPost(queryParams);
            
            return {
              success: code === 0,
              data: data?.records || [],
              total: data?.total || 0,
            };
          }}
          pagination={{
            defaultPageSize: 10,
            showQuickJumper: true,
            showSizeChanger: true,
            pageSizeOptions: ['10', '20', '50'],
            showTotal: (total) => `共 ${total} 条记录`,
          }}
          scroll={{ x: 1500 }}
          columns={columns}
        />
        
        <CreateModal
          visible={createModalVisible}
          columns={columns}
          onSubmit={() => {
            setCreateModalVisible(false);
            actionRef.current?.reload();
          }}
          onCancel={() => {
            setCreateModalVisible(false);
          }}
        />
        
        <UpdateModal
          visible={updateModalVisible}
          columns={columns}
          oldData={currentRow}
          onSubmit={() => {
            setUpdateModalVisible(false);
            setCurrentRow(undefined);
            actionRef.current?.reload();
          }}
          onCancel={() => {
            setUpdateModalVisible(false);
            setCurrentRow(undefined);
          }}
        />
      </Card>
    </div>
  );
};

export default DailyWordManagement; 