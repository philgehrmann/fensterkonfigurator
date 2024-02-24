"use client";

import { KonfiguratorContext } from "../context/konfigurator.context";
import React, { useContext, useState, useEffect } from "react";
import Hersteller from "./components/Hersteller";
import Fenster from "./components/Fenster";
import Preis from "./components/Preis";
import Fenstermasse from "./components/Fenstermasse";
import Variants from "./components/Variants";
import contentKonfig from "../../content/konfigurator/konfigurator.json";
import { Accordion, AccordionItem } from "@nextui-org/react";
import translations from "../../content/translations.json";
import { Textarea } from "@nextui-org/react";
import { faCheck, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fenstertype from "./components/Type";
import WindowFrame from "./components/windowFrame";
import Farbe from "./components/Farbe";
import { Button } from "@nextui-org/react";

export default function Page() {
  const { state, dispatch } = useContext(KonfiguratorContext);
  const [currStep, setCurrStep] = useState(1);
  const steps = ["step-hersteller", "step-fenstermodell"];

  const toggleStepNavigation = (step: any) => {
    let allSteps = document.querySelectorAll(".step");
    let actualStep = document.querySelector(".step-" + step);
    allSteps.forEach((step) => {
      step.classList.remove("block");
      step.classList.add("hidden");
    });
    actualStep?.classList.remove("hidden");
    actualStep?.classList.add("block");
    setCurrStep(step);
  };

  const nextStep = () => {
    let newStep = currStep + 1;
    let allSteps = document.querySelectorAll(".step");
    let actualStep = document.querySelector(".step-" + newStep);
    allSteps.forEach((step) => {
      step.classList.remove("block");
      step.classList.add("hidden");
    });
    actualStep?.classList.remove("hidden");
    actualStep?.classList.add("block");
    setCurrStep(newStep);
  };

  const prevStep = () => {
    if (currStep > 1) {
      let newStep = currStep - 1;
      let allSteps = document.querySelectorAll(".step");
      let actualStep = document.querySelector(".step-" + newStep);
      allSteps.forEach((step) => {
        step.classList.remove("block");
        step.classList.add("hidden");
      });
      actualStep?.classList.remove("hidden");
      actualStep?.classList.add("block");
      setCurrStep(newStep);
    }
  };

  useEffect(() => {}, [currStep]);

  return (
    <div className="konfigurator-wrapper overflow-x-hidden  relative h-[100vh]">
      <div className=" bg-white grid grid-cols-1 xl:grid-cols-[10%_40%_50%] xl:mt-[115px] ">
        <div className="hidden xl:block"></div>
        <div className="h-[80%] drop-shadow-lg rounded-b-xl bg-white relative z-[100]">
          <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] h-[80%] bg-lightgray items-center">
            <div className="  bg-lightgray lg:h-[600px] grid items-center">
              <div className="konfigNav">
                <ul>
                  <li
                    onClick={() => toggleStepNavigation(1)}
                    className={
                      "border-y-[1px] border-white px-4 py-4 hover:bg-white hover:border-l-[4px] hover:text-orange hover:border-l-orange cursor-pointer" +
                      (currStep === 1 || state.hersteller !== ""
                        ? " bg-white border-l-orange border-l-[4px]"
                        : "")
                    }
                  >
                    <h4>
                      Hersteller{" "}
                      {state.hersteller ? (
                        <FontAwesomeIcon
                          className="inline-block pl-2 self-center text-[16px] text-orange"
                          icon={faCheck}
                        />
                      ) : (
                        ""
                      )}
                    </h4>
                  </li>
                  <li
                    onClick={() => toggleStepNavigation(2)}
                    className={
                      "border-b-[1px] border-white px-4 py-4 hover:bg-white hover:border-l-[4px] hover:text-orange hover:border-l-orange cursor-pointer" +
                      (currStep === 2 || state.fenstermodell !== ""
                        ? " bg-white border-l-orange border-l-[4px]"
                        : "") +
                      (state.hersteller === ""
                        ? " opacity-50 pointer-events-none"
                        : "")
                    }
                  >
                    <h4>
                      Fenstermodell
                      {state.fenstermodell ? (
                        <FontAwesomeIcon
                          className="inline-block pl-2 self-center text-[16px] text-orange"
                          icon={faCheck}
                        />
                      ) : (
                        ""
                      )}
                    </h4>
                  </li>
                  <li
                    onClick={() => toggleStepNavigation(3)}
                    className={
                      "border-b-[1px] border-white px-4 py-4 hover:bg-white hover:border-l-[4px] hover:text-orange hover:border-l-orange cursor-pointer" +
                      (currStep === 3 || state.fenstermodell !== ""
                        ? " bg-white border-l-orange border-l-[4px]"
                        : "") +
                      (state.fenstermodell === ""
                        ? " opacity-50 pointer-events-none"
                        : "")
                    }
                  >
                    <h4>
                      Fenstertyp{" "}
                      {state.fenstertyp ? (
                        <FontAwesomeIcon
                          className="inline-block pl-2 self-center text-[16px] text-orange"
                          icon={faCheck}
                        />
                      ) : (
                        ""
                      )}
                    </h4>
                  </li>
                  <li
                    onClick={() => toggleStepNavigation(4)}
                    className={
                      "border-b-[1px] border-white px-4 py-4 hover:bg-white hover:border-l-[4px] hover:text-orange hover:border-l-orange cursor-pointer" +
                      (currStep === 4 || state.fenstertyp !== ""
                        ? " bg-white border-l-orange border-l-[4px]"
                        : "") +
                      (state.fenstertyp === ""
                        ? " opacity-50 pointer-events-none"
                        : "")
                    }
                  >
                    <h4>
                      Öffnungsrichtung
                      {state.fenstervariant !== "" ? (
                        <FontAwesomeIcon
                          className="inline-block pl-2 self-center text-[16px] text-orange"
                          icon={faCheck}
                        />
                      ) : (
                        ""
                      )}
                    </h4>
                  </li>
                  <li
                    onClick={() => toggleStepNavigation(5)}
                    className={
                      "border-b-[1px] border-white px-4 py-4 hover:bg-white hover:border-l-[4px] hover:text-orange hover:border-l-orange cursor-pointer" +
                      (currStep === 5 || state.fenstervariant !== ""
                        ? " bg-white border-l-orange border-l-[4px]"
                        : "") +
                      (state.fenstervariant === ""
                        ? " opacity-50 pointer-events-none"
                        : "")
                    }
                  >
                    <h4>
                      Maße
                      {state.width !== "" && state.height !== "" ? (
                        <FontAwesomeIcon
                          className="inline-block pl-2 self-center text-[16px] text-orange"
                          icon={faCheck}
                        />
                      ) : (
                        ""
                      )}
                    </h4>
                  </li>
                  <li
                    onClick={() => toggleStepNavigation(6)}
                    className={
                      "border-b-[1px] border-white px-4 py-4 hover:bg-white hover:border-l-[4px] hover:text-orange hover:border-l-orange cursor-pointer" +
                      (currStep === 6 || state.color !== ""
                        ? " bg-white border-l-orange border-l-[4px]"
                        : "") +
                      (state.fenstervariant === ""
                        ? " opacity-50 pointer-events-none"
                        : "")
                    }
                  >
                    <h4>
                      Farbe
                      {state.color !== "" ? (
                        <FontAwesomeIcon
                          className="inline-block pl-2 self-center text-[16px] text-orange"
                          icon={faCheck}
                        />
                      ) : (
                        ""
                      )}
                    </h4>
                  </li>
                  <li
                    onClick={() => toggleStepNavigation(7)}
                    className={
                      "border-b-[1px] border-white px-4 py-4 hover:bg-white hover:border-l-[4px] hover:text-orange hover:border-l-orange cursor-pointer" +
                      (currStep === 7
                        ? " bg-white border-l-orange border-l-[4px]"
                        : "") +
                      (state.fenstermasse === ""
                        ? " opacity-50 pointer-events-none"
                        : "")
                    }
                  >
                    <h4>
                      Glas
                      {state.fenstermasse ? (
                        <FontAwesomeIcon
                          className="inline-block pl-2 self-center text-[16px] text-orange"
                          icon={faCheck}
                        />
                      ) : (
                        ""
                      )}
                    </h4>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white h-[680px] p-12 overflow-y-scroll pb-24">
              <div className="step step-1">
                <Hersteller />
              </div>
              <div className="hidden step step-2">
                {state.hersteller !== "" && <Fenster />}
              </div>
              <div className="hidden step step-3">
                {state.fenstermodell !== "" && <Fenstertype />}
              </div>
              <div className="hidden step step-4">
                {state.fenstertyp !== "" && <Variants />}
              </div>
              <div className="hidden step step-5">
                {state.fenstervariant !== "" && <Fenstermasse />}
              </div>
              <div className="hidden step step-6">
                {state.fenstervariant !== "" && <Farbe />}
              </div>
            </div>
            <div className="bg-white p-6 col-span-2 overflow-y-scroll border-t-[2px] border-gray z-[150] rounded-b-lg">
              <div className="grid grid-cols-[60%_40%] items-center">
                <div>
                  <Button
                    size="lg"
                    variant="bordered"
                    className="bg-transparent text-orange mr-4"
                    onClick={() => prevStep()}
                  >
                    Zurück
                  </Button>
                  <Button
                    size="lg"
                    className="bg-orange text-white"
                    onClick={() => nextStep()}
                  >
                    Weiter
                  </Button>
                </div>
                <div className="justify-self-end text-right">
                  <p className="text-[12px]">unverbindliche Preisempfehlung</p>
                  <p className="font-bold text-[42px] ">
                    <Preis />
                  </p>
                </div>
                <p className="text-[11px] col-span-2 hidden">
                  *Bitte beachten Sie, dass es sich beim angezeigten Preis um
                  eine Konfigurationsvariante handelt. Bei individuellen
                  Wünschen, kann der Preis variieren.
                </p>
                <p className="text-[11px] col-span-2 hidden">
                  *Der angzeigte Preis beinhaltet lediglich den Fensterpreis,
                  nicht jedoch die Montage und Lieferung.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="konfigwrapper pl-[12%] lg:p-24 pr-[16%] bg-black relative lg:absolute right-0 left-0 top-0 grid lg:grid-cols-1 xl:grid-cols-[60%_40%] lg:h-[100vh]">
          <div className="xl:block"></div>
          <div>
            <div className="windowfloorbg lg:absolute"></div>
            <div className="max-w-[500px] mt-36">
              <WindowFrame frame={state.fenstertyp ? state.fenstertyp : "1d"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
