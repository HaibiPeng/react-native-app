import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import ItemSeparator from './ItemSeparator';
import SortingMenu from './SortingMenu';
import RepositoryFilter from './RepositoryFilter';
import { useDebounce } from 'use-debounce';

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    // this.props contains the component's props
    const { sortingStrategy, setSortingStrategy, searchQuery, setSearchQuery } = this.props;
    return (
      <View>
        <RepositoryFilter
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
        />
        <SortingMenu
            sortingStrategy={sortingStrategy}
            setSortingStrategy={setSortingStrategy}
        />
      </View>
    );
  };

  render() {
        const props = this.props;
        const repositories = props.repositories;
        const repositoryNodes = repositories
            ? repositories.edges.map((edge) => edge.node)
            : [];

        return (
            <FlatList
                data={repositoryNodes}
                ItemSeparatorComponent={ItemSeparator}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <RepositoryItem item={item} />}
                ListHeaderComponent={this.renderHeader}
                onEndReached={props.onEndReach}
                onEndReachedThreshold={0.5}
            // other props
            />
        );
    }
}

const RepositoryList = () => {
    const [sortingStrategy, setSortingStrategy] = useState("latest_repositories");
    const [searchQuery, setSearchQuery] = useState('');
    const [deBouncedSearch] = useDebounce(searchQuery, 1000);
    const { repositories, fetchMore } = useRepositories({
        first: 5,
        sortingStrategy,
        searchKeyword: deBouncedSearch
    });

    const onEndReach = () => {
        fetchMore();
    };

    return <RepositoryListContainer 
                repositories={repositories} 
                setSortingStrategy={setSortingStrategy}
                sortingStrategy={sortingStrategy}
                setSearchQuery={setSearchQuery}
                searchQuery={searchQuery}
                onEndReach={onEndReach}
            />;
};

export default RepositoryList;