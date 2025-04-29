// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addMaterial POST /api/course/material/add */
export async function addMaterialUsingPost(
  body: API.CourseMaterial,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/course/material/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteMaterial POST /api/course/material/delete */
export async function deleteMaterialUsingPost(
  body: API.DeleteRequest1,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/course/material/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** incrementDownloadCount POST /api/course/material/download/count */
export async function incrementDownloadCountUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.incrementDownloadCountUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/course/material/download/count', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getMaterialById GET /api/course/material/get */
export async function getMaterialByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getMaterialByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseCourseMaterial_>('/api/course/material/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listMaterialsByCourse GET /api/course/material/list */
export async function listMaterialsByCourseUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listMaterialsByCourseUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListCourseMaterial_>('/api/course/material/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listMaterialsByPage GET /api/course/material/list/page */
export async function listMaterialsByPageUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listMaterialsByPageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageCourseMaterial_>('/api/course/material/list/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** updateMaterial POST /api/course/material/update */
export async function updateMaterialUsingPost(
  body: API.CourseMaterial,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/course/material/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateMaterialFile POST /api/course/material/update/file */
export async function updateMaterialFileUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateMaterialFileUsingPOSTParams,
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

  return request<API.BaseResponseBoolean_>('/api/course/material/update/file', {
    method: 'POST',
    params: {
      ...params,
    },
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** uploadAndAddMaterial POST /api/course/material/upload */
export async function uploadAndAddMaterialUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.uploadAndAddMaterialUsingPOSTParams,
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

  return request<API.BaseResponseLong_>('/api/course/material/upload', {
    method: 'POST',
    params: {
      ...params,
    },
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}
