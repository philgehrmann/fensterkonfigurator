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
  fenstermodell: "",
  fenstertyp: "",
  fenstervariant: "",
  fensterpreis: "",
  fensterpreisfull: 0,
  minheight: "",
  maxheight: "",
  height: "",
  width: "",
  color: "",
  colorPreis: "",
  colorClass: "",
  translationHersteller: "",
  translationTyp: "",
  translationModell: "",
  translationVariant: "",
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
        fenstermodell: action.payload,
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
    case "UPDATE_VARIANT":
      return {
        ...state,
        fenstervariant: action.payload,
      };
    case "UPDATE_FENSTERTYP":
      return {
        ...state,
        fenstertyp: action.payload,
      };
    case "REMOVE_GLOBALCONFIG":
      return {
        ...state,
        hersteller: action.payload,
      };
    case "UPDATE_TRANSLATION":
      return {
        ...state,
        [action.key]: action.payload,
      };
    case "UPDATE_MINHEIGHT":
      return {
        ...state,
        minheight: action.payload,
      };
    case "UPDATE_MAXHEIGHT":
      return {
        ...state,
        maxheight: action.payload,
      };
    case "UPDATE_MINWIDTH":
      return {
        ...state,
        minwidth: action.payload,
      };
    case "UPDATE_MAXWIDTH":
      return {
        ...state,
        maxwidth: action.payload,
      };
    case "UPDATE_COLOR":
      return {
        ...state,
        color: action.payload,
      };
    case "UPDATE_COLORPREIS":
      return {
        ...state,
        colorPreis: action.payload,
      };
    case "UPDATE_COLORCLASS":
      return {
        ...state,
        colorClass: action.payload,
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
