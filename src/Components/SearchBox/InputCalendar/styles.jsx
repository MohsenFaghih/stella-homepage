import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    CalendarFormRoot:{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexWrap: 'wrap',
        flexDirection: 'column',
        position: 'relative',
    },
    inputlabel:{
        postition: 'relative important',
        fontFamily: 'InterMedium',
        color: '#67767C',
        fontSize: 12,
        padding: '0 6px',
    },
    placeholder:{fontSize: 19,fontFamily: 'Gilroy'},
    listItem:{fontSize: 19,fontFamily:'GilroySemiBold'},
    calenderInput:{
        fontFamily: 'Gilroy',
        minHeight: 'calc(1.5em + 22px)',
        minWidth: '200px',
        background: 'transparent',
        textAlign: 'left',
        lineHeight: 1.5,
        display: 'flex',
        alignItems: 'center',
        padding: '1px 6px',
        position: 'relative'
    },
    datePicker:{
        backgroundColor: 'white',
        borderRadius: '20px',
        position: 'absolute',
        top: 0,
        left: -300,
        position: 'absolute',
        transform: 'translate(0px, 105px)',
        margin: '0px',
        zIndex: 2,
        boxShadow: '0 0 5px #67767c',
        padding: '5px',
        display: 'none',
        '@media (max-width:780px)':{
            left: '-30px',
        }
    }
});

export default useStyles;