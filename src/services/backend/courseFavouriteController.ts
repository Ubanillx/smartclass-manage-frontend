// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** favourCourse POST /api/course/favourite/add */
export async function favourCourseUsingPost(
  body: API.CourseFavourAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/course/favourite/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** unfavourCourse POST /api/course/favourite/cancel */
export async function unfavourCourseUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.unfavourCourseUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/course/favourite/cancel', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** checkFavoured GET /api/course/favourite/check */
export async function checkFavouredUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.checkFavouredUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/course/favourite/check', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getMyFavourCount GET /api/course/favourite/my/count */
export async function getMyFavourCountUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseLong_>('/api/course/favourite/my/count', {
    method: 'GET',
    ...(options || {}),
  });
}

/** getMyFavourList GET /api/course/favourite/my/list */
export async function getMyFavourListUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseListLong_>('/api/course/favourite/my/list', {
    method: 'GET',
    ...(options || {}),
  });
}
