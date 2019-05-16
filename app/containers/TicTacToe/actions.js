import { SELECT_SQUARE } from './constants';

export function actionSelectSquare(payload) {
  return { type: SELECT_SQUARE, payload };
}
