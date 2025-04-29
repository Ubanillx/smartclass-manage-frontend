// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addDailyArticle POST /api/dailyArticle/add */
export async function addDailyArticleUsingPost(
  body: API.DailyArticleAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/dailyArticle/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteDailyArticle POST /api/dailyArticle/delete */
export async function deleteDailyArticleUsingPost(
  body: API.DeleteRequest1,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/dailyArticle/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** testEsIndex GET /api/dailyArticle/es/test */
export async function testEsIndexUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean_>('/api/dailyArticle/es/test', {
    method: 'GET',
    ...(options || {}),
  });
}

/** getDailyArticleVOById GET /api/dailyArticle/get/vo */
export async function getDailyArticleVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getDailyArticleVOByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseDailyArticleVO_>('/api/dailyArticle/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listDailyArticleByPage POST /api/dailyArticle/list/page */
export async function listDailyArticleByPageUsingPost(
  body: API.DailyArticleQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageDailyArticle_>('/api/dailyArticle/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listDailyArticleVOByPage POST /api/dailyArticle/list/page/vo */
export async function listDailyArticleVoByPageUsingPost(
  body: API.DailyArticleQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageDailyArticleVO_>('/api/dailyArticle/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** searchDailyArticle POST /api/dailyArticle/search/es */
export async function searchDailyArticleUsingPost(
  body: API.DailyArticleQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageDailyArticleVO_>('/api/dailyArticle/search/es', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getTodayArticle GET /api/dailyArticle/today */
export async function getTodayArticleUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseDailyArticleVO_>('/api/dailyArticle/today', {
    method: 'GET',
    ...(options || {}),
  });
}

/** updateDailyArticle POST /api/dailyArticle/update */
export async function updateDailyArticleUsingPost(
  body: API.DailyArticleUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/dailyArticle/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
