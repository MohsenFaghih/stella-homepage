import React , {createContext, useState, useEffect} from 'react';
import { ResizeListener } from '../Components';

export const ContextData = createContext();

const ContextDataProvider = (props) => {

    const windowSize = ResizeListener()
    const [isMobile, setIsMobile] = useState(false)
    useEffect(()=>{
        if(windowSize < 780) setIsMobile(true)
        else setIsMobile(false)
    },[windowSize])

    const context={
        isMobile: isMobile
    }
    
    return (
        <ContextData.Provider value={context}>
            {props.children}
        </ContextData.Provider>
    )
}

export default ContextDataProvider;