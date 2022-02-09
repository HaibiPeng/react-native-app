import React from 'react';
import { StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';

const styles = StyleSheet.create({
    filter: {
        margin: 5,
    },
});

const RepositoryFilter = ({ searchQuery, setSearchQuery }) => {
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search repositories"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={styles.filter}
    />
  );
};

export default RepositoryFilter;