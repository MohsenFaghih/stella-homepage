import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    title:{
        fontFamily: 'GilroySemiBold',
        fontSize: 36,
        margin: '0 0 10px 0',
        color: 'black'
    },
    discription:{
        fontFamily: 'Inter',
        fontSize: 15,
        margin:'0 0 20px 0',
    },
    listItems:{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        padding: 20,
        fontFamily: 'Inter',
        fontSize: 15,
        '& div':{
            margin: '10px 0',
            display: 'flex',
            alignItems: 'center',
            '& img':{
                marginRight: 30,
            }
        },
        '@media (max-width: 780px)':{
            padding: 0
        }
    }
});

export default useStyles;
