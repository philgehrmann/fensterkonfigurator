"use client";
import content from "../content/navigation.json";
import Link from "next/link";
import { useState, useEffect } from "react";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navigation({
  scrolltopdata,
}: {
  scrolltopdata: boolean;
}) {
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const showSubNavigation = (e: any) => {};
  return (
    <>
      <ul className="grid grid-flow-col justify-self-center" key="navigation">
        {content.navigation.map((item, index) => {
          return !item.subnav ? (
            <Link href={item.path} key={index}>
              <li
                className={
                  scrolltopdata
                    ? "navitem grid content-center text-white grid-flow-col uppercase duration-200 mx-2 px-4 py-2 text-[16px] font-[600] cursor-pointer "
                    : "navitem-black grid content-center text-black grid-flow-col uppercase duration-200 mx-2 px-4 py-2 text-[16px] font-[600] cursor-pointer "
                }
                data-hover={item.subnavIdent}
              >
                {item.name}
              </li>
            </Link>
          ) : (
            <div>
              <li
                className={
                  scrolltopdata
                    ? "navitem grid content-center text-white uppercase grid-flow-col mx-2 px-4 py-2 text-[16px] font-[600] cursor-pointer"
                    : "navitem-black grid content-center text-black uppercase grid-flow-col mx-2 px-4 py-2 text-[16px] font-[600] cursor-pointer"
                }
                data-hover={item.subnavIdent}
                key={index}
                onMouseEnter={(e) => showSubNavigation(e)}
              >
                {item.name}
              </li>
            </div>
          );
        })}
      </ul>
    </>
  );
}
