// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addDailyWord POST /api/dailyWord/add */
export async function addDailyWordUsingPost(
  body: API.DailyWordAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/dailyWord/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteDailyWord POST /api/dailyWord/delete */
export async function deleteDailyWordUsingPost(
  body: API.DeleteRequest1,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/dailyWord/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** testEsIndex GET /api/dailyWord/es/test */
export async function testEsIndexUsingGet1(options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean_>('/api/dailyWord/es/test', {
    method: 'GET',
    ...(options || {}),
  });
}

/** getDailyWordVOById GET /api/dailyWord/get/vo */
export async function getDailyWordVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getDailyWordVOByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseDailyWordVO_>('/api/dailyWord/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listDailyWordByPage POST /api/dailyWord/list/page */
export async function listDailyWordByPageUsingPost(
  body: API.DailyWordQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageDailyWord_>('/api/dailyWord/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listDailyWordVOByPage POST /api/dailyWord/list/page/vo */
export async function listDailyWordVoByPageUsingPost(
  body: API.DailyWordQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageDailyWordVO_>('/api/dailyWord/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getRandomWord GET /api/dailyWord/random */
export async function getRandomWordUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getRandomWordUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseDailyWordVO_>('/api/dailyWord/random', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** searchDailyWord POST /api/dailyWord/search/es */
export async function searchDailyWordUsingPost(
  body: API.DailyWordQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageDailyWordVO_>('/api/dailyWord/search/es', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getTodayWord GET /api/dailyWord/today */
export async function getTodayWordUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseDailyWordVO_>('/api/dailyWord/today', {
    method: 'GET',
    ...(options || {}),
  });
}

/** updateDailyWord POST /api/dailyWord/update */
export async function updateDailyWordUsingPost(
  body: API.DailyWordUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/dailyWord/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
