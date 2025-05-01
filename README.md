# 智星云课管理系统前端

## 项目简介

智星云课管理系统是一个智能化教育平台的前端管理系统，基于React、Ant Design Pro和Umi框架开发。该系统提供了丰富的数据可视化功能，用于监控和分析教育平台的运营情况，包括用户活跃度、课程完成率、班级活跃度等关键指标，帮助教育机构实时掌握平台运营数据，优化教学效果。

作为一个完整的教育管理平台，智星云课系统整合了课程管理、用户管理、学习资源管理和社区互动等多个功能模块，为教育机构提供一站式数字化解决方案。系统采用现代化前端架构，支持响应式设计，确保在各种设备上都能提供良好的用户体验。

平台的数据分析功能深度整合了ECharts图表库，实现了多维度的数据可视化展示，帮助教育管理者从宏观和微观两个层面理解平台运营状况。系统还支持国际化，可根据需求切换中英文界面，满足不同地区用户的需求。

智星云课前端管理系统采用模块化的设计理念，各功能模块高度解耦，便于维护和扩展。系统使用TypeScript进行开发，提供了类型安全保障，有效减少开发过程中的错误。前端与后端通过RESTful API进行通信，支持OpenAPI规范，便于接口管理和文档生成。

## 技术栈

- **框架**: React 18, UmiJS 4.x, Ant Design Pro
- **UI组件库**: Ant Design 5.x
- **数据可视化**: ECharts 5.x
- **类型检查**: TypeScript 4.x
- **状态管理**: Umi Max内置状态管理
- **构建工具**: Max CLI (基于UmiJS)
- **样式解决方案**: Less, CSS-in-JS (Emotion)
- **网络请求**: Axios, useRequest
- **国际化**: i18n
- **测试工具**: Jest
- **代码规范**: ESLint, Prettier
- **文档生成**: OpenAPI

## 系统特点

- **响应式设计**: 适配各种屏幕尺寸，提供一致的用户体验
- **模块化架构**: 功能模块高度解耦，便于维护和扩展
- **数据驱动**: 丰富的数据可视化展示，支持实时监控和分析
- **权限管理**: 细粒度的权限控制系统，保障数据安全
- **主题定制**: 支持明暗主题切换，可自定义主题色彩
- **国际化**: 支持中英文界面切换，满足不同地区用户需求
- **Mock数据**: 内置Mock数据服务，支持离线开发和测试
- **性能优化**: 路由级代码分割、图片懒加载、组件按需加载
- **SEO友好**: 预渲染和服务端渲染支持，提升搜索引擎索引效率
- **容器化部署**: 提供Docker配置，支持容器化部署

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

- Node.js >= 18.0.0
- yarn 包管理器

## 安装与运行

### 安装依赖

```bash
# 使用yarn
yarn install
```

### 开发模式

```bash
# 开发环境启动
yarn start:dev

# 无mock数据启动
yarn start:no-mock

# 测试环境启动
yarn start:test

# 预发布环境启动
yarn start:pre
```

### 构建与部署

```bash
# 构建生产环境
yarn build

# 预览构建结果
yarn preview

# 分析构建结果
yarn analyze
```

## Docker部署

项目已配置Docker相关文件，支持容器化部署。

### 文件说明

- `Dockerfile`: 用于构建前端应用的Docker镜像，基于Node.js 18和Nginx
- `nginx.conf`: Nginx配置文件，用于静态文件服务和API代理
- `docker-compose.yml`: Docker Compose配置文件，包含前端和后端服务
- `docker-compose.frontend-only.yml`: 仅包含前端服务的Docker Compose配置文件
- `.dockerignore`: 排除不需要复制到Docker镜像中的文件

### 部署方式

#### 方式一：完整部署（前端+后端）

如果你已经有了后端服务的Docker镜像，可以使用此方式部署：

```bash
# 启动服务
docker-compose up -d

# 查看日志
docker-compose logs -f
```

注意：需要先确保后端服务的Docker镜像已经构建好，并且修改`docker-compose.yml`中的`api`服务配置。

#### 方式二：仅部署前端

如果你只想部署前端服务，可以使用此方式：

```bash
# 启动服务
docker-compose -f docker-compose.frontend-only.yml up -d

# 查看日志
docker-compose -f docker-compose.frontend-only.yml logs -f
```

注意：需要修改`docker-compose.frontend-only.yml`中的`API_URL`环境变量，指向真实的后端API地址。

### 自定义Docker配置

#### 修改API地址

在`docker-compose.yml`或`docker-compose.frontend-only.yml`中修改`API_URL`环境变量：

```yaml
environment:
  - API_URL=http://你的后端地址:端口
```

#### 修改端口映射

默认前端服务映射到主机的80端口，如需修改，请在docker-compose文件中更改：

```yaml
ports:
  - "新端口:80"
```

## 代码规范

项目使用ESLint和Prettier进行代码格式化和质量检查：

```bash
# 代码检查
yarn lint

# 自动修复代码问题
yarn lint:fix

# 代码格式化
yarn prettier
```

## 数据可视化功能

系统集成了多种数据可视化图表：

- 折线图：展示用户活跃度趋势等时间序列数据
- 饼图/环形图：展示学习时长分布等比例数据
- 柱状图：展示课程完成率等对比数据
- 雷达图：展示学科学习情况等多维度评估
- 热力图：展示周内学习时段分布等热度数据
- 玫瑰图：展示学科成绩分布等极坐标数据

## 后端API接口

系统默认后端API服务地址为：http://10.16.62.100:12345

## 常见问题

1. 如果遇到API请求代理问题，请检查`config/proxy.ts`和Docker环境下的`nginx.conf`中的代理配置
2. 如果构建失败，请检查Node.js版本(>=18)和yarn版本是否兼容
3. 如果开发模式下没有数据，请检查后端服务是否正常运行

## 贡献指南

1. Fork项目仓库
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送分支 (`git push origin feature/amazing-feature`)
5. 创建Pull Request