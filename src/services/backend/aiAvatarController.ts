// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addAiAvatar POST /api/ai_avatar/add */
export async function addAiAvatarUsingPost(
  body: API.AiAvatarAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/ai_avatar/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteAiAvatar POST /api/ai_avatar/delete */
export async function deleteAiAvatarUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/ai_avatar/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getAiAvatarById GET /api/ai_avatar/get */
export async function getAiAvatarByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAiAvatarByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseAiAvatarVO_>('/api/ai_avatar/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listAiAvatar GET /api/ai_avatar/list */
export async function listAiAvatarUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listAiAvatarUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListAiAvatarVO_>('/api/ai_avatar/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listAiAvatarByPage GET /api/ai_avatar/list/page */
export async function listAiAvatarByPageUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listAiAvatarByPageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageAiAvatarVO_>('/api/ai_avatar/list/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** updateAiAvatar POST /api/ai_avatar/update */
export async function updateAiAvatarUsingPost(
  body: API.AiAvatarUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/ai_avatar/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
