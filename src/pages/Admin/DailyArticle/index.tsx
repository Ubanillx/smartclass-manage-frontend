import CreateModal from '@/pages/Admin/DailyArticle/components/CreateModal';
import UpdateModal from '@/pages/Admin/DailyArticle/components/UpdateModal';
import { 
  addDailyArticleUsingPost,
  deleteDailyArticleUsingDelete, 
  listDailyArticleVoByPageUsingGet, 
  updateDailyArticleUsingPut
} from '@/services/backend/dailyArticleController';
import { BookOutlined, PlusOutlined, EditOutlined, DeleteOutlined, TagOutlined, ReadOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import '@umijs/max';
import { Button, message, Space, Typography, Tag, Popconfirm, Card, Image, Badge } from 'antd';
import React, { useRef, useState } from 'react';
import './index.less';

const { Title, Paragraph } = Typography;

/**
 * 每日美文管理页面
 *
 * @constructor
 */
const DailyArticleManagement: React.FC = () => {
  // 是否显示新建窗口
  const [createModalVisible, setCreateModalVisible] = useState<boolean>(false);
  // 是否显示更新窗口
  const [updateModalVisible, setUpdateModalVisible] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  // 当前点击的数据
  const [currentRow, setCurrentRow] = useState<API.DailyArticleVO>();

  /**
   * 删除每日一文
   *
   * @param row
   */
  const handleDelete = async (row: API.DailyArticleVO) => {
    const hide = message.loading('正在删除');
    if (!row) return true;
    try {
      await deleteDailyArticleUsingDelete({
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
        return <Badge color="green" text="初级" />;
      case 2:
        return <Badge color="blue" text="中级" />;
      case 3:
        return <Badge color="orange" text="高级" />;
      case 4:
        return <Badge color="red" text="专家" />;
      default:
        return <Badge color="default" text="未知" />;
    }
  };

  // 渲染阅读时长
  const renderReadTime = (readTime?: number) => {
    if (!readTime) return '未知';
    if (readTime < 60) {
      return `${readTime}秒`;
    } else {
      const minutes = Math.floor(readTime / 60);
      const seconds = readTime % 60;
      return seconds > 0 ? `${minutes}分${seconds}秒` : `${minutes}分钟`;
    }
  };

  /**
   * 表格列配置
   */
  const columns: ProColumns<API.DailyArticleVO>[] = [
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
      title: '标题',
      dataIndex: 'title',
      valueType: 'text',
      width: 220,
      formItemProps: {
        rules: [{ required: true, message: '请输入标题' }]
      },
      render: (_, record) => (
        <div>
          <div>
            <span style={{ fontWeight: 'bold', minWidth: '180px', display: 'inline-block' }}>{record.title || '　　　　　　　　　　'}</span>
          </div>
          {record.coverImage && (
            <div style={{ marginTop: 8 }}>
              <Image 
                src={record.coverImage} 
                width={120} 
                height={60} 
                style={{ objectFit: 'cover', borderRadius: 4 }}
                placeholder={<div style={{ height: 60, background: '#f5f5f5' }}></div>}
              />
            </div>
          )}
        </div>
      ),
    },
    {
      title: '作者',
      dataIndex: 'author',
      valueType: 'text',
      width: 120,
    },
    {
      title: '摘要',
      dataIndex: 'summary',
      valueType: 'textarea',
      hideInSearch: true,
      width: 280,
      render: (_, record) => (
        <Paragraph ellipsis={{ rows: 2 }} style={{ marginBottom: 0, minWidth: '220px' }}>
          {record.summary || '　　　　　　　　　　'}
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
      title: '标签',
      dataIndex: 'tags',
      valueType: 'text',
      width: 150,
      render: (_, record) => {
        if (!record.tags) return null;
        return (
          <Space wrap>
            {record.tags.split(',').map((tag) => (
              <Tag color="blue" key={tag}>
                <TagOutlined /> {tag}
              </Tag>
            ))}
          </Space>
        );
      },
    },
    {
      title: '来源',
      dataIndex: 'source',
      valueType: 'text',
      width: 100,
      hideInSearch: true,
    },
    {
      title: '难度',
      dataIndex: 'difficulty',
      valueType: 'select',
      valueEnum: {
        1: { text: '初级' },
        2: { text: '中级' },
        3: { text: '高级' },
        4: { text: '专家' }
      },
      width: 100,
      render: (_, record) => renderDifficulty(record.difficulty),
    },
    {
      title: '阅读时长',
      dataIndex: 'readTime',
      valueType: 'text',
      width: 100,
      hideInSearch: true,
      render: (_, record) => renderReadTime(record.readTime),
    },
    {
      title: '发布日期',
      dataIndex: 'publishDate',
      valueType: 'date',
      width: 120,
      sorter: true,
    },
    {
      title: '浏览量',
      dataIndex: 'viewCount',
      valueType: 'text',
      width: 100,
      hideInForm: true,
      sorter: true,
      search: false,
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
            title="确定要删除该美文吗？"
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
    <div className="daily-article-management">
      <Card>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
          <ReadOutlined style={{ fontSize: 24, marginRight: 8, color: '#1890ff' }} />
          <Title level={4} style={{ margin: 0 }}>每日美文管理</Title>
        </div>
        <ProTable<API.DailyArticleVO>
          headerTitle="每日美文列表"
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
            let queryParams: API.DailyArticleQueryRequest = {
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
            
            const { data, code } = await listDailyArticleVoByPageUsingGet(queryParams);
            
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
          scroll={{ x: 1700 }}
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

export default DailyArticleManagement;