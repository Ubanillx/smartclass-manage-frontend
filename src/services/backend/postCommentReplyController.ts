// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addPostCommentReply POST /api/post-comment-replies */
export async function addPostCommentReplyUsingPost(
  body: API.PostCommentReplyAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/post-comment-replies', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getPostCommentReplyById GET /api/post-comment-replies/${param0} */
export async function getPostCommentReplyByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPostCommentReplyByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponsePostCommentReplyVO_>(`/api/post-comment-replies/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** deletePostCommentReply DELETE /api/post-comment-replies/${param0} */
export async function deletePostCommentReplyUsingDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deletePostCommentReplyUsingDELETEParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/post-comment-replies/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** adminDeletePostCommentReply DELETE /api/post-comment-replies/${param0}/admin */
export async function adminDeletePostCommentReplyUsingDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.adminDeletePostCommentReplyUsingDELETEParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/post-comment-replies/${param0}/admin`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** listPostCommentReplyByPage GET /api/post-comment-replies/page */
export async function listPostCommentReplyByPageUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listPostCommentReplyByPageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePagePostCommentReplyVO_>('/api/post-comment-replies/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
