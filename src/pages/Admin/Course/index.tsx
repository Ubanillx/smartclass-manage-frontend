import React from 'react';
import { Card, Typography } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';

const { Title } = Typography;

const CourseManagement: React.FC = () => {
  return (
    <div className="course-management">
      <Card>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
          <PlayCircleOutlined style={{ fontSize: 24, marginRight: 8, color: '#eb2f96' }} />
          <Title level={4} style={{ margin: 0 }}>课程管理</Title>
        </div>
        <div>
          {/* 这里将来添加课程管理的具体内容 */}
        </div>
      </Card>
    </div>
  );
};

export default CourseManagement;
