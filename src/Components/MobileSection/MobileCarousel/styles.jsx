import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    MobileCarouselRoot:{
        width: '405px',
        height: '820px',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 70,
        '@media (max-width:780px)':{
            display: 'none'
        }
    },
    mobileFrame:{
        zIndex: 2,
        position: 'relative',
        overflow: 'hidden',
    },
    MobileCarousel:{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        '& img':{
            margin: '17px 8px',
        }
    }
});

export default useStyles;