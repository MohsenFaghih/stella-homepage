import React, {useContext} from 'react';
import { ContextData } from '../../Contexts/ContextData';
import {Drawer} from '../index'
import cookies from 'js-cookie'
import useStyles from './style';
import { useTranslation } from 'react-i18next';

const Navbar = (props) => {

    const isMobile = useContext(ContextData).isMobile
    const currentLanguageCode = cookies.get('i18next');
    const styles = useStyles()
    const {t} = useTranslation()

    function lngHandler(e){
        if(e.target.textContent == 'English') props.languageOptions.handleLngSelect('en')
        else props.languageOptions.handleLngSelect('ar')
    }

    return (
        <nav className={styles.navbarRoot}>
            {!isMobile ? <div className={styles.navbarMenu}>
                <div className={styles.navbarHelpText}>{t('help_center')}</div>
                <div className={styles.navbarContactText} onClick={(e)=>{lngHandler(e)}} style={{fontFamily: currentLanguageCode === 'en' ? 'NotoNaskhArabic' : 'GilroySemiBold'}}>
                    {currentLanguageCode === 'en' ? 'العربية' : 'English'}
                </div>
                <div className={styles.navbarContactText} onClick={()=>window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" })}>{t('contact')}</div>
                <div className={styles.navbarTtText}><span>TT</span></div>
            </div>: <Drawer lngHandler={lngHandler} />}
            <div className={styles.navbarLogo}>
                <img src={`${process.env.PUBLIC_URL}/logo.png`} alt='Logo' />
            </div>
        </nav>
    )
};

export default Navbar;
