// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** doArticleFavour POST /api/daily-articles/favourites/${param0} */
export async function doArticleFavourUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.doArticleFavourUsingPOSTParams,
  options?: { [key: string]: any },
) {
  const { articleId: param0, ...queryParams } = params;
  return request<API.BaseResponseInt_>(`/api/daily-articles/favourites/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** cancelArticleFavour DELETE /api/daily-articles/favourites/${param0} */
export async function cancelArticleFavourUsingDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.cancelArticleFavourUsingDELETEParams,
  options?: { [key: string]: any },
) {
  const { articleId: param0, ...queryParams } = params;
  return request<API.BaseResponseInt_>(`/api/daily-articles/favourites/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** isFavourArticle GET /api/daily-articles/favourites/${param0}/status */
export async function isFavourArticleUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.isFavourArticleUsingGETParams,
  options?: { [key: string]: any },
) {
  const { articleId: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/daily-articles/favourites/${param0}/status`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** listMyFavourArticleByPage GET /api/daily-articles/favourites/me/page */
export async function listMyFavourArticleByPageUsingGet(
  body: API.DailyArticleQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageDailyArticleVO_>('/api/daily-articles/favourites/me/page', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
