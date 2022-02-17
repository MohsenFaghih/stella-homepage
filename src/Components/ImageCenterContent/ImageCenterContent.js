import React from 'react';
import useStyles from './styles'
import { useTranslation } from 'react-i18next';

const ImageCenterContent = () => {

  const styles = useStyles()
  const {t} = useTranslation()

  return (
    <div className={styles.ImageCenterContentRoot}>
      <h1>
        {t('Escape')}<br />{t('the_ordinary')}
      </h1>
      <h4>
        A new way to stay in your favorite neighbourhoods <br />around the world.
      </h4>
    </div>
  )
};

export default ImageCenterContent;
