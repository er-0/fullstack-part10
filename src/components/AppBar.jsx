import { View, StyleSheet, ScrollView } from 'react-native';
import Text from './Text';
import Constants from 'expo-constants';
import theme from '../theme';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: theme.colors.appBar,
    padding: 15,
  }
});

const Button = ({ name, url }) => {
  return (
    <Link to={`/${url}`}>
      <Text color="textAppBar" fontSize="heading">{name}  </Text>
    </Link>
  )
}

const AppBar = () => {
  return (
  <View style={styles.container}>
    <ScrollView horizontal>
      <Button name={'Repositories'} url={'repolist'} />
      <Button name={'Sign in'} url={'signin'} />
    </ScrollView>
  </View>
  );
};

export default AppBar;