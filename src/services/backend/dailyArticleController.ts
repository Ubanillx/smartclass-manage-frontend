// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addDailyArticle POST /api/daily-articles */
export async function addDailyArticleUsingPost(
  body: API.DailyArticleAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/daily-articles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getDailyArticleVOById GET /api/daily-articles/${param0} */
export async function getDailyArticleVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getDailyArticleVOByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseDailyArticleVO_>(`/api/daily-articles/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** updateDailyArticle PUT /api/daily-articles/${param0} */
export async function updateDailyArticleUsingPut(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateDailyArticleUsingPUTParams,
  body: API.DailyArticleUpdateRequest,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/daily-articles/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** deleteDailyArticle DELETE /api/daily-articles/${param0} */
export async function deleteDailyArticleUsingDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteDailyArticleUsingDELETEParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/daily-articles/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** listDailyArticleByPage GET /api/daily-articles/admin/page */
export async function listDailyArticleByPageUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listDailyArticleByPageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageDailyArticle_>('/api/daily-articles/admin/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listDailyArticleVOByPage GET /api/daily-articles/page */
export async function listDailyArticleVoByPageUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listDailyArticleVOByPageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageDailyArticleVO_>('/api/daily-articles/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** searchDailyArticle GET /api/daily-articles/search */
export async function searchDailyArticleUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.searchDailyArticleUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageDailyArticleVO_>('/api/daily-articles/search', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getTodayArticle GET /api/daily-articles/today */
export async function getTodayArticleUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseDailyArticleVO_>('/api/daily-articles/today', {
    method: 'GET',
    ...(options || {}),
  });
}
