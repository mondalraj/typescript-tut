import { useRouter } from 'next/router'

const Navbar = ({locale}: any) => {

    const router = useRouter()
    const { pathname, asPath, query } = router

  const languages = [
    {
      code: "en",
      lang: "English",
      flag: "🇺🇸",
    },
    {
      code: "fr",
      lang: "français",
      flag: "🇫🇷",
    },
    {
      code: "it",
      lang: "italiano",
      flag: "🇮🇹",
    },
    {
      code: "de",
      lang: "Deutsch",
      flag: "🇩🇪",
    },
    {
      code: "ru",
      lang: "русский",
      flag: "🇷🇺",
    },
    {
      code: "es",
      lang: "español",
      flag: "🇪🇸",
    },
  ];

  const translateLang = (e : any) => {
      console.log("Language changed to: "+ e.target.value);
    //   router.push('/', '/', { locale: e.target.value })
    router.push({ pathname, query }, asPath, { locale: e.target.value })
      
  }

  return (
    <div>
      <h3>This is navbar</h3>
      <div>
        <select
          className=""
          name="lang"
          id="lang"
          defaultValue={locale}
          onChange={translateLang}
        >
          {languages.map((language, index) => {
            return (
              <option key={index} value={language.code}>
                {language.flag} &nbsp; {language.lang}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Navbar;