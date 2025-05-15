// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** listReplies GET /api/user-feedback-replies */
export async function listRepliesUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listRepliesUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListUserFeedbackReplyVO_>('/api/user-feedback-replies', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** addReply POST /api/user-feedback-replies */
export async function addReplyUsingPost(
  body: API.UserFeedbackReplyAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/user-feedback-replies', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** markAsRead PUT /api/user-feedback-replies/${param0}/read */
export async function markAsReadUsingPut(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.markAsReadUsingPUTParams,
  options?: { [key: string]: any },
) {
  const { replyId: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/user-feedback-replies/${param0}/read`, {
    method: 'PUT',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** listReplyByPage GET /api/user-feedback-replies/page */
export async function listReplyByPageUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listReplyByPageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageUserFeedbackReplyVO_>('/api/user-feedback-replies/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
