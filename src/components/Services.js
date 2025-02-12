import { useState, useRef, useEffect } from "react";

const servicesData = [
  {
    title: "1 Gestion et Conciergerie Complète",
    items: [
      "Validation des demandes de location (vérification des utilisateurs)",
      "Stationnement sécurisé (espaces dédiés pour éviter les amendes)",
      "Vérification quotidienne de l’état des trottinettes",
      "Nettoyage et entretien régulier",
      "Recharge des batteries via des juicers ou stations fixes",
      "Récupération et redéploiement des trottinettes",
    ],
  },
  {
    title: "2 Gestion et Conciergerie Complète",
    items: [
      "Diagnostic et réparation rapide des trottinettes",
      "Gestion des pannes (mécaniques, électriques, logicielles)",
      "Remplacement des pièces (batteries, pneus, freins, etc.)",
      "Suivi des interventions et historique des réparations",
      "Partenariat avec des réparateurs agréés",
    ],
  },
  {
    title: "3 Sécurité & Assurance",
    items: [
      "Assistance en cas de vol ou d’accident",
      "Mise en relation avec des assurances partenaires",
      "Installation d’un suivi GPS sur chaque trottinette",
      "Blocage et récupération des trottinettes perdues ou abandonnées",
    ],
  },
  {
    title: "Gestion Financière & Optimisation des Revenus",
    items: [
      "Suivi des revenus et rentabilité de chaque trottinette",
      "Optimisation des trajets et du déploiement pour maximiser les gains",
      "Paiements centralisés et automatisés aux propriétaires",
      "Rapports mensuels sur les performances et les coûts",
    ],
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(0);
  const contentRefs = useRef([]);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (contentRefs.current[0]) {
      contentRefs.current[0].style.height =
        contentRefs.current[0].scrollHeight + "px";
    }
  }, []);

  return (
    <section
      id="services"
      className="mt-[50px] xs:mt-[100px] md:mt-[200px] lg:mt-[300px] xl:mt-[400px]  2xl:mt-[500px] font-montserrat"
    >
      <div className="w-[1212px] max-w-full px-[30px] mx-auto text-[#333]">
        <h2 className="text-center text-[32px] lg:text-[38.28px] mb-10 sm:mb-0">
          Services de carreflex
        </h2>
        {servicesData.map((service, index) => (
          <div key={index}>
            <h3 className="cursor-pointer" onClick={() => toggleIndex(index)}>
              {service.title}
            </h3>
            <ul
              ref={(el) => (contentRefs.current[index] = el)}
              style={{
                height:
                  openIndex === index
                    ? contentRefs.current[index]?.scrollHeight + "px"
                    : "0px",
                opacity: openIndex === index ? 1 : 0,
                transform: `scaleY(${openIndex === index ? 1 : 0})`,
              }}
              className="overflow-hidden transition-all duration-500 ease-in-out origin-top"
            >
              {service.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
