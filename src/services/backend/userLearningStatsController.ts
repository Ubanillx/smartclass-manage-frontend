// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addUserBadgeByAdmin POST /api/user/stats/admin/add/badge */
export async function addUserBadgeByAdminUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.addUserBadgeByAdminUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/user/stats/admin/add/badge', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** addUserExperienceByAdmin POST /api/user/stats/admin/add/experience */
export async function addUserExperienceByAdminUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.addUserExperienceByAdminUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/user/stats/admin/add/experience', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** addUserPointsByAdmin POST /api/user/stats/admin/add/points */
export async function addUserPointsByAdminUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.addUserPointsByAdminUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/user/stats/admin/add/points', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** initUserLearningStatsByAdmin POST /api/user/stats/admin/init */
export async function initUserLearningStatsByAdminUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.initUserLearningStatsByAdminUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/user/stats/admin/init', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** updateUserLevelByAdmin POST /api/user/stats/admin/update/level */
export async function updateUserLevelByAdminUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateUserLevelByAdminUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/user/stats/admin/update/level', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getUserLearningStatsByAdmin GET /api/user/stats/admin/user */
export async function getUserLearningStatsByAdminUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserLearningStatsByAdminUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseUserLearningStats_>('/api/user/stats/admin/user', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** userCheckIn POST /api/user/stats/check-in */
export async function userCheckInUsingPost(options?: { [key: string]: any }) {
  return request<API.BaseResponseMapStringObject_>('/api/user/stats/check-in', {
    method: 'POST',
    ...(options || {}),
  });
}

/** getMyLearningStats GET /api/user/stats/my */
export async function getMyLearningStatsUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseUserLearningStats_>('/api/user/stats/my', {
    method: 'GET',
    ...(options || {}),
  });
}

/** updateLearningDay POST /api/user/stats/update/learning-day */
export async function updateLearningDayUsingPost(options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean_>('/api/user/stats/update/learning-day', {
    method: 'POST',
    ...(options || {}),
  });
}
