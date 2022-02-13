import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    InputsFormRoot:{
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
});

export default useStyles;