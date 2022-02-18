import React , {createContext, useState, useEffect} from 'react';
import { ResizeListener } from '../Components';
import cookies from 'js-cookie'

export const ContextData = createContext();

const ContextDataProvider = (props) => {

    const windowSize = ResizeListener()
    const [isMobile, setIsMobile] = useState(false)
    useEffect(()=>{
        if(windowSize < 780) setIsMobile(true)
        else setIsMobile(false)
    },[windowSize])

    const direction = cookies.get('i18next')==='en' ? 'ltr' : 'rtl';

    const context={
        isMobile: isMobile,
        direction: direction
    }
    
    return (
        <ContextData.Provider value={context}>
            {props.children}
        </ContextData.Provider>
    )
}

export default ContextDataProvider;