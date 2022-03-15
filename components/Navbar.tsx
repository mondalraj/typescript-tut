import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = ({ locale, contact, blogs, about }: any) => {
  const router = useRouter();
  const { pathname, asPath, query } = router;

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

  const translateLang = (e: any) => {
    console.log("Language changed to: " + e.target.value);
    //   router.push('/', '/', { locale: e.target.value })
    router.push({ pathname, query }, asPath, { locale: e.target.value });
  };

  return (
    <div className="bg-white p-5 px-10 fixed top-0 left-0 right-0 z-50 shadow-xl">
      <div className="flex justify-between items-center text-text">
        <Link href="/" passHref>
          <h3 className="text-2xl font-semibold cursor-pointer">SIMPLY JET</h3>
        </Link>

        <div className="flex items-center font-medium space-x-10 text-lg">
          <Link href="/about" passHref>
            <div className="cursor-pointer">{about}</div>
          </Link>
          <Link href="/contact" passHref>
            <div className="cursor-pointer">{contact}</div>
          </Link>
          <Link href="/blogs" passHref>
            <div className="cursor-pointer">{blogs}</div>
          </Link>
        </div>

        <div>
          <select
            className="bg-accent cursor-pointer py-2 px-5 text-text rounded-lg outline-none"
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
    </div>
  );
};

export default Navbar;
