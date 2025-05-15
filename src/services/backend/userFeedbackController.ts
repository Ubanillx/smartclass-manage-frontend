// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addUserFeedback POST /api/user-feedbacks */
export async function addUserFeedbackUsingPost(
  body: API.UserFeedbackAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/user-feedbacks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getUserFeedbackById GET /api/user-feedbacks/${param0} */
export async function getUserFeedbackByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserFeedbackByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseUserFeedback_>(`/api/user-feedbacks/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** updateUserFeedback PUT /api/user-feedbacks/${param0} */
export async function updateUserFeedbackUsingPut(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateUserFeedbackUsingPUTParams,
  body: API.UserFeedbackUpdateRequest,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/user-feedbacks/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** deleteUserFeedback DELETE /api/user-feedbacks/${param0} */
export async function deleteUserFeedbackUsingDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUserFeedbackUsingDELETEParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/user-feedbacks/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** processUserFeedback PUT /api/user-feedbacks/${param0}/process */
export async function processUserFeedbackUsingPut(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.processUserFeedbackUsingPUTParams,
  body: API.UserFeedbackProcessRequest,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/user-feedbacks/${param0}/process`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** processAndReply POST /api/user-feedbacks/${param0}/reply */
export async function processAndReplyUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.processAndReplyUsingPOSTParams,
  body: API.UserFeedbackReplyAddRequest,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseLong_>(`/api/user-feedbacks/${param0}/reply`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** listUserFeedbackByPage GET /api/user-feedbacks/page */
export async function listUserFeedbackByPageUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listUserFeedbackByPageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageUserFeedback_>('/api/user-feedbacks/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getUnreadCount GET /api/user-feedbacks/unread-count */
export async function getUnreadCountUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseLong_>('/api/user-feedbacks/unread-count', {
    method: 'GET',
    ...(options || {}),
  });
}
