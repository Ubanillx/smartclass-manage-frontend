// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addFriendRequest POST /api/friend-requests */
export async function addFriendRequestUsingPost(
  body: API.FriendRequestAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/friend-requests', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getFriendRequestById GET /api/friend-requests/${param0} */
export async function getFriendRequestByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getFriendRequestByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseFriendRequestVO_>(`/api/friend-requests/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** deleteFriendRequest DELETE /api/friend-requests/${param0} */
export async function deleteFriendRequestUsingDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteFriendRequestUsingDELETEParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/friend-requests/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** acceptFriendRequest POST /api/friend-requests/${param0}/accept */
export async function acceptFriendRequestUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.acceptFriendRequestUsingPOSTParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/friend-requests/${param0}/accept`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** rejectFriendRequest POST /api/friend-requests/${param0}/reject */
export async function rejectFriendRequestUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.rejectFriendRequestUsingPOSTParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/friend-requests/${param0}/reject`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** listFriendRequestByPage GET /api/friend-requests/page */
export async function listFriendRequestByPageUsingGet(
  body: API.FriendRequestQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageFriendRequest_>('/api/friend-requests/page', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listFriendRequestVOByPage GET /api/friend-requests/page/vo */
export async function listFriendRequestVoByPageUsingGet(
  body: API.FriendRequestQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageFriendRequestVO_>('/api/friend-requests/page/vo', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getPendingRequestCount GET /api/friend-requests/pending/count */
export async function getPendingRequestCountUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseLong_>('/api/friend-requests/pending/count', {
    method: 'GET',
    ...(options || {}),
  });
}

/** getReceivedFriendRequests GET /api/friend-requests/received */
export async function getReceivedFriendRequestsUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getReceivedFriendRequestsUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListFriendRequestVO_>('/api/friend-requests/received', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getSentFriendRequests GET /api/friend-requests/sent */
export async function getSentFriendRequestsUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSentFriendRequestsUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListFriendRequestVO_>('/api/friend-requests/sent', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
