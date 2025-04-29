// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addCategory POST /api/course/category/add */
export async function addCategoryUsingPost(
  body: API.CourseCategory,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/course/category/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteCategory POST /api/course/category/delete */
export async function deleteCategoryUsingPost(
  body: API.DeleteRequest1,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/course/category/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getCategoryById GET /api/course/category/get */
export async function getCategoryByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCategoryByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseCourseCategory_>('/api/course/category/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getSubCategories GET /api/course/category/sub */
export async function getSubCategoriesUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSubCategoriesUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListCourseCategory_>('/api/course/category/sub', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getTopCategories GET /api/course/category/top */
export async function getTopCategoriesUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseListCourseCategory_>('/api/course/category/top', {
    method: 'GET',
    ...(options || {}),
  });
}

/** updateCategory POST /api/course/category/update */
export async function updateCategoryUsingPost(
  body: API.CourseCategory,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/course/category/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getCategoryWithChildren GET /api/course/category/with-children */
export async function getCategoryWithChildrenUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCategoryWithChildrenUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListCourseCategory_>('/api/course/category/with-children', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
