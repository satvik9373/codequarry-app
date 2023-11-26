import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { ClerkProvider,SignedIn, SignedOut } from '@clerk/clerk-expo';
import LoginScreen from './App/Screen/LoginScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'outfit-medium': require('./assets/fonts/Outfit-SemiBold.ttf'),
  });
  return (
    <ClerkProvider publishableKey={"pk_test_ZGVzdGluZWQtcHVnLTkyLmNsZXJrLmFjY291bnRzLmRldiQ"}>
    <View style={styles.container}>
     
     <SignedIn>
          <Text>You are Signed in</Text>
        </SignedIn>
        <SignedOut>
        <LoginScreen/>
        </SignedOut>
    </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
