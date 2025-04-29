import React from 'react';
import { Card, Typography } from 'antd';
import { BookOutlined } from '@ant-design/icons';

const { Title } = Typography;

const DailyWordManagement: React.FC = () => {
  return (
    <div className="daily-word-management">
      <Card>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
          <BookOutlined style={{ fontSize: 24, marginRight: 8, color: '#52c41a' }} />
          <Title level={4} style={{ margin: 0 }}>每日单词管理</Title>
        </div>
        <div>
          {/* 这里将来添加每日单词管理的具体内容 */}
        </div>
      </Card>
    </div>
  );
};

export default DailyWordManagement; 