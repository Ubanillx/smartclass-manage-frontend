// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addAiAvatar POST /api/ai-avatars */
export async function addAiAvatarUsingPost(
  body: API.AiAvatarAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/ai-avatars', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getAiAvatarById GET /api/ai-avatars/${param0} */
export async function getAiAvatarByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAiAvatarByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseAiAvatarVO_>(`/api/ai-avatars/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** updateAiAvatar PUT /api/ai-avatars/${param0} */
export async function updateAiAvatarUsingPut(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateAiAvatarUsingPUTParams,
  body: API.AiAvatarUpdateRequest,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/ai-avatars/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** deleteAiAvatar DELETE /api/ai-avatars/${param0} */
export async function deleteAiAvatarUsingDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteAiAvatarUsingDELETEParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/ai-avatars/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** listAiAvatar GET /api/ai-avatars/admin */
export async function listAiAvatarUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listAiAvatarUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListAiAvatarVO_>('/api/ai-avatars/admin', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listAiAvatarByPage GET /api/ai-avatars/page */
export async function listAiAvatarByPageUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listAiAvatarByPageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageAiAvatarVO_>('/api/ai-avatars/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
