# 智星云课管理系统前端

## 项目简介

智星云课管理系统是一个智能化教育平台的前端管理系统，基于React、Ant Design Pro和Umi框架开发。该系统提供了丰富的数据可视化功能，用于监控和分析教育平台的运营情况，包括用户活跃度、课程完成率、班级活跃度等关键指标，帮助教育机构实时掌握平台运营数据，优化教学效果。

## 技术栈

- **框架**: React 18, UmiJS 4.x, Ant Design Pro
- **UI组件库**: Ant Design 5.x
- **数据可视化**: ECharts 5.x
- **类型检查**: TypeScript 4.x
- **状态管理**: Umi Max内置状态管理
- **构建工具**: Max CLI (基于UmiJS)
- **样式解决方案**: Less, CSS-in-JS (Emotion)

## 功能模块

### 数据看板
- 统计概览：总用户数、活跃用户、班级总数、帖子总数、课程总数等关键指标
- 用户分析：用户活跃度趋势、周内学习时段分布热力图、学习时长分布
- 课程分析：课程完成率、热门课程排行
- 班级分析：班级活跃度排名、学科分布分析、学科成绩分布

### 用户管理
- 学生账户管理
- 教师账户管理
- 用户权限控制

### 课程管理
- 课程内容管理
- 课程章节管理
- 课程材料管理
- 课程评价管理

### 学习资源
- 单词库管理
- 每日美文管理
- AI分身助教管理

### 社区互动
- 帖子管理
- 点赞、收藏管理
- 互动数据分析

## 项目结构

```
src/
├── assets/             # 静态资源文件
├── components/         # 公共组件
├── constants/          # 常量定义
├── locales/            # 国际化资源
├── pages/              # 页面组件
│   ├── DataPanel.tsx   # 数据看板页面
│   ├── Welcome.tsx     # 欢迎页面
│   ├── Admin/          # 管理员相关页面
│   └── User/           # 用户相关页面
├── services/           # API服务
│   ├── backend/        # 后端API接口定义
│   └── swagger/        # Swagger生成的API
├── types/              # 类型定义
├── app.tsx             # 应用入口
├── global.less         # 全局样式
└── global.tsx          # 全局脚本
```

## 环境要求

- Node.js >= 12.0.0
- yarn 或 npm 或 pnpm 包管理器

## 安装与运行

### 安装依赖

```bash
# 使用yarn
yarn install

# 或使用npm
npm install

# 或使用pnpm
pnpm install
```

### 开发模式

```bash
# 开发环境启动
npm run start:dev

# 无mock数据启动
npm run start:no-mock

# 测试环境启动
npm run start:test

# 预发布环境启动
npm run start:pre
```

### 构建与部署

```bash
# 构建生产环境
npm run build

# 预览构建结果
npm run preview

# 分析构建结果
npm run analyze

# 部署到GitHub Pages
npm run deploy
```

## 代码规范

项目使用ESLint和Prettier进行代码格式化和质量检查：

```bash
# 代码检查
npm run lint

# 自动修复代码问题
npm run lint:fix

# 代码格式化
npm run prettier
```

## 数据可视化功能

系统集成了多种数据可视化图表：

- 折线图：展示用户活跃度趋势等时间序列数据
- 饼图/环形图：展示学习时长分布等比例数据
- 柱状图：展示课程完成率等对比数据
- 雷达图：展示学科学习情况等多维度评估
- 热力图：展示周内学习时段分布等热度数据
- 玫瑰图：展示学科成绩分布等极坐标数据

## 目前开发状态

项目正在积极开发中。主要数据看板功能已完成，其他管理功能正在实现中。

## 后端API接口

系统已集成以下后端API服务：

- 用户管理相关API
- 课程管理相关API
- 学习资源相关API
- AI分身助教相关API
- 社区互动相关API

## 贡献指南

1. Fork项目仓库
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送分支 (`git push origin feature/amazing-feature`)
5. 创建Pull Request





