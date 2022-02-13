import { makeStyles } from '@mui/styles';
const color = 'rgba(255, 255, 255, 0.6)'

const useStyles = makeStyles({
    FooterContentListRoot:{
        width: '80% !important',
        height: 'auto',
        maxWidth: '1400px',
        margin: 'auto',
        color: 'white',
        '@media (max-width: 780px)':{
            width: '90% !important',
        },
        '& ul':{
            margin: 0,
            padding: 0,
            '& li':{
                padding: '10px 0',
                '& a':{
                    textDecoration: 'none',
                    color: 'white',
                    fontFamily: 'Gilroy',
                    fontSize: 16
                }
            }
        }
    },
    listTitle:{
        fontFamily: 'Inter',
        fontSize: 11,
        color: color,
        textTransform: 'uppercase'
    },
    footerBottom:{
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        fontFamily: 'Inter',
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.6)',
    },
    socialIcons:{
        '& a':{
            margin: '0 7px'
        },
        '@media (max-width: 780px)' :{
            marginTop: 20,
            justifyContent: 'flex-start !important'
        }
    }
});

export default useStyles;