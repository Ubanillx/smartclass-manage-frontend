export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { path: '/user/login', component: './User/Login' },
      { path: '/user/register', component: './User/Register' },
    ],
  },

  { path: '/welcome', icon: 'smileOutlined', component: './Welcome', name: '欢迎' },
  { path: '/datapanel', icon: 'fundTwoTone', component: './DataPanel', name: '数据看板' },
  { path: '/admin/user', icon: 'userOutlined', component: './Admin/User', name: '用户管理' ,access: 'canAdmin' },
  { path: '/admin/classManagement', icon: 'teamOutlined', component: './Admin/Class', name: '班级管理' ,access: 'canAdmin' },
  { path: '/admin/postManagement', icon: 'formOutlined', component: './Admin/Post', name: '帖子管理' ,access: 'canAdmin' },
  { path: '/admin/postDetail/:id', component: './Admin/Post/Detail', name: '帖子详情', hideInMenu: true, access: 'canAdmin' },
  { path: '/admin/courseManagement', icon: 'playCircleOutlined', component: './Admin/Course', name: '课程管理' ,access: 'canAdmin' },
  {
    path: '/admin/aiAvatarManagement',
    icon: 'robotOutlined',
    name: 'AI分身管理',
    access: 'canAdmin',
    routes: [
      { path: '/admin/aiAvatarManagement', component: './Admin/AiAvatar', name: 'AI分身列表' },
      { path: '/admin/aiAvatarManagement/statistics', component: './Admin/AiAvatar/Statistics', name: '使用统计' },
    ],
  },
  {
    path: '/admin/dailyWord',
    icon: 'bookOutlined',
    name: '每日单词管理',
    access: 'canAdmin',
    routes: [
      { path: '/admin/dailyWord', component: './Admin/DailyWord', name: '单词列表' },
      { path: '/admin/dailyWord/import', component: './Admin/DailyWord/Import', name: '批量导入' },
    ],
  },
  {
    path: '/admin/dailyArticleManagement',
    icon: 'fileTextOutlined',
    name: '每日美文管理',
    access: 'canAdmin',
    routes: [
      { path: '/admin/dailyArticleManagement', component: './Admin/DailyArticle', name: '美文管理' },
      { path: '/admin/dailyArticleManagement/view', component: './DailyArticle', name: '美文展示' },
      { path: '/admin/dailyArticleManagement/detail/:id', component: './DailyArticle/detail', name: '文章详情', hideInMenu: true },
    ],
  },
  { path: '/admin/feedbackManagement', icon: 'commentOutlined', component: './Admin/Feedback', name: '用户反馈管理' ,access: 'canAdmin' },

  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
