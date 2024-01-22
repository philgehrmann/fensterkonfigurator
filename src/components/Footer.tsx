
"use client";
import Link from "next/link";
import { useRef, useState } from "react";


export default function Footer() {

  const inputRef = useRef(null);
  const checkboxRef = useRef<HTMLInputElement>(null)
  const [mail , setMail] = useState("")
  const [subscribed , setSubscribed] = useState(false)

  const submitForm = async(e : any)  => {
    e.preventDefault()
    if(checkboxRef.current!.checked) {
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const data = {
      email_address: mail,
      status: 'subscribed',
    };
    let jsondata = stringify(data)
    const response = await fetch("api/subscribeuser",
      {
        body: jsondata,
        headers: {
          Authorization: `apikey ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
      }
    )
    if(response.status !== 400) {
      setSubscribed(true)
    }
  }}
  

    function stringify(obj :any) {
      let cache:any= [];
      let str:any = JSON.stringify(obj, function(key, value) {
        if (typeof value === "object" && value !== null) {
          if (cache.indexOf(value) !== -1) {
            // Circular reference found, discard key
            return;
          }
          // Store value in our collection
          cache.push(value);
        }
        return value;
      });
      cache = null; // reset the cache
      return str;
    }

  return (
    <footer className=" mx-auto border-t-4 lg:border-t-8 border-bermuda bg-black">
      <div className="xl:max-w-[80%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[20%_80%] p-12 text-white items-start">
          <div>
            <h3 className="text-[18px] text-bermuda uppercase mb-2 mt-0">
              SG BAU GmbH
            </h3>
            <p className="text-white text-[14px]"> Siebengebirgsstraße 14</p>
            <p className="text-white text-[14px]"> 53757 Sankt Augustin</p>
            <p className="text-white text-[14px] mt-4">
              {" "}
              Tel: +49 176 46771980
            </p>
          </div>
          <div className="grid grid-cols-1 mt-6 lg:mt-0 lg:grid-cols-4 items-start">
            <div>
              <h3 className="text-[18px] text-bermuda uppercase mb-0 mt-0">
                Erkunden
              </h3>
              <ul>
                <li>
                  <Link
                    className="text-[14px] leading-8 hover:underline"
                    href=""
                  >
                    Produktion
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-[14px] mt-4 leading-8 hover:underline"
                    href="/energieeffizienz"
                  >
                    Energieeffizienz
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-[14px] mt-4 leading-8 hover:underline"
                    href=""
                  >
                    Nachhaltigkeit
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-[14px] mt-4 leading-8 hover:underline"
                    href=""
                  >
                    Fragen unserer Kunden
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-[14px] mt-4 leading-8 hover:underline"
                    href=""
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-4 lg:mt-0">
              <h3 className="text-[18px] text-bermuda uppercase mb-0 mt-0">
                Produkte
              </h3>
              <ul>
                <li>
                  <Link
                    className="text-[14px] leading-8 hover:underline"
                    href=""
                  >
                    Fenster
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-[14px] mt-4 leading-8 hover:underline"
                    href=""
                  >
                    Türen
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-[14px] mt-4 leading-8 hover:underline"
                    href=""
                  >
                    Montage
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-4 lg:mt-0">
              <h3 className="text-[18px] text-bermuda uppercase mb-0 mt-0">
                Services
              </h3>
              <ul>
                <li>
                  <Link
                    className="text-[14px] leading-8 hover:underline"
                    href=""
                  >
                    Konfiguration
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-[14px] mt-4 leading-8 hover:underline"
                    href=""
                  >
                    Montage
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-[14px] mt-4 leading-8 hover:underline"
                    href=""
                  >
                    Lieferung
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-[14px] mt-4 leading-8 hover:underline"
                    href=""
                  >
                    Garantie & Gewährleistung
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-4 lg:mt-0">
              <h3 className="text-[18px] text-bermuda uppercase mb-0 mt-0">
                ABONNIEREN SIE DEN NEWSLETTER
              </h3>
              <form id="newsletter" onSubmit={submitForm} className="group">
                {!subscribed ?
                (<><input type="email" className="invalid:text-orangelight" placeholder="E-Mail Adresse" ref={inputRef} onChange={(e) => setMail(e.target.value) } required/>
                <label className="form-control my-2 invalid:text-orangelight">
                  <input type="checkbox" name="checkbox" ref={checkboxRef} required className="invalid:text-orangelight"/>
                  Ich habe die Informationen zur Verarbeitung meiner Daten in den <Link className="inline-block" href="datenschutz">Datenschutzbestimmungen</Link>  gelesen und akzeptiere diese.
                </label>
                <button className="btn uppercase">Abbonieren</button></>
                ):(
                  <p className="text-[12px] my-2">
                  Vielen Dank. Sie haben sich erfolgreich für den Newsletter angemeldet! <p className="text-[12px] mt-2">Sie erhalten nun eine Bestätigungsmail.</p>
                  </p>
                )
                }
               
              </form>
            </div>
          </div>
        </div>
        <p className="text-white text-[12px] text-center pb-2">
          ©2024 SG Bau Gmbh - Alle Rechte vorbehalten
        </p>
        <p className="text-white text-[12px] text-center pb-6">
          <Link className="text-[11px] underline mt-2" href="">
            Datenschutz
          </Link>{" "}
          -{" "}
          <Link className="text-[11px] underline mt-2" href="">
            Impressum
          </Link>{" "}
          -{" "}
          <Link className="text-[11px] underline mt-2" href="">
            Kontakt
          </Link>{" "}
        </p>
      </div>
    </footer>
  );
}
