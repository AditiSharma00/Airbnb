/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import HomeScreen from './src/screens/Home';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Entype from 'react-native-vector-icons/Entypo';
// import Post from './src/Components/Post';
// import SearchResultsScreen from './src/screens/SearchResults';
// import DestinationSearchScreen from './src/screens/DestinationSearch';
// import GuestsScreen from './src/screens/Guests';
import 'react-native-gesture-handler';
import Router from './src/navigations/ExploreNavigator';
function Section({children, title}) {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />

        {/* <HomeScreen /> */}
        {/* <Post post={post1}/> */}
        {/* <SearchResultsScreen /> */}
        {/* <DestinationSearchScreen/> */}
        {/* <GuestsScreen/> */}
      </SafeAreaView>
      <Router />
    </>
  );
}

export default App;
