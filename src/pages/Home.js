import Services from "../components/Services";

const Home = () => {
  return (
    <main>
      <section
        id="hero"
        className="xl:h-[760px] flex items-center justify-center text-center text-white py-24 md:py-40 xm:py-32 xl:py-0 bg-center"
      >
        <div className="xl:w-[1200px] 2xl:w-[1280px] max-w-full mx-auto px-7 sm:px-14 2xl:px-10 pb-2 sm:pb-16 drop-shadow-lg">
          <h1 className="text-[40px] sm:text-[58px] xl:text-[68.36px] font-montserrat mb-[20px] sm:mb-[40px] xl:mb-[60px]">
            Conciergerie Carreflexx
          </h1>
          <h3 className="text-[1.5rem] sm:text-[1.8rem] xl:text-[2rem] font-inter text-left">
            Nous mettons à disposition des particuliers et des professionnels un
            service de Conciergerie de micromobilité pour maximiser leurs
            revenus locatifs
          </h3>
        </div>
      </section>
      <section className="border-b border-[#EDEDED] mt-[50px] xs:mt-[100px] md:mt-[200px] 2xl:mt-[500px] pb-[50px] xs:pb-[100px] lg:pb-[200px]">
        <div className="relative w-[870px] max-w-full px-[30px] mx-auto text-center">
          <span className="inline-block">
            <img src="img/scotty-icon-green.svg" alt="scotty icon" />
          </span>
          <h2 className="font-montserrat text-[32px] lg:text-[38.28px] mt-[30px] mb-[50px] md:mb-[90px] z-10">
            La gestion de votre flotte sans stress
          </h2>
          <div className="flex flex-col md:flex-row gap-[30px] z-10">
            <div className="md:w-1/3 relative bg-[#FFF6EB] text-[#333333] font-montserrat text-[17.16px] p-10 pb-8 text-left">
              <h3 className="max-w-[150px] mb-[26px]">
                Visibilié pour les loueurs
              </h3>
              <img src="img/scotty-list.webp" alt="Visibilié pour les loueur" />
              <span className="absolute bottom-10 md:bottom-0 right-10 md:-right-[10px] text-[140px] lg:text-[177px] leading-[0.71] text-white">
                1
              </span>
            </div>
            <div className="md:w-1/3 relative bg-[#FFF6EB] text-[#333333] font-montserrat text-[17.16px] p-10 pb-8 text-left">
              <h3 className="max-w-[184px] mb-[26px]">
                Gestion des reservations
              </h3>
              <img
                src="img/scotty-search.webp"
                alt="Gestion des reservations"
              />
              <span className="absolute bottom-10 md:bottom-0 right-10 md:-right-[10px] text-[140px] lg:text-[177px] leading-[0.71] text-white">
                2
              </span>
            </div>
            <div className="md:w-1/3 relative bg-[#FFF6EB] text-[#333333] font-montserrat text-[17.16px] p-10 pb-8 pe-[26px] text-left">
              <h3 className="max-w-[184px] mb-[26px]">
                Encaissez à chaque trajets
              </h3>
              <img
                src="img/scotty-cash.webp"
                alt="Encaissez à chaque trajets"
              />
              <span className="absolute bottom-10 md:bottom-0 right-10 md:-right-[10px] text-[140px] lg:text-[177px] leading-[0.71] text-white">
                3
              </span>
            </div>
          </div>
          <img
            className="mx-auto mt-10 lg:absolute lg:-left-[285px] lg:-bottom-[110px] -z-10"
            src="img/boy-riding-scotter.webp"
            alt="Scotter"
          />
        </div>
      </section>
      <section className="flex flex-col items-center lg:items-start lg:flex-row gap-[20px] lg:gap-[40px] xl:gap-[56px] overflow-hidden mt-[50px] xs:mt-[100px] md:mt-[200px] lg:mt-[300px] xl:mt-[400px] 2xl:mt-[500px] px-[30px] lg:px-0">
        <div className="flex flex-col gap-[49px] lg:items-end">
          <h2 className="font-montserrat text-[30px] lg:text-[32px] xl:text-[36.22px] leading-[45.6px] sm:w-[390px] max-w-full text-[#333333] xl:me-[81px]">
            carreflexx - Gestion clé en main de vos trottinettes
          </h2>
          <img
            className="w-[360px] h-[160px] xxs:h-[200px] xs:h-[220px] sm:h-auto object-cover sm:w-[580px] xl:w-[700px] 2xl:w-auto self-center sm:self-auto"
            src="img/gestion1.webp"
            alt="gestion"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-5">
          <img
            className="w-[360px] h-[160px] xxs:h-[200px] xs:h-[240px] sm:h-auto object-cover sm:w-[280px] lg:w-[300px] xl:w-[360px] 2xl:w-auto"
            src="img/gestion2.webp"
            alt="gestion"
          />
          <img
            className="w-[360px] h-[160px] xxs:h-[200px] xs:h-[240px] sm:h-auto object-cover sm:w-[280px] lg:w-[300px] xl:w-[360px] 2xl:w-auto"
            src="img/gestion3.webp"
            alt="gestion"
          />
        </div>
      </section>
      <section
        id="price"
        className="bg-center bg-cover mt-[100px] md:mt-[200px] lg:mt-[300px] xl:mt-[400px] 2xl:mt-[500px] px-[30px]"
      >
        <div className="w-[1212px] max-w-full xs:px-[30px] pt-[95px] pb-[135px] mx-auto text-center text-white">
          <h2 className="font-montserrat text-[32px] lg:text-[37.81px] mb-[70px]">
            Nos prix incluts
          </h2>
          <div className="flex gap-[60px] justify-center flex-wrap md:flex-nowrap">
            <div className="price-item">
              <img src="img/assistance.webp" alt="Assistance" />
              <h4 className="font-lato text-[15.88px]">Assistance</h4>
            </div>
            <div className="price-item">
              <img src="img/assurance.webp" alt="Assurance" />
              <h4 className="font-lato text-[15.88px]">Assurance</h4>
            </div>
            <div className="price-item">
              <img src="img/annulation.webp" alt="Annulation" />
              <h4 className="font-lato text-[15.88px]">Annulation</h4>
            </div>
            <div className="price-item">
              <img src="img/placement.webp" alt="Placement" />
              <h4 className="font-lato text-[15.88px]">Placement</h4>
            </div>
          </div>
        </div>
      </section>
      <Services />
      <section className="mt-[50px] xs:mt-[100px] md:mt-[200px] lg:mt-[300px] xl:mt-[400px] 2xl:mt-[500px] px-[30px]">
        <div className="relative w-[840px] max-w-full px-[36px] mx-auto text-center p-[20px] sm:p-[46px] sm:pb-[35px] contact-bg bg-center bg-contain bg-no-repeat bg-[#F7A63D] border-[#666666] border-b-2 text-white font-lato break-all">
          <h3 className="z-10 text-[17.58px]">Envoyez nous un email à</h3>
          <a
            className="z-10 text-[24px] sm:text-[35.72px] inline-block -mt-1"
            href="mailto:contact@carreflexx.com"
          >
            contact@carreflexx.com
          </a>
        </div>
      </section>
      <section className="py-[50px] xs:py-[100px] md:py-[200px] lg:py-[300px] xl:py-[400px]  2xl:py-[500px]">
        <div className="w-[1212px] max-w-full px-[36px] mx-auto text-center">
          <span className="inline-block">
            <img src="img/scotty-icon-green.svg" alt="scotty icon" />
          </span>
          <h2 className="font-montserrat text-[32px] lg:text-[38.28px] mt-[30px] mb-10 sm:mb-[100px] xl:mb-[170px]">
            Pourquoi choisir carreflexx ?
          </h2>
          <div className="inline-flex mx-auto gap-5 flex-col sm:flex-row sm:gap-0">
            <div className="flex flex-col xs:flex-row items-center sm:flex-col gap-[60px] sm:gap-[120px] order-1 mb-10 sm:mb-0">
              <h3 className="font-montserrat text-[20.45px] w-48 sm:text-right">
                Service ECO Responsable
              </h3>
              <h3 className="font-montserrat text-[20.45px] w-48 sm:text-right">
                Vitesse d’éxecution
              </h3>
            </div>
            <div className="flex justify-center mt-10 sm:mt-0 sm:block lg:ms-[90px] lg:me-[50px] order-3 sm:order-2">
              <img src="img/boy-riding-scotter-2.webp" alt="riding scotter" />
            </div>
            <div className="flex flex-col xs:flex-row items-center sm:flex-col gap-[60px] sm:gap-[120px] order-2 sm:order-3">
              <h3 className="font-montserrat text-[20.45px] w-48 sm:text-left">
                Disponibilité pour les clients
              </h3>
              <h3 className="font-montserrat text-[20.45px] w-48 sm:text-left">
                Adapté au monde urbain
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section
        id="green-bg"
        className="bg-cover relative overflow-hidden pt-[50px] lg:pt-[75px] pb-[55px] lg:pb-[85px] px-[30px] md:px-0"
      >
        <div className="w-[1212px] max-w-full sm:px-[36px] mx-auto flex gap-[30px] lg:gap-[51px] items-center z-10 relative justify-center md:justify-normal">
          <img
            className="h-[50px] xs:h-[70px] lg:h-[100px]"
            src="img/scotty-icon.svg"
            alt="scotty"
          />
          <h3 className="text-white font-montserrat text-[20px] xs:text-[24px] lg:text-[28px] w-[340px] max-w-full">
            Pour une gestion rentable et optimisée
          </h3>
        </div>
        <img
          className="md:absolute md:-right-28 lg:-right-20 xl:-right-4 md:top-[50px] lg:top-[80px] xl:top-[53px] w-[400px] lg:w-[500px] xl:w-auto -z-0 mx-auto mt-8 xs:mt-10 md:mt-0"
          src="img/e-scotter.webp"
          alt="scotter"
        />
      </section>
    </main>
  );
};

export default Home;
