// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addThumb POST /api/post-thumbs */
export async function addThumbUsingPost(
  body: API.PostThumbAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/post-thumbs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** hasThumb GET /api/post-thumbs/${param0} */
export async function hasThumbUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.hasThumbUsingGETParams,
  options?: { [key: string]: any },
) {
  const { postId: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/post-thumbs/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** cancelThumb DELETE /api/post-thumbs/${param0} */
export async function cancelThumbUsingDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.cancelThumbUsingDELETEParams,
  options?: { [key: string]: any },
) {
  const { postId: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/post-thumbs/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
