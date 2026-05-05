import { Spinner, Text, VStack } from "@chakra-ui/react"


export const Demo = () => {
  return (
    <VStack colorPalette="teal">
      <Spinner color="colorPalette.600" size="xl"/>
      <Text color="colorPalette.600" fontSize="xl" >Loading...</Text>
    </VStack>
  )
}