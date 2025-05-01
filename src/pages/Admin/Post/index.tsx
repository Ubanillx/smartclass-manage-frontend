import CreateModal from '@/pages/Admin/Post/components/CreateModal';
import UpdateModal from '@/pages/Admin/Post/components/UpdateModal';
import { 
  addPostUsingPost,
  deletePostUsingPost, 
  listPostVoByPageUsingPost, 
  updatePostUsingPost
} from '@/services/backend/postController';
import { PlusOutlined, FormOutlined, EditOutlined, DeleteOutlined, TagOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import '@umijs/max';
import { Button, message, Space, Typography, Tag, Popconfirm, Card, Avatar } from 'antd';
import React, { useRef, useState } from 'react';
import './index.less';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkCold } from 'react-syntax-highlighter/dist/esm/styles/prism';
import 'katex/dist/katex.min.css';

const { Title, Paragraph } = Typography;

/**
 * 帖子管理页面
 *
 * @constructor
 */
const PostManagement: React.FC = () => {
  // 是否显示新建窗口
  const [createModalVisible, setCreateModalVisible] = useState<boolean>(false);
  // 是否显示更新窗口
  const [updateModalVisible, setUpdateModalVisible] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  // 当前用户点击的数据
  const [currentRow, setCurrentRow] = useState<API.PostVO>();

  /**
   * 删除帖子
   *
   * @param row
   */
  const handleDelete = async (row: API.PostVO) => {
    const hide = message.loading('正在删除');
    if (!row) return true;
    try {
      await deletePostUsingPost({
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

  // 代码渲染组件
  const CodeBlock = ({ node, inline, className, children, ...props }: any) => {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter
        style={coldarkCold}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  };

  /**
   * 表格列配置
   */
  const columns: ProColumns<API.PostVO>[] = [
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
      width: 200,
      formItemProps: {
        rules: [{ required: true, message: '请输入帖子标题' }]
      },
      render: (_, record) => (
        <div>
          <div style={{ fontWeight: 'bold', minWidth: '200px' }}>
            {record.title || '　　　　　　　　　　'}
          </div>
        </div>
      ),
    },
    {
      title: '内容',
      dataIndex: 'content',
      valueType: 'textarea',
      hideInSearch: true,
      formItemProps: {
        rules: [{ required: true, message: '请输入帖子内容' }]
      },
      render: (_, record) => (
        <div className="post-content-preview" style={{ maxWidth: '400px', maxHeight: '100px', overflow: 'hidden' }}>
          {record.content ? (
            <ReactMarkdown
              remarkPlugins={[remarkGfm, remarkMath]}
              rehypePlugins={[rehypeKatex, rehypeRaw]}
              components={{
                code: CodeBlock
              }}
            >
              {record.content}
            </ReactMarkdown>
          ) : (
            <Paragraph ellipsis={{ rows: 2 }} style={{ marginBottom: 0, minWidth: '200px' }}>
              　　　　　　　　　　
            </Paragraph>
          )}
        </div>
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
      renderFormItem: (_, { type, defaultRender, ...rest }) => {
        if (type === 'form') {
          return defaultRender({ ...rest, fieldProps: { placeholder: '请输入标签，多个标签用逗号分隔' } });
        }
        return defaultRender(rest);
      },
      render: (_, record) => (
        <Space wrap>
          {record.tagList?.map((tag) => (
            <Tag color="blue" key={tag}>
              <TagOutlined /> {tag}
            </Tag>
          ))}
        </Space>
      ),
    },
    {
      title: '发布者',
      dataIndex: 'userId',
      hideInForm: true,
      width: 120,
      render: (_, record) => (
        <Space>
          <Avatar 
            src={record.user?.userAvatar} 
            size="small" 
          />
          {record.user?.userName || '-'}
        </Space>
      ),
    },
    {
      title: '点赞数',
      dataIndex: 'thumbNum',
      valueType: 'text',
      width: 100,
      hideInForm: true,
      sorter: true,
      search: false,
    },
    {
      title: '收藏数',
      dataIndex: 'favourNum',
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
            title="确定要删除该帖子吗？"
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
    <div className="post-management">
      <Card>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
          <FormOutlined style={{ fontSize: 24, marginRight: 8, color: '#fa8c16' }} />
          <Title level={4} style={{ margin: 0 }}>帖子管理</Title>
        </div>
        <ProTable<API.PostVO>
          headerTitle="帖子列表"
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
            const sortOrder = sortField ? sort[sortField] : undefined;
            
            const { data, code } = await listPostVoByPageUsingPost({
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
          scroll={{ x: 1500 }}
          columns={columns}
        />
        
        <CreateModal
          visible={createModalVisible}
          columns={columns}
          onSubmit={() => {
            setCreateModalVisible(false);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }}
          onCancel={() => {
            setCreateModalVisible(false);
          }}
        />
        
        <UpdateModal
          oldData={currentRow}
          visible={updateModalVisible}
          columns={columns}
          onSubmit={() => {
            setUpdateModalVisible(false);
            setCurrentRow(undefined);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }}
          onCancel={() => {
            setUpdateModalVisible(false);
          }}
        />
      </Card>
    </div>
  );
};

export default PostManagement;
