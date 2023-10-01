import { StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import {Link} from "expo-router";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Link style={{color: 'white'}} href="/drawers">Click here and go to /drawers -> theres a bug.</Link>
      <Text>You should be redirected to nested navigators (/drawers/first-param-value/second-param-value), instead of that error in console is shown.</Text>
      <Text>Entering directly works as expected, as well with link:</Text>
      <Link style={{color: 'white'}} href="/drawers/first-param-value/second-param-value">you can test it by clicking here</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
