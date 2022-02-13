import { makeStyles } from '@mui/styles';
import gVec1 from '../../assets/img/gallary/vec/gVec1.png';
import gVec2 from '../../assets/img/gallary/vec/gVec2.png';
import gVec3 from '../../assets/img/gallary/vec/gVec3.png';
import gVec4 from '../../assets/img/gallary/vec/gVec4.png';

const useStyles = makeStyles({
    GalleryRoot:{
        width: '80%',
        margin: 'auto',
        maxWidth: '1400px',
        margin: '50px auto',
        height: 'auto',
        '& h6':{
            fontFamily: 'GilroySemiBold',
            fontSize: 24,
            margin: '15px 0',
            display: 'flex',
            alignItems: 'center',
            '@media (max-width: 780px)' : {
                fontSize: 18,
            }
        },
        '& p':{
            fontFamily: 'Inter',
            fontSize: 15,
            color: '#222222',
            margin: '15px 0'
        },
        '& img':{
            width: '100%',
            height: 'auto',
        },
        '& .vec1:before':{
            content: '""',
            background: `url(${gVec1}) no-repeat`,
            width: 20,
            height: 20,
            marginRight: 15,
        },
        '& .vec2:after':{
            content: '""',
            background: `url(${gVec2}) no-repeat`,
            width: 20,
            height: 20,
            marginLeft: 15,
        },
        '& .vec3:before':{
            content: '""',
            background: `url(${gVec3}) no-repeat`,
            width: 20,
            height: 20,
            marginRight: 15,
        },
        '& .vec4:after':{
            content: '""',
            background: `url(${gVec4}) no-repeat`,
            width: 20,
            height: 20,
            marginLeft: 15,
        },
        '& .uniqContent':{
            float: 'right',
        }
    },
    content:{
        margin: '-90px 30px 10px 30px',
        padding: '20px',
        backgroundColor: 'white',
        filter: 'blur(.4px)',
        borderRadius: '16px',
        maxWidth: 500,
        '@media (max-width: 780px)':{
            margin: '-40px 15px 10px 15px',

        }
    },
    secondGrid:{
        textAlign: 'right',
        
    },
    thirdGrid:{
        // marginTop: '-50px !important'
    },
    forthGrid:{
        textAlign: 'right'
    },
   
});

export default useStyles;
