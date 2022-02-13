import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    FeaturedSliderRoot:{
        margin: '70px auto',
        width: '80%',
        maxWidth: 1400
    },
    FearuredTitle:{
        fontFamily: 'GilroySemiBold',
        fontSize: 36,
        color: 'black',
        margin: 0
    },
    FearuredContent:{
        fontFamily: 'Gilroy',
        fontSize: 15,
        margin: '10px 0 25px 0',
    }
});

export default useStyles;