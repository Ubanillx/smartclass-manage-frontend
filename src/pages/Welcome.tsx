import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Card, Typography, Button, Space, Row, Col, Statistic, Divider, Tooltip, Avatar, Badge } from 'antd';
import { 
  SmileOutlined, TeamOutlined, FormOutlined, BookOutlined, RobotOutlined, 
  PlayCircleOutlined, FileTextOutlined, CommentOutlined, ArrowRightOutlined,
  CalendarOutlined, ClockCircleOutlined, FireOutlined, RiseOutlined, TrophyOutlined,
  HeartOutlined, StarOutlined, PictureOutlined 
} from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { history } from '@umijs/max';
import styles from './Welcome.less';

const { Title, Paragraph, Text } = Typography;

interface Feature {
  title: string;
  icon: React.ReactNode;
  description: string;
  path: string;
  badge?: {
    count: number;
    color: string;
  };
}

const Welcome: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const features: Feature[] = [
    {
      title: '用户管理',
      icon: <TeamOutlined style={{ color: '#1890ff' }} />,
      description: '管理学生、教师等用户账号',
      path: '/admin/user',
      badge: {
        count: 25,
        color: '#1890ff'
      }
    },
    {
      title: '班级管理',
      icon: <TeamOutlined style={{ color: '#52c41a' }} />,
      description: '创建和管理班级，分配师生',
      path: '/admin/classManagement',
    },
    {
      title: '帖子管理',
      icon: <FormOutlined style={{ color: '#fa8c16' }} />,
      description: '管理学习社区的帖子内容',
      path: '/admin/postManagement',
      badge: {
        count: 6,
        color: '#fa8c16'
      }
    },
    {
      title: '课程管理',
      icon: <PlayCircleOutlined style={{ color: '#13c2c2' }} />,
      description: '创建和更新教学课程',
      path: '/admin/courseManagement',
    },
    {
      title: 'AI分身管理',
      icon: <RobotOutlined style={{ color: '#722ed1' }} />,
      description: '配置和管理AI助教',
      path: '/admin/aiAvatarManagement',
    },
    {
      title: '每日单词',
      icon: <BookOutlined style={{ color: '#eb2f96' }} />,
      description: '管理每日单词学习内容',
      path: '/admin/dailyWord',
      badge: {
        count: 12,
        color: '#eb2f96'
      }
    },
    {
      title: '每日美文',
      icon: <FileTextOutlined style={{ color: '#fa541c' }} />,
      description: '查看和管理美文内容',
      path: '/admin/dailyArticleManagement/view',
      badge: {
        count: 3,
        color: '#fa541c'
      }
    },
    {
      title: '用户反馈',
      icon: <CommentOutlined style={{ color: '#faad14' }} />,
      description: '处理用户反馈和建议',
      path: '/admin/feedbackManagement',
    },
  ];
  
  // 格式化时间显示
  const getTimeString = () => {
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  
  // 获取日期显示
  const getDateString = () => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      weekday: 'long'
    };
    return currentTime.toLocaleDateString('zh-CN', options);
  };
  
  // 获取问候语
  const getGreeting = () => {
    const hours = currentTime.getHours();
    if (hours < 6) {
      return '夜深了';
    } else if (hours < 9) {
      return '早上好';
    } else if (hours < 12) {
      return '上午好';
    } else if (hours < 14) {
      return '中午好';
    } else if (hours < 18) {
      return '下午好';
    } else if (hours < 22) {
      return '晚上好';
    } else {
      return '夜深了';
    }
  };

  // 获取当前时间对应的图标
  const getTimeIcon = () => {
    const hours = currentTime.getHours();
    if (hours >= 6 && hours < 18) {
      return <Tooltip title="白天"><FireOutlined style={{ color: '#faad14', fontSize: 24 }} /></Tooltip>;
    } else {
      return <Tooltip title="夜间"><ClockCircleOutlined style={{ color: '#722ed1', fontSize: 24 }} /></Tooltip>;
    }
  };

  return (
    <PageContainer className={styles.welcomePage}>
      <Row gutter={[24, 24]}>
        <Col xs={24} md={16}>
          <Card 
            className={styles.welcomeCard}
            bordered={false}
          >
            <div className={styles.welcomeHeader}>
              <div className={styles.greetingSection}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                  {initialState?.currentUser?.userAvatar ? (
                    <Avatar 
                      src={initialState.currentUser.userAvatar} 
                      size={48} 
                      style={{ marginRight: 16 }}
                    />
                  ) : (
                    <Avatar 
                      style={{ backgroundColor: '#1890ff', marginRight: 16 }} 
                      size={48}
                    >
                      {initialState?.currentUser?.userName?.charAt(0) || 'A'}
                    </Avatar>
                  )}
                  <Title level={2} className={styles.greeting}>
                    {getGreeting()}，{initialState?.currentUser?.userName || '管理员'}
                    <SmileOutlined className={styles.greetingIcon} />
                  </Title>
                </div>
                <Paragraph className={styles.dateTime}>
                  <Space size="middle">
                    <span>
                      <CalendarOutlined style={{ marginRight: 8, color: '#1890ff' }} />
                      {getDateString()}
                    </span>
                    <span>
                      {getTimeIcon()}
                      <span style={{ marginLeft: 8 }}>{getTimeString()}</span>
                    </span>
                  </Space>
                </Paragraph>
                <Paragraph className={styles.welcomeText}>
                  欢迎使用智星云课管理系统，这里提供丰富的教学资源和工具，助力教育管理更加高效。
                </Paragraph>
                <div style={{ display: 'flex', marginBottom: 16 }}>
                  <Tooltip title="高效">
                    <div style={{ display: 'flex', alignItems: 'center', marginRight: 24 }}>
                      <RiseOutlined style={{ color: '#52c41a', fontSize: 20, marginRight: 8 }} />
                      <span>高效管理</span>
                    </div>
                  </Tooltip>
                  <Tooltip title="专业">
                    <div style={{ display: 'flex', alignItems: 'center', marginRight: 24 }}>
                      <TrophyOutlined style={{ color: '#faad14', fontSize: 20, marginRight: 8 }} />
                      <span>专业教学</span>
                    </div>
                  </Tooltip>
                  <Tooltip title="智能">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <StarOutlined style={{ color: '#eb2f96', fontSize: 20, marginRight: 8 }} />
                      <span>智能平台</span>
                    </div>
                  </Tooltip>
                </div>
              </div>
              <div className={styles.welcomeImage}>
                <img 
                  src="https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png" 
                  alt="欢迎图片"
                />
              </div>
            </div>
            
            <Divider style={{ margin: '16px 0' }} />
            
            <div className={styles.actionButtons}>
              <Space size="large">
                <Button 
                  type="primary" 
                  size="large"
                  icon={<ArrowRightOutlined />}
                  onClick={() => history.push('/datapanel')}
                >
                  查看数据看板
                </Button>
                <Button 
                  size="large"
                  icon={<PictureOutlined />}
                  onClick={() => history.push('/admin/dailyArticleManagement/view')}
                >
                  浏览每日美文
                </Button>
                <Button 
                  type="dashed" 
                  size="large"
                  icon={<HeartOutlined style={{ color: '#eb2f96' }} />}
                  onClick={() => history.push('/admin/dailyWord')}
                >
                  学习每日单词
                </Button>
              </Space>
            </div>
          </Card>
        </Col>
        
        <Col xs={24} md={8}>
          <Card bordered={false} className={styles.quickStatsCard}>
            <Title level={4}>
              <FireOutlined style={{ marginRight: 8, color: '#fa541c' }} />
              实时数据
            </Title>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Statistic 
                  title={
                    <div>
                      <TeamOutlined style={{ marginRight: 4 }} />
                      今日访问
                    </div>
                  }
                  value={1368} 
                  valueStyle={{ color: '#1890ff' }}
                />
              </Col>
              <Col span={12}>
                <Statistic 
                  title={
                    <div>
                      <FileTextOutlined style={{ marginRight: 4 }} />
                      总美文数
                    </div>
                  }
                  value={257} 
                  valueStyle={{ color: '#eb2f96' }}
                />
              </Col>
              <Col span={12}>
                <Statistic 
                  title={
                    <div>
                      <PlayCircleOutlined style={{ marginRight: 4 }} />
                      总课程数
                    </div>
                  }
                  value={85} 
                  valueStyle={{ color: '#52c41a' }}
                />
              </Col>
              <Col span={12}>
                <Statistic 
                  title={
                    <div>
                      <CommentOutlined style={{ marginRight: 4 }} />
                      未读反馈
                    </div>
                  }
                  value={12} 
                  valueStyle={{ color: '#faad14' }}
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      
      <Card 
        title={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <StarOutlined style={{ fontSize: 22, color: '#faad14', marginRight: 8 }} />
            <span>系统功能</span>
          </div>
        }
        bordered={false} 
        className={styles.featuresCard}
        style={{ marginTop: 24 }}
      >
        <Row gutter={[24, 24]}>
          {features.map((feature, index) => (
            <Col xs={24} sm={12} md={8} lg={6} key={index}>
              <Badge 
                count={feature.badge?.count} 
                color={feature.badge?.color}
                offset={[-8, 8]}
              >
                <Card 
                  hoverable 
                  className={styles.featureCard}
                  onClick={() => history.push(feature.path)}
                >
                  <div className={styles.featureIcon}>
                    {feature.icon}
                  </div>
                  <div className={styles.featureContent}>
                    <Title level={4}>{feature.title}</Title>
                    <Text type="secondary">{feature.description}</Text>
                  </div>
                </Card>
              </Badge>
            </Col>
          ))}
        </Row>
      </Card>
    </PageContainer>
  );
};

export default Welcome;
