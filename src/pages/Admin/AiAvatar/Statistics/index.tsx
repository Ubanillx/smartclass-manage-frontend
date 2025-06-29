import React, { useState, useEffect } from 'react';
import { Card, Row, Col, DatePicker, Radio, Typography, Statistic, Divider } from 'antd';
import { PageContainer } from '@ant-design/pro-components';
import ReactECharts from 'echarts-for-react';
import { RobotOutlined, LineChartOutlined, BarChartOutlined, PieChartOutlined, UserOutlined, MessageOutlined, ClockCircleOutlined } from '@ant-design/icons';
import moment from 'moment';
import './index.less';

const { RangePicker } = DatePicker;
const { Title, Paragraph } = Typography;

/**
 * AI分身使用统计页面
 *
 * @constructor
 */
const AiAvatarStatistics: React.FC = () => {
  // 时间范围
  const [timeRange, setTimeRange] = useState<string>('week');
  // 图表类型
  const [chartType, setChartType] = useState<string>('usage');

  // 用于生成模拟数据的函数
  const generateMockData = (type: string, range: string) => {
    const days = range === 'week' ? 7 : (range === 'month' ? 30 : 365);
    const data = [];
    
    // 生成日期标签
    const dateLabels = [];
    for (let i = 0; i < days; i++) {
      dateLabels.push(moment().subtract(i, 'days').format('MM-DD'));
    }
    dateLabels.reverse();

    // 生成假数据
    if (type === 'usage') {
      // 生成各个AI分身的使用次数数据
      const aiAvatars = ['智能助手', '英语老师', '编程导师', '科学顾问', '阅读伙伴'];
      
      for (const avatar of aiAvatars) {
        const seriesData = [];
        for (let i = 0; i < days; i++) {
          seriesData.push(Math.floor(Math.random() * 100) + 20);
        }
        
        data.push({
          name: avatar,
          type: 'line',
          data: seriesData,
          smooth: true,
        });
      }
      
      return {
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: aiAvatars,
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: dateLabels,
        },
        yAxis: {
          type: 'value',
          name: '使用次数',
        },
        series: data,
      };
    } else if (type === 'userDistribution') {
      // 用户分布数据
      return {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 10,
          data: ['学生', '教师', '管理员', '家长', '其他'],
        },
        series: [
          {
            name: '用户分布',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '16',
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: '学生' },
              { value: 335, name: '教师' },
              { value: 234, name: '管理员' },
              { value: 580, name: '家长' },
              { value: 300, name: '其他' },
            ],
          },
        ],
      };
    } else if (type === 'feedback') {
      // 反馈评分数据
      const ratings = [1, 2, 3, 4, 5];
      const data = ratings.map(rating => ({
        value: Math.floor(Math.random() * 500) + 100,
        name: `${rating}星`,
      }));
      
      return {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)',
        },
        legend: {
          orient: 'horizontal',
          bottom: 'bottom',
          data: data.map(item => item.name),
        },
        series: [
          {
            name: '评分分布',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      };
    } else {
      // 对话时长统计
      const aiAvatars = ['智能助手', '英语老师', '编程导师', '科学顾问', '阅读伙伴'];
      return {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        legend: {},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: {
          type: 'value',
          name: '平均对话时长(分钟)',
          boundaryGap: [0, 0.01],
        },
        yAxis: {
          type: 'category',
          data: aiAvatars,
        },
        series: [
          {
            name: '本周',
            type: 'bar',
            data: aiAvatars.map(() => Math.floor(Math.random() * 15) + 5),
          },
          {
            name: '上周',
            type: 'bar',
            data: aiAvatars.map(() => Math.floor(Math.random() * 15) + 5),
          },
        ],
      };
    }
  };

  const renderChart = () => {
    const option = generateMockData(chartType, timeRange);
    return <ReactECharts 
      option={option} 
      style={{ height: 400 }} 
      key={`${chartType}-${timeRange}`}
      notMerge={true}
      lazyUpdate={true}
    />;
  };

  // 总统计数据
  const totalStats = [
    { title: '总用户数', value: 12580, icon: <UserOutlined /> },
    { title: '总对话数', value: 85940, icon: <MessageOutlined /> },
    { title: '平均对话时长', value: '8分钟', icon: <ClockCircleOutlined /> },
    { title: '平均评分', value: 4.7, icon: <PieChartOutlined /> },
  ];

  return (
    <PageContainer
      header={{
        title: (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <RobotOutlined style={{ fontSize: 24, marginRight: 8, color: '#1890ff' }} />
            <span>AI分身使用统计</span>
          </div>
        ),
      }}
    >
      <div className="ai-avatar-statistics">
        <Card>
          <Row gutter={[16, 16]} className="stat-summary">
            {totalStats.map((stat, index) => (
              <Col xs={24} sm={12} md={6} key={index}>
                <Card bordered={false}>
                  <Statistic 
                    title={
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ marginRight: 8, color: '#1890ff' }}>{stat.icon}</span>
                        {stat.title}
                      </div>
                    }
                    value={stat.value}
                  />
                </Card>
              </Col>
            ))}
          </Row>

          <Divider />

          <div className="chart-controls">
            <div className="control-group">
              <span className="control-label">时间范围:</span>
              <Radio.Group 
                value={timeRange} 
                onChange={(e) => setTimeRange(e.target.value)}
                buttonStyle="solid"
              >
                <Radio.Button value="week">本周</Radio.Button>
                <Radio.Button value="month">本月</Radio.Button>
                <Radio.Button value="year">本年</Radio.Button>
              </Radio.Group>
            </div>

            <div className="control-group">
              <span className="control-label">数据类型:</span>
              <Radio.Group 
                value={chartType} 
                onChange={(e) => setChartType(e.target.value)}
                buttonStyle="solid"
              >
                <Radio.Button value="usage"><LineChartOutlined /> 使用趋势</Radio.Button>
                <Radio.Button value="userDistribution"><PieChartOutlined /> 用户分布</Radio.Button>
                <Radio.Button value="feedback"><BarChartOutlined /> 评分分布</Radio.Button>
                <Radio.Button value="duration"><BarChartOutlined /> 对话时长</Radio.Button>
              </Radio.Group>
            </div>
          </div>

          <div className="chart-container">
            {renderChart()}
          </div>
        </Card>
      </div>
    </PageContainer>
  );
};

export default AiAvatarStatistics; 