import Link from 'next/link'

export const Navbar = ({about, contact, blogs}: any) => {

    const languages = [
        {
            code: 'en',
            lang: 'English',
            flag: '🇺🇸'
        },
        {
            code: 'fr',
            lang: 'français',
            flag: '🇫🇷'
        },
        {
            code: 'it',
            lang: 'italiano',
            flag: '🇮🇹'
        },
        {
            code: 'de',
            lang: 'Deutsch',
            flag: '🇩🇪'
        },
        {
            code: 'ru',
            lang: 'русский',
            flag: '🇷🇺'
        },
        {
            code: 'es',
            lang: 'español',
            flag: '🇪🇸'
        },
    ]

    return (
        <div className="bg-slate-800 p-5 px-10">
            <div className="flex justify-between items-center text-white">

                <Link href='/' passHref>
                    <h3 className="text-2xl cursor-pointer">SIMPLY JET</h3>
                </Link>

                <div className="flex items-center space-x-10 text-lg">
                    <Link href='/about' passHref>
                        <div className='cursor-pointer'>{about}</div>
                    </Link>
                    <Link href='/contact' passHref>
                        <div className='cursor-pointer'>{contact}</div>
                    </Link>
                    <Link href='/blogs' passHref>
                        <div className='cursor-pointer'>{blogs}</div>
                    </Link>
                
                </div>
                <div>
                    <select value='en' onChange={ (e) => console.log(e.target.value) } className="bg-slate-300 cursor-pointer py-2 px-5 text-black rounded-lg outline-none" name="lang" id="lang">
                        {
                            languages.map((language, index) => {
                                return (
                                    <option key={index} value={language.code}>
                                        {language.flag} &nbsp; {language.lang}
                                    </option>
                                )
                            })
                        }
                    </select>
                </div>

            </div>
        </div>
    );
}