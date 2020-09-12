import React from 'react';
import { FlatList, TouchableHighlight, View, Text } from 'react-native';

const List = () => {
  return (
    <FlatList
      data={[{ title: 'Title Text', key: 'item1' }]}
      renderItem={({ item, index, separators }) => (
        <TouchableHighlight
          key={item.key}
          onPress={() => alert('press')}
        >
          <View style={{ backgroundColor: 'white' }}>
            <Text>{item.title}</Text>
          </View>
        </TouchableHighlight>
      )}
    />
  )
}

export default List;
