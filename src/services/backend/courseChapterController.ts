// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addChapter POST /api/course/chapter/add */
export async function addChapterUsingPost(
  body: API.CourseChapter,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/course/chapter/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteChapter POST /api/course/chapter/delete */
export async function deleteChapterUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteChapterUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/course/chapter/delete', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getChapterById GET /api/course/chapter/get */
export async function getChapterByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getChapterByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseCourseChapter_>('/api/course/chapter/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listChapters GET /api/course/chapter/list */
export async function listChaptersUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listChaptersUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListCourseChapter_>('/api/course/chapter/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listChaptersByPage GET /api/course/chapter/list/page */
export async function listChaptersByPageUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listChaptersByPageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageCourseChapter_>('/api/course/chapter/list/page', {
    method: 'GET',
    params: {
      // current has a default value: 1
      current: '1',
      // pageSize has a default value: 10
      pageSize: '10',
      ...params,
    },
    ...(options || {}),
  });
}

/** updateChapter POST /api/course/chapter/update */
export async function updateChapterUsingPost(
  body: API.CourseChapter,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/course/chapter/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
