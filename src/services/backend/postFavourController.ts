// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addFavour POST /api/post-favours */
export async function addFavourUsingPost(
  body: API.PostFavourAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/post-favours', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** hasFavour GET /api/post-favours/${param0} */
export async function hasFavourUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.hasFavourUsingGETParams,
  options?: { [key: string]: any },
) {
  const { postId: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/post-favours/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** cancelFavour DELETE /api/post-favours/${param0} */
export async function cancelFavourUsingDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.cancelFavourUsingDELETEParams,
  options?: { [key: string]: any },
) {
  const { postId: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/post-favours/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** listMyFavourPostByPage GET /api/post-favours/me/page */
export async function listMyFavourPostByPageUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listMyFavourPostByPageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePagePostVO_>('/api/post-favours/me/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
