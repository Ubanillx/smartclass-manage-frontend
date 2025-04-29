import React from 'react';
import { Card, Typography } from 'antd';
import { RobotOutlined } from '@ant-design/icons';

const { Title } = Typography;

const AiAvatarManagement: React.FC = () => {
  return (
    <div className="ai-avatar-management">
      <Card>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
          <RobotOutlined style={{ fontSize: 24, marginRight: 8, color: '#1890ff' }} />
          <Title level={4} style={{ margin: 0 }}>AI分身管理</Title>
        </div>
        <div>
          {/* 这里将来添加AI分身管理的具体内容 */}
        </div>
      </Card>
    </div>
  );
};

export default AiAvatarManagement; 