import { extendTheme } from "@chakra-ui/react"
const theme = extendTheme({
    colors: {
      transparent: 'transparent',
      gray:{
        50: '#F8F8FB'
      },
      blue: {
        50:'#E6F1FF',
        100: '#BBDBFE',
        700: '#0980FC'
      },
    },
  })
export default theme;