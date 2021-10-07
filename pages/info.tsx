import { Page } from '../components/Page';
import Image from 'next/image';
import { LogoGrid } from '../components/LogoGrid';
import { AnchorLink } from '../components/AnchorLink';

export default function Info() {
  return (
    <Page title="Info">
      <div className="flex mb-20 md:mb-20 flex-col-reverse  md:flex-row md:gap-24">
        <div className="content-block">
          <p className="copy mb-4">
            Hallo! Ich bin Julian. Mich begeistern Softwareprodukte, die echte
            Probleme lösen und einen positiven Einfluss auf Menschen,
            Unternehmen und Umwelt haben.
          </p>
          <p className="copy mb-4">
            Wie schafft man es, dass Software Spaß macht, leicht verständlich
            ist und die Arbeit erleichtert? Kann man Technologie so einsetzen,
            dass sie das Leben ihrer Nutzer:innen verbessert? Wie können
            Unternehmen durch gute User Experience ihre Kunden besser verstehen
            und nachhaltig wachsen? Diese Fragen treiben mich an.
          </p>
          <p className="copy mb-4">
            Ich fühle mich in agilen Teams zuhause, lerne gerne mit und von
            anderen und schätze konstruktive Kommunikation. In den letzten
            Jahren arbeitete ich u.a. für Unternehmen und Start-ups aus den
            Bereichen eCommerce, Fashion, Baugewerbe, Kultur, Food und Games.
          </p>
          <p className="copy mb-4">
            Schreiben Sie mir. Ich berate Sie gerne zu komplexen UX Fragen oder
            verbessere einen bestehenden Teil Ihres Produkts. Gerne sende ich
            Ihnen eine detailliertes Projektportfolio zu.
          </p>
          <div className="mb-20">
            <AnchorLink
              path="mailto:hi@unfoldux.de?subject=Anfrage Projektportfolio"
              isExternal
              label="Detailliertes Projektportfolio anfragen"
            />
          </div>
        </div>
        <div className="w-40 md:w-auto mb-4">
          <Image src="/profile_pic.png" width={288} height={382} priority />
        </div>
      </div>
      <h2 id="ux" className="mb-8">
        Zertifizierungen und Mitgliedschaften
      </h2>
      <LogoGrid />
    </Page>
  );
}
