import React from 'react';
import Carousel from 'react-material-ui-carousel';
import useStyles from './styles'

const ImageCarousel = ({images, style}) => {
    const styles = useStyles();
    return (
        <Carousel
            className={styles.ImageCarouselRoot}
            stopAutoPlayOnHover={true}
            indicators={false}
            swipe={false}
            interval={5000}
            navButtonsAlwaysInvisible={true}
        >
            {Object.keys(images).map( (image, i) => <img className={styles.img} key={i} src={images[image]} /> )}
        </Carousel>
    )
}

export default ImageCarousel