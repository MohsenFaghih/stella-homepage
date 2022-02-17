import React from 'react';
import { Header, MainSection, Footer } from '../Layouts';
import { Navbar,
         FullWidthImage,
         ImageCenterContent,
         SearchBox, 
         FeaturedSlider,
         MobileSection,
         Gallery,
         FooterContentList
        } from '../Components';

const HomePage = ({languageOptions}) => {
  return (
    <div>
      <Header>
        {{nav: <Navbar languageOptions={languageOptions} />, image: <FullWidthImage />, content: <ImageCenterContent />}}      
      </Header>
      <MainSection>
        {{search: <SearchBox />, featured: <FeaturedSlider />, mobile: <MobileSection />, gallery: <Gallery />}}
      </MainSection>
      <Footer>
        <FooterContentList />
      </Footer>
    </div>
  )
};

export default HomePage;
