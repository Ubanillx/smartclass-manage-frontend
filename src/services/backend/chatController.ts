// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** connect GET /api/private-chat/connect */
export async function connectUsingGet(options?: { [key: string]: any }) {
  return request<API.SseEmitter>('/api/private-chat/connect', {
    method: 'GET',
    ...(options || {}),
  });
}

/** disconnect POST /api/private-chat/disconnect */
export async function disconnectUsingPost(options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean_>('/api/private-chat/disconnect', {
    method: 'POST',
    ...(options || {}),
  });
}

/** markMessageAsRead POST /api/private-chat/messages/${param0}/read */
export async function markMessageAsReadUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.markMessageAsReadUsingPOSTParams,
  options?: { [key: string]: any },
) {
  const { messageId: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/private-chat/messages/${param0}/read`, {
    method: 'POST',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** markMessagesAsRead POST /api/private-chat/messages/batch/read */
export async function markMessagesAsReadUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.markMessagesAsReadUsingPOSTParams,
  body: number[],
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/private-chat/messages/batch/read', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}

/** markAllMessagesAsRead POST /api/private-chat/messages/read/all */
export async function markAllMessagesAsReadUsingPost(options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean_>('/api/private-chat/messages/read/all', {
    method: 'POST',
    ...(options || {}),
  });
}

/** sendSystemNotification POST /api/private-chat/notify */
export async function sendSystemNotificationUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.sendSystemNotificationUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/private-chat/notify', {
    method: 'POST',
    params: {
      ...params,
      data: undefined,
      ...params['data'],
    },
    ...(options || {}),
  });
}

/** sendMessage POST /api/private-chat/send */
export async function sendMessageUsingPost1(
  body: API.PrivateMessageAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/private-chat/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** createSession POST /api/private-chat/sessions */
export async function createSessionUsingPost1(
  body: API.PrivateChatSessionAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/private-chat/sessions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listSessionMessages GET /api/private-chat/sessions/${param0}/messages */
export async function listSessionMessagesUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listSessionMessagesUsingGETParams,
  options?: { [key: string]: any },
) {
  const { sessionId: param0, ...queryParams } = params;
  return request<API.BaseResponsePagePrivateMessageVO_>(
    `/api/private-chat/sessions/${param0}/messages`,
    {
      method: 'GET',
      params: {
        // current has a default value: 1
        current: '1',
        // size has a default value: 20
        size: '20',
        ...queryParams,
      },
      ...(options || {}),
    },
  );
}

/** markSessionMessagesAsRead POST /api/private-chat/sessions/${param0}/read/all */
export async function markSessionMessagesAsReadUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.markSessionMessagesAsReadUsingPOSTParams,
  options?: { [key: string]: any },
) {
  const { sessionId: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/private-chat/sessions/${param0}/read/all`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** getSessionUnreadCount GET /api/private-chat/sessions/${param0}/unread/count */
export async function getSessionUnreadCountUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSessionUnreadCountUsingGETParams,
  options?: { [key: string]: any },
) {
  const { sessionId: param0, ...queryParams } = params;
  return request<API.BaseResponseInt_>(`/api/private-chat/sessions/${param0}/unread/count`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** listUserSessions GET /api/private-chat/sessions/list */
export async function listUserSessionsUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listUserSessionsUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListPrivateChatSessionVO_>('/api/private-chat/sessions/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getSessionWithUser GET /api/private-chat/sessions/users/${param0} */
export async function getSessionWithUserUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSessionWithUserUsingGETParams,
  options?: { [key: string]: any },
) {
  const { targetUserId: param0, ...queryParams } = params;
  return request<API.BaseResponsePrivateChatSessionVO_>(
    `/api/private-chat/sessions/users/${param0}`,
    {
      method: 'GET',
      params: { ...queryParams },
      ...(options || {}),
    },
  );
}

/** getChatStatus GET /api/private-chat/status */
export async function getChatStatusUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseMapStringObject_>('/api/private-chat/status', {
    method: 'GET',
    ...(options || {}),
  });
}

/** getTotalUnreadCount GET /api/private-chat/unread/count */
export async function getTotalUnreadCountUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseInt_>('/api/private-chat/unread/count', {
    method: 'GET',
    ...(options || {}),
  });
}
