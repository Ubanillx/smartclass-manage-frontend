// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addPostComment POST /api/post-comments */
export async function addPostCommentUsingPost(
  body: API.PostCommentAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/post-comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getPostCommentById GET /api/post-comments/${param0} */
export async function getPostCommentByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPostCommentByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponsePostCommentVO_>(`/api/post-comments/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** deletePostComment DELETE /api/post-comments/${param0} */
export async function deletePostCommentUsingDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deletePostCommentUsingDELETEParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/post-comments/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** adminDeletePostComment DELETE /api/post-comments/${param0}/admin */
export async function adminDeletePostCommentUsingDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.adminDeletePostCommentUsingDELETEParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/post-comments/${param0}/admin`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** listPostCommentByPage GET /api/post-comments/page */
export async function listPostCommentByPageUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listPostCommentByPageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePagePostCommentVO_>('/api/post-comments/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
