import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  addTodoError,
  addTodoLoading,
  addTodoSuccess,
} from "../Redux/Action";
import axios from "axios";

export const Todo = () => {
  useEffect(() => {
    getData();
  }, []);

  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((store) => store.todos);
  const [text, setText] = useState("");

  const getData = async () => {
    dispatch(getTodoLoading());
    try {
      const { data } = await axios.get("http://localhost:3000/todos");
      dispatch(getTodoSuccess(data));
    } catch (error) {
      dispatch(getTodoError(error));
    }
  };

  return loading ? (
    "Loading..."
  ) : (
    <div>
      <h3>ADD TODO</h3>
      <input
        type="text"
        placeholder="Add something"
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={async () => {
          dispatch(addTodoLoading());
          const payload = {
            status: false,
            title: text,
          };
          try {
            const { data } = await axios.post(
              "http://localhost:3000/todos",
              payload
            );
            dispatch(addTodoSuccess(data));
            getData();
          } catch (error) {
            dispatch(addTodoError(error));
          }
        }}
      >
        Add
      </button>

      {data.map((e, i) => (
        <div key={i}>{e.title}</div>
      ))}
    </div>
  );
};
