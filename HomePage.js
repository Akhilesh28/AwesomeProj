'use strict'

import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	Dimensions,
	StatusBar, 
	Platform,
	Button
} from 'react-native';
import { H3, Footer,FooterTab, Container, Icon} from 'native-base';
import ListIndex from './ListIndex';
const deviceHeight = Dimensions.get("window").height;

export default class HomePage extends Component<Props> {
	static navigationOptions = {
		header: null
	};

	render() {
		return (
			<Container>
				<StatusBar color='lighter-content'/>
				<ImageBackground source={require("./assets/launchscreen-bg.png")} style={styles.imageContainer}>
				<View style={styles.logoContainer}>
					<ImageBackground source={require("./assets/l1.png")} style={styles.logo}/>
				</View>
				<View
		            style={{
		              alignItems: "center",
		              marginBottom: 50,
		              backgroundColor: "transparent"
		            }}
         		>
	            	<H3 style={styles.text}>Get started with</H3>
	            	<View style={{ marginTop: 8 }} />
	            	<H3 style={styles.text}>Machine Learning</H3>
	            	<View style={{ marginTop: 8 }} />
          		</View>
          		<View style={{ marginBottom: 80, justifyContent: 'center', alignItems: 'center'}}>
		            <Button 
		            onPress={() => {this.props.navigation.navigate("ListIndex")}}
		            title="Lets Go!"
		            style={{alignSelf: 'center'}}
	            	/>
	            </View>
		        </ImageBackground>
      		</Container>
		);
	}
}

const styles = StyleSheet.create({
	imageContainer: {
    flex: 1,
    width: null,
    height: null
  },
  logoContainer: {
    flex: 1,
    marginTop: deviceHeight / 8,
    marginBottom: 20
  },
  logo: {
    position: "absolute",
    left: Platform.OS === "android" ? 40 : 50,
    top: Platform.OS === "android" ? 35 : 60,
    width: 280,
    height: 180
  },
  text: {
    color: "white",
    bottom: 6,
    marginTop: 5
  }
});