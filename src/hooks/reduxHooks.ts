import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, reducersType, storeType } from "../redux/redux-store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<reducersType> = useSelector;
