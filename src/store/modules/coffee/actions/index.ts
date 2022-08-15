import {
  GET_ALL,
  REMOVE_ONE,
  ADD_OTHER,
  CHANGE_ONE,
  ADD_OBJECT_TO_CHANGE,
  CLEAN_TO_CHANGE_ITEM,
} from "./actions.types";

export const getAll = (payload: Array<any>) => {
  return {
    type: GET_ALL,
    payload,
  };
};

export const addOther = (payload: any) => {
  return {
    type: ADD_OTHER,
    payload,
  };
};

export const removeOne = (payload: any) => {
  return {
    type: REMOVE_ONE,
    payload,
  };
};

export const changeOne = (payload: any, changed: object) => {
  return {
    type: CHANGE_ONE,
    payload,
    changed,
  };
};

export const addObjectToChange = (payload: any) => {
  return {
    type: ADD_OBJECT_TO_CHANGE,
    payload,
  };
};

export const cleanToChangeItem = () => {
  return {
    type: CLEAN_TO_CHANGE_ITEM,
  };
};
