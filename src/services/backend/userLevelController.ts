// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addUserLevel POST /api/user/level/add */
export async function addUserLevelUsingPost(
  body: API.UserLevelAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/user/level/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getUserLevelByExperience GET /api/user/level/by-experience */
export async function getUserLevelByExperienceUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserLevelByExperienceUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseUserLevelVO_>('/api/user/level/by-experience', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** deleteUserLevel POST /api/user/level/delete */
export async function deleteUserLevelUsingPost(
  body: API.DeleteRequest1,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/user/level/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getUserLevelById GET /api/user/level/get */
export async function getUserLevelByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserLevelByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseUserLevel_>('/api/user/level/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getUserLevelVOById GET /api/user/level/get/vo */
export async function getUserLevelVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserLevelVOByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseUserLevelVO_>('/api/user/level/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getAllUserLevels GET /api/user/level/list */
export async function getAllUserLevelsUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseListUserLevelVO_>('/api/user/level/list', {
    method: 'GET',
    ...(options || {}),
  });
}

/** listUserLevelByPage POST /api/user/level/list/page */
export async function listUserLevelByPageUsingPost(
  body: API.UserLevelQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageUserLevel_>('/api/user/level/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listUserLevelVOByPage POST /api/user/level/list/page/vo */
export async function listUserLevelVoByPageUsingPost(
  body: API.UserLevelQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageUserLevelVO_>('/api/user/level/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getNextUserLevel GET /api/user/level/next */
export async function getNextUserLevelUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getNextUserLevelUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseUserLevelVO_>('/api/user/level/next', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** updateUserLevel POST /api/user/level/update */
export async function updateUserLevelUsingPost(
  body: API.UserLevelUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/user/level/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
