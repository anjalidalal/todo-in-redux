import {
  ADD_TODO,
  ADD_TODO_ERROR,
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
  GET_TODO_ERROR,
} from "./actionTypes";

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const addTodoLoading = () => {
  return {
    type: ADD_TODO_LOADING,
  };
};

export const addTodoSuccess = (data) => {
  return {
    type: ADD_TODO_SUCCESS,
    payload: data,
  };
};

export const addTodoError = (error) => {
  return {
    type: ADD_TODO_ERROR,
    payload: error,
  };
};

export const getTodoLoading = () => {
  return {
    type: GET_TODO_LOADING,
  };
};

export const getTodoSuccess = (data) => {
  return {
    type: GET_TODO_SUCCESS,
    payload: data,
  };
};

export const getTodoError = (error) => {
  return {
    type: GET_TODO_ERROR,
    payload: error,
  };
};
