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
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Checkbox, Input } from "@nextui-org/react";
import { useSwiper } from "swiper/react";
import Verglasung from "./components/Verglasung";

export default function Page() {
  const { state, dispatch } = useContext(KonfiguratorContext);
  const [currStep, setCurrStep] = useState(1);
  const steps = ["step-hersteller", "step-fenstermodell"];
  const [showInfo, setShowInfo] = useState(false);
  const swiper = useSwiper();
  const [showFormular, setShowFormular] = useState(false);

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

  const getCookie = (cname: any) => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };

  const setCookie = (cname: any, cvalue: any, exdays: any) => {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
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

  const removeInfoScreen = () => {
    const infocookie = getCookie("infoscreen");
    if (infocookie === "") {
      setCookie("infoscreen", true, 7);
      setShowInfo(false);
    }
  };
  const checkInfoScreen = () => {
    const infocookie = getCookie("infoscreen");
    console.log(infocookie);
    if (infocookie === "true") {
      setShowInfo(false);
    } else {
      setShowInfo(true);
    }
  };

  const showForm = () => {
    setShowFormular(true);
  };

  useEffect(() => {
    checkInfoScreen();
  }, [currStep]);

  return (
    <div className="konfigurator-wrapper overflow-hidden  relative h-[100vh]">
      <div className=" bg-white grid grid-cols-1 xl:grid-cols-[10%_40%_50%] xl:mt-[115px] ">
        <div className="hidden xl:block"></div>
        <div
          className={
            "w-full  p-12 overflow-y-scroll h-[90%]  drop-shadow-lg rounded-b-xl bg-white relative z-[100]" +
            (showFormular ? " block " : " hidden")
          }
        >
          <div className="grid grid-cols-2 items-center">
            <h3 className="mt-2 mb-2">Angebot abschicken</h3>
            <div className="justify-self-end text-sm">schließen</div>
          </div>
          <p className="mb-4 text-sm">
            {" "}
            Bitte vervollständigen Sie Ihre Daten, damit wir Sie im nachhinein
            konkaktieren und Ihnen ihr individuelles Angebot zuschicken können.
          </p>
          <div className="">
            <form>
              <div className="grid w-full grid-cols-1 gap-4">
                <Input type="text" label="Anrede" required className="my-2" />
                <Input type="text" label="Vorname" required className="my-2" />
                <Input type="text" label="Nachname" required className="my-2" />
                <Input
                  type="text"
                  label="Emailadresse"
                  required
                  className="my-2"
                />
                <Input type="text" label="Straße" required className="my-2" />
                <Input type="text" label="PLZ" required className="my-2" />
                <Input type="text" label="Ort" required className="my-2" />
                <Checkbox>
                  Ja ich möchte auch den Montageservice nutzen.
                  <p className="text-[11px]">
                    {" "}
                    Ohne Montageservice berechnen wir den Versand der Fenster
                    seperat.
                  </p>
                </Checkbox>
                <Button className="bg-orange text-white">
                  Angebot erstellen lassen
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div
          className={
            "h-[80%] drop-shadow-lg rounded-b-xl bg-white relative z-[100]" +
            (showFormular ? " hidden " : " block")
          }
        >
          <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] h-[80%] bg-lightgray items-center">
            <div className=" bg-red lg:h-[600px] grid items-center">
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
                      (state.color === ""
                        ? " opacity-50 pointer-events-none"
                        : "")
                    }
                  >
                    <h4>
                      Glas
                      {state.verglasung ? (
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
              <div className="hidden step step-7">
                {state.color !== "" && <Verglasung />}
              </div>
            </div>
            <div className="bg-white p-6 col-span-2 overflow-y-scroll border-t-[2px] border-gray z-[150] rounded-b-lg">
              <div className="grid grid-cols-[60%_40%] items-center">
                <div>
                  <Button
                    size="lg"
                    className="bg-orange text-white"
                    onClick={() => showForm()}
                  >
                    Konfiguration abschicken
                  </Button>
                  <Button
                    size="lg"
                    className="bg-transparent text-black text-[11px]"
                  >
                    Zusammenfassung ansehen
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
      {showInfo && (
        <div className="infoscreen grid fixed top-0 z-[300] bg-black-rgba w-full h-full items-center">
          <div className="infocontent rounded-xl bg-white p-12 lg:max-w-[75%] mx-auto text-center ">
            <h3 className="text-orange font-bold uppercase mb- mt-0 mb-0">
              Willkommen beim Fensterkonfigurator
            </h3>
            <p className="mb-12"> Ihr unverbindlicher Fensterkonfigurator.</p>
            <div className="grid grid-cols-3 text-left gap-24">
              <div>
                <div className="mask4"></div>
                <p className="text-sm">Schritt 1</p>
                <p className="font-bold">Fenster zusammenstellen</p>
                <p className="text-sm mt-2">
                  {" "}
                  Stellen Sie Ihre Fenster nach Ihren Wünschen zusammen und
                  erhalten sofort einen Preisvorschlag für Ihre Konfiguration.
                  Sollten Sie mit der Konfiguration zufrieden sein. Bestätigen
                  Sie ihre Konfiguration mit dem Button "Konfiguration prüfen".
                </p>
              </div>
              <div>
                <div className="mask5"></div>
                <p className="text-sm">Schritt 2</p>
                <p className="font-bold">Konfiguration prüfen</p>
                <p className="text-sm mt-2">
                  {" "}
                  Lassen Sie sich Ihre Konfiguration anzeigen und prüfen Sie
                  Ihre Auswahl. Sollten Ihre Einstellungen passen, bestätigen
                  Sie die Auswahl mit "Angebot anfragen". Ihre Konfiguration
                  wird dann von unserem Team geprüft und individuell
                  zusammengestellt.
                </p>
              </div>
              <div>
                <div className="mask6"></div>
                <p className="text-sm">Schritt 2</p>
                <p className="font-bold">Angebotserstellung</p>
                <p className="text-sm mt-2">
                  {" "}
                  Unsere Fensterplaner werden Ihnen ein unverbindliches Angebot
                  auf der Grundlage Ihres Wunschs erstellen und Ihnen zeitnah
                  per Email zusenden. Sollte Sie unser Angebot überzeugen,
                  werden wir persönlich bei Ihnen ein Aufmaß Vorort anfertigen
                  und Ihre Fenster bestellen.
                </p>
              </div>
            </div>
            <div className="text-sm mt-12 text-left">
              <div className="grid grid-cols-1 items-center justify-items-end ">
                <div className="self-end justify-items-end ">
                  <Button
                    size="lg"
                    variant="bordered"
                    className="bg-orange text-white mr-4"
                    onClick={() => removeInfoScreen()}
                  >
                    Konfiguration starten
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
