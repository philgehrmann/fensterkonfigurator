import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" mx-auto border-t-4 lg:border-t-8 border-bermuda bg-black">
      <div className="lg:max-w-[80%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[20%_80%] p-12 text-white items-start">
          <div>
            <h3 className="text-[24px] text-bermuda uppercase mb-0 mt-0">
              SG BAU GmbH
            </h3>
            <p className="text-white text-[16px]"> Siebengebirgsstraße 14</p>
            <p className="text-white text-[16px]"> 53757 Sankt Augustin</p>
            <p className="text-white text-[16px] mt-4">
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
              <form>
                <input type="email" placeholder="E-Mail Adresse" />
                <label className="form-control my-2">
                  <input type="checkbox" name="checkbox" />
                  Ich habe die Informationen zur Verarbeitung gemäß Art. 13 der
                  EU-VERORDNUNG 2016/679 und genehmigen die Verarbeitung der
                  Daten
                </label>
                <a className="btn uppercase">Abbonieren</a>
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
