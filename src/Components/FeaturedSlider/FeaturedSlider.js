import React from 'react';
import useStyles from './styles';
import Slider from './Slider/Slider';

const FeaturedSlider = () => {
    const styles = useStyles()

    function importCardImages(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
    const images = importCardImages(require.context('../../assets/img/cardSlider', false, /\.(png|jpe?g|svg)$/));

    const list = Object.keys(images).map((i, index)=>(
        {
            image: images[i],
            key: i,
            name: i,
            id: index,
            content: 'Spectacular 4 BDR Palm Villa | Beach | Private Pool',
            price: 'AED 2,549',
            city: 'Dubai',
            guests: 4
        }
    ))

    return (
        <div className={styles.FeaturedSliderRoot}>
            <p className={styles.FearuredTitle}>Featured stays</p>
            <p className={styles.FearuredContent}>
                Beachfront villas to high rise apartments and penthouses,<br /> experience your next stay with <strong>Stella.</strong>
            </p>
            <Slider list={list} />
        </div>
    )
}

export default FeaturedSlider