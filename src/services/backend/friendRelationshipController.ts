// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** listUserFriends GET /api/friends */
export async function listUserFriendsUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseListFriendRelationshipVO_>('/api/friends', {
    method: 'GET',
    ...(options || {}),
  });
}

/** updateFriendRelationship PUT /api/friends */
export async function updateFriendRelationshipUsingPut(
  body: API.FriendRelationshipUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/friends', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** addFriendRelationship POST /api/friends */
export async function addFriendRelationshipUsingPost(
  body: API.FriendRelationshipAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/friends', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteFriendRelationship DELETE /api/friends/${param0} */
export async function deleteFriendRelationshipUsingDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteFriendRelationshipUsingDELETEParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/friends/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** listFriendRelationshipByPage GET /api/friends/admin/page */
export async function listFriendRelationshipByPageUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listFriendRelationshipByPageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageFriendRelationship_>('/api/friends/admin/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listFriendRelationshipVOByPage GET /api/friends/page */
export async function listFriendRelationshipVoByPageUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listFriendRelationshipVOByPageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageFriendRelationshipVO_>('/api/friends/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getFriendRelationship GET /api/friends/relation */
export async function getFriendRelationshipUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getFriendRelationshipUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseObject_>('/api/friends/relation', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** deleteFriendByUserId DELETE /api/friends/user/${param0} */
export async function deleteFriendByUserIdUsingDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteFriendByUserIdUsingDELETEParams,
  options?: { [key: string]: any },
) {
  const { userId: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/friends/user/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
