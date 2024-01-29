"use client";

import React, {
  createContext,
  useReducer,
  SetStateAction,
  useState,
  Dispatch,
} from "react";

const initialState = {
  todos: [],
  hersteller: "",
  fenstertyp: "",
  fensterpreis: "",
  fensterpreisfull: "",
  minheight: "",
  maxheight: "",
  height: "1000",
  width: "1000",
  color: "",
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "UPDATE_HERSTELLER":
      return {
        ...state,
        hersteller: action.payload,
      };
    case "UPDATE_FENSTER":
      return {
        ...state,
        fenstertyp: action.payload,
      };
    case "UPDATE_FENSTERPREIS":
      return {
        ...state,
        fensterpreis: action.payload,
      };
    case "UPDATE_FULLFENSTERPREIS":
      return {
        ...state,
        fensterpreisfull: action.payload,
      };
    case "UPDATE_FENSTERWIDTH":
      return {
        ...state,
        width: action.payload,
      };
    case "UPDATE_FENSTERHEIGHT":
      return {
        ...state,
        height: action.payload,
      };
    default:
      return state;
  }
};

interface IDispatchContext {
  state: any;
  dispatch: Dispatch<SetStateAction<any>>;
}

export const KonfiguratorContext = createContext<IDispatchContext>({
  state: initialState,
  dispatch: () => {},
});

export const KonfiguratorContextProvider = ({
  children,
}: {
  children: any;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <KonfiguratorContext.Provider value={{ state, dispatch }}>
      {children}
    </KonfiguratorContext.Provider>
  );
};
