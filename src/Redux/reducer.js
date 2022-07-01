import {
  ADD_TODO,
  ADD_TODO_ERROR,
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
  GET_TODO_ERROR,
} from "./actionTypes";

const initState = {
  todos: {
    loading: false,
    data: [],
    error: false,
  },
};
const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    case ADD_TODO_LOADING:
      return {
        ...state,
        todos: {
          ...state.todos,
          loading: true,
        },
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        todos: {
          loading: false,
          data: [...state.todos.data, payload],
        },
      };
    case ADD_TODO_ERROR:
      return {
        ...state,
        todos: {
          ...state.todos,
          error: true,
        },
      };
    case GET_TODO_LOADING:
      return {
        ...state,
        todos: {
          ...state.todos,
          loading: true,
        },
      };
    case GET_TODO_SUCCESS:
      return {
        ...state,
        todos: {
          loading: false,
          data: payload,
        },
      };
    case GET_TODO_ERROR:
      return {
        ...state,
        todos: {
          ...state.todos,
          loading: false,
          error: payload,
        },
      };
    default:
      return { ...state };
  }
};

export { reducer };
