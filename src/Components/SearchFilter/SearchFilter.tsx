import { View, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { Search, Settings2 } from 'lucide-react-native';
import { colors } from '../../theme/color';



const SearchFilter = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <Search size={24} />
        <TextInput
          placeholder="Search Your Favourite Car..."
          style={styles.input}
        />
      </View>
      <View style={styles.filterBox}>
        <Settings2 />
      </View>
    </View>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  searchBox: {
    flexDirection: 'row',
    gap: 4,
    padding: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 50,
    width: '82%',
  },
  input: {
    letterSpacing: 1,
    flex: 1,
  },
  filterBox: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
