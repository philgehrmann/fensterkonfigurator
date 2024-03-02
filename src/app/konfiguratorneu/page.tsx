"use client";
import content from "../../content/konfiguratorneu/fenster.json";
import React, { useContext } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { KonfiguratorContext } from "../context/konfiguratorneu.context";

export default function KonfiguratorNeu() {
  const { state, dispatch } = useContext(KonfiguratorContext);

  const updateState = (stateType: String, value: any) => {
    dispatch({ type: "UPDATE_STATE", key: stateType, payload: value });
    console.log(state);
  };
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] pl-0 mt-[122px] max-w-[1600px] mx-auto">
        <div className="konfig-wrapper  bg-white p-6 h-full drop-shadow-lg ">
          {" "}
          <Accordion selectionMode="multiple">
            <AccordionItem key={1} aria-label="Hersteller" title="Hersteller">
              <div className="grid grid-cols-3">
                {content.fenster.map((hersteller: any, index: any) => {
                  return (
                    <a
                      key={index}
                      className="p-4"
                      onClick={() => updateState("hersteller", hersteller.id)}
                    >
                      {hersteller.hersteller}
                    </a>
                  );
                })}
              </div>
            </AccordionItem>
          </Accordion>
          <Accordion selectionMode="multiple">
            <AccordionItem
              key={1}
              aria-label="Fenstermodell"
              title="Fenstermodell"
            >
              {content.fenster.map((hersteller: any, index: any) => {
                return <div key={index}>{hersteller.hersteller}</div>;
              })}
            </AccordionItem>
          </Accordion>
          <Accordion selectionMode="multiple">
            <AccordionItem key={1} aria-label="Fenstertyp" title="Fenstertyp">
              {content.fenster.map((hersteller: any, index: any) => {
                return <div key={index}>{hersteller.hersteller}</div>;
              })}
            </AccordionItem>
          </Accordion>
          <Accordion selectionMode="multiple">
            <AccordionItem
              key={1}
              aria-label="Fenstervariante"
              title="Fenstervariante"
            >
              {content.fenster.map((hersteller: any, index: any) => {
                return <div key={index}>{hersteller.hersteller}</div>;
              })}
            </AccordionItem>
          </Accordion>
          <Accordion selectionMode="multiple">
            <AccordionItem
              key={1}
              aria-label="Fensterfarbe"
              title="Fensterfarbe"
            >
              {content.fenster.map((hersteller: any, index: any) => {
                return <div key={index}>{hersteller.hersteller}</div>;
              })}
            </AccordionItem>
          </Accordion>
          <Accordion selectionMode="multiple">
            <AccordionItem
              key={1}
              aria-label="Fensterverglasung"
              title="Fensterverlasung"
            >
              {content.fenster.map((hersteller: any, index: any) => {
                return <div key={index}>{hersteller.hersteller}</div>;
              })}
            </AccordionItem>
          </Accordion>
          <Accordion selectionMode="multiple">
            <AccordionItem
              key={1}
              aria-label="weitere Optionen"
              title="weitere Optionen"
            >
              {content.fenster.map((hersteller: any, index: any) => {
                return <div key={index}>{hersteller.hersteller}</div>;
              })}
            </AccordionItem>
          </Accordion>
        </div>
        <div className="col-start-1 row-start-1 lg:col-start-2 lg:row-start-1">
          <div>Konfiguratorneu</div>
        </div>
      </div>
    </>
  );
}
