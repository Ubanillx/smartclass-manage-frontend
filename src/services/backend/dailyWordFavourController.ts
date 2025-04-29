// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** doWordFavour POST /api/dailyWord/favour/${param0} */
export async function doWordFavourUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.doWordFavourUsingPOSTParams,
  options?: { [key: string]: any },
) {
  const { wordId: param0, ...queryParams } = params;
  return request<API.BaseResponseInt_>(`/api/dailyWord/favour/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** isFavourWord GET /api/dailyWord/favour/check/${param0} */
export async function isFavourWordUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.isFavourWordUsingGETParams,
  options?: { [key: string]: any },
) {
  const { wordId: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/dailyWord/favour/check/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** listMyFavourWordByPage POST /api/dailyWord/favour/list/page/my */
export async function listMyFavourWordByPageUsingPost(
  body: API.DailyWordQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageDailyWordVO_>('/api/dailyWord/favour/list/page/my', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateMasteryLevel POST /api/dailyWord/favour/mastery/${param1}/${param0} */
export async function updateMasteryLevelUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateMasteryLevelUsingPOSTParams,
  options?: { [key: string]: any },
) {
  const { masteryLevel: param0, wordId: param1, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/dailyWord/favour/mastery/${param1}/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** saveWordNote POST /api/dailyWord/favour/note/${param0} */
export async function saveWordNoteUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.saveWordNoteUsingPOSTParams,
  options?: { [key: string]: any },
) {
  const { wordId: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/dailyWord/favour/note/${param0}`, {
    method: 'POST',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** markWordAsStudied POST /api/dailyWord/favour/study/${param0} */
export async function markWordAsStudiedUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.markWordAsStudiedUsingPOSTParams,
  options?: { [key: string]: any },
) {
  const { wordId: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/dailyWord/favour/study/${param0}`, {
    method: 'POST',
    params: { ...queryParams },
    ...(options || {}),
  });
}
