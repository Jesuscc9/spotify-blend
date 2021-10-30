import { call, put } from "redux-saga/effects";
import { default as authActions } from "../store/auth/actions";
import Cookies from "js-cookie";
// import { snackbarActions } from "src/store/snackbar/actions";

/*  SAFE SAGA CALL FOR ERROR HANDLING */
export function sagaWrapper(sagaFn: any, errorAction?: any) {
  return function* ():any {
    try {
      return yield call(sagaFn, arguments[0]);
    } catch (error: any) {
      console.log("Error:", error);

      if (error.response?.status === 401 && Cookies.get("auth")) {
        yield Cookies.remove("auth");
      }

      if (error.response) {
        if (error.response.status === 401) {
          yield put(authActions.logout());
        } else {
          // yield put(snackbarActions.add('error', error.response.data.message ? error.response.data.message : 'Ocurrió un error'));
        }
      }

      if (error.message === "Network Error") {
        // yield put(snackbarActions.add('error', 'Error de red, verifica tu conexión'));
      }

      if (errorAction && error.message !== "Operation canceled") {
        yield put(errorAction);
      }
    }
  };
}