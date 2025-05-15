// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addTeacher POST /api/teacher/add */
export async function addTeacherUsingPost(
  body: API.TeacherAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/teacher/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getTeacherCourses GET /api/teacher/courses/${param0} */
export async function getTeacherCoursesUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTeacherCoursesUsingGETParams,
  options?: { [key: string]: any },
) {
  const { teacherId: param0, ...queryParams } = params;
  return request<API.BaseResponseListCourseVO_>(`/api/teacher/courses/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** deleteTeacher POST /api/teacher/delete */
export async function deleteTeacherUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/teacher/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getTeacherById GET /api/teacher/get */
export async function getTeacherByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTeacherByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseTeacher_>('/api/teacher/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getTeacherVOById GET /api/teacher/get/vo */
export async function getTeacherVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTeacherVOByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseTeacherVO_>('/api/teacher/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listTeacherByPage POST /api/teacher/list/page */
export async function listTeacherByPageUsingPost(
  body: API.TeacherQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageTeacher_>('/api/teacher/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listTeacherVOByPage POST /api/teacher/list/page/vo */
export async function listTeacherVoByPageUsingPost(
  body: API.TeacherQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageTeacherVO_>('/api/teacher/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getRecommendTeachers GET /api/teacher/recommend */
export async function getRecommendTeachersUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getRecommendTeachersUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListTeacherVO_>('/api/teacher/recommend', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** updateTeacher POST /api/teacher/update */
export async function updateTeacherUsingPost(
  body: API.TeacherUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/teacher/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
