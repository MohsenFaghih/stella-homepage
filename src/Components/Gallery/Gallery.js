import React, {useContext} from 'react';
import useStyles from './styles';
import { ContextData } from '../../Contexts/ContextData';
import { useTranslation } from 'react-i18next';
import { Grid, Typography } from '@mui/material'
import g1 from '../../assets/img/gallary/g1.png';
import g2 from '../../assets/img/gallary/g2.png';
import g3 from '../../assets/img/gallary/g3.png';
import g4 from '../../assets/img/gallary/g4.png';

const Gallery = () => {
    const styles = useStyles()
    const isMobile = useContext(ContextData).isMobile;
    const {t} = useTranslation()

    return (
        <div className={styles.GalleryRoot} style={{width: isMobile?'92%':''}}>
            <Grid container spacing={4} direction='row' className={styles.galleryBoxTop}>
                <Grid item={true} md={5} xs={12} direction="column" className={styles.firstGrid}>
                    <img src={g1} />
                    <Grid direction='column' xs={12} className={styles.content}>
                        <h6 className='vec1'>{t('gallery_item_title_1')}</h6>
                        <p>{t('gallery_item_content_1')}</p>
                    </Grid>
                </Grid>
                <Grid item={true} md={7} xs={12} direction="column" flexDirection='flex-end' className={styles.secondGrid} style={{marginTop: isMobile?0:'70px !important'}}>
                    <img src={g2} />
                    <div className={`${styles.content} uniqContent`}>
                        <Typography  className='vec2' variant='h6' justifyContent='flex-end'>{t('gallery_item_title_2')}</Typography>
                        <p>{t('gallery_item_content_2')}</p>
                    </div>
                </Grid>
            </Grid>
            <Grid container spacing={4} direction='row' className={styles.galleryBoxBottom}  style={{marginTop: isMobile?20:0}}>
                <Grid item={true} md={7} xs={12} direction="column" className={styles.thirdGrid}>
                    <img src={g3} />
                    <div className={styles.content}>
                        <h6 className='vec3'>{t('gallery_item_title_3')}</h6>
                        <p>{t('gallery_item_content_3')}</p>
                    </div>
                </Grid>
                <Grid item={true} md={5} xs={12} direction="column" className={styles.forthGrid} style={{marginTop: isMobile?0:'-50px !important'}}>
                    <img src={g4} />
                    <div className={styles.content}>
                        <Typography className='vec4' variant='h6' justifyContent='flex-end'>{t('gallery_item_title_4')}</Typography>
                        <p>{t('gallery_item_content_4')}</p>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Gallery