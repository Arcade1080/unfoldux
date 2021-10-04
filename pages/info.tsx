import { Page } from '../components/Page';
import Image from 'next/image';
import { LogoGrid } from '../components/LogoGrid';
import { AnchorLink } from '../components/AnchorLink';

export default function Info() {
  return (
    <Page title="Info">
      <div className="flex mb-20 md:mb-20 flex-col-reverse  md:flex-row md:gap-24">
        <div className="content-block">
          <p className="copy mb-4 md:mb-12">
            Hallo! Ich bin Julian. Mich begeistern Softwareprodukte, die echte
            Probleme lösen und einen positiven Einfluß auf Menschen, Unternehmen
            und Umwelt haben. In den letzten Jahren arbeitete ich u.a. für
            Unternehmen und Start-ups aus den Bereichen Fashion, Baugewerbe,
            Games, Food, DIY und Retail.
          </p>
          <div>
            <AnchorLink
              path="mailto:hi@unfoldux.de?subject=Anfrage Projektportfolio"
              isExternal
              label="Detailiertes Projektportfolio anfragen"
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
