// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addDailyWord POST /api/daily-words */
export async function addDailyWordUsingPost(
  body: API.DailyWordAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/daily-words', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getDailyWordVOById GET /api/daily-words/${param0} */
export async function getDailyWordVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getDailyWordVOByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseDailyWordVO_>(`/api/daily-words/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** deleteDailyWord DELETE /api/daily-words/${param0} */
export async function deleteDailyWordUsingDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteDailyWordUsingDELETEParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/daily-words/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** updateDailyWord PUT /api/daily-words/${param0}/admin */
export async function updateDailyWordUsingPut(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateDailyWordUsingPUTParams,
  body: API.DailyWordUpdateRequest,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/daily-words/${param0}/admin`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** listDailyWordByPage GET /api/daily-words/admin/page */
export async function listDailyWordByPageUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listDailyWordByPageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageDailyWord_>('/api/daily-words/admin/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listDailyWordVOByPage GET /api/daily-words/page */
export async function listDailyWordVoByPageUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listDailyWordVOByPageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageDailyWordVO_>('/api/daily-words/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** searchDailyWord GET /api/daily-words/search */
export async function searchDailyWordUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.searchDailyWordUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageDailyWordVO_>('/api/daily-words/search', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getTodayWord GET /api/daily-words/today */
export async function getTodayWordUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTodayWordUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseDailyWordVO_>('/api/daily-words/today', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
