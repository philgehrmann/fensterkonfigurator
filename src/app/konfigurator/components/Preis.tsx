"use client";

import { KonfiguratorContext } from "../../context/konfigurator.context";
import React, { useContext, useEffect, useState } from "react";
import content from "../../../content/konfigurator/variants.json";
import { AnyARecord } from "dns";

export default function Preis() {
  const { state, dispatch } = useContext(KonfiguratorContext);
  const [fullPrice, setFullPrice] = useState(0);

  const calcPrice = () => {
    let calcWindowSize = (state.height * 2 + state.width * 2) / 10;
    let pirce: any = parseFloat(state.fensterpreis) * calcWindowSize;
    pirce = pirce.toFixed(2);
    setFullPrice(pirce);
    dispatch({ type: "UPDATE_FULLFENSTERPREIS", payload: fullPrice });
  };

  useEffect(() => {
    calcPrice();
  }, [state.fensterpreis, state.width, state.height]);
  return <section>{fullPrice}</section>;
}
