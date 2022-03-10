import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import {navbar as Navbar} from '../components/Navbar'
import Header from '../components/Header'
import BodyContent from '../components/BodyContent'
import Footer from '../components/Footer'
// import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const router = useRouter()
  const { t } = useTranslation('navbar')

  return (
    <div>
      <Head>
        <title>Simply Jet</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar companyName={t('companyName')} about={t('about')} contact={t('contact')} blogs={t('blogs')} />
      <Header />
      <BodyContent />
      <Footer />
      
    </div>
  )
}

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...await serverSideTranslations(locale, ['navbar']),
  },
})

export default Home
