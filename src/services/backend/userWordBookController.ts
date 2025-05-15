// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** getUserWordBookList GET /api/word-books */
export async function getUserWordBookListUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserWordBookListUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListUserWordBookVO_>('/api/word-books', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** addToWordBook POST /api/word-books */
export async function addToWordBookUsingPost(
  body: API.UserWordBookAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/word-books', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** removeFromWordBook DELETE /api/word-books/${param0} */
export async function removeFromWordBookUsingDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.removeFromWordBookUsingDELETEParams,
  options?: { [key: string]: any },
) {
  const { wordId: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/word-books/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** updateDifficulty PUT /api/word-books/${param0}/difficulty */
export async function updateDifficultyUsingPut(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateDifficultyUsingPUTParams,
  body: API.UserWordBookUpdateDifficultyRequest,
  options?: { [key: string]: any },
) {
  const { wordId: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/word-books/${param0}/difficulty`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** isWordInUserBook GET /api/word-books/${param0}/exists */
export async function isWordInUserBookUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.isWordInUserBookUsingGETParams,
  options?: { [key: string]: any },
) {
  const { wordId: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/word-books/${param0}/exists`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** updateLearningStatus PUT /api/word-books/${param0}/status */
export async function updateLearningStatusUsingPut(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateLearningStatusUsingPUTParams,
  body: API.UserWordBookUpdateStatusRequest,
  options?: { [key: string]: any },
) {
  const { wordId: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/word-books/${param0}/status`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** listUserWordBookByPage GET /api/word-books/page */
export async function listUserWordBookByPageUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listUserWordBookByPageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageUserWordBookVO_>('/api/word-books/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getUserWordBookStatistics GET /api/word-books/statistics */
export async function getUserWordBookStatisticsUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseArrayInt_>('/api/word-books/statistics', {
    method: 'GET',
    ...(options || {}),
  });
}
