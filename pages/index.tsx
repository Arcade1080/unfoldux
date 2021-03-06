import { ServicesLinks } from '../components/ServicesLinks';
import { Page } from '../components/Page';
import { Stage } from '../components/Stage';

export default function Home() {
  return (
    <Page>
      <Stage />
      <p className="copy content-block mb-12 md:mb-16">
        Ich arbeite seit mehr 10 Jahren an der Schnittstelle von Design,
        Business und Softwareentwicklung. Mich begeistert die Herausforderung,
        durch nutzerorientiertes Design komplexe Problemstellungen zu lösen und
        mit Business-Zielen in Einklang zu bringen.
      </p>

      <h2 className=" mb-4 md:mb-6">Meine Leistungen auf einen Blick</h2>
      <ServicesLinks />
    </Page>
  );
}
