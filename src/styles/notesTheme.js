import { extendTheme } from "@chakra-ui/react";
import {mode} from "@chakra-ui/theme-tools"






const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
  }

const fonts = {
    heading: "'Patua One'"
}

export const notesTheme = extendTheme({config, 
 fonts, 
 components: {
    Heading: ({
        sizes:{
            '2xl': { size: 'lg',
            color: 'red.300'},

            xl: {
                size: 'lg',
                color: 'green.400'
            },

            lg: {
                color: 'red.300'
            },

            md:{
                color: 'green.400'
            },

            sm: {
                color: 'green.300'
            },

            xs: {
                color: 'purple.300'
            }
    },
}),
    Link: {
        baseStyle:{color: 'blue.300'}
    }}})