import CreateModal from '@/pages/Admin/AiAvatar/components/CreateModal';
import UpdateModal from '@/pages/Admin/AiAvatar/components/UpdateModal';
import { 
  addAiAvatarUsingPost,
  deleteAiAvatarUsingPost,
  listAiAvatarByPageUsingGet,
  updateAiAvatarUsingPost
} from '@/services/backend/aiAvatarController';
import { PlusOutlined, RobotOutlined, EditOutlined, DeleteOutlined, TagOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import '@umijs/max';
import { Button, message, Space, Typography, Tag, Popconfirm, Card, Avatar, Badge, Rate } from 'antd';
import React, { useRef, useState } from 'react';
import './index.less';

const { Title, Paragraph } = Typography;

/**
 * AI分身管理页面
 *
 * @constructor
 */
const AiAvatarManagement: React.FC = () => {
  // 是否显示新建窗口
  const [createModalVisible, setCreateModalVisible] = useState<boolean>(false);
  // 是否显示更新窗口
  const [updateModalVisible, setUpdateModalVisible] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  // 当前点击的数据
  const [currentRow, setCurrentRow] = useState<API.AiAvatarVO>();

  /**
   * 删除AI分身
   *
   * @param row
   */
  const handleDelete = async (row: API.AiAvatarVO) => {
    const hide = message.loading('正在删除');
    if (!row) return true;
    try {
      await deleteAiAvatarUsingPost({
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

  // 渲染公开状态
  const renderPublicStatus = (isPublic?: number) => {
    if (isPublic === 1) {
      return <Badge status="success" text="公开" />;
    } else {
      return <Badge status="default" text="私密" />;
    }
  };

  // 渲染状态
  const renderStatus = (status?: number) => {
    if (status === 1) {
      return <Badge status="success" text="启用" />;
    } else if (status === 0) {
      return <Badge status="default" text="禁用" />;
    } else {
      return <Badge status="processing" text="待定" />;
    }
  };

  /**
   * 表格列配置
   */
  const columns: ProColumns<API.AiAvatarVO>[] = [
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
      title: '名称',
      dataIndex: 'name',
      valueType: 'text',
      width: 150,
      formItemProps: {
        rules: [{ required: true, message: '请输入AI分身名称' }]
      },
      render: (_, record) => (
        <div>
          <Space>
            <Avatar 
              src={record.avatarImgUrl} 
              icon={<RobotOutlined />} 
              size="small" 
            />
            <span style={{ fontWeight: 'bold' }}>{record.name}</span>
          </Space>
        </div>
      ),
    },
    {
      title: '描述',
      dataIndex: 'description',
      valueType: 'textarea',
      hideInSearch: true,
      width: 200,
      formItemProps: {
        rules: [{ required: true, message: '请输入AI分身描述' }]
      },
      render: (_, record) => (
        <Paragraph ellipsis={{ rows: 2 }} style={{ marginBottom: 0, minWidth: 150 }}>
          {record.description}
        </Paragraph>
      ),
    },
    {
      title: '能力',
      dataIndex: 'abilities',
      valueType: 'textarea',
      hideInSearch: true,
      width: 200,
      render: (_, record) => (
        <Paragraph ellipsis={{ rows: 2 }} style={{ marginBottom: 0, minWidth: 150 }}>
          {record.abilities}
        </Paragraph>
      ),
    },
    {
      title: '性格',
      dataIndex: 'personality',
      valueType: 'textarea',
      hideInSearch: true,
      width: 200,
      render: (_, record) => (
        <Paragraph ellipsis={{ rows: 2 }} style={{ marginBottom: 0, minWidth: 150 }}>
          {record.personality}
        </Paragraph>
      ),
    },
    {
      title: '标签',
      dataIndex: 'tags',
      valueType: 'text',
      width: 200,
      fieldProps: {
        placeholder: '请输入标签，多个标签用逗号分隔'
      },
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
      title: '评分',
      dataIndex: 'rating',
      valueType: 'text',
      width: 180,
      hideInForm: true,
      hideInSearch: true,
      render: (_, record) => (
        <Space>
          <Rate disabled defaultValue={record.rating || 0} allowHalf />
          <span>({record.ratingCount || 0})</span>
        </Space>
      ),
    },
    {
      title: '使用次数',
      dataIndex: 'usageCount',
      valueType: 'text',
      width: 100,
      hideInForm: true,
      sorter: true,
      search: false,
    },
    {
      title: '排序',
      dataIndex: 'sort',
      valueType: 'text',
      width: 80,
      hideInForm: false,
      sorter: true,
      search: false,
    },
    {
      title: '是否公开',
      dataIndex: 'isPublic',
      valueType: 'select',
      valueEnum: {
        1: { text: '公开' },
        0: { text: '私密' }
      },
      width: 100,
      render: (_, record) => renderPublicStatus(record.isPublic),
    },
    {
      title: '状态',
      dataIndex: 'status',
      valueType: 'select',
      valueEnum: {
        0: { text: '禁用' },
        1: { text: '启用' }
      },
      width: 100,
      render: (_, record) => renderStatus(record.status),
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      valueType: 'dateTime',
      width: 160,
      hideInForm: true,
      sorter: true,
    },
    {
      title: '更新时间',
      dataIndex: 'updateTime',
      valueType: 'dateTime',
      width: 160,
      hideInForm: true,
      hideInSearch: true,
      sorter: true,
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
            title="确定要删除该AI分身吗？"
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
    <div className="ai-avatar-management">
      <Card>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
          <RobotOutlined style={{ fontSize: 24, marginRight: 8, color: '#1890ff' }} />
          <Title level={4} style={{ margin: 0 }}>AI分身管理</Title>
        </div>
        <ProTable<API.AiAvatarVO>
          headerTitle="AI分身列表"
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
            
            const { data, code } = await listAiAvatarByPageUsingGet({
              ...params,
              sortField,
              sortOrder,
              pageSize: params.pageSize,
              current: params.current,
            });
            
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
          scroll={{ x: 1600 }}
          tableLayout="fixed"
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

export default AiAvatarManagement; 