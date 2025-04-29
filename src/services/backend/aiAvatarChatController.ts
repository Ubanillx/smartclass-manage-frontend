// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** getChatHistory GET /api/chat/history */
export async function getChatHistoryUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getChatHistoryUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListChatMessageVO_>('/api/chat/history', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** sendMessage POST /api/chat/message/send */
export async function sendMessageUsingPost(
  body: API.ChatMessageAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseChatMessageVO_>('/api/chat/message/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** stopStreamingResponse POST /api/chat/message/stop */
export async function stopStreamingResponseUsingPost(
  body: API.StopStreamingRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/chat/message/stop', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** sendMessageStream POST /api/chat/message/stream */
export async function sendMessageStreamUsingPost(
  body: API.ChatMessageAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.SseEmitter>('/api/chat/message/stream', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getUserChatMessages GET /api/chat/messages/list */
export async function getUserChatMessagesUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserChatMessagesUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListChatMessageVO_>('/api/chat/messages/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** createSession POST /api/chat/session/create */
export async function createSessionUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.createSessionUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseString_>('/api/chat/session/create', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** deleteSession POST /api/chat/session/delete */
export async function deleteSessionUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteSessionUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/chat/session/delete', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** updateSessionName POST /api/chat/session/update */
export async function updateSessionNameUsingPost(
  body: API.ChatSessionUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/chat/session/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getUserSessions GET /api/chat/sessions */
export async function getUserSessionsUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserSessionsUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListChatSessionVO_>('/api/chat/sessions', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getRecentSessions GET /api/chat/sessions/recent */
export async function getRecentSessionsUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getRecentSessionsUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListChatSessionVO_>('/api/chat/sessions/recent', {
    method: 'GET',
    params: {
      // limit has a default value: 10
      limit: '10',
      ...params,
    },
    ...(options || {}),
  });
}

/** getUserHistoryPage GET /api/chat/user/history */
export async function getUserHistoryPageUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserHistoryPageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageChatMessageVO_>('/api/chat/user/history', {
    method: 'GET',
    params: {
      // current has a default value: 1
      current: '1',
      // pageSize has a default value: 10
      pageSize: '10',
      ...params,
    },
    ...(options || {}),
  });
}
