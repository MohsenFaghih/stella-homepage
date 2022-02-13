import React, {useContext} from 'react';
import useStyles from './styles';
import { ContextData } from '../../Contexts/ContextData';
import MobileCarousel from './MobileCarousel/MobileCarousel';
import ShowContents from './ShowContents/ShowContents';
import {StarRate, IconView} from '../index'; 
import vec1 from '../../assets/img/vec/Frame.png';
import vec2 from '../../assets/img/vec/Frame2.png';
import vec3 from '../../assets/img/vec/Frame3.png';
import vec4 from '../../assets/img/vec/Frame4.png';

const MobileSection = () => {
    const styles = useStyles()
    const isMobile = useContext(ContextData).isMobile

    // Fetch images for carousel
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
    // Fetch data for ShowContents
    const contentData = {
        title: 'Duis aute irure dolor in reprehenderit in voluptate',
        discription: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        list: [
            {icon: vec1, text: 'Sagittis vitae et leo duis ut diam quam nulla.'},
            {icon: vec2, text: 'Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae.'},
            {icon: vec3, text: 'Viverra adipiscing at in tellus integer feugiat scelerisque varius.'},
            {icon: vec4, text: 'Elementum curabitur vitae nunc.'}
        ],
    }

    const images = importAll(require.context('../../assets/img/mobileCarousel', false, /\.(png|jpe?g|svg)$/));

    return (
        <div className={styles.MobileSectionRoot}>
            <div className={styles.patten}></div>
            <div className={styles.MobileSectionContainer}>
                <ShowContents contentData={contentData} isMobile={isMobile}>
                    {{StartRate: <StarRate />, IconView: <IconView />}}
                </ShowContents>
                {Object.keys(images) && <MobileCarousel images={images} />}
            </div>
        </div>
    )
}

export default MobileSection