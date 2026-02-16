
import { useFonts,
  Roboto_400Regular,
  Roboto_700Bold 
} from '@expo-google-fonts/roboto';
import {GluestackUIProvider, Text, Center} from '@gluestack-ui/themed';
import { config } from './config/gluestack-ui.config';
import { Loading } from './src/compenents/Loading';
import { Signin } from './src/screens/Signin';
export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return <Loading />;
  }
  return (
    <GluestackUIProvider config={config}>
      <Center flex={1} bg='$gray500'>
        {fontsLoaded ? <Signin /> : null}
      </Center>
    </GluestackUIProvider>
  );
}
