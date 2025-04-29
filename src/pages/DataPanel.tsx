import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Card, Col, Row, Statistic, Typography, Divider, Table, Progress, Tabs } from 'antd';
import { FundTwoTone, TeamOutlined, FormOutlined, PlayCircleOutlined, RobotOutlined, BookOutlined, FileTextOutlined, RiseOutlined, FallOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import ReactECharts from 'echarts-for-react';

const { Title, Paragraph } = Typography;
const { TabPane } = Tabs;

const DataPanel: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const [activeTab, setActiveTab] = useState('1');

  // 假数据：统计数字
  const stats = {
    totalUsers: 3547,
    activeUsers: 1258,
    totalClasses: 86,
    totalPosts: 14329,
    totalCourses: 256,
    aiAvatars: 42,
    totalWords: 3850,
    dailyArticles: 128,
    growth: {
      users: 12.5,
      posts: 8.3,
      courses: -2.1,
      words: 15.7
    }
  };

  // 假数据：班级活跃度排名
  const topClassesData = [
    { key: '1', name: '高三一班', activeUsers: 48, postsCount: 378, avgCompletion: 92 },
    { key: '2', name: '高二三班', activeUsers: 45, postsCount: 345, avgCompletion: 89 },
    { key: '3', name: '初三二班', activeUsers: 43, postsCount: 321, avgCompletion: 87 },
    { key: '4', name: '高一四班', activeUsers: 41, postsCount: 298, avgCompletion: 85 },
    { key: '5', name: '初二一班', activeUsers: 38, postsCount: 276, avgCompletion: 82 },
  ];

  // 假数据：最近7天活跃用户数
  const weeklyActiveUsers = [
    { day: '周一', count: 856 },
    { day: '周二', count: 932 },
    { day: '周三', count: 901 },
    { day: '周四', count: 934 },
    { day: '周五', count: 1290 },
    { day: '周六', count: 1330 },
    { day: '周日', count: 1320 },
  ];

  // 表格列配置
  const classColumns = [
    {
      title: '排名',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: '班级名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '活跃学生数',
      dataIndex: 'activeUsers',
      key: 'activeUsers',
    },
    {
      title: '发帖数',
      dataIndex: 'postsCount',
      key: 'postsCount',
    },
    {
      title: '平均完成率',
      dataIndex: 'avgCompletion',
      key: 'avgCompletion',
      render: (text: number) => (
        <Progress percent={text} size="small" status="active" />
      ),
    },
  ];

  // 用户活跃度折线图配置
  const userActivityOption = {
    title: {
      text: '近6个月用户活跃度趋势',
      left: 'center'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['活跃用户', '新增用户', '总用户数'],
      bottom: 0
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '10%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1月', '2月', '3月', '4月', '5月', '6月']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '活跃用户',
        type: 'line',
        data: [820, 932, 901, 934, 1290, 1330],
        smooth: true,
        lineStyle: {
          width: 3,
          color: '#5470c6'
        }
      },
      {
        name: '新增用户',
        type: 'line',
        data: [120, 132, 101, 134, 90, 230],
        smooth: true,
        lineStyle: {
          width: 3,
          color: '#91cc75'
        }
      },
      {
        name: '总用户数',
        type: 'line',
        data: [2200, 2320, 2501, 2634, 2790, 3330],
        smooth: true,
        lineStyle: {
          width: 3,
          color: '#ee6666'
        }
      }
    ]
  };

  // 学习时长分布饼图配置
  const studyTimeOption = {
    title: {
      text: '学生每日学习时长分布',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'horizontal',
      bottom: 0,
      data: ['<1小时', '1-2小时', '2-3小时', '3-4小时', '>4小时']
    },
    series: [
      {
        name: '学习时长',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        data: [
          { value: 335, name: '<1小时' },
          { value: 679, name: '1-2小时' },
          { value: 1548, name: '2-3小时' },
          { value: 684, name: '3-4小时' },
          { value: 456, name: '>4小时' }
        ]
      }
    ]
  };

  // 课程完成率柱状图配置
  const courseCompletionOption = {
    title: {
      text: '各年级课程完成率',
      left: 'center'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['目标值', '完成率'],
      bottom: 0
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '10%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['初一', '初二', '初三', '高一', '高二', '高三']
    },
    yAxis: {
      type: 'value',
      max: 100,
      axisLabel: {
        formatter: '{value}%'
      }
    },
    series: [
      {
        name: '目标值',
        type: 'bar',
        data: [90, 90, 95, 95, 95, 98],
        itemStyle: {
          color: '#91cc75',
          opacity: 0.5
        }
      },
      {
        name: '完成率',
        type: 'bar',
        data: [82, 86, 88, 90, 85, 96],
        itemStyle: {
          color: '#5470c6'
        }
      }
    ]
  };

  // 学科分布雷达图配置
  const subjectDistributionOption = {
    title: {
      text: '学科学习情况分析',
      left: 'center'
    },
    tooltip: {},
    legend: {
      data: ['平均成绩', '学习时长比例'],
      bottom: 0
    },
    radar: {
      indicator: [
        { name: '语文', max: 100 },
        { name: '数学', max: 100 },
        { name: '英语', max: 100 },
        { name: '物理', max: 100 },
        { name: '化学', max: 100 },
        { name: '生物', max: 100 }
      ]
    },
    series: [{
      name: '学科分析',
      type: 'radar',
      data: [
        {
          value: [85, 92, 88, 78, 82, 86],
          name: '平均成绩',
          areaStyle: {
            color: 'rgba(84, 112, 198, 0.3)'
          },
          lineStyle: {
            color: '#5470c6'
          },
          itemStyle: {
            color: '#5470c6'
          }
        },
        {
          value: [90, 95, 92, 75, 80, 70],
          name: '学习时长比例',
          areaStyle: {
            color: 'rgba(145, 204, 117, 0.3)'
          },
          lineStyle: {
            color: '#91cc75'
          },
          itemStyle: {
            color: '#91cc75'
          }
        }
      ]
    }]
  };

  // 热门课程排行榜
  const topCoursesData = [
    { key: '1', name: '高中数学必修一', students: 1245, rating: 4.8, completion: 86 },
    { key: '2', name: '高中英语语法精讲', students: 1120, rating: 4.7, completion: 82 },
    { key: '3', name: '初中物理力学基础', students: 986, rating: 4.9, completion: 91 },
    { key: '4', name: '高考语文阅读理解', students: 920, rating: 4.6, completion: 78 },
    { key: '5', name: '初中数学代数入门', students: 890, rating: 4.5, completion: 85 },
  ];

  const topCoursesColumns = [
    {
      title: '排名',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: '课程名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '学习人数',
      dataIndex: 'students',
      key: 'students',
    },
    {
      title: '评分',
      dataIndex: 'rating',
      key: 'rating',
    },
    {
      title: '平均完成率',
      dataIndex: 'completion',
      key: 'completion',
      render: (text: number) => (
        <Progress percent={text} size="small" status="active" />
      ),
    },
  ];

  // 学科成绩分布玫瑰图配置
  const subjectScoreOption = {
    title: {
      text: '学科成绩分布',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      bottom: 0,
      data: ['语文', '数学', '英语', '物理', '化学', '生物']
    },
    series: [
      {
        name: '学科成绩',
        type: 'pie',
        radius: [20, 110],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: [
          { value: 85, name: '语文' },
          { value: 92, name: '数学' },
          { value: 88, name: '英语' },
          { value: 78, name: '物理' },
          { value: 82, name: '化学' },
          { value: 86, name: '生物' }
        ]
      }
    ]
  };

  // 周内学习时段分布热力图配置
  const weekHeatmapOption = {
    title: {
      text: '周内学习时段分布热力图',
      left: 'center'
    },
    tooltip: {
      position: 'top'
    },
    grid: {
      top: '60',
      bottom: '50'
    },
    xAxis: {
      type: 'category',
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      splitArea: {
        show: true
      }
    },
    yAxis: {
      type: 'category',
      data: ['0:00', '3:00', '6:00', '9:00', '12:00', '15:00', '18:00', '21:00'],
      splitArea: {
        show: true
      }
    },
    visualMap: {
      min: 0,
      max: 100,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: '0'
    },
    series: [{
      name: '学习人数',
      type: 'heatmap',
      data: [
        [0, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 15], 
        [0, 4, 25], [0, 5, 45], [0, 6, 70], [0, 7, 30],
        [1, 0, 7], [1, 1, 2], [1, 2, 0], [1, 3, 20], 
        [1, 4, 28], [1, 5, 50], [1, 6, 65], [1, 7, 25],
        [2, 0, 9], [2, 1, 3], [2, 2, 0], [2, 3, 18], 
        [2, 4, 30], [2, 5, 55], [2, 6, 60], [2, 7, 28],
        [3, 0, 8], [3, 1, 2], [3, 2, 0], [3, 3, 22], 
        [3, 4, 35], [3, 5, 48], [3, 6, 70], [3, 7, 32],
        [4, 0, 7], [4, 1, 1], [4, 2, 0], [4, 3, 25], 
        [4, 4, 32], [4, 5, 58], [4, 6, 80], [4, 7, 40],
        [5, 0, 15], [5, 1, 5], [5, 2, 8], [5, 3, 45], 
        [5, 4, 65], [5, 5, 85], [5, 6, 90], [5, 7, 70],
        [6, 0, 13], [6, 1, 6], [6, 2, 10], [6, 3, 50], 
        [6, 4, 70], [6, 5, 90], [6, 6, 85], [6, 7, 65]
      ],
      label: {
        show: false
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  };

  return (
    <PageContainer
      header={{
        title: '',
        ghost: true,
      }}
    >
      <Card>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
          <FundTwoTone style={{ fontSize: 28, marginRight: 12 }} />
          <Title level={3} style={{ margin: 0 }}>智星云课数据看板</Title>
        </div>
        
        <Paragraph>实时掌握平台运营数据，优化教学效果</Paragraph>
        
        <Divider />
        
        {/* 统计数字 */}
        <Row gutter={[24, 24]}>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card bordered={false}>
              <Statistic 
                title="总用户数" 
                value={stats.totalUsers} 
                prefix={<TeamOutlined style={{color: '#1890ff'}} />} 
                suffix={<span style={{fontSize: '14px', color: '#52c41a'}}><RiseOutlined /> {stats.growth.users}%</span>}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card bordered={false}>
              <Statistic 
                title="今日活跃用户" 
                value={stats.activeUsers} 
                prefix={<TeamOutlined style={{color: '#52c41a'}} />} 
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card bordered={false}>
              <Statistic 
                title="班级总数" 
                value={stats.totalClasses} 
                prefix={<TeamOutlined style={{color: '#722ed1'}} />} 
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card bordered={false}>
              <Statistic 
                title="帖子总数" 
                value={stats.totalPosts} 
                prefix={<FormOutlined style={{color: '#fa8c16'}} />}
                suffix={<span style={{fontSize: '14px', color: '#52c41a'}}><RiseOutlined /> {stats.growth.posts}%</span>} 
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card bordered={false}>
              <Statistic 
                title="课程总数" 
                value={stats.totalCourses} 
                prefix={<PlayCircleOutlined style={{color: '#eb2f96'}} />}
                suffix={<span style={{fontSize: '14px', color: '#f5222d'}}><FallOutlined /> {Math.abs(stats.growth.courses)}%</span>}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card bordered={false}>
              <Statistic 
                title="AI分身数量" 
                value={stats.aiAvatars} 
                prefix={<RobotOutlined style={{color: '#13c2c2'}} />} 
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card bordered={false}>
              <Statistic 
                title="单词库数量" 
                value={stats.totalWords} 
                prefix={<BookOutlined style={{color: '#52c41a'}} />} 
                suffix={<span style={{fontSize: '14px', color: '#52c41a'}}><RiseOutlined /> {stats.growth.words}%</span>}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card bordered={false}>
              <Statistic 
                title="美文数量" 
                value={stats.dailyArticles} 
                prefix={<FileTextOutlined style={{color: '#722ed1'}} />} 
              />
            </Card>
          </Col>
        </Row>
        
        <Divider />

        {/* 图表展示区 */}
        <Tabs defaultActiveKey="1" onChange={setActiveTab}>
          <TabPane tab="用户分析" key="1">
            <Row gutter={[24, 24]}>
              <Col span={24}>
                <Card 
                  title={<div style={{display: 'flex', alignItems: 'center'}}><TeamOutlined style={{marginRight: 8, color: '#1890ff'}} /> 用户活跃度趋势</div>} 
                  bordered={false}
                >
                  <ReactECharts option={userActivityOption} style={{ height: 400 }} />
                </Card>
              </Col>
            </Row>
            <Row gutter={[24, 24]} style={{marginTop: '24px'}}>
              <Col xs={24} md={12}>
                <Card 
                  title={<div style={{display: 'flex', alignItems: 'center'}}><TeamOutlined style={{marginRight: 8, color: '#52c41a'}} /> 本周活跃用户数据</div>} 
                  bordered={false}
                >
                  <Row gutter={[16, 16]}>
                    {weeklyActiveUsers.map((item, index) => (
                      <Col key={index} xs={12} sm={8} md={6} lg={3}>
                        <Card bordered={false}>
                          <Statistic title={item.day} value={item.count} />
                          <Progress 
                            percent={Math.round((item.count / 1500) * 100)} 
                            status="active" 
                            showInfo={false} 
                          />
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Card>
              </Col>
              <Col xs={24} md={12}>
                <Card 
                  title={<div style={{display: 'flex', alignItems: 'center'}}><TeamOutlined style={{marginRight: 8, color: '#722ed1'}} /> 学习时长分布</div>} 
                  bordered={false}
                >
                  <ReactECharts option={studyTimeOption} style={{ height: 300 }} />
                </Card>
              </Col>
            </Row>
            <Row gutter={[24, 24]} style={{marginTop: '24px'}}>
              <Col span={24}>
                <Card 
                  title={<div style={{display: 'flex', alignItems: 'center'}}><TeamOutlined style={{marginRight: 8, color: '#13c2c2'}} /> 周内学习时段分布</div>} 
                  bordered={false}
                >
                  <ReactECharts option={weekHeatmapOption} style={{ height: 400 }} />
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="课程分析" key="2">
            <Row gutter={[24, 24]}>
              <Col xs={24} md={12}>
                <Card 
                  title={<div style={{display: 'flex', alignItems: 'center'}}><PlayCircleOutlined style={{marginRight: 8, color: '#eb2f96'}} /> 课程完成率</div>} 
                  bordered={false}
                >
                  <ReactECharts option={courseCompletionOption} style={{ height: 400 }} />
                </Card>
              </Col>
              <Col xs={24} md={12}>
                <Card 
                  title={<div style={{display: 'flex', alignItems: 'center'}}><PlayCircleOutlined style={{marginRight: 8, color: '#faad14'}} /> 热门课程排行</div>} 
                  bordered={false}
                >
                  <Table 
                    dataSource={topCoursesData} 
                    columns={topCoursesColumns} 
                    pagination={false} 
                    size="middle"
                  />
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="班级分析" key="3">
            <Row gutter={[24, 24]}>
              <Col xs={24} md={12}>
                <Card 
                  title={<div style={{display: 'flex', alignItems: 'center'}}><TeamOutlined style={{marginRight: 8, color: '#1890ff'}} /> 班级活跃度排名</div>} 
                  bordered={false}
                >
                  <Table 
                    dataSource={topClassesData} 
                    columns={classColumns} 
                    pagination={false} 
                    size="middle"
                  />
                </Card>
              </Col>
              <Col xs={24} md={12}>
                <Card 
                  title={<div style={{display: 'flex', alignItems: 'center'}}><TeamOutlined style={{marginRight: 8, color: '#13c2c2'}} /> 学科分布分析</div>} 
                  bordered={false}
                >
                  <ReactECharts option={subjectDistributionOption} style={{ height: 400 }} />
                </Card>
              </Col>
            </Row>
            <Row gutter={[24, 24]} style={{marginTop: '24px'}}>
              <Col span={24}>
                <Card 
                  title={<div style={{display: 'flex', alignItems: 'center'}}><TeamOutlined style={{marginRight: 8, color: '#eb2f96'}} /> 学科成绩分布</div>} 
                  bordered={false}
                >
                  <ReactECharts option={subjectScoreOption} style={{ height: 400 }} />
                </Card>
              </Col>
            </Row>
          </TabPane>
        </Tabs>
      </Card>
    </PageContainer>
  );
};

export default DataPanel;
