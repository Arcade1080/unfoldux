import { Page } from '../components/Page';
import Image from 'next/image';
import { LogoGrid } from '../components/LogoGrid';

export default function Info() {
  return (
    <Page title="Info">
      <div className="flex mb-12 md:mb-16 flex-col-reverse  md:flex-row md:gap-24">
        <p className="copy content-block ">
          Ich unter seit 2010 Start-ups und eCommerce-Unternehmen bei der
          Realisierung von digitalen Produkten. Mich begeistern
          Softwareprodukte, die echte Probleme lösen und Menschen dabei helfen
          und Unternehmen nachhaltig helfen. Nachhaltig Tätigkeiten umfassende
          Erfahrungen zur Realisierung von digitalen Produkten sammeln. Dabei
          war ich in zahlreichen Projekten maßgeblich an der Konzeption und
          Planung, der technischen Umsetzung als auch an der Evaluierung
          beteiligt. Ich habe wertvolle Einblicke in verschiedene Branchen
          gewinnen können und durfte als Teil von interdisziplinären Teams
          preisgekrönte Softwarelösungen entwickeln.
        </p>
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
