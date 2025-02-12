import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#222222] text-white pt-[60px] lg:pt-[100px] xl:pt-[130px]">
      <div className="px-[30px] sm:px-[50px] xl:px-[160px] flex flex-col lg:flex-row justify-center items-center lg:items-start lg:justify-between gap-16">
        <div className="2xl:ps-[164px]">
          <img src="img/logo-footer.png" alt="logo" />
        </div>
        <div className="flex gap-12 xl:gap-[170px] flex-col sm:flex-row">
          <div>
            <h3 className="font-montserrat text-[17.3px] mb-10">
              Localisations
            </h3>
            <ul className="footer-menu">
              <li>
                <Link to="#">Paris</Link>
              </li>
              <li>
                <Link to="#">Levallois</Link>
              </li>
              <li>
                <Link to="#">Neuilly sur seine</Link>
              </li>
              <li>
                <Link to="#">Saint Ouen</Link>
              </li>
              <li>
                <Link to="#">Vincennes</Link>
              </li>
              <li>
                <Link to="#">Saint Mandé</Link>
              </li>
              <li>
                <Link to="#">Boulogne</Link>
              </li>
              <li>
                <Link to="#">Pantin</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-montserrat text-[17.3px] mb-10">
              A propos carreflexx
            </h3>
            <ul className="footer-menu">
              <li>
                <Link to="#">Contactez nous</Link>
              </li>
              <li>
                <Link to="#">Lire FAQs</Link>
              </li>
              <li>
                <Link to="/terms">Termes et Conditions</Link>
              </li>
              <li>
                <Link to="#">CGV</Link>
              </li>
              <li>
                <Link to="#">Nos Prix</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="font-lato text-center w-full sm:w-1/2 lg:w-full pt-[50px] sm:pt-[90px] pb-[70px] px-10 mx-auto">
          © CarreFlexx SAS 2025. All rights reserved.
        </div>
        <div className="relative mx-[30px] lg:mx-[60px] border-t border-[#303030] h-8 hidden sm:block">
          <img
            className="absolute left-0 bottom-8"
            src="img/footer-scotty-left.webp"
            alt="Scotty"
          />
          <img
            className="absolute right-0 bottom-8"
            src="img/footer-scotty-right.webp"
            alt="Scotty"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
