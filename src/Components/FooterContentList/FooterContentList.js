import React, {useContext} from 'react';
import useStyles from './styles';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { IconView } from '../index';
import cookies from 'js-cookie'
import { ContextData } from '../../Contexts/ContextData';

const Linkedin = () => (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 4H6C4.895 4 4 4.895 4 6V24C4 25.105 4.895 26 6 26H24C25.105 26 26 25.105 26 24V6C26 4.895 25.105 4 24 4ZM10.954 22H8.004V12.508H10.954V22ZM9.449 11.151C8.498 11.151 7.729 10.38 7.729 9.431C7.729 8.482 8.499 7.712 9.449 7.712C10.397 7.712 11.168 8.483 11.168 9.431C11.168 10.38 10.397 11.151 9.449 11.151ZM22.004 22H19.056V17.384C19.056 16.283 19.036 14.867 17.523 14.867C15.988 14.867 15.752 16.066 15.752 17.304V22H12.804V12.508H15.634V13.805H15.674C16.068 13.059 17.03 12.272 18.465 12.272C21.452 12.272 22.004 14.238 22.004 16.794V22Z" fill="white"/>
    </svg>
)
const Facebook = () => (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 27V15H8V11H12V8.852C12 4.785 13.981 3 17.361 3C18.98 3 19.836 3.12 20.241 3.175V7H17.936C16.501 7 16 7.757 16 9.291V11H20.205L19.634 15H16V27H12Z" fill="white"/>
    </svg>
)
const Instagram = () => (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.99805 3C6.13905 3 3 6.14195 3 10.002V20.002C3 23.861 6.14195 27 10.002 27H20.002C23.861 27 27 23.858 27 19.998V9.99805C27 6.13905 23.858 3 19.998 3H9.99805ZM22 7C22.552 7 23 7.448 23 8C23 8.552 22.552 9 22 9C21.448 9 21 8.552 21 8C21 7.448 21.448 7 22 7ZM15 9C18.309 9 21 11.691 21 15C21 18.309 18.309 21 15 21C11.691 21 9 18.309 9 15C9 11.691 11.691 9 15 9ZM15 11C13.9391 11 12.9217 11.4214 12.1716 12.1716C11.4214 12.9217 11 13.9391 11 15C11 16.0609 11.4214 17.0783 12.1716 17.8284C12.9217 18.5786 13.9391 19 15 19C16.0609 19 17.0783 18.5786 17.8284 17.8284C18.5786 17.0783 19 16.0609 19 15C19 13.9391 18.5786 12.9217 17.8284 12.1716C17.0783 11.4214 16.0609 11 15 11Z" fill="white"/>
    </svg>
)


const FooterContentList = () => {
    const styles = useStyles()
    const direction = useContext(ContextData).direction;
    const {t} = useTranslation()
    const socialIcons = [<Linkedin />,<Facebook />,<Instagram />]

    const lists = {
        about: ['find_stella', 'who_we_are', 'help_center', 'lease_to_Stella_Stays', 'blog'],
        cities: ['Dubai', 'Montreal', 'Manama'],
        'contact_us': ['whatsApp', 'email'],
    }

    const ShowFooterList = (lists) => {
        if(lists){
            return (
                Object.keys(lists).map(title=>(
                    <Grid key={title} item md={2} xs={12} pt='30px' pl='5px'>
                        <span className={styles.listTitle}>{t(`${title}`)}</span>
                        <List>
                            {lists[title].map(item=>(
                                <ListItem key={item}><Link to='#'>{t(`${item}`)}</Link></ListItem>
                            ))}
                        </List>
                    </Grid>
                ))
            )
        }
    }

    return (
        <Grid container className={styles.FooterContentListRoot} style={{direction}}>
            <Grid item md={12} mt='75px' mb='75px'>
                <Grid item md={12}><img src={`${process.env.PUBLIC_URL}/logo.png`} alt='Logo' /></Grid>
                <Grid container>
                    {ShowFooterList(lists)}
                    <Grid item md={6} xs={12} pt='30px' pl='5px'>
                        <p className={styles.listTitle} style={{marginTop: 0}}>{t('download')}</p>
                        <IconView />
                    </Grid>
                </Grid>
            </Grid>
            <Grid container flexDirection='row' pt='20px' pb='20px' alignItems='center' className={styles.footerBottom}>
                <Grid item md={4} xs={12}><span>{t('copyright')}</span></Grid>
                <Grid item md={4} xs={12}><span>{t('terms')}</span></Grid>
                <Grid item md={4} xs={12}>
                    <Grid container flexDirection='row' justifyContent='flex-end' className={styles.socialIcons}>
                        {socialIcons.map((icon, i)=>(
                            <Link key={i} to='#'>{icon}</Link>
                        ))}
                    </Grid>
                </Grid>
                
            </Grid>
        </Grid>
    )
}

export default FooterContentList