import React from 'react';
import useStyles from './styles'

const ImageCenterContent = () => {

  const styles = useStyles()

  return (
    <div className={styles.ImageCenterContentRoot}>
      <h1>
        Escape<br />the ordinary
      </h1>
      <h4>
        A new way to stay in your favorite neighbourhoods <br />around the world.
      </h4>
    </div>
  )
};

export default ImageCenterContent;
