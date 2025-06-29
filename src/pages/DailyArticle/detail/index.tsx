import React, { useEffect, useState } from 'react';
import { useParams, history } from '@umijs/max';
import { PageContainer } from '@ant-design/pro-components';
import { Card, Typography, Divider, Space, Tag, Badge, Skeleton, Button, Statistic, Row, Col, Image } from 'antd';
import { ArrowLeftOutlined, CalendarOutlined, UserOutlined, TagOutlined, BookOutlined, EyeOutlined, LikeOutlined } from '@ant-design/icons';
import { getDailyArticleVoByIdUsingGet } from '@/services/backend/dailyArticleController';
import styles from './index.less';

const { Title, Paragraph, Text } = Typography;

/**
 * 每日美文详情页
 */
const DailyArticleDetail: React.FC = () => {
  // 文章ID
  const { id } = useParams<{ id: string }>();
  // 文章详情
  const [article, setArticle] = useState<API.DailyArticleVO>();
  // 加载状态
  const [loading, setLoading] = useState<boolean>(true);

  // 获取文章详情
  const fetchArticleDetail = async () => {
    if (!id) return;
    
    setLoading(true);
    try {
      const { data, code } = await getDailyArticleVoByIdUsingGet({ id: Number(id) });
      if (code === 0 && data) {
        setArticle(data);
      }
    } catch (error) {
      console.error('获取文章详情失败', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticleDetail();
  }, [id]);

  // 返回列表页
  const goBack = () => {
    history.push('/admin/dailyArticleManagement/view');
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

  return (
    <PageContainer
      header={{
        title: (
          <div className={styles.pageTitle}>
            <BookOutlined style={{ marginRight: 12 }} />
            每日美文详情
          </div>
        ),
        onBack: goBack,
        backIcon: <ArrowLeftOutlined />,
      }}
    >
      <Card className={styles.articleDetailCard}>
        <Skeleton loading={loading} active paragraph={{ rows: 15 }}>
          {article && (
            <>
              <div className={styles.articleHeader}>
                <Title level={2} className={styles.articleTitle}>
                  {article.title}
                </Title>
                
                <div className={styles.articleMeta}>
                  <Space split={<Divider type="vertical" />}>
                    <span><UserOutlined /> {article.author || '未知作者'}</span>
                    <span><CalendarOutlined /> {article.publishDate?.split('T')[0]}</span>
                    <span>{renderDifficulty(article.difficulty)}</span>
                    <span><BookOutlined /> {renderReadTime(article.readTime)}</span>
                    {article.source && (
                      <span>来源：{article.sourceUrl ? (
                        <a href={article.sourceUrl} target="_blank" rel="noopener noreferrer">
                          {article.source}
                        </a>
                      ) : article.source}
                      </span>
                    )}
                  </Space>
                </div>
                
                {article.tags && (
                  <div className={styles.articleTags}>
                    {article.tags.split(',').map((tag) => (
                      <Tag color="blue" key={tag}>
                        <TagOutlined /> {tag}
                      </Tag>
                    ))}
                  </div>
                )}
                
                <div className={styles.articleStats}>
                  <Space size="large">
                    <Statistic title="阅读量" value={article.viewCount || 0} prefix={<EyeOutlined />} />
                    <Statistic title="点赞数" value={article.likeCount || 0} prefix={<LikeOutlined />} />
                  </Space>
                </div>
              </div>
              
              {article.coverImage && (
                <div className={styles.articleCover}>
                  <Image 
                    src={article.coverImage} 
                    alt={article.title} 
                    style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'cover' }}
                  />
                </div>
              )}
              
              {article.summary && (
                <div className={styles.articleSummary}>
                  <Paragraph>
                    <blockquote>{article.summary}</blockquote>
                  </Paragraph>
                </div>
              )}
              
              <Divider />
              
              <div className={styles.articleContent}>
                {article.content ? (
                  <div dangerouslySetInnerHTML={{ __html: article.content }} />
                ) : (
                  <div className={styles.noContent}>暂无内容</div>
                )}
              </div>
              
              <div className={styles.articleFooter}>
                <Space>
                  <Button type="primary" icon={<ArrowLeftOutlined />} onClick={goBack}>
                    返回列表
                  </Button>
                </Space>
              </div>
            </>
          )}
        </Skeleton>
      </Card>
    </PageContainer>
  );
};

export default DailyArticleDetail; 