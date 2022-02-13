import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    featuredCardRoot:{
        boxShadow: 'none !important',
        position: 'relative'
    },
    featuredCardMedia:{
        width: '100%',
        height: '225px',
        borderRadius: 13,
    },
    cardContent:{
        padding: '10px !important',
    },
    cardContentTypo:{
        fontFamily: 'GilroySemiBold',
        fontSize: '15px !important',
        margin: 0,
    },
    cardLocation:{
        fontFamily: 'Inter',
        fontSize: 14,
        color: 'rgba(34, 34, 34, 0.7)',
        marginTop: 7,
    },
    cardPrice:{
        fontFamily: 'Gilroy',
        fontSize: 13,
        position: 'absolute',
        right: 5,
        top: 9,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        padding: '7px 14px',
        borderRadius: 45,
        filter: 'blur(0.1px)'
    }
});

export default useStyles;
