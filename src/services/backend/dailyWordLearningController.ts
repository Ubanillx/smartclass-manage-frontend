// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** getUserDailyWord GET /api/daily/word/learning/${param0} */
export async function getUserDailyWordUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserDailyWordUsingGETParams,
  options?: { [key: string]: any },
) {
  const { wordId: param0, ...queryParams } = params;
  return request<API.BaseResponseUserDailyWord_>(`/api/daily/word/learning/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** updateMasteryLevel POST /api/daily/word/learning/${param0}/mastery */
export async function updateMasteryLevelUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateMasteryLevelUsingPOSTParams,
  options?: { [key: string]: any },
) {
  const { wordId: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/daily/word/learning/${param0}/mastery`, {
    method: 'POST',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** saveWordNote POST /api/daily/word/learning/${param0}/note */
export async function saveWordNoteUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.saveWordNoteUsingPOSTParams,
  options?: { [key: string]: any },
) {
  const { wordId: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/daily/word/learning/${param0}/note`, {
    method: 'POST',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** markWordAsStudied POST /api/daily/word/learning/${param0}/study-status */
export async function markWordAsStudiedUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.markWordAsStudiedUsingPOSTParams,
  options?: { [key: string]: any },
) {
  const { wordId: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/daily/word/learning/${param0}/study-status`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** cancelWordStudied DELETE /api/daily/word/learning/${param0}/study-status */
export async function cancelWordStudiedUsingDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.cancelWordStudiedUsingDELETEParams,
  options?: { [key: string]: any },
) {
  const { wordId: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/daily/word/learning/${param0}/study-status`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
