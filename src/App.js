import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [code, setCode] = useState("");
  return (
    <div>
      <header
        style={{
          color: "black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <form style={{ margin: 50 }}>
          <label>
            Kód:
            <input
              name="code"
              type="password"
              security="true"
              checked={code}
              onChange={(event) => setCode(event.target.value)}
            />
          </label>
          <br />
          <label>
            Címzett Neve titulusa (pl Kálmán József marketing igazgató úr):
            <input
              name="name"
              type="text"
              checked={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <br />
          <label>
            Cég neve (pl: az Audi Hungária Kft):
            <input
              name="name"
              type="text"
              checked={company}
              onChange={(event) => setCompany(event.target.value)}
            />
          </label>
        </form>
        {code === "kvark2022" && (
          <div
            id={"div1"}
            style={{
              width: "60%",
              background: "#fafafa",
              padding: 20,
              borderRadius: 10,
            }}
          >
            <div>
              <p>
                <strong>Kedves {name}!</strong>
                <br />
                <br />
                Beke Márton, a Győrben működő <strong>Torula Művésztér </strong>
                vezetője és Marton Szabolcs, a Torulában megvalósítandó{" "}
                <strong>KVARK</strong> <strong>koncert </strong>zeneszerzője
                vagyunk.
                <br />
                <br />
                <strong>
                  <u>A TORULÁRÓL</u>
                </strong>
                <br />
                <br />A Torula alkotóművészek otthona: műtermek, időszaki
                kiállítások, workshopok lelőhelye. Fő tevékenységünk a fiatal,
                új utakat kereső művészek támogatása, ezáltal kortárs alkotások,
                produkciók létrejöttének elősegítése. Ezt egészítik ki a kortárs
                művészet hozzáférhetőségét, befogadásának elősegítését szolgáló
                programjaink.{" "}
                <strong>
                  Küldetésünk, hogy a kortárs művészetet az emberek életének
                  részévé tegyük.{" "}
                </strong>
                Mindezt úgy kívánjuk elérni, hogy inkubációs, művészeti és
                közösségi programokat működtetünk, szervezünk. Meggyőződésünk –
                és ez a Torula alapítása, működtetése mögötti fő motivációk
                egyike is – hogy mindezekkel hozzájárulunk társadalmunk tág
                értelemben vett egészségéhez és innovációs képességének
                megerősödéséhez.&nbsp;
              </p>
              <p>
                A Torula hosszútávú célja, hogy{" "}
                <strong>
                  megteremtse a fiatalok, a művészek és a kortárs művészet iránt
                  érdeklődők közösségi terét
                </strong>
                . Ahol nem csupán időt eltölteni és találkozni lehet, hanem
                együtt gondolkodni, inspirálódni, mind a tér által, mind az
                odajáró, ottlévő emberektől, mind pedig a térben szerveződő
                tevékenységektől. Azaz egy nyitott és mindenki által elérhető
                kortárs térré törekszik válni, amely be- és elfogad, közelít és
                összehoz, bemutat és megismertet, fel- és kitár embert és
                közösséget, művészt és művészeti irányzatot, várost és világot,
                elmét és szívet.
              </p>
              <p>
                Művészterünk működéséhez szorosan hozzátartozik az is, hogy
                minden évben pályázati lehetőséget nyújtunk a régió, valamint az
                ország fiatal, kortárs alkotói számára, hogy a Torula
                indusztriális tereiben kialakított műtermeket egyéni, vagy közös
                használatba vegyék. Így évente újabb és újabb alkotói kört,
                egyre tágabb közösséget tudunk megszólítani a rezidens
                alkotókon, valamint a saját projektjeinken keresztül.
                <br />
                <br />
                <strong>
                  A 2022-as év rezidens művészeinek köre, valamint a jövőre
                  tervezett projektek sora már kialakult, s ezek közül
                  szeretnénk most az Önök figyelmébe ajánlani a KVARK három
                  részből álló zenei előadását, ami 2022. május 21-én debütál
                  majd a Torulában. A Marton Szabolcs zeneszerző által
                  megálmodott KVARK egy kivételes, térhangzású zenei előadás,
                  amely az élet elemi részecskéire koncentrál.{" "}
                </strong>
                <br />
                <br />
                <strong>
                  <u>A KVARK</u>
                </strong>
                <br />
                <br />
                A három részre tagolt műsor alatt egy zenei kísérlet részesei
                lehetünk, aminek keretében&nbsp;garantáltan kilépünk a
                komfortzónánkból és együtt tapasztalhatunk valami egészen
                különleges, olykor már-már furcsán szürreális élményt. A
                félszimfonikus hangzást kísérő különleges effektek, a
                speciálisan erre az alkalomra készített mapping, valamint az
                egyedi&nbsp;fényfestés együttesen alkot egy sajátos, crossover
                világot: a KVARK világát. Szokás mondani: az életben egy dolog
                állandó, az pedig a változás. A KVARK az emberi élet legelemibb
                részét mutatja be, a változás pillanatát. Azt a pillanatot,
                amiből naponta akár&nbsp;több ezer is megtörténik velünk, olykor
                szinte észrevétlenül. Tudjuk, hogy a létünk nem tarthat örökké.
                És mint mindennek, ami véges, tétje is van. Erre a dramaturgiára
                épít a három felvonásos előadás is.
                <br />
                <br />
                <u>
                  <strong>EGYEDÜLÁLLÓ,&nbsp;EXKLUZÍV LEHETŐSÉG</strong>
                </u>
                <br />
                <br />
                <strong>
                  A nem mindennapi kezdeményezésnek 500 résztvevő lehet majd
                  szem- és fültanúja. Most azonban nem csak az eseményünk
                  vendége, de aktív szereplője és közreműködője is lehet az
                  előadásnak!
                </strong>
                <br />
                <br />
                Az elmúlt időszak fényében - különös tekintettel a pandémiára -
                mi a Torulában kiváltképp fontosnak tartjuk azt, hogy egy
                értékteremtő, művészileg fogékony és a társadalmi ügyek iránt is
                nyitott közösség tagjai lehessünk. Ennek a közösségnek a
                létrejöttéhez minél inkább szeretnénk hozzájárulni&nbsp;a saját
                eszközeinkhez és lehetőségeinkhez mérhető legnagyobb mértékben.
                Így nem csak helyet biztosítunk a fiatal, kortárs alkotók
                kezdeményezéseihez, de igyekszünk minden lehetőséget megragadni
                azok támogatására is. Segítők nélkül viszont nem megy!
                Csatlakozzon&nbsp;hozzánk és legyen Ön is a kortárs kultúra
                tevőleges alakítója!
                <br />
                <br />
                <strong>
                  Bízunk benne, hogy az általunk szorgalmazott kezdeményezés
                  támogatói szándékra találnak Önöknél
                </strong>
                , hiszen úgy véljük, hogy {company} is hasonló értékek mentén
                fogalmazza meg saját működését. Amennyiben ez a lehetőség
                felkeltette az érdeklődését, s szívesen tudna meg többet a KVARK
                előadásáról, akkor&nbsp;tekintse meg a projekt kapcsán
                összeállított bemutató anyagunkat, amelyben részletesen
                kifejtjük a Torulában elérhető, különféle szponzorációs
                lehetőségeket is. De szívesen állunk rendelkezésére egy konkrét
                megbeszélés alkalmával is, hogy igény szerint speciálisan{" "}
                {company} számára&nbsp;is összeállíthassunk egy egyedi
                megjelenéscsomagot - Önökkel egyeztetve.
                <br />
                <br />A támogatói kiajánlókat mellékletben csatolom. Bővebben a
                projektről itt olvashatnak:&nbsp;
                <a href="https://kvark.torula.hu/">https://kvark.torula.hu</a>.
                <br />
                &nbsp;
              </p>
              <p>
                <strong>Beke Márton</strong>
                <br />
                Torula vezetője
              </p>
              <p>
                <strong>Marton Szabolcs</strong>
                <br />
                Projekt megálmodója, zeneszerzője
              </p>
              <p>&nbsp;</p>
              <p>
                ***
                <br />
                KVARK koncert | Torula Művésztér
                <br />
                <a
                  href="http://kvark.torula.hu/"
                  rel="noopener"
                  target="_blank"
                >
                  http://kvark.torula.hu
                </a>
              </p>
              <p>
                <img
                  src="https://ci5.googleusercontent.com/proxy/OHLhjfjZyEnNFotOxjEG6BDrTpxssBkdKCRrsp0DSB25NMUUwOsdpZtGyTCsGOD8c1EfWQohAjJffPgCfwuewz5625KkvWu5fnEtDuks3jrjBe3eO2cpQYZ65VYC7q_-4T0oRatQXZJvF-CHMIJ9zUgPYPjbHrDOeAn3koB0blQnHBOyCPcUCPXB5GLwnCrSIukzcRWcZ_yNf-Z2ag=s0-d-e1-ft#https://docs.google.com/uc?export=download&id=1hoWSWfLIlr17aVyK0nsDnPZlyJqYWZTB&revid=0Bx6AnagnzdzMRVhGZXhIMFV0anJlamZRUlVFbGNxOS9yYXZRPQ"
                  style={{ height: "63px", width: "96px" }}
                />
              </p>
              <p>&nbsp;</p>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
