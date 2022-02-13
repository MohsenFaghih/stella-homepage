import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    ImageCarouselRoot:{
        position: 'absolute',
        width: '100%',
        maxHeight: '88vh',
        height: '100%',
        minHeight: '100% !important',
        '& div':{
            width: '100%',
            height: '100% !important',
            maxHeight: '88vh',
            minHeight: '100% !important',
        },
        '& img':{
            width: '100%',
            maxHeight: '88vh',
            height: '100%',
            objectFit: 'cover',
            '@media (max-width:780px)':{
                height: '70vh',
            }
        }
    },
    img:{
        width: '100%',
        height: '100%',
        maxHeight: '88vh',
        minHeight: '600px !important'
    }
});

export default useStyles;