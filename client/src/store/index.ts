import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";

import { rootSaga } from "./rootSaga"

export type RootStateType = ReturnType<typeof rootReducer>;

//@ts-ignore
const sagaMiddleware = createSagaMiddleware(rootSaga);

//@ts-ignore
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
