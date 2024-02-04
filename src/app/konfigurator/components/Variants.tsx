"use client";

import { KonfiguratorContext } from "../../context/konfigurator.context";
import React, { useContext, useState } from "react";
import content from "../../../content/konfigurator/variants.json";
import { AnyARecord } from "dns";

export default function Variants() {
  const { state, dispatch } = useContext(KonfiguratorContext);

  const updateVariants = (id: any, price: any) => {
    if (state.hersteller !== id || state.hersteller === "") {
      dispatch({ type: "UPDATE_VARIANT", payload: id });
      dispatch({ type: "UPDATE_FENSTERPREIS", payload: price });
    } else {
      dispatch({ type: "UPDATE_VARIANT", payload: "" });
      dispatch({ type: "UPDATE_FENSTERPREIS", payload: "" });
    }
  };

  const variants =
    content.variants.filter((variant) => variant.id === state.fenstertyp) || [];
  console.log(variants[0].variants);
  return (
    <section>
      {variants[0].variants.map((variant: any, index: any) => {
        return (
          <p
            className={state.fenster === variant.id ? "text-orange" : ""}
            onClick={() => updateVariants(variant.id, variant.preis)}
          >
            {variant.name}
          </p>
        );
      })}
    </section>
  );
}
