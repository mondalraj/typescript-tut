import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Navbar } from '../components/Navbar'

const Home: NextPage = ({locale}: any) => {

  const {t} = useTranslation();

  console.log(locale);
  

  return (
    <div>
      <Head>
        <title>Simply Jet</title>
        <meta name="description" content="Charter your private jet effortlessly, anywhere, at any time." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar about={t('common:about')} contact={t('common:contact')} blogs={t('common:blogs')} />

      <h1>{t('home:welcome_msg')}</h1>
      <h2>{locale}</h2>
    </div>
  )
}

export async function getStaticProps({locale}: any){
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home', 'common'])),
    }
  }
}

export default Home
