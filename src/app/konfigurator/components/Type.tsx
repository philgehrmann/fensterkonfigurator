"use client";

import { KonfiguratorContext } from "../../context/konfigurator.context";
import React, { useContext, useState } from "react";
import content from "../../../content/konfigurator/type.json";

export default function Fenstertype() {
  const { state, dispatch } = useContext(KonfiguratorContext);

  const updateFensterType = (id: any, name: any) => {
    console.log(id);
    console.log(id);
    if (state.fenstertyp !== id || state.fenstertyp === "") {
      dispatch({ type: "UPDATE_FENSTERTYP", payload: id });
      dispatch({
        type: "UPDATE_TRANSLATION",
        payload: name,
        key: "translationTyp",
      });
    } else {
      dispatch({ type: "UPDATE_FENSTERTYP", payload: "" });
      dispatch({
        type: "UPDATE_TRANSLATION",
        payload: "",
        key: "translationTyp",
      });
      dispatch({
        type: "UPDATE_VARIANT",
        payload: "",
      });
      dispatch({
        type: "UPDATE_FENSTERWIDTH",
        payload: "",
      });
      dispatch({
        type: "UPDATE_FENSTERHEIGHT",
        payload: "",
      });
    }
  };
  const fenster =
    content.types.filter((types) => types.windowid === state.fenstermodell) ||
    [];

  return (
    <section className="self-center">
      <h3 className="m-0">Fenstertypen</h3>
      <p className="text-[12px]"> Wählen deinen Fenstertyp</p>
      <div className="grid grid-cols-2 gap-6 items-center justify-items-center mt-6 ">
        {fenster[0].variants.map((variant: any, index: any) => {
          return (
            <div
              key={index}
              className={
                "cursor-pointer grid grid-cols-1 border-[2px]  min-w-[150px] px-4 py-2 items-center text-center bg-white rounded-xl drop-shadow-lg " +
                (state.fenstertyp === variant.id
                  ? "border-[3px] border-orange"
                  : " border-white")
              }
              onClick={() => updateFensterType(variant.id, variant.name)}
            >
              {variant.className === "1fl" && (
                <div
                  className={"fenster-basic-small mx-auto" + variant.className}
                ></div>
              )}
              {variant.className === "2fl" && (
                <div className="grid grid-cols-2 small-zweier mx-auto">
                  <div
                    className={
                      "fenster-basic-small zweier " + variant.className
                    }
                  ></div>
                  <div
                    className={
                      "fenster-basic-small zweier " + variant.className
                    }
                  ></div>
                </div>
              )}
              {variant.className === "3fl" && (
                <div className="grid grid-cols-3 small-dreier">
                  <div
                    className={
                      "fenster-basic-small dreier " + variant.className
                    }
                  ></div>
                  <div
                    className={
                      "fenster-basic-small dreier " + variant.className
                    }
                  ></div>
                  <div
                    className={
                      "fenster-basic-small dreier " + variant.className
                    }
                  ></div>
                </div>
              )}
              {variant.className === "ol" && (
                <div className="grid grid-cols-3 small-dreier">
                  <div
                    className={
                      "fenster-basic-small dreier " + variant.className
                    }
                  ></div>
                  <div
                    className={
                      "fenster-basic-small dreier " + variant.className
                    }
                  ></div>
                  <div
                    className={
                      "fenster-basic-small dreier " + variant.className
                    }
                  ></div>
                </div>
              )}
              {variant.className === "ul" && (
                <div className="grid grid-cols-3 small-dreier">
                  <div
                    className={
                      "fenster-basic-small dreier " + variant.className
                    }
                  ></div>
                  <div
                    className={
                      "fenster-basic-small dreier " + variant.className
                    }
                  ></div>
                  <div
                    className={
                      "fenster-basic-small dreier " + variant.className
                    }
                  ></div>
                </div>
              )}
              <p className="mt-2 text-[12px]"> {variant.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
