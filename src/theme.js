import {
   extendTheme,

} from '@chakra-ui/react';

import '@fontsource/roboto';
import '@fontsource/inter';

import '@fontsource/ibm-plex-sans';

const fontFamily = {
   body: 'IBM Plex Sans',
};



const theme = extendTheme(
   
   {
      fonts: fontFamily,
      
   }
);

export default theme;


