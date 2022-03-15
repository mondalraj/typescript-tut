const Header = ({text, locale}: any) => {
    return (
      <div>
          <h2>{text}</h2>
          <h3>{locale}</h3>
      </div>
    );
  };
  
  export default Header;
  
  