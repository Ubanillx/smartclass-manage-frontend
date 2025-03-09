export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { path: '/user/login', component: './User/Login' },
      { path: '/user/register', component: './User/Register' },
    ],
  },

  { path: '/welcome', icon: 'fundTwoTone', component: './Welcome', name: '数据看板' },
  { path: '/admin/user', icon: 'userOutlined', component: './Admin/User', name: '用户管理' ,access: 'canAdmin' },
  { path: '/admin/chatManagement', icon: 'commentOutlined', component: './Admin/Chat', name: '聊天管理' ,access: 'canAdmin' },
  { path: '/admin/postManagement', icon: 'formOutlined', component: './Admin/Post', name: '帖子管理' ,access: 'canAdmin' },
  { path: '/admin/courseManagement', icon: 'playCircleOutlined', component: './Admin/Course', name: '课程管理' ,access: 'canAdmin' },

  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
