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
            <h3 className="mb-6 lg:mb-2 mt-0 uppercase font-bold text-[24px] lg:text-[62px]">
              So einfach geht's
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center mb-6">
              <div className="text-left">
                <p className="font-bold">Schritt 1 </p>
                <h3 className="mb-2 mt-0 uppercase font-bold text-[24px] lg:text-[62px] text-orange">
                  Konfigurieren
                </h3>
                <p className="lg:ml-12">
                  Beginnen Sie den Prozess, indem Sie Ihre Fenster nach Ihren
                  individuellen Anforderungen konfigurieren. Wählen Sie aus
                  einer Vielzahl von Optionen, darunter Fenstertyp, Material,
                  Farbe, Größe und Verglasung. Nutzen Sie unser
                  benutzerfreundliches Konfigurationstool, um Ihre Auswahl zu
                  treffen und sicherzustellen, dass Ihre Fenster perfekt zu
                  Ihrem Zuhause passen.
                </p>
              </div>
              <div className="mask1">asd</div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2  items-center mb-6">
              <div className="mask2"></div>
              <div className="text-left">
                <p className="font-bold">Schritt 2 </p>
                <h3 className="mb-2 mt-0 uppercase font-bold  text-[24px] lg:text-[42px] text-orange">
                  Angebot erstellen lassen
                </h3>
                <p className="-ml-0">
                  Sobald Sie Ihre Fenster konfiguriert haben, ist es Zeit, Ihre
                  Bestellung aufzugeben. Unser Online-Bestellvorgang ist schnell
                  und unkompliziert. Geben Sie einfach Ihre Konfigurationen ein,
                  überprüfen Sie Ihre Auswahl und schließen Sie Ihre Bestellung
                  ab. Unser Team steht Ihnen zur Verfügung, um eventuelle Fragen
                  zu beantworten und sicherzustellen, dass Ihre Bestellung
                  reibungslos verläuft.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2  items-center">
            <div className="text-left">
              <p className="font-bold">Schritt 3 </p>
              <h3 className="mb-2 mt-0 uppercase font-bold text-[24px] lg:text-[52px] text-orange">
                Liefern & Montieren
              </h3>
              <p className="lg:ml-12">
                Sobald Ihre Fenster geliefert wurden, ist unser erfahrenes
                Montageteam bereit, sie professionell in Ihrem Zuhause zu
                installieren. Wir vereinbaren einen geeigneten Termin für die
                Montage und sorgen dafür, dass Ihre neuen Fenster fachgerecht
                und effizient installiert werden. Genießen Sie sofort die
                Vorteile Ihrer neuen Fenster und profitieren Sie von einer
                verbesserten Energieeffizienz, erhöhtem Komfort und einer
                ansprechenden Ästhetik.
              </p>
            </div>
            <div className="mask1">asd</div>
          </div>
        </div>

        <div className="mb-12 mt-12">
          {" "}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <p className="text-[18px] text-left p-6  bg-white">
              <p className="font-bold text-[32px] mb-4">
                Hervorragende Qualität
                <br />{" "}
              </p>
              Wir führen Fenster von renommierten Marken, die für ihre
              hochwertige Verarbeitung und Materialien bekannt sind. Jedes
              Fenster wird sorgfältig hergestellt, um eine lange Lebensdauer und
              eine erstklassige Leistung zu gewährleisten.
            </p>
            <p className="text-[18px] text-left p-6  bg-white">
              <p className="font-bold text-[32px] mb-4">
                Vielfalt an Auswahlmöglichkeiten
                <br />{" "}
              </p>
              Egal, ob Sie nach modernen Kunststofffenstern, eleganten
              Holzfenstern oder langlebigen Aluminiumfenstern suchen - bei uns
              finden Sie eine breite Palette an Optionen, um Ihren individuellen
              Geschmack und Stil zu treffen.
            </p>
            <p className="text-[18px] text-left p-6  bg-white">
              <p className="font-bold text-[32px] text-orange mb-4">
                Energieeffizienz
                <br />{" "}
              </p>
              Viele unserer Markenfenster sind energieeffizient gestaltet und
              tragen dazu bei, den Energieverbrauch Ihres Hauses zu senken und
              den Wohnkomfort zu verbessern. Durch eine effiziente Wärmedämmung
              und hochwertige Verglasung können Sie Ihre Energiekosten
              reduzieren und gleichzeitig das Raumklima optimieren.
            </p>
            <p className="text-[18px] text-left p-6  bg-white">
              <p className="font-bold text-[32px] mb-4">
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-24">
          <div className="rounded-xl bg-white text-black p-12 text-left">
            <h3 className="font-bold mt-2 mb-0 uppercase text-[52px]">
              Einfach
            </h3>
            <h3 className="font-bold -mt-3 mb-4 first-line:mb-2 uppercase text-[52px] text-orange">
              Konfigurieren
            </h3>
            <p>
              Mit unserem Konfigurator könnnen Sie sich ganz unbeschwert Ihre
              Wunschfenster zusammestellen und uns im Anschluss Ihre
              Konfiguration schicken. Unser Serviceteam erstellt Ihnen darauf
              ein unverbindliches Angebot.
            </p>
            <ul className="mt-4s">
              <li className="mb-2">
                <FontAwesomeIcon
                  className="inline-block pl-2 self-center text-[16px] text-orange mr-2"
                  icon={faCheck}
                />
                einfache und schnelle Konfiguration
              </li>
              <li className="mb-2">
                <FontAwesomeIcon
                  className="inline-block pl-2 self-center text-[16px] text-orange mr-2"
                  icon={faCheck}
                />
                Auswahl an Marke, Modell, Type Farbe und Varianten
              </li>
              <li className="mb-2">
                <FontAwesomeIcon
                  className="inline-block pl-2 self-center text-[16px] text-orange mr-2"
                  icon={faCheck}
                />
                unverbindliches Angebot erstellen lassen
              </li>
            </ul>
          </div>
          <div className="drop-shadow-lg max-h-[650px] self-center rounded-[40px] overflow-hidden">
            <Image
              src={"/images/bgimages/window3.jpg"}
              alt="Fensterkonfiguration, Fenster"
              width={720}
              height={300}
              className="h-auto w-[80%] mx-auto rounded-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
