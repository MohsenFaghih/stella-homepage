import React,{useEffect, useState} from 'react';
import useStyles from './styles';
import { DateRangePicker } from 'react-date-range';
import { ar, enUS } from 'date-fns/locale';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {useTranslation} from 'react-i18next';
import cookies from 'js-cookie'

const InputCalendar = ({label, placeholder}) => {

    const styles = useStyles()
    const [state, setState] = useState([{startDate: new Date(),endDate: addDays(new Date(), 7),key: 'selection'}]);
    // const [anchorEl, setAnchorEl] = useState(null);
    const {t} = useTranslation()
    const lng = cookies.get('i18next')

    //Handle set calendar date
    function renderValue() {
        if (!state.length) return <span className={styles.placeholder}>{placeholder}</span>;
        else {
            let d = state[0]
            let startDay = d.startDate.getDate()
            let startMonth = d.startDate.toLocaleString('default', { month: 'long' }).slice(0,3)
            let endDay = d.endDate.getDate()
            let endMonth = d.endDate.toLocaleString('default', { month: 'long' }).slice(0,3)
            return <span className={styles.listItem}>
                {`${startDay} ${(startMonth!=endMonth)?startMonth:''} - ${endDay} ${endMonth}`}
            </span>}
    }
    useEffect(()=>{
        renderValue()
    },[state])
    
    //Handle show or hide calendar
    function showCalendar(){ document.querySelector('.rdrDateRangePickerWrapper').style.display = 'flex' }
    document.addEventListener('click',(e)=>{
        if(e.target.closest('.calendar') === null) {document.querySelector('.rdrDateRangePickerWrapper').style.display = 'none'}
    })    

    const orientation = window.matchMedia("(max-width: 780px)").matches ? 'vertical' : 'horizontal'

    return (
        <div className={`${styles.CalendarFormRoot} calendar`} key={label} onClick={showCalendar} >
            <label className={styles.inputlabel}>{t(`${label}`)}</label>
            <div className={styles.calenderInput}>{renderValue()}</div>
            <DateRangePicker
                onChange={item => setState([item.selection])}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                months={2}
                ranges={state}
                // direction="horizontal"
                locale={lng=='en'?enUS:ar}
                className={styles.datePicker}
                orientation={orientation} 
                autoFocus
            >
            </DateRangePicker>
        </div>  
    )
}

export default InputCalendar