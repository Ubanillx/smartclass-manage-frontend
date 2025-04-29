// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addReview POST /api/course/review/add */
export async function addReviewUsingPost(body: API.CourseReview, options?: { [key: string]: any }) {
  return request<API.BaseResponseLong_>('/api/course/review/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** replyReview POST /api/course/review/admin/reply */
export async function replyReviewUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.replyReviewUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/course/review/admin/reply', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** updateReviewStatus POST /api/course/review/admin/status */
export async function updateReviewStatusUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateReviewStatusUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/course/review/admin/status', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** deleteReview POST /api/course/review/delete */
export async function deleteReviewUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteReviewUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/course/review/delete', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getReviewById GET /api/course/review/get */
export async function getReviewByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getReviewByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseCourseReviewVO_>('/api/course/review/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** likeReview POST /api/course/review/like */
export async function likeReviewUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.likeReviewUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/course/review/like', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listReviewsByPage GET /api/course/review/list/page */
export async function listReviewsByPageUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listReviewsByPageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageCourseReviewVO_>('/api/course/review/list/page', {
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

/** getRatingStats GET /api/course/review/stats */
export async function getRatingStatsUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getRatingStatsUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseMapStringObject_>('/api/course/review/stats', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
