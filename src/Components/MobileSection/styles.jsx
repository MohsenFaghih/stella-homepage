import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    MobileSectionRoot:{
        position: 'relative',
        maxWidth: 1920,
        width: '100%',
        height: 'auto',
        display: 'flex',
        '@media (max-width:780px)':{
            marginBottom: 80,
        }
    },
    patten:{
        position: 'absolute',
        height: 730,
        maxHeight: 730,
        left: 0,
        top: 0,
        width: '100%',
        maxWidth: 1920,
        backgroundColor: '#D9E5E9',
        zIndex: '-1',
        '@media (max-width:780px)':{
            height: '100%',
            maxHeight: '100%',
            paddingBottom: 40
        }
    },
    MobileSectionContainer:{
        width: '80%',
        maxWidth: 1400,
        margin: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '57px',
        '@media (max-width:780px)':{
            width: '88%',
        }
    }
});

export default useStyles;
