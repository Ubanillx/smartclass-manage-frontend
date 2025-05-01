# 构建阶段
FROM node:18-alpine as builder

# 设置工作目录
WORKDIR /app

# 复制项目依赖文件
COPY package.json ./
COPY *.lock* ./
COPY pnpm-lock.yaml* ./

# 安装依赖
RUN if [ -f yarn.lock ]; then \
        npm install -g yarn && yarn install; \
    elif [ -f pnpm-lock.yaml ]; then \
        npm install -g pnpm && pnpm install; \
    else \
        npm install; \
    fi

# 复制所有文件
COPY . .

# 构建应用
RUN if [ -f yarn.lock ]; then \
        yarn build; \
    elif [ -f pnpm-lock.yaml ]; then \
        pnpm build; \
    else \
        npm run build; \
    fi

# 生产阶段
FROM nginx:alpine

# 复制构建产物到Nginx服务目录
COPY --from=builder /app/dist /usr/share/nginx/html

# 复制Nginx配置
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露端口
EXPOSE 80

# 启动Nginx
CMD ["nginx", "-g", "daemon off;"] 