import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#DEDEDE',
    borderRadius: 6,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 6,
  },
  bubble: {
    backgroundColor: theme.colors.primary,
    color: 'white',
    padding: 5,
    borderRadius: 5,
  },
  bio: {
    flexDirection: 'row',
    padding: 10,
  },
  statsbox: {
    flexDirection: 'row',
    flexGrow: 1,
    padding: 10,
    justifyContent: 'space-around',
  },
  stats: {
    alignItems: 'center',
  }
});



const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.bio}>
        <Image
          style={styles.tinyLogo}
          source={{ uri: `${item.ownerAvatarUrl}` }}
        />
        <View>
          <Text fontWeight='bold'>{item.fullName}</Text>
          <View>
            <Text style={{ flexWrap: 'wrap', width: 300 }}>{item.description}</Text>
          </View>
          <View alignSelf='flex-start'>
            <Text style={styles.bubble}>{item.language}</Text>
          </View>
        </View>
      </View>

      <View style={styles.statsbox}>
        <StatItem number={item.stargazersCount} title={'Stars'} />
        <StatItem number={item.forksCount} title={'Forks'} />
        <StatItem number={item.reviewCount} title={'Reviews'} />
        <StatItem number={item.ratingAverage} title={'Rating'} />
      </View>

    </View>
  );
};

const formatNumber = (number) => {
  if (number >= 1000) {
    return `${(number / 1000).toFixed(1)}k`;
  }
  return number;
};

const StatItem = ({number, title}) => {
  return (
    <View style={styles.stats}>
      <Text fontWeight='bold'>{formatNumber(number)}</Text>
      <Text>{title}</Text>
    </View>
  )
}

export default RepositoryItem;
