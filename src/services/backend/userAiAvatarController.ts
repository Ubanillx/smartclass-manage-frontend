// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addUserAiAvatar POST /api/user_ai_avatar/add */
export async function addUserAiAvatarUsingPost(
  body: API.UserAiAvatarAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/user_ai_avatar/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteUserAiAvatar POST /api/user_ai_avatar/delete */
export async function deleteUserAiAvatarUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/user_ai_avatar/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** favoriteAiAvatar POST /api/user_ai_avatar/favorite */
export async function favoriteAiAvatarUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.favoriteAiAvatarUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/user_ai_avatar/favorite', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listFavoriteAiAvatars GET /api/user_ai_avatar/favorite/list */
export async function listFavoriteAiAvatarsUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseListUserAiAvatarVO_>('/api/user_ai_avatar/favorite/list', {
    method: 'GET',
    ...(options || {}),
  });
}

/** getUserAiAvatarById GET /api/user_ai_avatar/get */
export async function getUserAiAvatarByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserAiAvatarByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseUserAiAvatarVO_>('/api/user_ai_avatar/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listMyUserAiAvatars GET /api/user_ai_avatar/my/list */
export async function listMyUserAiAvatarsUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseListUserAiAvatarVO_>('/api/user_ai_avatar/my/list', {
    method: 'GET',
    ...(options || {}),
  });
}

/** listMyUserAiAvatarsByPage GET /api/user_ai_avatar/my/list/page */
export async function listMyUserAiAvatarsByPageUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listMyUserAiAvatarsByPageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageUserAiAvatarVO_>('/api/user_ai_avatar/my/list/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** rateAiAvatar POST /api/user_ai_avatar/rate */
export async function rateAiAvatarUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.rateAiAvatarUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/user_ai_avatar/rate', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** updateUserAiAvatar POST /api/user_ai_avatar/update */
export async function updateUserAiAvatarUsingPost(
  body: API.UserAiAvatarUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/user_ai_avatar/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** useAiAvatar POST /api/user_ai_avatar/use */
export async function useAiAvatarUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.useAiAvatarUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/user_ai_avatar/use', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
