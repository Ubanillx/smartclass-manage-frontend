// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 导出Postman Collection 生成可导入Postman的接口文档，包含REST和WebSocket接口 GET /api/postman-collections */
export async function generatePostmanCollectionUsingGet(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/postman-collections', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 动态生成Postman Collection 实时生成最新的Postman Collection文件，包含最新的REST和WebSocket接口 GET /api/postman-collections/dynamic */
export async function generateDynamicPostmanCollectionUsingGet(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/postman-collections/dynamic', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取服务器信息 返回服务器Host、Port等信息，用于Postman配置 GET /api/postman-collections/server */
export async function getServerInfoUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseMapStringString_>('/api/postman-collections/server', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取WebSocket接口列表 返回所有注册的WebSocket消息类型及其接口定义 GET /api/postman-collections/websocket-endpoints */
export async function listWebSocketEndpointsUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseListMapStringObject_>(
    '/api/postman-collections/websocket-endpoints',
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}
