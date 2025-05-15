/// <reference types="react" />
/// <reference types="react-dom" />

declare module 'slash2';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
declare module 'omit.js';
declare module 'numeral';
declare module '@antv/data-set';
declare module 'mockjs';
declare module 'react-fittext';
declare module 'bizcharts-plugin-slider';

declare const REACT_APP_ENV: 'test' | 'dev' | 'pre' | false;

/**
 * 分页信息
 */
interface PageInfo<T> {
  current: number;
  size: number;
  total: number;
  records: T[];
}

/**
 * 分页请求
 */
interface PageRequest {
  current?: number;
  pageSize?: number;
  sortField?: string;
  sortOrder?: 'ascend' | 'descend';
}

/**
 * 删除请求
 */
interface DeleteRequest {
  id: number;
}

/**
 * 返回封装
 */
interface BaseResponse<T> {
  code: number;
  data: T;
  message?: string;
}

/**
 * 全局初始化状态
 */
interface InitialState {
  currentUser?: API.LoginUserVO;
}

declare namespace API {
  // 扩展后端API类型定义
  interface PostAddRequest {
    content?: string;
    tags?: string[];
    title?: string;
    clientIp?: string;
  }
}

declare module "*.avif" {
  const src: string;
  export default src;
}

declare module "*.bmp" {
  const src: string;
  export default src;
}

declare module "*.gif" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.webp" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<React.SVGProps<
    SVGSVGElement
  > & { title?: string }>;

  const src: string;
  export default src;
}

declare module "*.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.scss" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.less" {
  const classes: { readonly [key: string]: string };
  export default classes;
}
