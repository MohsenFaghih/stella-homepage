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

const HomePage = () => {
  return (
    <div>
      <Header>
        {{nav: <Navbar />, image: <FullWidthImage />, content: <ImageCenterContent />}}      
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
