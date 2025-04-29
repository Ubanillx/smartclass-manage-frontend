// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** doWordThumb POST /api/daily/word/thumb/${param0} */
export async function doWordThumbUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.doWordThumbUsingPOSTParams,
  options?: { [key: string]: any },
) {
  const { wordId: param0, ...queryParams } = params;
  return request<API.BaseResponseInt_>(`/api/daily/word/thumb/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** isThumbWord GET /api/daily/word/thumb/is-thumb/${param0} */
export async function isThumbWordUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.isThumbWordUsingGETParams,
  options?: { [key: string]: any },
) {
  const { wordId: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/daily/word/thumb/is-thumb/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}
