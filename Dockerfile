# 构建阶段
FROM node:18.17-alpine as builder

# 设置工作目录
WORKDIR /app

# 复制项目依赖文件
COPY package.json ./
COPY *.lock* ./
COPY pnpm-lock.yaml* ./

# 安装依赖
RUN npm install

# 复制所有文件

COPY . .

# 构建应用
RUN npm run build

FROM nginx:1.25-alpine

# 复制构建产物到Nginx服务目录
COPY --from=builder /app/dist /usr/share/nginx/html

# 复制Nginx配置
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 清理缓存减小镜像体积
RUN rm -rf /var/cache/apk/* && \
    rm -rf /tmp/*

# 暴露端口
EXPOSE 80

# 启动Nginx
CMD ["nginx", "-g", "daemon off;"] 