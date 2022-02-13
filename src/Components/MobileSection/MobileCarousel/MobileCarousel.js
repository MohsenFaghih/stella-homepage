import React from 'react';
import useStyles from './styles';
import Carousel from 'react-material-ui-carousel';
import frame from '../../../assets/img/gallary/mobileFrame.png';

const MobileCarousel = ({ images }) => {
    const styles = useStyles()

    return (
        <div className={styles.MobileCarouselRoot}>
            <img src={frame} className={styles.mobileFrame} />
            <Carousel
                className={styles.MobileCarousel}
                stopAutoPlayOnHover={true}
                indicators={false}
                swipe={false}
                interval={3000}
                navButtonsAlwaysInvisible={true}
            >
                {Object.keys(images).map( (image, i) => <img className={styles.img} key={i} src={images[image]} /> )}
            </Carousel>
        </div>
    )
}

export default MobileCarousel