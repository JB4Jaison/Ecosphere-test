import React, { Component } from 'react';

import { SafeAreaView, StyleSheet, FlatList, Text, View, Alert, ActivityIndicator, Platform} from 'react-native';
import {SearchBar } from 'react-native-elements';

export default class SearchPage extends Component {
  
  constructor(props)
  {

    super(props);

    this.state = { 
    isLoading: true,
    data : []
    
  }
  this.arrayholder = [];
  }

  componentDidMount() {
    
       return fetch('https://gist.githubusercontent.com/JB4Jaison/93e57a15230394fa30c9ca04de5fe2cb/raw/91f4e76c8056c864057e3b567d61f4705e0e0c6a/categoriesIn.json')
         .then((response) => response.json())
         .then((responseJson) => {
           this.setState({
             isLoading: false,
             dataSource: responseJson
           },
           this.arrayholder = responseJson.Categories
           );
         })
         .catch((error) => {
           console.error(error);
         });
     }

FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  }

  GetFlatListItem (fruit_name) {
   
  Alert.alert(fruit_name);

  }

  searchFilterFunction = text => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.name.title.toUpperCase()} ${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value}
      />
    );
  };


  render() {

    if (this.state.isLoading) {
      return (
        <SafeAreaView>
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
        </SafeAreaView>
      );
    }

    return (
      <SafeAreaView>

<View style={styles.MainContainer}>
  
       <FlatList
       
          data={ this.state.dataSource }
          
          ItemSeparatorComponent = {this.FlatListItemSeparator}

          renderItem={({item}) => <Text style={styles.FlatListItemStyle} onPress={this.GetFlatListItem.bind(this, item.Categories)} > {item.Categories} </Text>}

          keyExtractor={(item, index) => index}

          // ListHeaderComponent={this.renderHeader}
          
         />
    
</View>

</SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({

MainContainer :{

justifyContent: 'center',
flex:1,
margin: 10,
paddingTop: (Platform.OS === 'ios') ? 20 : 0,

},

FlatListItemStyle: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

});

// AppRegistry.registerComponent('Project', () => Project);
