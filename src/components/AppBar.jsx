import { View, Pressable, StyleSheet } from 'react-native';
import Text from './Text';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const AppBar = () => {
  return (
  <View style={styles.container}>
    <Pressable onPress={() => console.log('hi')}>
        <Text color="textAppBar" fontSize="heading">Repositories</Text>
    </Pressable>
  </View>
  );
};

export default AppBar;