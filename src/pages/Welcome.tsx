import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Card, Typography, Button, Space } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import React from 'react';
import { history } from '@umijs/max';

const { Title, Paragraph } = Typography;

const Welcome: React.FC = () => {
  const { initialState } = useModel('@@initialState');

  return (
    <PageContainer>
      <Card
        style={{
          borderRadius: 8,
        }}
      >
        <div
          style={{
            backgroundPosition: '100% -30%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '274px auto',
            backgroundImage:
              "url('https://gw.alipayobjects.com/mdn/rms_a9745b/afts/img/A*BuFmQqsB2iAAAAAAAAAAAAAAARQnAQ')",
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
            <SmileOutlined style={{ fontSize: 28, marginRight: 12, color: '#1890ff' }} />
            <Title level={3} style={{ margin: 0 }}>欢迎使用智星云课管理系统</Title>
          </div>
          
          <Paragraph
            style={{
              fontSize: '16px',
              lineHeight: '26px',
              marginTop: 16,
              marginBottom: 32,
              width: '65%',
            }}
          >
            智星云课是一个智能化教育管理平台，为师生提供便捷的教学工具和学习资源。
            通过我们的系统，您可以管理班级、帖子、课程、AI分身、每日单词和美文等内容，
            提升教学效率和学习体验。
          </Paragraph>
          
          <Space size="large">
            <Button 
              type="primary" 
              size="large"
              onClick={() => history.push('/datapanel')}
            >
              查看数据看板
            </Button>
            <Button 
              size="large"
              onClick={() => history.push('/admin/user')}
            >
              管理用户
            </Button>
          </Space>
        </div>
      </Card>
    </PageContainer>
  );
};

export default Welcome;
