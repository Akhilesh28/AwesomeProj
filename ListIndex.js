'use strict'

import React, { Component } from 'react';
import { StyleSheet,Text, FlatList, View, TouchableOpacity} from 'react-native';
import { Header, Button, Content, Title, Left, Right, Icon, Body, Footer,FooterTab, Container,Separator} from 'native-base';
import { List, ListItem } from 'react-native-elements';

const datas = [
	{
		route: 'Introduction',
		text: "1. Introduction", 
	},
	{
		route: 'SLI',
		text: '2. Supervised Learning I',
	},
	{
		route: 'SLII',
		text: '3. Supervised Learning II',
	},
	{
		route: 'SLIII',
		text: '4. Supervised Learning III'
	},
	{
		route: 'UnSupervised',
		text: '5. Unsupervised Learning' 
	},
	{
		route: 'NN',
		text: '6. Neural Networks & Deep Learning'
	},
	{
		route: 'RNL',
		text: '7. Reinforcement Learning'
	},
];

export default class ListIndex extends Component<Props> {
	static navigationOptions = {
		title: 'Learning ML',
	    headerStyle: {
	      backgroundColor: '#0da5ec', 
	    },
	    headerTitleStyle: {
	      color: 'white',
	    },
	    headerTintColor: 'white',
	    headerRight: (
	      <TouchableOpacity
	        style={{
	          height: 40,
	          width: 40,
	          alignItems: 'center',
	          justifyContent: 'center',
	          backgroundColor: 'white',
	          borderRadius: 50,
	          margin: 5,
	          shadowColor: 'black',
	          shadowOpacity: 0.5,
	          shadowOffset: {
	            width: 2,
	            height: 2,
	          }
	        }}
	        >
	          <Icon name="bookmark" style={{color: "#0da5ec", fontSize: 28}}/>
	        </TouchableOpacity>)
	}

	renderSeparator = () => {
	    return (
	      <View
	        style={{
	          height: 15,
	          width: "100%",
	          backgroundColor: "#e3e8ea",
	        }}
	      />
	    );
	};


	render() {
		return (
		
		      <FlatList
		        data={datas}
		        renderItem={({item}) =>
		        	<ListItem
				    	title={item.text}
				    	titleStyle={{fontWeight: 'bold', fontSize: 16}}
				    	containerStyle={{height: 65, borderBottomWidth: 0, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}
				    	rightIcon={<Icon name="arrow-forward" style={{color: '#0da5ec'}} />}
				    	onPress = {() => this.props.navigation.navigate(item.route)}
				    />
		        }
		        keyExtractor={item => item.text}
		        ItemSeparatorComponent={this.renderSeparator}
		      />
		);
	}
}

const styles = StyleSheet.create({
	
});