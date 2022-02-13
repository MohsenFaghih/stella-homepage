import React, {useState} from 'react';
import Rating from '@mui/material/Rating';

const StarRate = () => {

  const [stars, setStarts] = useState(0);

  return (
    <div style={{margin: '30px 0'}}>
      <Rating
        name="simple-controlled"
        value={stars}
        onChange={(event, newValue) => {setStarts(newValue)}}
      />
      <p style={{fontFamily: 'Inter', fontSize: 13}}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.</p>
    </div>
  )
}

export default StarRate