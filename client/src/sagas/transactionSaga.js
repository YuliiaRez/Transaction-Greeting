import { put } from "redux-saga/effects";
import {
  getTransactionsRequest,
  getTransactionsSuccess,
  getTransactionsError,
} from "../actions/actionCreator";
import * as restController from "./../api/rest/restController";

export function* transactionSaga() {
  yield put(getTransactionsRequest());
  try {
    const { data } = yield restController.getTransactions();
    yield put(getTransactionsSuccess(data));
  } catch (e) {
    yield put(getTransactionsError(e));
  }
}
