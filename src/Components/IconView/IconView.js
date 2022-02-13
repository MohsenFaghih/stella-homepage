import React from 'react';
import appStore from '../../assets/img/downloadAppIcon/appStore.png'
import googlePlay from '../../assets/img/downloadAppIcon/googlePlay.png'

const IconView = () => {
  return (
    <div style={{display:'flex'}}>
        <img src={appStore} />
        <img src={googlePlay} />
    </div>
  )
}

export default IconView