// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addSection POST /api/course/section/add */
export async function addSectionUsingPost(
  body: API.CourseSection,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/course/section/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getSectionCount GET /api/course/section/count */
export async function getSectionCountUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSectionCountUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseInt_>('/api/course/section/count', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** deleteSection POST /api/course/section/delete */
export async function deleteSectionUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/course/section/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getTotalDuration GET /api/course/section/duration */
export async function getTotalDurationUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTotalDurationUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseInt_>('/api/course/section/duration', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getSectionById GET /api/course/section/get */
export async function getSectionByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getSectionByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseCourseSection_>('/api/course/section/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listSectionsByChapterId GET /api/course/section/list/chapter */
export async function listSectionsByChapterIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listSectionsByChapterIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListCourseSection_>('/api/course/section/list/chapter', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listSectionsByCourseId GET /api/course/section/list/course */
export async function listSectionsByCourseIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listSectionsByCourseIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListCourseSection_>('/api/course/section/list/course', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listSectionsByPage GET /api/course/section/list/page */
export async function listSectionsByPageUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listSectionsByPageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageCourseSection_>('/api/course/section/list/page', {
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

/** updateSection POST /api/course/section/update */
export async function updateSectionUsingPost(
  body: API.CourseSection,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/course/section/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateSectionVideo POST /api/course/section/update/video */
export async function updateSectionVideoUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateSectionVideoUsingPOSTParams,
  body: {},
  file?: File,
  options?: { [key: string]: any },
) {
  const formData = new FormData();

  if (file) {
    formData.append('file', file);
  }

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      if (typeof item === 'object' && !(item instanceof File)) {
        if (item instanceof Array) {
          item.forEach((f) => formData.append(ele, f || ''));
        } else {
          formData.append(ele, JSON.stringify(item));
        }
      } else {
        formData.append(ele, item);
      }
    }
  });

  return request<API.BaseResponseBoolean_>('/api/course/section/update/video', {
    method: 'POST',
    params: {
      ...params,
    },
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** uploadVideoAndAddSection POST /api/course/section/upload */
export async function uploadVideoAndAddSectionUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.uploadVideoAndAddSectionUsingPOSTParams,
  body: {},
  file?: File,
  options?: { [key: string]: any },
) {
  const formData = new FormData();

  if (file) {
    formData.append('file', file);
  }

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      if (typeof item === 'object' && !(item instanceof File)) {
        if (item instanceof Array) {
          item.forEach((f) => formData.append(ele, f || ''));
        } else {
          formData.append(ele, JSON.stringify(item));
        }
      } else {
        formData.append(ele, item);
      }
    }
  });

  return request<API.BaseResponseLong_>('/api/course/section/upload', {
    method: 'POST',
    params: {
      ...params,
    },
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}
