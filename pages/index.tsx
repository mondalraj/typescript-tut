import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Home: NextPage = ({ locale }: any) => {
  const { t } = useTranslation();

  return (
    <div>
      <Head>
        <title>Simply Jet</title>
        <meta
          name="description"
          content="Charter your private jet effortlessly, anywhere, at any time."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar locale={locale} />
      <Header text={t("home:welcome_msg")} locale={locale} />      

      {/* <h1>{t("home:welcome_msg")}</h1>
      {locale === "de" ? <h2>This is german</h2> : ""}
      {locale === "ru" ? <h2>This is russian</h2> : ""} */}
    </div>
  );
};

// export async function getStaticProps({locale}: any){
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ['home'])),
//     }
//   }
// }
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
}

export default Home;

