import React from 'react';
import { Card, Typography } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';

const { Title } = Typography;

const DailyArticleManagement: React.FC = () => {
  return (
    <div className="daily-article-management">
      <Card>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
          <FileTextOutlined style={{ fontSize: 24, marginRight: 8, color: '#722ed1' }} />
          <Title level={4} style={{ margin: 0 }}>每日美文管理</Title>
        </div>
        <div>
          {/* 这里将来添加每日美文管理的具体内容 */}
        </div>
      </Card>
    </div>
  );
};

export default DailyArticleManagement; 