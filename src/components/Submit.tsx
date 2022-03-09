import React from 'react';
import Button from '@mui/material/Button';

import { useTranslation } from 'react-i18next';

const Submit = () => {
  const { t, i18n } = useTranslation();

  return (
    <Button
      type="submit"
      variant="contained"
    >
      {t('Войти')}
    </Button> 
  );
};

export default Submit;