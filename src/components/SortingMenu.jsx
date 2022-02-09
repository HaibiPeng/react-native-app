import React from 'react';
import { StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const styles = StyleSheet.create({
    picker: {
        height: 135,
        marginTop: -85,
        zIndex: -1,
    },
    pickerItem: {
        fontSize: 18,
    }
});

const SortingMenu = ({ sortingStrategy, setSortingStrategy }) => {
    return (
        <Picker
        selectedValue={sortingStrategy}
        onValueChange={(itemValue) => setSortingStrategy(itemValue)}
        mode="dropdown"
        style={styles.picker}
        itemStyle={styles.pickerItem}
        >
            <Picker.Item label="Latest repositories" value="latest_repositories" />
            <Picker.Item label="Highest rated repositores" value="highest_rated_repositories" />
            <Picker.Item label="Lowest rated repositores" value="lowest_rated_repositories" />
        </Picker>
    );
};

export default SortingMenu;