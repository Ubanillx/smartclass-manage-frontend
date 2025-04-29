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
  { path: '/admin/courseManagement', icon: 'playCircleOutlined', component: './Admin/Course', name: '课程管理' ,access: 'canAdmin' },
  { path: '/admin/aiAvatarManagement', icon: 'robotOutlined', component: './Admin/AiAvatar', name: 'AI分身管理' ,access: 'canAdmin' },
  { path: '/admin/dailyWordManagement', icon: 'bookOutlined', component: './Admin/DailyWord', name: '每日单词管理' ,access: 'canAdmin' },
  { path: '/admin/dailyArticleManagement', icon: 'fileTextOutlined', component: './Admin/DailyArticle', name: '每日美文管理' ,access: 'canAdmin' },

  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
