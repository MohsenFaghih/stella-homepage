import React, {useContext} from 'react';
import useStyles from './styles'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Grid } from '@mui/material';
import { useTranslation } from "react-i18next";
import {ContextData} from '../../../Contexts/ContextData'

const FeaturedCard = ({item}) => {
    const styles = useStyles()
    const {t} = useTranslation()
    const direction = useContext(ContextData).direction

    return (
        <Grid item>
            <Card className={styles.featuredCardRoot}>
                <CardMedia
                    component="img"
                    height="225"
                    image={item.image}
                    alt={item.name}
                    className={styles.featuredCardMedia}
                />
                <span className={styles.cardPrice}>{t('from')} <strong>{t(`${item.price}`)}</strong> / {t('night')}</span>
                <CardContent className={styles.cardContent} style={{direction: direction}}>
                    <p className={styles.cardContentTypo}>{t(`${item.content}`)}</p>
                    <p className={styles.cardLocation}>{t(`${item.city}`)} . {item.guests} {t('guests')}</p>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default FeaturedCard