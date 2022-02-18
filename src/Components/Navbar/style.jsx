import { makeStyles } from '@mui/styles';
import arrow from '../../assets/img/icons/navArrow.png';
import line from '../../assets/img/icons/navLine.png';

const useStyles = makeStyles({
    navbarRoot: {
        width: '100%',
        height: '67px',
        backgroundColor: 'transparent',
        fontFamily: 'GilroySemiBold',
        position: 'sticky',
        top: 0,
        zIndex: 5,
    }, 
    navbarMenu: {
        textAlign: 'right',
        display: 'flex',
        float: 'right'
    },
    navbarLogo:{
        float: 'left',
        '& img':{
            margin: '12px 0 0 10px'
        }
    },
    navbarHelpText:{
        color: '#FFFFFF',
        borderRadius: 40,
        border: 'solid 1px #FFFFFF',
        height: '38px',
        width: '136px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '16px 0 0 0',
        cursor: 'pointer',
        transition: 'all .5s',
        '&:hover':{
            backgroundColor: 'white',
            color: 'black'
        }
    },
    navbarContactText:{
        color: '#FFFFFF',
        height: '38px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '16px 23px 0 23px',
        cursor: 'pointer',
        minWidth: '61px',
    },
    navbarTtText:{
        display: 'flex',
        height: 38,
        width: 94,
        alignItems: 'center',
        justifyContent: 'center',
        margin: '16px 32px 0 0',
        cursor: 'pointer',
        '& span':{
            color: 'black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 38,
            height: 38,
            borderRadius: '50%',
            backgroundColor: '#FFFFFF',
            fontWeight: 'bold',
        },
        '&:after':{
            content: "''",
            background: `url(${arrow}) no-repeat`,
            display: 'block',
            width: 23,
            height: 13,
            marginLeft: 10,
        },
        '&:before':{
            content: "''",
            background: `url(${line}) no-repeat`,
            display: 'block',
            width: 23,
            height: 13,
        }
    },
});

export default useStyles;