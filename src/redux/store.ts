import {configureStore} from "@reduxjs/toolkit";
import resizableReducer from "@/redux/state/resizable";
import { persistStore } from 'redux-persist';
// import storage from "redux-persist/lib/storage";



// const persistConfig = {
// 	key: 'root',
// 	storage,
// };



export const store = configureStore({
	reducer: {
		resizableState: resizableReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;