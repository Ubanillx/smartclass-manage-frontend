import React from 'react';
import { Card, Typography } from 'antd';
import { TeamOutlined } from '@ant-design/icons';

const { Title } = Typography;

const ClassManagement: React.FC = () => {
  return (
    <div className="class-management">
      <Card>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
          <TeamOutlined style={{ fontSize: 24, marginRight: 8, color: '#1890ff' }} />
          <Title level={4} style={{ margin: 0 }}>班级管理</Title>
        </div>
        <div>
          {/* 这里将来添加班级管理的具体内容 */}
        </div>
      </Card>
    </div>
  );
};

export default ClassManagement; 