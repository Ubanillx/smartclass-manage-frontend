// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** getUserDailyWord GET /api/daily/word/learning/get/${param0} */
export async function getUserDailyWordUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserDailyWordUsingGETParams,
  options?: { [key: string]: any },
) {
  const { wordId: param0, ...queryParams } = params;
  return request<API.BaseResponseUserDailyWord_>(`/api/daily/word/learning/get/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** markWordAsStudied POST /api/daily/word/learning/mark-studied/${param0} */
export async function markWordAsStudiedUsingPost1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.markWordAsStudiedUsingPOST1Params,
  options?: { [key: string]: any },
) {
  const { wordId: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/daily/word/learning/mark-studied/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** saveWordNote POST /api/daily/word/learning/save-note/${param0} */
export async function saveWordNoteUsingPost1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.saveWordNoteUsingPOST1Params,
  options?: { [key: string]: any },
) {
  const { wordId: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/daily/word/learning/save-note/${param0}`, {
    method: 'POST',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** updateMasteryLevel POST /api/daily/word/learning/update-mastery/${param0} */
export async function updateMasteryLevelUsingPost1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateMasteryLevelUsingPOST1Params,
  options?: { [key: string]: any },
) {
  const { wordId: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/daily/word/learning/update-mastery/${param0}`, {
    method: 'POST',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}
