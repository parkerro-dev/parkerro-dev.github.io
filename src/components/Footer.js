import { Box, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box mt={10} align="center" opacity={0.4} fontSize="xs">
      &copy; {new Date().getFullYear()}
      <Text>Robert Parker. All Rights Reserved.</Text> 
    </Box>
  )
}

export default Footer