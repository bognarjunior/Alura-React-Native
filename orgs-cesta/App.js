import React, {useEffect, useState, useCallback} from 'react'
import { StatusBar, SafeAreaView } from 'react-native';
import { Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import * as SplashScreen from 'expo-splash-screen';
import Basket from './src/screens/Basket';
import mock from './src/mocks/basket';
import * as Font from 'expo-font';

SplashScreen.preventAutoHideAsync();
export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    let customFonts = {
      "MontserratRegular": Montserrat_400Regular,
      "MontserratBold": Montserrat_700Bold,
    };
    async function prepare() {
      try {
        await Font.loadAsync(customFonts);
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaView onLayout={onLayoutRootView} style={{flex: 1}}>
      <StatusBar />
      <Basket {...mock}/>
    </SafeAreaView>
  );
}
