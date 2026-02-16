import {VStack, Image, Center, Text, Heading} from  '@gluestack-ui/themed'

import BacgroundImg from '../assets/background.png'
import Logo from '../assets/logo.svg'

export function Signin() {
  return (
    <VStack flex={1} bg='$gray700' px="$4" pt="$16">
        <Image source={BacgroundImg} alt="Pessoas Treinando"
        w="$full"
        h={624}
        defaultSource={BacgroundImg}
        position="absolute"
        />
        <Center my="$24" alignItems="center">
          <Logo />
        <Text color='$gray100' fontSize="$sm">Treine a sua mente e o seu corpo</Text>
        </Center>
        <Center alignItems="center">
         <Heading color='$gray100' pt="$16">Acesse sua conta</Heading>
      
        </Center>
    </VStack>
  )
}