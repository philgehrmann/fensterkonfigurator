"use client";

import { KonfiguratorContext } from "../../context/konfigurator.context";
import React, { useContext, useState } from "react";
import content from "../../../content/konfigurator/variants.json";
import { AnyARecord } from "dns";

export default function Fenster() {
  const { state, dispatch } = useContext(KonfiguratorContext);

  const updateFenster = (id: any, price: any) => {
    if (state.fenster !== id || state.fenster === "") {
      dispatch({ type: "UPDATE_FENSTER", payload: id });
      dispatch({ type: "UPDATE_FENSTERPREIS", payload: price });
    } else {
      dispatch({ type: "UPDATE_FENSTER", payload: "" });
      dispatch({ type: "UPDATE_FENSTERPREIS", payload: "" });
    }
  };

  const fenster =
    content.variants.filter(
      (variant) => variant.id === state.hersteller || []
    ) || [];

  return (
    <section>
      {fenster[0].variants.map((variant: any, index: any) => {
        return (
          <p
            className={state.fenstertyp === variant.id ? "text-orange" : ""}
            onClick={() => updateFenster(variant.id, variant.preis)}
          >
            {variant.name}
          </p>
        );
      })}
    </section>
  );
}
