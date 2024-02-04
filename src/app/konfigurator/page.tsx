"use client";

import { KonfiguratorContext } from "../context/konfigurator.context";
import React, { useContext, useState, useEffect } from "react";
import Hersteller from "./components/Hersteller";
import Fenster from "./components/Fenster";
import Preis from "./components/Preis";
import Fenstermasse from "./components/Fenstermasse";
import Variants from "./components/Variants";
import contentKonfig from "../../content/konfigurator/konfigurator.json";
import { Button } from "@nextui-org/button";
import { Accordion, AccordionItem } from "@nextui-org/react";
import translations from "../../content/translations.json";
import { Textarea } from "@nextui-org/react";
export default function Page() {
  const { state, dispatch } = useContext(KonfiguratorContext);

  useEffect(() => {});

  return (
    <section className="konfigurator-wrapper p-12 rounded-[25px]">
      <div className=" bg-white  grid grid-cols-[20%_60%_20%] h-[80vh] mt-[100px] items-center justify-items-center">
        <div className="bg-gray h-full gradient-gray ">
          <h2>Konfigurator</h2>
          <Accordion variant="splitted">
            <AccordionItem
              key="1"
              aria-label="Hersteller"
              title="Hersteller"
              subtitle={
                state.hersteller ? (
                  translations.hersteller[state.hersteller - 1]
                ) : (
                  <span> Wähle deinen Fensterhersteller</span>
                )
              }
            ></AccordionItem>
          </Accordion>
          <Accordion variant="splitted" disabledKeys={["2"]}>
            <AccordionItem
              key="1"
              aria-label="Fenstermodell"
              title="Fenstermodell"
              subtitle={<span>Wähle dein Fenstermodell</span>}
            >
              {state.fenstertyp}
            </AccordionItem>
          </Accordion>
          <ul>
            <li className="grid  grid-cols-2 py-6 border-t-[1px] text-metal border-gray cursor-pointer px-6 hover:bg-white">
              Hersteller:
              <span className="rounded-full bg-tahiti p-2 text-white">
                {state.hersteller}
              </span>
            </li>
            <li className="grid  grid-cols-2 py-6 border-t-[1px] text-metal border-gray cursor-pointer px-6 hover:bg-white">
              Modell:
              <span className="rounded-full bg-tahiti p-2 text-white">
                {state.fenstertyp}
              </span>
            </li>
            <li className="grid  grid-cols-2 py-6 border-t-[1px] text-metal border-gray cursor-pointer px-6 hover:bg-white">
              Fenstertyp:
              <span className="rounded-full bg-tahiti p-2 text-white">
                {state.fenstervariant}
              </span>
            </li>
          </ul>

          {state.hersteller !== "" && <Fenster />}
          <Preis />
          {state.fenstertyp !== "" && <Variants />}
          <Fenstermasse />
        </div>
        <div>
          <Hersteller />
        </div>
        <div className="border-l-[1px] border-gray h-full  p-12">
          <h2>Zusammenfassung</h2>
          <p></p>
        </div>
      </div>
    </section>
  );
}
