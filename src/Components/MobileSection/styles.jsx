import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    MobileSectionRoot:{
        position: 'relative',
        maxWidth: 1920,
        width: '100%',
        // height: 730,
        // maxHeight: 730,
        height: 'auto',
        display: 'flex',
    },
    patten:{
        position: 'absolute',
        // height: 730,
        // maxHeight: 730,
        left: 0,
        top: 0,
        width: '100%',
        maxWidth: 1920,
        backgroundColor: '#D9E5E9',
        zIndex: '-1',
    },
    MobileSectionContainer:{
        width: '80%',
        maxWidth: 1400,
        margin: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '57px'
    }
});

export default useStyles;
