import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    ImageCarouselRoot:{
        position: 'absolute',
        width: '100%',
        maxHeight: '88vh',
        minHeight: '600px !important',
        '& div':{
            width: '100%',
            height: '100%',
            maxHeight: '88vh',
            minHeight: '600px !important',
        },
        '& img':{
            width: '100%',
            maxHeight: '88vh',
            minHeight: '600px !important',
            height: '100%',
            '@media (max-width:780px)':{
                minHeight: '450px !important',
                height: 'auto',
            }
        }
    },
    img:{
        width: '100%',
        // marginTop: '-67px',
        maxHeight: '88vh',
        minHeight: '600px !important'
    }
});

export default useStyles;