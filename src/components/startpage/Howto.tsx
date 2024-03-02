"use client";
import Image from "next/image";
import { faCheck, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Howto() {
  return (
    <section className=" bg-white mt-[20px] relative z-20">
      <div className="lg:max-w-[75%] bg-white text-left lg:text-center mx-auto py-6 px-6">
        <p className="mb-6">
          {" "}
          Entdecken Sie unsere umfangreiche Auswahl an Fenstern, die direkt aus
          Polen kommen und Ihnen Qualität zu unschlagbaren Preisen bieten.
        </p>
        <h2 className=" uppercase text-[24px] leading-[28px] text-left lg:text-center lg:text-[42px] text-black font-bold mt-0 lg:leading-[52px] w-full lg:w-[100%] mb-12">
          Willkommen bei [Firmenname] <br />
          Ihre Quelle für hochwertige Fenster aus Polen!{" "}
        </h2>

        <p>
          Wir sind stolz darauf, eine signifikante Steigerung bei den verkauften
          Fenstern verzeichnen zu können. Unsere Kunden vertrauen auf die
          Qualität und Zuverlässigkeit unserer Produkte, was sich in einer
          wachsenden Anzahl von zufriedenen Kunden widerspiegelt. Von privaten
          Hausbesitzern bis hin zu Unternehmen haben wir das Vertrauen einer
          Vielzahl von Kunden gewonnen, die auf der Suche nach hochwertigen
          Fenstern zu erschwinglichen Preisen sind.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:mt-48  p-12 lg:drop-shadow-lg bg-white mb-24 text-center">
          <div className="lg:border-r-1 border-gray">
            <p className="text-[52px] text-center lg:text-[82px] text-orange">
              1424
            </p>
            <p className="text-[24px] lg:text-[32px] text-black">
              verkaufte Fenster
            </p>
          </div>
          <div className="lg:border-r-1 border-gray">
            <p className="text-[52px] text-center lg:text-[82px] text-orange">
              420
            </p>
            <p className="text-[24px] lg:text-[32px] text-black">
              zufriedene Kunden
            </p>
          </div>
          <div className="">
            <p className="text-[52px] text-center lg:text-[82px] text-orange">
              832
            </p>
            <p className="text-[24px] lg:text-[32px] text-black">
              montierte Fenster
            </p>
          </div>
        </div>
        <div className="mb-12 mt-12">
          <div>
            <h3 className="mb-6 lg:mb-2 mt-0 uppercase font-bold text-[24px] lg:text-[42px]">
              So einfach geht's
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="grid grid-cols-1 lg:grid-cols-1  mb-6">
                <div className="text-left">
                  <div className="mask1">asd</div>
                  <p className="font-bold">Schritt 1 </p>
                  <h3 className="mb-2 mt-0 uppercase font-bold text-[24px] lg:text-[24px] text-orange">
                    Konfigurieren
                  </h3>
                  <p className="">
                    Beginnen Sie den Prozess, indem Sie Ihre Fenster nach Ihren
                    individuellen Anforderungen konfigurieren. Wählen Sie aus
                    einer Vielzahl von Optionen, darunter Fenstertyp, Material,
                    Farbe, Größe und Verglasung. Nutzen Sie unser
                    benutzerfreundliches Konfigurationstool, um Ihre Auswahl zu
                    treffen und sicherzustellen, dass Ihre Fenster perfekt zu
                    Ihrem Zuhause passen.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-1  mb-6">
                <div className="mask2"></div>
                <div className="text-left">
                  <p className="font-bold">Schritt 2 </p>
                  <h3 className="mb-2 mt-0 uppercase font-bold  text-[24px] lg:text-[24px] text-orange">
                    Angebot erstellen lassen
                  </h3>
                  <p className="-ml-0">
                    Sobald Sie Ihre Fenster konfiguriert haben, ist es Zeit,
                    sich ein passendes Angebot erstellen zu lassen. Unser Team
                    aus professionellen Fensterplanern wird Ihnen passendes
                    unverbindliches Angebot erstellen. Ein Berater wird sich
                    daraufhin mit Ihnen in Verbindung setzten um gemeinsam alle
                    Details zu besprechen.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-1 ">
                <div className="text-left">
                  <div className="mask3">asd</div>
                  <p className="font-bold">Schritt 3 </p>
                  <h3 className="mb-2 mt-0 uppercase font-bold text-[24px] lg:text-[24px] text-orange">
                    Maße nehmen
                  </h3>
                  <p>
                    Sollten Ihnen das Angebot zusagen, schicken wir Ihnen einen
                    Monteur zu Ihrer Adresse um die Maße Ihres Fensters im
                    Detail zu vermessen. Nach einer Prüfung unserer Profis,
                    werden wir im Anschluss Ihre Wunschfesnter bestellen.
                    <br />
                    Nach der Lieferung können wir die Fenster von unseren
                    Monteuren fachgerecht installiert werden.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid bg-orange rounded-xl mt-24 text-white p-6 lg:p-12 mb-24 grid-cols-1 lg:grid-cols-2 text-left">
          <div>
            <h3>
              {" "}
              Sie wünschen sich eine direkte Beratung am Telefon oder haben
              Fragen?
            </h3>
          </div>
          <div></div>
        </div>
        <div className="mb-24 mt-24">
          {" "}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <p className="text-[16px] text-left p-2  bg-white">
              <p className="font-bold text-[24px] mb-2">
                Hervorragende Qualität
                <br />{" "}
              </p>
              Wir führen Fenster von renommierten Marken, die für ihre
              hochwertige Verarbeitung und Materialien bekannt sind. Jedes
              Fenster wird sorgfältig hergestellt, um eine lange Lebensdauer und
              eine erstklassige Leistung zu gewährleisten.
            </p>
            <p className="text-[16px] text-left p-2  bg-white">
              <p className="font-bold text-[24px] mb-2">
                Vielfalt an Auswahlmöglichkeiten
                <br />{" "}
              </p>
              Egal, ob Sie nach modernen Kunststofffenstern, eleganten
              Holzfenstern oder langlebigen Aluminiumfenstern suchen - bei uns
              finden Sie eine breite Palette an Optionen, um Ihren individuellen
              Geschmack und Stil zu treffen.
            </p>
            <p className="text-[16px] text-left p-2  bg-white">
              <p className="font-bold text-[24px] mb-2">
                Energieeffizienz
                <br />{" "}
              </p>
              Viele unserer Markenfenster sind energieeffizient gestaltet und
              tragen dazu bei, den Energieverbrauch Ihres Hauses zu senken und
              den Wohnkomfort zu verbessern. Durch eine effiziente Wärmedämmung
              und hochwertige Verglasung können Sie Ihre Energiekosten
              reduzieren und gleichzeitig das Raumklima optimieren.
            </p>
            <p className="text-[16px] text-left p-2  bg-white">
              <p className="font-bold text-[24px] mb-2">
                Langjährige Garantie
                <br />{" "}
              </p>
              Wir stehen hinter der Qualität unserer Produkte und bieten
              langjährige Garantien auf viele unserer Markenfenster. So können
              Sie mit ruhigem Gewissen investieren und wissen, dass Sie
              langfristig von Ihren Fenstern profitieren werden.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-24">
          <div className="rounded-lg drop-shadow-lg w-full bg-white overflow-hidden">
            <Image
              src={"/images/bgimages/window4.jpg"}
              alt="Fensterkonfiguration, Fenster"
              width={400}
              height={400}
              className="h-auto w-full mx-auto"
            />
            <div className="p-6 text-left">
              <h3 className="font-bold text-[22px] mt-0 mb-2">
                Qualität zum unschlagbaren Preis
              </h3>
              <p>
                Bei uns glauben wir daran, unseren Kunden das Beste zu bieten.
                Unsere Fenster werden aus hochwertigen Materialien hergestellt
                und unterliegen strengen Qualitätskontrollen, um
                sicherzustellen, dass sie den höchsten Standards entsprechen.
                Und das alles zu einem Preis, der Ihr Budget nicht sprengt.
              </p>
            </div>
          </div>{" "}
          <div className="rounded-lg drop-shadow-lg w-full bg-white overflow-hidden">
            <Image
              src={"/images/bgimages/window5.jpg"}
              alt="Fensterkonfiguration, Fenster"
              width={400}
              height={400}
              className="h-auto w-full mx-auto"
            />
            <div className="p-6 text-left">
              <h3 className="font-bold text-[22px] mt-0 mb-2 ">
                Einfacher Bestellvorgang
              </h3>
              <p>
                Der Kauf von Fenstern war noch nie so einfach! Durchstöbern Sie
                unsere Webseite, konfigurieren Sie die gewünschten Fenster und
                lassen Sie sie von uns ein unverbindliches Angebot erstellen.
                Wir kümmern uns um den Rest, damit Sie sich zurücklehnen und
                sich auf die bevorstehende Verbesserung Ihres Wohnraums freuen
                können.
              </p>
            </div>
          </div>
          <div className="rounded-lg drop-shadow-lg w-full bg-white overflow-hidden">
            <Image
              src={"/images/bgimages/window1.jpg"}
              alt="Fensterkonfiguration, Fenster"
              width={400}
              height={400}
              className="h-auto w-full mx-auto"
            />
            <div className="p-6 text-left">
              <h3 className="font-bold text-[22px] mt-0 mb-2">
                Kundenzufriedenheit steht an erster Stelle
              </h3>
              <p>
                Wir legen großen Wert darauf, dass unsere Kunden mit ihren
                Einkäufen bei uns zufrieden sind. Unser engagiertes Team steht
                Ihnen jederzeit zur Verfügung, um Fragen zu beantworten,
                Empfehlungen auszusprechen und Ihnen bei jedem Schritt des
                Kaufprozesses zu helfen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
