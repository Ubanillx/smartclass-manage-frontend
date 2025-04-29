// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addToWordBook POST /api/wordBook/add */
export async function addToWordBookUsingPost(
  body: API.UserWordBookAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/wordBook/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateCollectionStatus POST /api/wordBook/collect */
export async function updateCollectionStatusUsingPost(
  body: API.UserWordBookCollectionRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/wordBook/collect', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** isWordInUserBook GET /api/wordBook/isInBook */
export async function isWordInUserBookUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.isWordInUserBookUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/wordBook/isInBook', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getUserWordBookList GET /api/wordBook/list */
export async function getUserWordBookListUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserWordBookListUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListUserWordBookVO_>('/api/wordBook/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listUserWordBookByPage POST /api/wordBook/list/page */
export async function listUserWordBookByPageUsingPost(
  body: API.UserWordBookQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageUserWordBookVO_>('/api/wordBook/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** removeFromWordBook POST /api/wordBook/remove */
export async function removeFromWordBookUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.removeFromWordBookUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/wordBook/remove', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getUserWordBookStatistics GET /api/wordBook/statistics */
export async function getUserWordBookStatisticsUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseArrayInt_>('/api/wordBook/statistics', {
    method: 'GET',
    ...(options || {}),
  });
}

/** updateDifficulty POST /api/wordBook/updateDifficulty */
export async function updateDifficultyUsingPost(
  body: API.UserWordBookUpdateDifficultyRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/wordBook/updateDifficulty', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateLearningStatus POST /api/wordBook/updateStatus */
export async function updateLearningStatusUsingPost(
  body: API.UserWordBookUpdateStatusRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/wordBook/updateStatus', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
