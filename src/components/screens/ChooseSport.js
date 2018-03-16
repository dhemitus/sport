'use strict'

import React, { Component } from 'react'
import {
	Platform,
	StyleSheet,
	Text,
	Image,
	View,
	FlatList,
	TouchableOpacity,
	Dimensions,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const { width, height } = Dimensions.get('window');
const gutter = 5; // You can add gutter if you want
const neww = (width - gutter * 3)/2

export default class ChooseSport extends Component<{}> {

	componentDidMount() {
		console.log('run')
		this.props.navigator.setTitle({ title: 'PILIH OLAHRAGAMU' })
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.formcontainer}>
					<View style={styles.item}>
						<LinearGradient start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 0.0}} colors={['#def9c8', '#7eeed1', '#00b4ca']} style={styles.linearGradient}>
							<View style={{flexDirection: 'row'}}>
								<Image
									style={{
										width: 24,
										height: 24,
										resizeMode: Image.resizeMode.contain,
										marginRight: 10,
									}}
									source={require('../../assets/images/runningicon.png')}
								/>
								<Text style={styles.head}>LARI</Text>
							</View>
						</LinearGradient>
						<Image
							style={{
								width: neww,
								height: 120,
								resizeMode: Image.resizeMode.contain,
							}}
							source={require('../../assets/images/running.png')}
						/>
					</View>
					<View style={styles.item}>
						<LinearGradient start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 0.0}} colors={['#ffc565', '#f044a0']} style={styles.linearGradient}>
							<View style={{flexDirection: 'row'}}>
								<Image
									style={{
										width: 24,
										height: 24,
										resizeMode: Image.resizeMode.contain,
										marginRight: 10,
									}}
									source={require('../../assets/images/cyclingicon.png')}
								/>
								<Text style={styles.head}>BERSEPEDA</Text>
							</View>
						</LinearGradient>
						<Image
							style={{
								width: neww,
								height: 120,
								resizeMode: Image.resizeMode.contain,
							}}
							source={require('../../assets/images/cycling.png')}
						/>
					</View>
					<View style={styles.item}>
						<LinearGradient start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 0.0}} colors={['#fb6741', '#f9ea48']} style={styles.linearGradient}>
							<View style={{flexDirection: 'row'}}>
								<Image
									style={{
										width: 24,
										height: 24,
										resizeMode: Image.resizeMode.contain,
										marginRight: 10,
									}}
									source={require('../../assets/images/badmintonicon.png')}
								/>
								<Text style={styles.head}>BULU TANGKIS</Text>
							</View>
						</LinearGradient>
						<Image
							style={{
								width: neww,
								height: 120,
								resizeMode: Image.resizeMode.contain,
							}}
							source={require('../../assets/images/badminton.png')}
						/>
					</View>
					<View style={styles.item}>
						<LinearGradient start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 0.0}} colors={['#5a4eef', '#99eae1']} style={styles.linearGradient}>
							<View style={{flexDirection: 'row'}}>
								<Image
									style={{
										width: 24,
										height: 24,
										resizeMode: Image.resizeMode.contain,
										marginRight: 10,
									}}
									source={require('../../assets/images/basketicon.png')}
								/>
								<Text style={styles.head}>BOLA BASKET</Text>
							</View>
						</LinearGradient>
						<Image
							style={{
								width: neww,
								height: 120,
								resizeMode: Image.resizeMode.contain,
							}}
							source={require('../../assets/images/basket.png')}
						/>
					</View>
					<View style={styles.item}>
						<LinearGradient start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 0.0}} colors={['#5e25ef', '#fcc9d3']} style={styles.linearGradient}>
							<View style={{flexDirection: 'row'}}>
								<Image
									style={{
										width: 24,
										height: 24,
										resizeMode: Image.resizeMode.contain,
										marginRight: 10,
									}}
									source={require('../../assets/images/futsalicon.png')}
								/>
								<Text style={styles.head}>FUTSAL</Text>
							</View>
						</LinearGradient>
						<Image
							style={{
								width: neww,
								height: 120,
								resizeMode: Image.resizeMode.contain,
							}}
							source={require('../../assets/images/futsal.png')}
						/>
					</View>
					<View style={styles.item}>
						<LinearGradient start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 0.0}} colors={['#ffa254', '#ac124c', '#411b4c']} style={styles.linearGradient}>
							<View style={{flexDirection: 'row'}}>
								<Image
									style={{
										width: 24,
										height: 24,
										resizeMode: Image.resizeMode.contain,
										marginRight: 10,
									}}
									source={require('../../assets/images/tenisicon.png')}
								/>
								<Text style={styles.head}>TENIS</Text>
							</View>
						</LinearGradient>
						<Image
							style={{
								width: neww,
								height: 120,
								resizeMode: Image.resizeMode.contain,
							}}
							source={require('../../assets/images/tenis.png')}
						/>
					</View>
				</View>
			</View>
		)
	}
}

ChooseSport.navigatorStyle = {
	statusBarColor: '#222222',
	statusBarTextColorScheme: 'light',
	navigationBarColor: 'black',
	navBarBackgroundColor: '#0a0a0a',
	navBarTextColor: '#777777',
	navBarButtonColor: '#777777',
}

const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: '#222222',
	},
	linearGradient: {
		borderRadius: 6,
		padding: 6,
	},
	formcontainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
		paddingHorizontal: gutter,
		marginTop: 30,
	},
    item: {
		width: (width - gutter * 3)/2,
		marginBottom: 25,
		flexDirection: 'column',
		alignSelf: 'flex-start',
		borderRadius: 6,
		backgroundColor: '#0f0f0f',
    },
	head: {
		fontSize: 16,
		color: 'black',
	},
	desc: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'white',
	},
})