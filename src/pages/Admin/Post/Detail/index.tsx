import React, { useEffect, useState } from 'react';
import { PageContainer } from '@ant-design/pro-components';
import { Card, Typography, Tag, Space, Avatar, Divider, Button, message } from 'antd';
import { TagOutlined, UserOutlined, ClockCircleOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { history, useParams } from '@umijs/max';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import 'katex/dist/katex.min.css';
import './index.less';
import { getPostVoByIdUsingGet } from '@/services/backend/postController';

const { Title, Paragraph } = Typography;

/**
 * 帖子详情页面
 */
const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState<boolean>(true);
  const [postData, setPostData] = useState<API.PostVO>({});

  // 代码渲染组件
  const CodeBlock = ({ node, inline, className, children, ...props }: any) => {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <pre style={{ backgroundColor: '#f6f8fa', padding: '16px', borderRadius: '6px' }} {...props}>
        <code>
          {String(children).replace(/\n$/, '')}
        </code>
      </pre>
    ) : (
      <code style={{ backgroundColor: '#f6f8fa', padding: '2px 4px', borderRadius: '3px' }} {...props}>
        {children}
      </code>
    );
  };

  // 获取帖子详情
  const fetchPostDetail = async () => {
    if (!id) return;
    setLoading(true);
    try {
      const { data, code } = await getPostVoByIdUsingGet({ id: Number(id) });
      if (code === 0 && data) {
        setPostData(data);
      } else {
        message.error('获取帖子详情失败');
      }
    } catch (error: any) {
      message.error('获取帖子详情失败: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPostDetail();
  }, [id]);

  // 返回列表页
  const handleBack = () => {
    history.push('/admin/postManagement');
  };

  return (
    <PageContainer
      loading={loading}
      header={{
        title: null,
        breadcrumb: {
          items: [
            {
              path: '/admin/postManagement',
              title: '帖子管理',
            },
            {
              path: '',
              title: '帖子详情',
            },
          ],
        },
      }}
    >
      <Card className="post-detail-card">
        <Button 
          type="link" 
          icon={<ArrowLeftOutlined />} 
          onClick={handleBack}
          className="back-button"
        >
          返回列表
        </Button>

        <div className="post-header">
          <Title level={2}>{postData.title}</Title>
          
          <div className="post-meta">
            <Space size={16}>
              <span>
                <Avatar src={postData.user?.userAvatar} size="small" icon={<UserOutlined />} />
                <span className="meta-text">{postData.user?.userName || '未知用户'}</span>
              </span>
              
              <span>
                <ClockCircleOutlined />
                <span className="meta-text">
                  {postData.createTime ? new Date(postData.createTime).toLocaleString() : ''}
                </span>
              </span>
            </Space>
          </div>

          <div className="post-tags">
            <Space wrap>
              {postData.tagList?.map((tag) => (
                <Tag color="blue" key={tag}>
                  <TagOutlined /> {tag}
                </Tag>
              ))}
            </Space>
          </div>
        </div>

        <Divider />

        <div className="post-content">
          {postData.content ? (
            <ReactMarkdown
              remarkPlugins={[remarkGfm, remarkMath]}
              rehypePlugins={[rehypeKatex, rehypeRaw]}
              components={{
                code: CodeBlock
              }}
            >
              {postData.content}
            </ReactMarkdown>
          ) : (
            <Paragraph>暂无内容</Paragraph>
          )}
        </div>
      </Card>
    </PageContainer>
  );
};

export default PostDetail; 