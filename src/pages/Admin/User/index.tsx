import CreateModal from '@/pages/Admin/User/components/CreateModal';
import UpdateModal from '@/pages/Admin/User/components/UpdateModal';
import { deleteUserUsingPost, listUserByPageUsingPost } from '@/services/backend/userController';
import { PlusOutlined, UserOutlined, EditOutlined, DeleteOutlined, MailOutlined, PhoneOutlined, WechatOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import '@umijs/max';
import { Button, message, Space, Typography, Avatar, Tag, Popconfirm, Card, Tooltip } from 'antd';
import React, { useRef, useState } from 'react';
import styles from './index.less';

const { Title } = Typography;

/**
 * 用户管理页面
 *
 * @constructor
 */
const UserAdminPage: React.FC = () => {
  // 是否显示新建窗口
  const [createModalVisible, setCreateModalVisible] = useState<boolean>(false);
  // 是否显示更新窗口
  const [updateModalVisible, setUpdateModalVisible] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  // 当前用户点击的数据
  const [currentRow, setCurrentRow] = useState<API.User>();

  /**
   * 删除节点
   *
   * @param row
   */
  const handleDelete = async (row: API.User) => {
    const hide = message.loading('正在删除');
    if (!row) return true;
    try {
      await deleteUserUsingPost({
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

  // 渲染用户性别
  const renderGender = (gender?: number) => {
    if (gender === 0) {
      return '男';
    } else if (gender === 1) {
      return '女';
    } else if (gender === 2) {
      return '保密';
    }
    return '未知';
  };

  /**
   * 表格列配置
   */
  const columns: ProColumns<API.User>[] = [
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
      title: '账号',
      dataIndex: 'userAccount',
      valueType: 'text',
      width: 120,
      formItemProps: {
        help: '用户登录账号'
      },
    },
    {
      title: '用户名',
      dataIndex: 'userName',
      valueType: 'text',
      width: 120,
      formItemProps: {
        help: '用户昵称/姓名'
      },
      render: (_, record) => (
        <Space>
          <Avatar 
            src={record.userAvatar} 
            icon={<UserOutlined />} 
            size="small" 
          />
          {record.userName || '-'}
        </Space>
      ),
    },
    {
      title: '性别',
      dataIndex: 'userGender',
      valueType: 'select',
      valueEnum: {
        0: { text: '男' },
        1: { text: '女' },
        2: { text: '保密' }
      },
      width: 80,
    },
    // 手机号码查询
    {
      title: '手机号',
      dataIndex: 'userPhone',
      valueType: 'text',
      width: 120,
      fieldProps: {
        placeholder: '请输入手机号码'
      },
    },
    // 邮箱查询
    {
      title: '邮箱',
      dataIndex: 'userEmail',
      valueType: 'text',
      width: 120,
      fieldProps: {
        placeholder: '请输入邮箱地址'
      },
    },
    // 微信号查询
    {
      title: '微信号',
      dataIndex: 'wechatId',
      valueType: 'text',
      width: 120,
      fieldProps: {
        placeholder: '请输入微信号'
      },
    },
    // 联系方式列
    {
      title: '联系方式',
      dataIndex: 'contact',
      hideInSearch: true,
      width: 200,
      render: (_, record) => (
        <Space direction="vertical" size="small" style={{ width: '100%' }}>
          {record.userPhone && (
            <Space>
              <PhoneOutlined /> {record.userPhone}
            </Space>
          )}
          {record.userEmail && (
            <Space>
              <MailOutlined /> {record.userEmail}
            </Space>
          )}
          {record.wechatId && (
            <Space>
              <WechatOutlined /> {record.wechatId}
            </Space>
          )}
        </Space>
      )
    },
    // 省份查询
    {
      title: '省份',
      dataIndex: 'province',
      valueType: 'text',
      width: 100,
      hideInTable: true,
      fieldProps: {
        placeholder: '请输入省份名称'
      },
    },
    // 城市查询
    {
      title: '城市',
      dataIndex: 'city',
      valueType: 'text',
      width: 100,
      hideInTable: true,
      fieldProps: {
        placeholder: '请输入城市名称'
      },
    },
    // 区县查询
    {
      title: '区/县',
      dataIndex: 'district',
      valueType: 'text',
      width: 100,
      hideInTable: true,
      fieldProps: {
        placeholder: '请输入区/县名称'
      },
    },
    // 地区列
    {
      title: '地区',
      dataIndex: 'location',
      hideInSearch: true,
      width: 180,
      render: (_, record) => {
        const location = [record.province, record.city, record.district]
          .filter(Boolean)
          .join(' / ');
        return location ? <span>{location}</span> : '-';
      }
    },
    {
      title: '生日',
      dataIndex: 'birthday',
      valueType: 'date',
      hideInSearch: true,
      width: 120,
    },
    {
      title: '简介',
      dataIndex: 'userProfile',
      valueType: 'textarea',
      ellipsis: true,
      width: 200,
      hideInSearch: true,
      render: (text) => (
        <Tooltip title={text}>
          <Typography.Paragraph ellipsis={{ rows: 2, tooltip: true }} style={{ marginBottom: 0 }}>
            {text || '-'}
          </Typography.Paragraph>
        </Tooltip>
      )
    },
    {
      title: '权限',
      dataIndex: 'userRole',
      width: 100,
      valueEnum: {
        student: {
          text: '学生',
          status: 'default',
        },
        teacher: {
          text: '教师',
          status: 'processing',
        },
        admin: {
          text: '管理员',
          status: 'success',
        },
        ban: {
          text: '封禁',
          status: 'error',
        },
      },
      render: (_, record) => {
        const roleMap: Record<string, { color: string; text: string }> = {
          student: { color: 'default', text: '学生' },
          teacher: { color: 'blue', text: '教师' },
          admin: { color: 'green', text: '管理员' },
          ban: { color: 'red', text: '封禁' },
        };
        const role = record.userRole || 'student';
        return (
          <Tag color={roleMap[role]?.color || 'default'}>{roleMap[role]?.text || '未知'}</Tag>
        );
      },
    },
    {
      title: '创建时间',
      sorter: true,
      dataIndex: 'createTime',
      valueType: 'dateTime',
      hideInSearch: true,
      hideInForm: true,
      width: 170,
    },
    {
      title: '更新时间',
      sorter: true,
      dataIndex: 'updateTime',
      valueType: 'dateTime',
      hideInSearch: true,
      hideInForm: true,
      width: 170,
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      width: 120,
      fixed: 'right',
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="link"
            icon={<EditOutlined />}
            onClick={() => {
              setCurrentRow(record);
              setUpdateModalVisible(true);
            }}
          >
            修改
          </Button>
          <Popconfirm
            title="确定要删除该用户吗？"
            onConfirm={() => handleDelete(record)}
            okText="确定"
            cancelText="取消"
          >
            <Button type="link" danger icon={<DeleteOutlined />}>
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
          <UserOutlined style={{ fontSize: 24, marginRight: 8, color: '#1890ff' }} />
          <Title level={4} style={{ margin: 0 }}>用户管理</Title>
        </div>
        <ProTable<API.User>
          headerTitle="用户列表"
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
              key="primary"
              onClick={() => {
                setCreateModalVisible(true);
              }}
            >
                <PlusOutlined /> 新建用户
            </Button>,
          ]}
          request={async (params, sort, filter) => {
            const sortField = Object.keys(sort)?.[0];
            const sortOrder = sort?.[sortField] ?? undefined;

            const { data, code } = await listUserByPageUsingPost({
              ...params,
              sortField,
              sortOrder,
              ...filter,
            } as API.UserQueryRequest);

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
        }}
      />
    </PageContainer>
  );
};
export default UserAdminPage;
