// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** thumbArticle POST /api/daily-articles/${param0}/thumbs */
export async function thumbArticleUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.thumbArticleUsingPOSTParams,
  options?: { [key: string]: any },
) {
  const { articleId: param0, ...queryParams } = params;
  return request<API.BaseResponseInt_>(`/api/daily-articles/${param0}/thumbs`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** cancelArticleThumb DELETE /api/daily-articles/${param0}/thumbs */
export async function cancelArticleThumbUsingDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.cancelArticleThumbUsingDELETEParams,
  options?: { [key: string]: any },
) {
  const { articleId: param0, ...queryParams } = params;
  return request<API.BaseResponseInt_>(`/api/daily-articles/${param0}/thumbs`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** isThumbArticle GET /api/daily-articles/${param0}/thumbs/status */
export async function isThumbArticleUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.isThumbArticleUsingGETParams,
  options?: { [key: string]: any },
) {
  const { articleId: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/daily-articles/${param0}/thumbs/status`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** listMyThumbArticleByPage GET /api/daily-articles/thumbs/me/page */
export async function listMyThumbArticleByPageUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listMyThumbArticleByPageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageDailyArticleVO_>('/api/daily-articles/thumbs/me/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
