"use client";

import { KonfiguratorContext } from "../context/konfigurator.context";
import React, { useContext, useState, useEffect } from "react";
import Hersteller from "./components/Hersteller";
import Fenster from "./components/Fenster";
import Preis from "./components/Preis";
import Fenstermasse from "./components/Fenstermasse";

export default function Page() {
  const { state, dispatch } = useContext(KonfiguratorContext);
  const [todoText, setTodoText] = useState("");
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editedTodo, setEditedTodo] = useState("");

  const handleAddTodo = () => {
    if (todoText.trim() !== "") {
      dispatch({ type: "ADD_TODO", payload: todoText });
      setTodoText("");
    }
  };

  const handleDeleteTodo = (index: any) => {
    dispatch({ type: "DELETE_TODO", payload: index });
  };

  const handleEditTodo = (index: any, newTodo: any) => {
    dispatch({ type: "EDIT_TODO", payload: { index, newTodo } });
    setEditingIndex(-1);
    setEditedTodo("");
  };
  useEffect(() => {});

  return (
    <section className="konfigurator-wrapper p-24">
      <Hersteller />
      {state.hersteller !== "" && <Fenster />}
      <Preis />
      <Fenstermasse />
      <div style={{ marginBottom: "4rem", textAlign: "center" }}>
        <h2>Todos</h2>

        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          style={{ marginBottom: 16 }}
          placeholder="Enter a todo"
        />

        <button onClick={handleAddTodo}>Add Todo</button>

        <ul>
          {state.todos.map((todo: any, index: any) => (
            <li key={index}>
              {index === editingIndex ? (
                <>
                  <input
                    type="text"
                    value={editedTodo}
                    onChange={(e) => setEditedTodo(e.target.value)}
                  />

                  <button
                    style={{ marginRight: 16 }}
                    onClick={() => handleEditTodo(index, editedTodo)}
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  {todo}
                  <button
                    style={{ marginRight: 16 }}
                    onClick={() => setEditingIndex(index)}
                  >
                    Edit
                  </button>

                  <button onClick={() => handleDeleteTodo(index)}>
                    Delete
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
        <span className="h2 text-orange">{state.hersteller}</span>
      </div>
    </section>
  );
}
