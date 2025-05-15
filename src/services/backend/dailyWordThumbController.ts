// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** thumbWord POST /api/daily-word-thumbs/${param0} */
export async function thumbWordUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.thumbWordUsingPOSTParams,
  options?: { [key: string]: any },
) {
  const { wordId: param0, ...queryParams } = params;
  return request<API.BaseResponseInt_>(`/api/daily-word-thumbs/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** cancelThumbWord DELETE /api/daily-word-thumbs/${param0} */
export async function cancelThumbWordUsingDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.cancelThumbWordUsingDELETEParams,
  options?: { [key: string]: any },
) {
  const { wordId: param0, ...queryParams } = params;
  return request<API.BaseResponseInt_>(`/api/daily-word-thumbs/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** isThumbWord GET /api/daily-word-thumbs/${param0}/status */
export async function isThumbWordUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.isThumbWordUsingGETParams,
  options?: { [key: string]: any },
) {
  const { wordId: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/daily-word-thumbs/${param0}/status`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}
