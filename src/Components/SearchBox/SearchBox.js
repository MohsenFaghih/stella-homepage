import React, {useContext} from 'react';
import { ContextData } from '../../Contexts/ContextData';
import useStyles from './styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputList from './InputList/InputList';
import InputCalendar from './InputCalendar/InputCalendar';
import InputCounter from './InputCounter/InputCounter';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = () => {

  const styles = useStyles()
  const isMobile = useContext(ContextData).isMobile

  const searchItems = [
    {element: 'list', size: {lg: 3, md: 6, xs: 12}, label: 'City', placeholder: 'Select a city', list: ['Dubai','Montreal','Manama']},
    {element: 'calendar', size: {lg: 3, md: 6, xs: 12}, label: 'Dates', placeholder: 'Select a Dates'},
    {element: 'counter', size: {lg: 3, md: 6, xs: 12}, label: 'Guests', placeholder: 'Add Guests', name:'guest'}
  ]

  function selectElement(i){
    switch(i.element){
      case 'list': return <InputList label={i.label} placeholder={i.placeholder} list={i.list?i.list:null} />
      case 'calendar': return <InputCalendar label={i.label} placeholder={i.placeholder} list={i.list?i.list:null} />
      case 'counter': return <InputCounter label={i.label} placeholder={i.placeholder} list={i.list?i.list:null} />
    }
  }

  return (
    <Box className={styles.SearchBoxRoot}>
        <Grid container className={styles.SearchBoxRootContainer}>
            {searchItems.map(i=>(
              <Grid className={styles.searchBoxitem} key={i.label} item lg={i.size.lg} md={i.size.md} xs={i.size.xs}>
                {selectElement(i)}
              </Grid>
            ))}
            <Grid className={styles.searchBoxitem} item lg={3} md={6} xs={12}>
              <Button className={styles.searchBtn} variant="contained" startIcon={<SearchIcon />}>
                Search
              </Button>
            </Grid>
        </Grid>
    </Box>
  )
}

export default SearchBox