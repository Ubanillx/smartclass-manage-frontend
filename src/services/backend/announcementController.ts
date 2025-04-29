// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addAnnouncement POST /api/announcement/add */
export async function addAnnouncementUsingPost(
  body: API.AnnouncementAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/announcement/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteAnnouncement POST /api/announcement/delete */
export async function deleteAnnouncementUsingPost(
  body: API.DeleteRequest1,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/announcement/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getAnnouncementVOById GET /api/announcement/get/vo */
export async function getAnnouncementVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAnnouncementVOByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseAnnouncementVO_>('/api/announcement/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** hasReadAnnouncement GET /api/announcement/has-read/${param0} */
export async function hasReadAnnouncementUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.hasReadAnnouncementUsingGETParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/announcement/has-read/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** listAnnouncementByPage POST /api/announcement/list/page */
export async function listAnnouncementByPageUsingPost(
  body: API.AnnouncementQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageAnnouncement_>('/api/announcement/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listAnnouncementVOByPage POST /api/announcement/list/page/vo */
export async function listAnnouncementVoByPageUsingPost(
  body: API.AnnouncementQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageAnnouncementVO_>('/api/announcement/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listValidAnnouncements GET /api/announcement/list/valid */
export async function listValidAnnouncementsUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listValidAnnouncementsUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageAnnouncementVO_>('/api/announcement/list/valid', {
    method: 'GET',
    params: {
      // current has a default value: 1
      current: '1',
      // size has a default value: 10
      size: '10',
      ...params,
    },
    ...(options || {}),
  });
}

/** readAnnouncement POST /api/announcement/read/${param0} */
export async function readAnnouncementUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.readAnnouncementUsingPOSTParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/announcement/read/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** updateAnnouncement POST /api/announcement/update */
export async function updateAnnouncementUsingPost(
  body: API.AnnouncementUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/announcement/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
