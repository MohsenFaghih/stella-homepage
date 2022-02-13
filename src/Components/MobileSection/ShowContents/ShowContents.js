import { Grid } from '@mui/material';
import React from 'react';
import useStyles from './styles';

const ShowContents = (props) => {
    const styles = useStyles()
    const data = props.contentData;
    
    return (
        <Grid item md={6} style={{color: '#222222'}}>
            <p className={styles.title} style={{fontSize: props.isMobile?30:36}}>{data.title}</p>
            <p className={styles.discription}>{data.discription}</p>
            <div className={styles.listItems}>
                {
                    data.list.map(item=>(
                        <div key={item.text}>
                            <img src={item.icon} />
                            {item.text}
                        </div>
                    ))
                }
            </div>
            <hr style={{width: '100%'}} />
            {props.children.StartRate}
            {props.children.IconView}
        </Grid>
    )
}

export default ShowContents