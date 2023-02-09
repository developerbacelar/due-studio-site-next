import Head from 'next/head'
import Header from '@/components/Header'
import Reset from '../styles/reset';
import FirstSection from '@/components/Sections/FirstSection';
import BeneficiosSection from '@/components/Sections/BeneficiosSection';
import ModalidadesSection from '@/components/Sections/ModalidadesSection';
import EstruturaSection from '@/components/Sections/EstruturaSection';
import DepoimentosSection from '@/components/Sections/DepoimentosSection';
import Footer from '@/components/Sections/Footer';
import ButtonWhatsApp from '@/components/ButtonWhatsApp';
import GoogleAnalyticsScript from '@/components/Scripts';



export default function Home() {
  return (
    <>
      <Head>
        <title>Due Studio Personal</title>
        <meta name="description" content="Studio de Pilates & Treinamento Funcional" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <GoogleAnalyticsScript/>
      </Head>
      <Reset />
      <main>
        <Header />
        <FirstSection/>
        <BeneficiosSection />
        <ModalidadesSection />
        <EstruturaSection />
        {/* <DepoimentosSection / */}
        <Footer />
        <ButtonWhatsApp />
      </main>
    </>
  )
}
