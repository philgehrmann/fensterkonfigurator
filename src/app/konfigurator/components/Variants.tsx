"use client";

import { KonfiguratorContext } from "../../context/konfigurator.context";
import React, { useContext, useState } from "react";
import content from "../../../content/konfigurator/variants.json";
import { AnyARecord } from "dns";

export default function Variants() {
  const { state, dispatch } = useContext(KonfiguratorContext);

  const updateVariants = (
    id: any,
    price: any,
    name: any,
    minheight: any,
    maxheight: any,
    minWidth: any,
    maxWidth: any
  ) => {
    if (state.fenstervariant !== id || state.fenstervariant === "") {
      dispatch({ type: "UPDATE_VARIANT", payload: id });
      dispatch({ type: "UPDATE_FENSTERPREIS", payload: price });
      dispatch({ type: "UPDATE_MINHEIGHT", payload: minheight });
      dispatch({ type: "UPDATE_MAXHEIGHT", payload: maxheight });
      dispatch({ type: "UPDATE_MINWIDTH", payload: minWidth });
      dispatch({ type: "UPDATE_MAXWIDTH", payload: maxWidth });
      dispatch({
        type: "UPDATE_TRANSLATION",
        payload: name,
        key: "translationVariant",
      });
    } else {
      dispatch({ type: "UPDATE_VARIANT", payload: "" });
      dispatch({ type: "UPDATE_FENSTERPREIS", payload: "" });
      dispatch({ type: "UPDATE_TRANSLATION", payload: "", key: name });
      dispatch({ type: "UPDATE_MINHEIGHT", payload: "" });
      dispatch({ type: "UPDATE_MAXHEIGHT", payload: "" });
      dispatch({ type: "UPDATE_MINWIDTH", payload: "" });
      dispatch({ type: "UPDATE_MAXWIDTH", payload: "" });
    }
  };

  const variants =
    content.variants.filter((variant) => variant.id === state.fenstertyp) || [];

  return (
    <div className="self-center">
      <h3 className="m-0">Öffnungsrichtung</h3>
      <p className="text-[12px]">
        {" "}
        Wählen Sie Ihre gewünschte Öffnungsrichtung
      </p>
      <div className="grid grid-cols-1 gap-6 items-center justify-items-center mt-6">
        {variants[0].variants.map((variant: any, index: any) => {
          return (
            <p
              key={index}
              className={state.fenster === variant.id ? "text-orange" : ""}
              onClick={() =>
                updateVariants(
                  variant.id,
                  variant.preis,
                  variant.name,
                  variant.minHeight,
                  variant.maxHeight,
                  variant.minWidth,
                  variant.maxWidth
                )
              }
            >
              {variant.name}
            </p>
          );
        })}
      </div>
    </div>
  );
}
