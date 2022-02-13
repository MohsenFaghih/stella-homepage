import React, {useContext} from 'react';
import { ContextData } from '../../Contexts/ContextData';
import {Drawer} from '../index'
import useStyles from './style';


const Navbar = (props) => {

    const isMobile = useContext(ContextData).isMobile
    const styles = useStyles()

    return (
        <nav className={styles.navbarRoot}>
            {!isMobile ? <div className={styles.navbarMenu}>
                <div className={styles.navbarHelpText}>Help Center</div>
                <div className={styles.navbarContactText} onClick={()=>window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" })}>Contact</div>
                <div className={styles.navbarTtText}><span>TT</span></div>
            </div>: <Drawer />}
            <div className={styles.navbarLogo}>
                <img src={`${process.env.PUBLIC_URL}/logo.png`} alt='Logo' />
            </div>
        </nav>
    )
};

export default Navbar;
