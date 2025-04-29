// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addUserLearningRecord POST /api/user/learning/record/add */
export async function addUserLearningRecordUsingPost(
  body: API.UserLearningRecordAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/user/learning/record/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteUserLearningRecord POST /api/user/learning/record/delete */
export async function deleteUserLearningRecordUsingPost(
  body: API.DeleteRequest1,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/user/learning/record/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getUserLearningRecordById GET /api/user/learning/record/get */
export async function getUserLearningRecordByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserLearningRecordByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseUserLearningRecordVO_>('/api/user/learning/record/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listUserLearningRecordByPage POST /api/user/learning/record/list/page */
export async function listUserLearningRecordByPageUsingPost(
  body: API.UserLearningRecordQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageUserLearningRecordVO_>('/api/user/learning/record/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listMyUserLearningRecordByPage POST /api/user/learning/record/my/list/page */
export async function listMyUserLearningRecordByPageUsingPost(
  body: API.UserLearningRecordQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageUserLearningRecordVO_>(
    '/api/user/learning/record/my/list/page',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** getMyLearningCountStats GET /api/user/learning/record/my/stats/count */
export async function getMyLearningCountStatsUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMyLearningCountStatsUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListMapStringObject_>('/api/user/learning/record/my/stats/count', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getMyDailyLearningStats GET /api/user/learning/record/my/stats/daily */
export async function getMyDailyLearningStatsUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMyDailyLearningStatsUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListMapStringObject_>('/api/user/learning/record/my/stats/daily', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getMyLearningDurationStats GET /api/user/learning/record/my/stats/duration */
export async function getMyLearningDurationStatsUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMyLearningDurationStatsUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListMapStringObject_>(
    '/api/user/learning/record/my/stats/duration',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** getMyPointsAndExperienceStats GET /api/user/learning/record/my/stats/points */
export async function getMyPointsAndExperienceStatsUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMyPointsAndExperienceStatsUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseMapStringObject_>('/api/user/learning/record/my/stats/points', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** recordCourseStudy POST /api/user/learning/record/record/course */
export async function recordCourseStudyUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.recordCourseStudyUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/user/learning/record/record/course', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** recordListeningPractice POST /api/user/learning/record/record/listening */
export async function recordListeningPracticeUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.recordListeningPracticeUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/user/learning/record/record/listening', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** recordReadingPractice POST /api/user/learning/record/record/reading */
export async function recordReadingPracticeUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.recordReadingPracticeUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/user/learning/record/record/reading', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** recordWordStudy POST /api/user/learning/record/record/word */
export async function recordWordStudyUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.recordWordStudyUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/user/learning/record/record/word', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** updateUserLearningRecord POST /api/user/learning/record/update */
export async function updateUserLearningRecordUsingPost(
  body: API.UserLearningRecordUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/user/learning/record/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
