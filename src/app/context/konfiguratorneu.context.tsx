"use client";

import React, {
  createContext,
  useReducer,
  SetStateAction,
  useState,
  Dispatch,
} from "react";

const initialState = {
  hersteller: "",
};

const reducer = (state: any, action: any) => {
  console.log(action);
  switch (action.type) {
    case "UPDATE_STATE":
      return {
        ...state,
        [action.key]: action.payload,
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
