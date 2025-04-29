// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** doArticleFavour POST /api/dailyArticle/favour/${param0} */
export async function doArticleFavourUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.doArticleFavourUsingPOSTParams,
  options?: { [key: string]: any },
) {
  const { articleId: param0, ...queryParams } = params;
  return request<API.BaseResponseInt_>(`/api/dailyArticle/favour/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** isFavourArticle GET /api/dailyArticle/favour/check/${param0} */
export async function isFavourArticleUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.isFavourArticleUsingGETParams,
  options?: { [key: string]: any },
) {
  const { articleId: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/dailyArticle/favour/check/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** listMyFavourArticleByPage POST /api/dailyArticle/favour/list/page/my */
export async function listMyFavourArticleByPageUsingPost(
  body: API.DailyArticleQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageDailyArticleVO_>('/api/dailyArticle/favour/list/page/my', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
