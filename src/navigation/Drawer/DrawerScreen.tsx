import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Listcard from '../../components/Listcard';
import colors from '../../utils/colors';
import screenName from '../../utils/screenName';

const DrawerScreen = ({navigation}: any) => {
  const drawerData = [
    {
      id: 1,
      name: 'Home',
      navigation: screenName.homeScreen,
    },
    {
      id: 2,
      name: 'Display',
      navigation: screenName.displayScreen,
    },
    {
      id: 3,
      name: 'Capture',
      navigation: screenName.captureScreen,
    },
  ];

  return (
    <FlatList
      data={drawerData}
      renderItem={({item, index}) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(item.navigation);
          }}>
          <View style={styles.listContainer}>
            <Text style={styles.labelStyle}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};
export default DrawerScreen;

const styles = StyleSheet.create({
  labelStyle: {
    padding: 10,
    fontSize: 16,
  },
  listContainer: {
    height: 50,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginTop: 10,
    borderColor: colors.gray,
    justifyContent: 'center',
  },
});
