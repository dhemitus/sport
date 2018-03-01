'use strict'

import React, { Component } from 'react'
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	PixelRatio,
	
} from 'react-native'
import LineYellowButton from '../ui/LineYellowButton'
import TextButton from '../ui/TextButton'

export default class Splash extends Component<{}> {

	render() {
		return (
			<View style={styles.container}>
				<Image
					style={{
						flex: 1,
						resizeMode: 'cover',
						position: 'absolute',
						width: '100%',
						height: '100%',
						justifyContent: 'center',
					}}
					source={require('../../assets/images/background.jpg')}
				/>
				<View style={styles.imagecontainer}>
					<Image
						style={{
							height: 70,
							resizeMode: Image.resizeMode.contain,
						}}
						source={require('../../assets/images/logo.png')}
					/>
				</View>
				<View style={styles.formcontainer}>
					< LineYellowButton style = {
						styles.button
					}
					onPress = {
						() => {
							this.pickSingleBase64(true)
						}
					}
					text = {
						'Mulai'
					}
					/>
					<View style={styles.language}>
						<TextButton leftSide={
							<Image
								style={{
									width: 20,
									height: 20,
									resizeMode: Image.resizeMode.contain,
									marginRight: 10
								}}
								source={require('../../assets/images/indonesia.png')}
							/>

						} style={styles.yellowtextbold} text={'Bahasa Indonesia'} />
						<TextButton leftSide={
							<Image
								style={{
									width: 20,
									height: 20,
									resizeMode: Image.resizeMode.contain,
									marginRight: 10
								}}
								source={require('../../assets/images/english.png')}
							/>
							
						} style={styles.whitetext} text={'English'} />
					</View>
				</View>
			</View>
		)
	}
}

Splash.navigatorStyle = {
	statusBarColor: '#222222',
	statusBarTextColorScheme: 'light',
	navigationBarColor: 'black',
	navBarBackgroundColor: '#0a0a0a',
	navBarTextColor: '#777777',
	navBarButtonColor: '#777777',
	navBarHidden: true,
}

const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		justifyContent: 'center',
		backgroundColor: '#222222',
	},
	formcontainer: {
		...StyleSheet.absoluteFillObject,
		justifyContent: 'center',
		marginHorizontal: 80,
	},
	imagecontainer: {
		...StyleSheet.absoluteFillObject,
		alignItems: 'center',
		marginTop: 100,
	},
	language: {
		justifyContent: 'center',
		alignItems: 'flex-start',
	},
	button: {
		marginVertical: 40,
	},
	yellowtextbold: {
		fontWeight: 'bold',
		color: '#e4ff64',
		marginBottom: 25,
	},
	whitetext: {
		color: '#FFFFFF'
	}
})