'use strict'

import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
} from 'react-native';

import { Icon, Button, Header, Body, Title, Content, Container, Left, Right,
H1} from 'native-base';

export default class Introduction extends Component<Props> {
	static navigationOptions = ({navigation }) => ({
		title: "Introduction",
	    headerStyle: {
	      backgroundColor: '#0da5ec', 
	    },
	    headerTitleStyle: {
	      color: 'white'
	    },
	    headerTintColor: 'white'
	})

	render() {
		return (
			<Container>
	        	<Content style={{margin: 10}}>
	        		<H1>Why Machine Learning matters?</H1>
	        		<Text>{"\n"}{"  "}Artificial intelligence will shape our future more powerfully than any other innovation this century. Anyone who does not understand it will soon find themselves feeling left behind, waking up in a world full of technology that feels more and more like magic.{"\n"}{"  "}The rate of acceleration is already astounding. After a couple of AI winters and periods of false hope over the past four decades, rapid advances in data storage and computer processing power have dramatically changed the game in recent years.{"\n"}{"  "}
	        		In 2015, Google trained a conversational agent (AI) that could not only convincingly interact with humans as a tech support helpdesk, but also discuss morality, express opinions, and answer general facts-based questions.
	        		{"\n"}</Text>
	        		
	        		<Image source={require('./assets/Intro/1.png')} style={styles.img}/>
	        	
	        		<Text>{"\n"}{"  "}The same year, DeepMind developed an agent that surpassed human-level performance at 49 Atari games, receiving only the pixels and game score as inputs. Soon after, in 2016, DeepMind obsoleted their own achievement by releasing a new state-of-the-art gameplay method called A3C.{"\n"}{"  "}
					Meanwhile, AlphaGo defeated one of the best human players at Go — an extraordinary achievement in a game dominated by humans for two decades after machines first conquered chess. Many masters could not fathom how it would be possible for a machine to grasp the full nuance and complexity of this ancient Chinese war strategy game, with its 10¹⁷⁰ possible board positions (there are only 10⁸⁰atoms in the universe).
					</Text>
	        	</Content>
      		</Container>
		);
	}
}

const styles = StyleSheet.create({
	img: {
		width: '100%',
		height: 350
	}
})