// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addReply POST /api/user/feedback/reply/add */
export async function addReplyUsingPost(
  body: API.UserFeedbackReplyAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/user/feedback/reply/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listReplies GET /api/user/feedback/reply/list */
export async function listRepliesUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listRepliesUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListUserFeedbackReplyVO_>('/api/user/feedback/reply/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listReplyByPage POST /api/user/feedback/reply/list/page */
export async function listReplyByPageUsingPost(
  body: API.UserFeedbackReplyQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageUserFeedbackReplyVO_>('/api/user/feedback/reply/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** markAsRead POST /api/user/feedback/reply/read */
export async function markAsReadUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.markAsReadUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/user/feedback/reply/read', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
