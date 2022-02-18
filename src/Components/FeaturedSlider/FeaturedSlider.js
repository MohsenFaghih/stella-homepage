import React, {useContext} from 'react';
import useStyles from './styles';
import Slider from './Slider/Slider';
import {useTranslation} from 'react-i18next';
import {ContextData} from '../../Contexts/ContextData'

const FeaturedSlider = () => {
    const {t} = useTranslation()
    const styles = useStyles()
    const direction = useContext(ContextData).direction

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
            content: 'fearured_slider_item_content',
            price: 'fearured_slider_item_price',
            city: 'fearured_slider_item_city',
            guests: 4
        }
    ))

    return (
        <div className={styles.FeaturedSliderRoot}>
            <p style={{direction}} className={styles.FearuredTitle}>{t('fearured_title')}</p>
            <p style={{direction}} className={styles.FearuredContent}>
                {t('fearured_content')}
            </p>
            <Slider list={list} />
        </div>
    )
}

export default FeaturedSlider