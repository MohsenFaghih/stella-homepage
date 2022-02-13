import React from 'react';
import useStyles from './styles'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Grid } from '@mui/material';

const FeaturedCard = ({item}) => {
    const styles = useStyles()

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
                <span className={styles.cardPrice}>from <strong>{item.price}</strong> / night</span>
                <CardContent className={styles.cardContent}>
                    <p className={styles.cardContentTypo}>{item.content}</p>
                    <p className={styles.cardLocation}>{item.city} . {item.guests} guests</p>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default FeaturedCard