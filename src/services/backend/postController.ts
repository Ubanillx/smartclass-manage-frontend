// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addPost POST /api/posts */
export async function addPostUsingPost(body: API.PostAddRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseLong_>('/api/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getPostVOById GET /api/posts/${param0} */
export async function getPostVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPostVOByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponsePostVO_>(`/api/posts/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** editPost PUT /api/posts/${param0} */
export async function editPostUsingPut(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.editPostUsingPUTParams,
  body: API.PostEditRequest,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/posts/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** deletePost DELETE /api/posts/${param0} */
export async function deletePostUsingDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deletePostUsingDELETEParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/posts/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** updatePost PUT /api/posts/${param0}/admin */
export async function updatePostUsingPut(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updatePostUsingPUTParams,
  body: API.PostUpdateRequest,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/posts/${param0}/admin`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** listPostByPage GET /api/posts/admin/page */
export async function listPostByPageUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listPostByPageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePagePost_>('/api/posts/admin/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listMyPostVOByPage GET /api/posts/me/page */
export async function listMyPostVoByPageUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listMyPostVOByPageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePagePostVO_>('/api/posts/me/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listPostVOByPage GET /api/posts/page */
export async function listPostVoByPageUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listPostVOByPageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePagePostVO_>('/api/posts/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** searchPostVOByPage GET /api/posts/search/page */
export async function searchPostVoByPageUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.searchPostVOByPageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePagePostVO_>('/api/posts/search/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
