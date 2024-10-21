import '../styles/components/footerWorkspage.css';
import { useLocation } from 'react-router-dom';

const FooterWorks = () => {
  const location = useLocation();

  const contentMap = {
    '/work/kiefer': {
      production: 'Production',
      nameProduction: 'Ato Studio in Bogotá <br/> Kiefer',
      artDirection: 'Art Direction',
      nameArtDirection: 'Miguel Bueno',
      creativeDirection: 'Creative Direction',
      nameCreativeDirection: 'Sebastian Pulido',
      research: 'Research',
      nameResearch: 'Sofía Vásquez',
      marketingDirection: 'Marketing Direction',
      nameMarketingDirection: 'Marco Meza',
      storytelling: 'Storytelling',
      nameStorytelling: 'Paula Salazar',
      paidMedia: 'Paid Media',
      namePaidMedia: 'Andrés Palacio',
      generalDirection: 'General Direction',
      nameGeneralDirection: 'Camila Uribe',
    },

    '/work/coyo': {
      production: 'Production',
      nameProduction: 'Ato Studio in Bogotá <br/> Cantina la 15',
      artDirection: 'Art Direction',
      nameArtDirection: 'Miguel Bueno',
      creativeDirection: 'Branding',
      nameCreativeDirection: 'Sebastian Pulido',
      research: 'Research',
      nameResearch: 'Sofía Vásquez',
      marketingDirection: 'Marketing Direction',
      nameMarketingDirection: 'Marco Meza',
      storytelling: 'Storytelling',
      nameStorytelling: 'Paula Salazar',
      paidMedia: 'Paid Media',
      namePaidMedia: 'Andrés Palacio',
      generalDirection: 'General Direction',
      nameGeneralDirection: 'Camila Uribe',
    },

    '/work/fiona': {
      production: 'Production',
      nameProduction: 'Ato Studio in Bogotá <br/> Fanny Sánchez',
      artDirection: 'Art Direction',
      nameArtDirection: 'Miguel Bueno',
      creativeDirection: 'Creative Direction and CX Design',
      nameCreativeDirection: 'Sebastian Pulido',
      research: 'Research and CX Design',
      nameResearch: 'Sofía Vásquez',
      marketingDirection: 'Marketing Direction',
      nameMarketingDirection: 'Marco Meza',
      storytelling: 'Storytelling',
      nameStorytelling: 'Paula Salazar',
      paidMedia: 'Paid Media',
      namePaidMedia: 'Andrés Palacio',
      generalDirection: 'General Direction',
      nameGeneralDirection: 'Camila Uribe',
    },

    '/work/zds': {
      production: 'Production',
      nameProduction: 'Ato Studio in Bogotá <br/> ZDS',
      artDirection: 'Art Direction',
      nameArtDirection: 'Miguel Bueno',
      creativeDirection: 'Creative Direction',
      nameCreativeDirection: 'Sebastian Pulido',
      research: 'Research',
      nameResearch: 'Sofía Vásquez',
      marketingDirection: 'Marketing Direction',
      nameMarketingDirection: 'Marco Meza',
      storytelling: 'Storytelling',
      nameStorytelling: 'Paula Salazar',
      paidMedia: 'Paid Media',
      namePaidMedia: 'Andrés Palacio',
      generalDirection: 'General Direction',
      nameGeneralDirection: 'Camila Uribe',
    },

    '/work/navilandia': {
      production: 'Production',
      nameProduction: 'Ato Studio in Bogotá <br/> Navilandia',
      artDirection: 'Art Direction',
      nameArtDirection: 'Miguel Bueno',
      creativeDirection: 'Creative Direction',
      nameCreativeDirection: 'Sebastian Pulido',
      research: 'Research',
      nameResearch: 'Sofía Vásquez',
      marketingDirection: 'Marketing Direction',
      nameMarketingDirection: 'Marco Meza',
      storytelling: 'Storytelling',
      nameStorytelling: 'Paula Salazar',
      paidMedia: 'Paid Media',
      namePaidMedia: 'Andrés Palacio',
      generalDirection: 'General Direction',
      nameGeneralDirection: 'Camila Uribe',
    },
  };

  const content = contentMap[location.pathname] || {
    production: 'Production',
    nameProduction: 'Ato Studio in Bogotá <br/> Kiefer',
    artDirection: 'Art Direction',
    nameArtDirection: 'Miguel Bueno',
    creativeDirection: 'Creative Direction',
    nameCreativeDirection: 'Sebastian Pulido',
    research: 'Research',
    nameResearch: 'Sofía Vásquez',
    marketingDirection: 'Marketing Direction',
    nameMarketingDirection: 'Marco Meza',
    storytelling: 'Storytelling',
    nameStorytelling: 'Paula Salazar',
    paidMedia: 'Paid Media',
    namePaidMedia: 'Andrés Palacio',
    generalDirection: 'General Direction',
    nameGeneralDirection: 'Camila Uribe',
  };

  return (
    <footer className="footer-worksPage">
      <div className="footer-workspage-left">
        <p>Credits</p>
      </div>
      <div className="footer-workspage-right">
        <div className="grid-footer-workspage">
          <div className="grid-item-footer-workspage">
            <p>{content.production}</p>
            <h3
              dangerouslySetInnerHTML={{ __html: content.nameProduction }}
            ></h3>
          </div>
          <div className="grid-item-footer-workspage">
            <p>{content.artDirection}</p>
            <h3>{content.nameArtDirection}</h3>
          </div>
          <div className="grid-item-footer-workspage">
            <p>{content.creativeDirection}</p>
            <h3>{content.nameCreativeDirection}</h3>
          </div>
          <div className="grid-item-footer-workspage">
            <p>{content.research}</p>
            <h3>{content.nameResearch}</h3>
          </div>
          <div className="grid-item-footer-workspage">
            <p>{content.marketingDirection}</p>
            <h3>{content.nameMarketingDirection}</h3>
          </div>
          <div className="grid-item-footer-workspage">
            <p>{content.storytelling}</p>
            <h3>{content.nameStorytelling}</h3>
          </div>
          <div className="grid-item-footer-workspage">
            <p>{content.paidMedia}</p>
            <h3>{content.namePaidMedia}</h3>
          </div>
          <div className="grid-item-footer-workspage">
            <p>{content.generalDirection}</p>
            <h3>{content.nameGeneralDirection}</h3>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterWorks;
