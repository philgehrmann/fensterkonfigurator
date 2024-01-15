"use client";
import content from "../content/navigation.json";
import Link from "next/link";
import { useState } from "react";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navigation() {
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const showSubNavigation = (e: any) => {};
  return (
    <>
      <ul className="grid grid-flow-col justify-self-center" key="navigation">
        {content.navigation.map((item, index) => {
          return !item.subnav ? (
            <Link href={item.path} key={index}>
              <li
                className="grid content-center grid-flow-col px-4 h-[73px] text-[16px] border-b-2 border-transparent hover:border-b-2 hover:border-black font-[500] cursor-pointer"
                data-hover={item.subnavIdent}
              >
                {item.name}
              </li>
            </Link>
          ) : (
            <div>
              <li
                className="grid content-center grid-flow-col px-4 h-[73px] text-[16px] border-b-2 border-transparent hover:border-b-2 hover:border-black font-[500]  group hover:bg-orange hover:text-white cursor-pointer"
                data-hover={item.subnavIdent}
                key={index}
                onMouseEnter={(e) => showSubNavigation(e)}
              >
                {item.name}
                {item.subnav && (
                  <FontAwesomeIcon
                    className="inline-block pl-2 self-center"
                    icon={subMenuOpen ? faChevronUp : faChevronDown}
                  />
                )}

                <ul className="subnavigation bg-orange hidden group-hover:grid px-[25%] absolute w-full top-[120px] z-[200] h-[75px] py-[10px] left-0 text-center cursor-default items-center grid-flow-col shadow-xl">
                  {item.subnav.map((subnavitem, index) => (
                    <Link
                      href={subnavitem.path}
                      key={index}
                      className=" py-[20px] px-[20px] cursor-pointer hover:underline"
                    >
                      {subnavitem.type}
                    </Link>
                  ))}
                </ul>
              </li>
            </div>
          );
        })}
      </ul>
    </>
  );
}
