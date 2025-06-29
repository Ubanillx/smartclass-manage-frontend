import React, { useEffect, useState } from 'react';
import { PageContainer } from '@ant-design/pro-components';
import { Card, Row, Col, Typography, Tag, Space, Pagination, Spin, Avatar, Divider, Badge, Statistic } from 'antd';
import { BookOutlined, CalendarOutlined, UserOutlined, TagOutlined, EyeOutlined, LikeOutlined } from '@ant-design/icons';
import { history } from '@umijs/max';
import { listDailyArticleVoByPageUsingGet, getTodayArticleUsingGet } from '@/services/backend/dailyArticleController';
import styles from './index.less';

const { Title, Paragraph, Text } = Typography;

/**
 * 每日美文展示页面
 */
const DailyArticleBlog: React.FC = () => {
  // 文章列表
  const [articleList, setArticleList] = useState<API.DailyArticleVO[]>([]);
  // 总数
  const [total, setTotal] = useState<number>(0);
  // 加载状态
  const [loading, setLoading] = useState<boolean>(true);
  // 当前页
  const [current, setCurrent] = useState<number>(1);
  // 每页条数
  const [pageSize, setPageSize] = useState<number>(12);
  // 今日美文
  const [todayArticle, setTodayArticle] = useState<API.DailyArticleVO>();
  // 今日美文加载状态
  const [todayLoading, setTodayLoading] = useState<boolean>(true);

  // 获取文章列表
  const fetchArticleList = async (page: number, size: number) => {
    setLoading(true);
    try {
      const { data, code } = await listDailyArticleVoByPageUsingGet({
        current: page,
        pageSize: size,
        sortField: 'publishDate',
        sortOrder: 'descend',
      });
      
      if (code === 0 && data) {
        setArticleList(data.records || []);
        setTotal(data.total || 0);
      }
    } catch (error) {
      console.error('获取文章列表失败', error);
    } finally {
      setLoading(false);
    }
  };

  // 获取今日美文
  const fetchTodayArticle = async () => {
    setTodayLoading(true);
    try {
      const { data, code } = await getTodayArticleUsingGet();
      if (code === 0 && data) {
        setTodayArticle(data);
      }
    } catch (error) {
      console.error('获取今日美文失败', error);
    } finally {
      setTodayLoading(false);
    }
  };

  // 页面加载时获取数据
  useEffect(() => {
    fetchArticleList(current, pageSize);
    fetchTodayArticle();
  }, []);

  // 页码变化处理
  const handlePageChange = (page: number, pageSize?: number) => {
    setCurrent(page);
    if (pageSize) {
      setPageSize(pageSize);
    }
    fetchArticleList(page, pageSize || 12);
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

  // 跳转到文章详情页
  const goToDetail = (id?: number) => {
    if (id) {
      history.push(`/admin/dailyArticleManagement/detail/${id}`);
    }
  };
  
  return (
    <PageContainer
      header={{
        title: (
          <div className={styles.pageTitle}>
            <BookOutlined style={{ marginRight: 12 }} />
            每日美文
          </div>
        ),
      }}
    >
      {/* 今日推荐美文 */}
      <Card
        className={styles.todayCard}
        loading={todayLoading}
      >
        <Row gutter={24}>
          <Col xs={24} sm={24} md={16} lg={18}>
            <div className={styles.todayArticleContent}>
              <Title level={2}>
                今日美文
                <div className={styles.todaySubTitle}>
                  <CalendarOutlined /> {todayArticle?.publishDate?.split('T')[0]}
                </div>
              </Title>
              {todayArticle ? (
                <>
                  <Title level={3} className={styles.todayArticleTitle} onClick={() => goToDetail(todayArticle.id)}>
                    {todayArticle.title}
                  </Title>
                  <div className={styles.todayArticleMeta}>
                    <Space split={<Divider type="vertical" />}>
                      <span><UserOutlined /> {todayArticle.author || '未知作者'}</span>
                      <span>{renderDifficulty(todayArticle.difficulty)}</span>
                      <span><BookOutlined /> {renderReadTime(todayArticle.readTime)}</span>
                      {todayArticle.category && <span><TagOutlined /> {todayArticle.category}</span>}
                    </Space>
                  </div>
                  <Paragraph className={styles.todayArticleSummary}>
                    {todayArticle.summary}
                  </Paragraph>
                  <div className={styles.todayArticleTags}>
                    {todayArticle.tags?.split(',').map((tag) => (
                      <Tag color="blue" key={tag}>
                        {tag}
                      </Tag>
                    ))}
                  </div>
                  <div className={styles.todayArticleStats}>
                    <Space size="large">
                      <Statistic 
                        value={todayArticle.viewCount || 0} 
                        prefix={<EyeOutlined />} 
                        valueStyle={{ fontSize: 16 }}
                      />
                      <Statistic 
                        value={todayArticle.likeCount || 0} 
                        prefix={<LikeOutlined />} 
                        valueStyle={{ fontSize: 16 }}
                      />
                    </Space>
                  </div>
                </>
              ) : (
                <div className={styles.noTodayArticle}>
                  今日暂无推荐美文
                </div>
              )}
            </div>
          </Col>
          <Col xs={24} sm={24} md={8} lg={6}>
            {todayArticle?.coverImage && (
              <div className={styles.todayArticleImage}>
                <img 
                  src={todayArticle.coverImage} 
                  alt={todayArticle.title || '每日美文封面'} 
                  className={styles.coverImage}
                  onClick={() => goToDetail(todayArticle?.id)}
                />
              </div>
            )}
          </Col>
        </Row>
      </Card>

      <div className={styles.articleSection}>
        <Title level={3} className={styles.sectionTitle}>
          <BookOutlined /> 精选美文
        </Title>
        <Spin spinning={loading}>
          <Row gutter={[24, 24]}>
            {articleList.map((article) => (
              <Col xs={24} sm={12} md={8} lg={8} xl={6} key={article.id}>
                <Card 
                  hoverable 
                  className={styles.articleCard}
                  cover={
                    article.coverImage ? (
                      <div className={styles.cardCover}>
                        <img 
                          alt={article.title || '文章封面'} 
                          src={article.coverImage} 
                          className={styles.coverImg}
                        />
                      </div>
                    ) : null
                  }
                  onClick={() => goToDetail(article.id)}
                >
                  <div className={styles.cardContent}>
                    <div className={styles.articleDifficulty}>
                      {renderDifficulty(article.difficulty)}
                    </div>
                    <Title level={4} className={styles.articleTitle} ellipsis={{ rows: 2 }}>
                      {article.title}
                    </Title>
                    <div className={styles.articleMeta}>
                      <Space split={<Divider type="vertical" />}>
                        <span><UserOutlined /> {article.author || '未知'}</span>
                        <span><CalendarOutlined /> {article.publishDate?.split('T')[0]}</span>
                      </Space>
                    </div>
                    <Paragraph ellipsis={{ rows: 3 }} className={styles.articleSummary}>
                      {article.summary}
                    </Paragraph>
                    <div className={styles.articleFooter}>
                      <Space>
                        <span><EyeOutlined /> {article.viewCount || 0}</span>
                        <span><LikeOutlined /> {article.likeCount || 0}</span>
                        <span><BookOutlined /> {renderReadTime(article.readTime)}</span>
                      </Space>
                      <div className={styles.articleTags}>
                        {article.tags?.split(',').slice(0, 2).map((tag) => (
                          <Tag color="blue" key={tag}>
                            {tag}
                          </Tag>
                        ))}
                        {article.tags && article.tags.split(',').length > 2 && <Tag>...</Tag>}
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Spin>
        
        {/* 分页 */}
        {total > 0 && (
          <div className={styles.pagination}>
            <Pagination
              current={current}
              pageSize={pageSize}
              total={total}
              onChange={handlePageChange}
              showQuickJumper
              showSizeChanger
              pageSizeOptions={['12', '24', '36']}
            />
          </div>
        )}
      </div>
    </PageContainer>
  );
};

export default DailyArticleBlog; 