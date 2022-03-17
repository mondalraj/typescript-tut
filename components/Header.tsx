const Header = ({ text, cta, tagline, image_url, locale }: any) => {

    
  return (
    <div>
      {/* <h2>{text}</h2>
          <h3>{locale}</h3> */}
      <div className="w-screen h-screen flex flex-col justify-center items-center bg-[url('https://images.unsplash.com/photo-1625513123245-fcb02d69ad12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80')] bg-no-repeat bg-cover bg-center relative">
        <div className="bg-gradient-to-b from-black to-text opacity-50 absolute top-0 right-0 left-0 bottom-0 z-10"></div>
        <div className="z-40 flex flex-col justify-center items-center gap-4">
          <h2 className="text-white font-bold text-6xl">{text}</h2>
          <h3 className="text-primary font-normal tracking-wider text-3xl">
            PRIVATE JET CHARTER
          </h3>
          <h4 className="text-white font-normal tracking-widest text-xl">
            {tagline}
          </h4>
          <form>
            <div>
              <div className="">
                
              </div>
              <div></div>
              <div></div>
            </div>
            <button className="bg-white py-2 px-10 text-lg rounded-md shadow-lg my-8 hover:bg-text transition-all hover:text-white font-medium text-text">
              {cta}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
