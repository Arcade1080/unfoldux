import { Page } from '../components/Page';
import Image from 'next/image';

export default function Info() {
  return (
    <Page title="Info">
      <div className="flex gap-20">
        <p className="copy content-block  mb-4">
          Ich untersütze seit 2010 Start-ups und eCommerce-Unternehmen und
          konnte im Rahmen meiner beruflichen als auch freiberuflichen
          Tätigkeiten umfassende Erfahrungen zur Realisierung von digitalen
          Produkten sammeln. Dabei war ich in zahlreichen Projekten maßgeblich
          an der Konzeption und Planung, der technischen Umsetzung als auch an
          der Evaluierung beteiligt. Ich habe wertvolle Einblicke in
          verschiedene Branchen gewinnen können und durfte als Teil von
          interdisziplinären Teams preisgekrönte Softwarelösungen entwickeln.
        </p>
        <div className="w ">
          <Image src="/profile_pic.png" width={288} height={382} priority />
        </div>
      </div>
      <h2 id="ux" className="mb-8">
        Zertifizierungen und Mitgliedschaften
      </h2>
    </Page>
  );
}
