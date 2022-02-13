import React, {useState} from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Drawer = () => {
    const [state, setState] = useState(false);
    const toggleDrawer = (open) => (event) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
    
        setState(open);
      };

    return (
        <div style={{position: 'absolute',top: 15, right: 20, color: 'white'}}>
            <span onClick={toggleDrawer(true)}><MenuIcon /></span>
            <SwipeableDrawer
                anchor='MENU'
                open={state}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                <div style={{
                    height: '100vh',
                    width: '100vw',
                    textAlign: 'center',
                    fontFamily: 'GilroySemiBold',
                    fontSize: 40,
                    marginTop: 40,
                }}>
                    <span style={{position: 'absolute',top: 15, right: 20, color: 'black'}} onClick={toggleDrawer(false)}><CloseIcon /></span>
                    MENU
                </div>
            </SwipeableDrawer>
        </div>
    )
}

export default Drawer