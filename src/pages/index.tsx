import Image from "next/image";
import { Box, HStack, Stack, Text } from "@chakra-ui/react"
import { Button } from "@/components/ui/button"



export default function Home() {
  return (
    <Box >
      <Button colorPalette="teal" variant="solid">
         Email
      </Button>
      <Button colorPalette="teal" variant="outline">
        Call us 
      </Button>
    </Box>
  )

}
