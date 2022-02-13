import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    InputCounterRoot:{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexWrap: 'wrap',
        flexDirection: 'column',
        position: 'relative',
        '@media (max-width: 780px)':{
            width: '98%'
        }
    },
    inputlabel:{
        postition: 'relative important',
        fontFamily: 'InterMedium',
        color: '#67767C',
        fontSize: 12,
        padding: '0 6px',
    },
    guestInput:{
        fontFamily: 'Gilroy',
        minHeight: 'calc(1.5em + 22px)',
        minWidth: '200px',
        background: 'transparent',
        textAlign: 'left',
        lineHeight: 1.5,
        display: 'flex',
        alignItems: 'center',
        padding: '1px 6px',
        position: 'relative',
        justifyContent: 'space-between',
        '@media (max-width: 780px)':{
            width: '100%'
        }
    },
    placeholder:{fontSize: 19,fontFamily: 'Gilroy'},
    listItem:{fontSize: 19,fontFamily:'GilroySemiBold'},
    counter:{
        border: '1px solid rgb(0 0 0 / 18%)',
        borderRadius: '20px',
        height: '40px',
        width: '80px',
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        overflow: 'hidden',
        '& span':{
            width: '100%',
            height: '100%',
            textAlign: 'center',
            transition: 'all .5s',
            cursor: 'pointer',
            fontSize: 25,
            '&:hover':{
                backgroundColor: '#80808038',
            }
        }
    }
});

export default useStyles;