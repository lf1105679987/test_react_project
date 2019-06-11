
import * as types from './types';
import service from '@service/index';
// 加载最近上映的电影
export function loginAction() {
  return {
    type: types.LOGIN,
    promise: service.loginApi()
  };
}