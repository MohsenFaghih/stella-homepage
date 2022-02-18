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
        {t('image_center_content_p')}
      </h4>
    </div>
  )
};

export default ImageCenterContent;
