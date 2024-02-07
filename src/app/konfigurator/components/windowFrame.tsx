"use client";

import { KonfiguratorContext } from "../../context/konfigurator.context";
import React, { useContext, useState } from "react";
import content from "../../../content/konfigurator/type.json";

export default function WindowFrame({ frame }: { frame: string }) {
  return (
    <section className="frame ml-32">
      {frame === "1d" && <div className="fenster-basic dreh-rechts"></div>}
      {frame === "2d" && (
        <div className="fenster-wrapper zweier grid grid-cols-2">
          <div className="fenster-basic zweier dreh-rechts dreh-top"></div>
          <div className="fenster-basic zweier dreh-links"></div>
        </div>
      )}
      {frame === "3d" && (
        <div className="fenster-wrapper  grid grid-cols-3">
          <div className="fenster-basic dreier "></div>
          <div className="fenster-basic dreier "></div>
          <div className="fenster-basic dreier "></div>
        </div>
      )}
    </section>
  );
}
