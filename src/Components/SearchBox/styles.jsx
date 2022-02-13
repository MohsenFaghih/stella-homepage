import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    SearchBoxRoot:{
        width: '80%',
        minWidth: 350,
        maxWidth: '1400px',
        minHeight: '100px',
        height: 'auto',
        boxShadow: '0 8px 16px 8px rgba(0, 0, 0, 0.03)',
        background: 'hsla(0,0%,100%,.97)',
        borderRadius: '20px',
        marginTop: '-50px',
        margin: 'auto',
        display: 'block',
        zIndex: 10,
    },
    SearchBoxRootContainer:{
        height: '100%',
        minHeight: 100,
    },
    searchBoxitem:{
        width: '100%',
        minHeight: 100,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        '&:not(:first-child):not(:last-child):before':{
            content: '"|"',
            display: 'block',
            margin: '34px 10px 0 0',
        },
        '@media (max-width:780px)':{
            '&:before':{
                display: 'none !important',
            },
            '&:not(:last-child)':{
                justifyContent: 'flex-start',
                alignItems: 'flex-end',
                borderBottom: '1px solid #5b8a99b8',
                margin: '0 20px',
            }
        },
        "&:last-child":{
            justifyContent: 'space-around',
        }
    },
    searchBtn:{
        width: 218,
        height: 64,
        background: 'linear-gradient(90deg, #72A2AF 0%, #4A7889 100%)',
        margin: 'auto 0 !important',
        fontSize: '18px !important',
        fontFamily: 'GilroySemiBold !important',
        textTransform: 'capitalize !important',
        borderRadius: '20px !important',
    }
});

export default useStyles;