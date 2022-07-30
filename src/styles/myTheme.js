import { extendTheme } from "@chakra-ui/react";
import {mode} from "@chakra-ui/theme-tools"



const styles = {
    global: props => ({
        body: { bg: mode('#FFFFFF','#202020')(props)},
        
    }),


    
}



const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
  }

const fonts = {
    heading: "'Patua One'"
}

export const myTheme = extendTheme({config, styles, fonts})