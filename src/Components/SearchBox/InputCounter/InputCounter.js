import React,{useReducer, useState} from 'react';
import useStyles from './styles';
import {useTranslation} from 'react-i18next'

const InputCalendar = ({label, placeholder}) => {

    const styles = useStyles()
    const {t} = useTranslation()

    const [state, dispatch] = useReducer(reducer, {guests: 0});
    function reducer(state, action) {
        switch (action.type) {
          case "plus": 
            if(state.guests>=10) return {...state}
            return { guests: state.guests + 1 };
          case "minus": 
            if(state.guests>1) return { guests: state.guests - 1 }
            return {...state}
          default: return {...state} // Or throw new err...
        }
      }
    
    return (
        <div className={styles.InputCounterRoot} key={label}>
            <label className={styles.inputlabel}>{t(`${label}`)}</label>
            <div className={styles.guestInput}>
                {
                    state.guests>0?
                    <span className={styles.listItem}>{state.guests==1?t('one_guest'):state.guests>=10?`${state.guests}+ ${t('guests')}`:`${state.guests} ${t('guests')}`}</span>:
                    t(`${placeholder}`)
                }
                <div className={styles.counter}>
                    <span onClick={() => dispatch({ type: "minus" })}><strong style={{fontFamily: 'Gilroy !important'}}>-</strong></span>
                    <span onClick={() => dispatch({ type: "plus" })}><strong style={{fontFamily: 'Gilroy !important'}}>+</strong></span>
                </div>
            </div>
        </div>
    )
}

export default InputCalendar