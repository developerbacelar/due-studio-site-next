import Head from 'next/head'
import Header from '@/components/Header'
import Reset from '../styles/reset';
import FirstSection from '@/components/Sections/FirstSection';
import BeneficiosSection from '@/components/Sections/BeneficiosSection';
import ModalidadesSection from '@/components/Sections/ModalidadesSection';
import EstruturaSection from '@/components/Sections/EstruturaSection';
import DepoimentosSection from '@/components/Sections/DepoimentosSection';
import Footer from '@/components/Sections/Footer';
import 'next/image'
import ButtonWhatsApp from '@/components/ButtonWhatsApp';
import FacebookPixel from '@/components/Pixel/Facebook';

export default function Home() {
  return (
    <>
      <Head>
        <title>Due Studio Personal</title>
        <meta name="description" content="Studio de Pilates & Treinamento Funcional" />
        <meta property="og:locale" content="pt_BR" />
        <meta name="facebook-domain-verification" content="awiem274di0wam3fwq0s0ldpzqfg87" />
        <meta property="og:image" content="/Due-Logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Código do Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=PHN9ZVZ042"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'PHN9ZVZ042');
            `
          }}
        />
      </Head>
      <Reset />
      <main>
        <Header />
        <FirstSection />
        <BeneficiosSection />
        <ModalidadesSection />
        <EstruturaSection />
        <DepoimentosSection />
        <Footer />
        <ButtonWhatsApp />
        <FacebookPixel />
      </main>
    </>
  )
}
