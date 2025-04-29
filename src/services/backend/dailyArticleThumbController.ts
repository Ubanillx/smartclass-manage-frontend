// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** doArticleThumb POST /api/daily/article/thumb/${param0} */
export async function doArticleThumbUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.doArticleThumbUsingPOSTParams,
  options?: { [key: string]: any },
) {
  const { articleId: param0, ...queryParams } = params;
  return request<API.BaseResponseInt_>(`/api/daily/article/thumb/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** isThumbArticle GET /api/daily/article/thumb/is-thumb/${param0} */
export async function isThumbArticleUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.isThumbArticleUsingGETParams,
  options?: { [key: string]: any },
) {
  const { articleId: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/daily/article/thumb/is-thumb/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}
