// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addUserFeedback POST /api/user/feedback/add */
export async function addUserFeedbackUsingPost(
  body: API.UserFeedbackAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/user/feedback/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteUserFeedback POST /api/user/feedback/delete */
export async function deleteUserFeedbackUsingPost(
  body: API.DeleteRequest1,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/user/feedback/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getUserFeedbackById GET /api/user/feedback/get */
export async function getUserFeedbackByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserFeedbackByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseUserFeedback_>('/api/user/feedback/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listUserFeedbackByPage POST /api/user/feedback/list/page */
export async function listUserFeedbackByPageUsingPost(
  body: API.UserFeedbackQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageUserFeedback_>('/api/user/feedback/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** processUserFeedback POST /api/user/feedback/process */
export async function processUserFeedbackUsingPost(
  body: API.UserFeedbackProcessRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/user/feedback/process', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** processAndReply POST /api/user/feedback/process/reply */
export async function processAndReplyUsingPost(
  body: API.UserFeedbackReplyAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/user/feedback/process/reply', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getUnreadCount GET /api/user/feedback/unread/count */
export async function getUnreadCountUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseLong_>('/api/user/feedback/unread/count', {
    method: 'GET',
    ...(options || {}),
  });
}

/** updateUserFeedback POST /api/user/feedback/update */
export async function updateUserFeedbackUsingPost(
  body: API.UserFeedbackUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/user/feedback/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
