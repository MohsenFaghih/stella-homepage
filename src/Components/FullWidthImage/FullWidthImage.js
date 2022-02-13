import React from 'react';
import useStyles from './styles';
import { ImageCarousel } from '../index';

const FullWideImage = (props) => {

  const gradients = ['gradientRectangle','gradientRadial','gradientLogo','gradientTextShadow']

  const styles = useStyles()
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  const images = importAll(require.context('../../assets/img/navSlider', false, /\.(png|jpe?g|svg)$/));

  return (
    <div className={styles.FullWideImageRoot}>
      <div className={styles.gradientRoot}>
        {gradients.map(i=><div key={i} className={styles[i]}></div>)}
      </div>
      {Object.keys(images).length && <ImageCarousel images={images} />}
    </div>
  )
};

export default FullWideImage;
