import React from 'react';
import { Card, Typography } from 'antd';
import { FormOutlined } from '@ant-design/icons';

const { Title } = Typography;

const PostManagement: React.FC = () => {
  return (
    <div className="post-management">
      <Card>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
          <FormOutlined style={{ fontSize: 24, marginRight: 8, color: '#fa8c16' }} />
          <Title level={4} style={{ margin: 0 }}>帖子管理</Title>
        </div>
        <div>
          {/* 这里将来添加帖子管理的具体内容 */}
        </div>
      </Card>
    </div>
  );
};

export default PostManagement;
