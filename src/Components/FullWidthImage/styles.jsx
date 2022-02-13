import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    FullWideImageRoot:{
        marginTop: '-67px',
        width: '100%',
        maxHeight: '88vh',
        minHeight: '600px !important',
        '@media (max-width:780px)':{
            maxHeight: '450px !important',
            minHeight: '450px !important',
        }
    },
    img:{
        width: '100%',
        marginTop: '-67px',
        maxHeight: '88vh',
        minHeight: '600px !important',
        '@media (max-width:780px)':{
            maxHeight: '450px !important',
            minHeight: '450px !important',
        }
    },
    gradientRoot:{
        width: '100%',
        height: '100%',
        maxHeight: '88vh',
        minHeight: '600px !important',
        position: 'absolute',
        overflow: 'hidden',
        zIndex: 3,
        '@media (max-width:780px)':{
            maxHeight: '450px !important',
            minHeight: '450px !important',
        }
    },
    gradientRadial:{
        width: '100%',
        height: '100%',
        maxHeight: '88vh',
        minHeight: '600px !important',
        position: 'absolute',
        background: 'radial-gradient(44.66% 410.44% at 50% 50%, rgba(0, 0, 0, 0) 66.15%, rgba(0, 0, 0, 0.22) 100%)',
        backgroundBlendMode: 'multiply',
        '@media (max-width:780px)':{
            minHeight: '450px !important',
            maxHeight: '450px !important',
        }
    },
    gradientRectangle:{
        width: '100%',
        height: '40%',
        position: 'absolute',
        background: 'linear-gradient(rgba(51, 55, 56, 0.21) 0%, rgba(51, 55, 56, 0.2089) 0.01%, rgba(51, 55, 56, 0) 100%)',
    },
    gradientLogo:{
        width: '100%',
        height: '100%',
        maxHeight: '88vh',
        minHeight: '600px !important',
        position: 'absolute',
        background: 'radial-gradient(44.89% 412.59% at 50% 50%, rgba(0, 0, 0, 0) 88.14%, rgba(0, 0, 0, 0.33) 100%)',
        transform: 'matrix(1, 1, -6, 97, 19, 100)',
        '@media (max-width:780px)':{
            maxHeight: '450px !important',
            minHeight: '450px !important',
        }
    },
    gradientTextShadow:{
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(63.67% 62.72% at 50.05% 63.56%, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 100%)',
        '@media (max-width:780px)':{
            maxHeight: '450px !important',
            minHeight: '450px !important',
        }
    }
});

export default useStyles;