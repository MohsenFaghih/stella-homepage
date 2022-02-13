import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    ImageCenterContentRoot:{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 4,
        '& h1':{
            fontFamily: 'GilroyBold',
            fontSize: 100,
            color: '#FFFFFF',
            textShadow: '0 1px 2px rgb(0 0 0 / 30%), 0 40px 80px rgb(0 0 0 / 30%)',
            lineHeight: '100px',
            margin: 0,
            '@media (max-width:780px)':{
                fontSize: 60,
                lineHeight: '60px',
            }
        },
        '& h4':{
            fontFamily: 'GilroySemiBold',
            fontSize: 30,
            color: '#FFFFFF',
            margin: '20px 0 0 0',
            fontSize: 13,
            textShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
        }
    }
});

export default useStyles;