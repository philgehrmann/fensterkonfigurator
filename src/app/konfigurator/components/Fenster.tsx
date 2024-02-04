"use client";

import { KonfiguratorContext } from "../../context/konfigurator.context";
import React, { useContext, useState } from "react";
import content from "../../../content/konfigurator/konfigurator.json";
import { AnyARecord } from "dns";

export default function Fenster() {
  const { state, dispatch } = useContext(KonfiguratorContext);

  const updateFenster = (id: any) => {
    console.log(id);
    if (state.fenster !== id || state.fenster === "") {
      dispatch({ type: "UPDATE_FENSTER", payload: id });
    } else {
      dispatch({ type: "UPDATE_FENSTER", payload: "" });
    }
  };
  console.log(content.hersteller);
  const fenster =
    content.hersteller.filter(
      (hersteller) => hersteller.id === state.hersteller
    ) || [];

  return (
    <section>
      {fenster[0].konfiguration.map((fenster: any, index: any) => {
        return (
          <p
            className={state.hersteller === fenster.id ? "text-orange" : ""}
            onClick={() => updateFenster(fenster.id)}
          >
            {fenster.name}
          </p>
        );
      })}
    </section>
  );
}
