// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addAnnouncement POST /api/announcements */
export async function addAnnouncementUsingPost(
  body: API.AnnouncementAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/announcements', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getAnnouncementVOById GET /api/announcements/${param0} */
export async function getAnnouncementVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAnnouncementVOByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseAnnouncementVO_>(`/api/announcements/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** deleteAnnouncement DELETE /api/announcements/${param0} */
export async function deleteAnnouncementUsingDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteAnnouncementUsingDELETEParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/announcements/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** updateAnnouncement PUT /api/announcements/${param0}/admin */
export async function updateAnnouncementUsingPut(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateAnnouncementUsingPUTParams,
  body: API.AnnouncementUpdateRequest,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/announcements/${param0}/admin`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** hasReadAnnouncement GET /api/announcements/${param0}/has-read */
export async function hasReadAnnouncementUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.hasReadAnnouncementUsingGETParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/announcements/${param0}/has-read`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** readAnnouncement POST /api/announcements/${param0}/read */
export async function readAnnouncementUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.readAnnouncementUsingPOSTParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/announcements/${param0}/read`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** listAnnouncementByPage GET /api/announcements/admin/page */
export async function listAnnouncementByPageUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listAnnouncementByPageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageAnnouncement_>('/api/announcements/admin/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listAnnouncementVOByPage GET /api/announcements/page */
export async function listAnnouncementVoByPageUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listAnnouncementVOByPageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageAnnouncementVO_>('/api/announcements/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
