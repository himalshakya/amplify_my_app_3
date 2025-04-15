// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React from "react";
import { Button, View, StyleSheet } from "react-native";

import { Amplify } from "aws-amplify";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react-native";

import outputs from "./amplify_outputs.json";

Amplify.configure(outputs);

const SignOutButton = () => {
  const { signOut } = useAuthenticator();

  return (
    <View style={styles.signOutButton}>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
};

const App = () => {
  return (
    <Authenticator.Provider>
      <Authenticator>
        <SignOutButton />
      </Authenticator>
    </Authenticator.Provider>
  );
};

const styles = StyleSheet.create({
  signOutButton: {
    alignSelf: "flex-end",
  },
});

export default App;