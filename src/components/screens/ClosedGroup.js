'use strict'

import React, { Component } from 'react'
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	NativeModules,
	ScrollView,
	TouchableOpacity,
} from 'react-native'
import LineGreyTextInput from '../ui/LineGreyTextInput'
import BlockRoundButton from '../ui/button/BlockRoundButton'
import Icon from 'react-native-vector-icons/Ionicons'
const ImagePicker = NativeModules.ImageCropPicker

export default class ClosedGroup extends Component<{}> {

	componentDidMount() {
		console.log('run')
		this.props.navigator.setTitle({ title: 'GABUNG GROUP' })
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.imagecontainer}>
					<Image
						style={{
							height: '100%',
							resizeMode: Image.resizeMode.cover,
						}}
						source={require('../../assets/images/banner1.jpg')}
					/>
				</View>
				<View style={styles.iconcontainer}>
					<View style={styles.bigtouch}>
						<Image
							style={{
								height: 110,
								width: 110,
								borderRadius: 55,
								resizeMode: Image.resizeMode.cover,
							}}
							source={require('../../assets/images/banner1.jpg')}
						/>
					</View>
				</View>
				<View style={styles.contentContainer}>
					<View style={{flexDirection:'row'}}>
						<Text style={styles.head}>
							Jakarta Runner
						</Text>
						<Icon name="ios-lock" size={16} color="red" style={styles.pinhead} />
						<Text style={{ color: 'red', fontWeight: 'normal', fontSize: 16 }}>
							Grup Terkunci
						</Text>
						
					</View>
					<View style={styles.contactcontainer}>
						<View style={styles.contactlist}>
							<Icon name="ios-pin" size={20} color="#e4ff64" style={styles.pin} />
							<Text style={styles.about}>
								Ciputra World 1
							</Text>
						</View>
						<View style={styles.contactlist}>
							<Icon name="ios-people" size={20} color="#e4ff64" style={styles.pin} />
							<Text style={styles.about}>
								2 Orang <Text style={styles.smaller}>8 max</Text>
							</Text>
						</View>
					</View>
				</View>
				<View style={styles.formcontainer}>
					<ScrollView horizontal>
						<View style={styles.member}>
							<View style={styles.smalltouch}>
								<Image
									style={{
										height: 54,
										width: 54,
										borderRadius: 27,
										resizeMode: Image.resizeMode.cover,
									}}
									source={require('../../assets/images/banner1.jpg')}
								/>
							</View>
							<Text style={styles.membername}>Taqy</Text>
						</View>
						<View style={styles.member}>
							<View style={styles.smalltouch}>
								<Image
									style={{
										height: 54,
										width: 54,
										borderRadius: 27,
										resizeMode: Image.resizeMode.cover,
									}}
									source={require('../../assets/images/banner1.jpg')}
								/>
							</View>
							<Text style={styles.membername}>Gita</Text>
						</View>
					</ScrollView>
					<View style={styles.buttoncontainer} />
				</View>
			</View>
		)
	}
}

ClosedGroup.navigatorStyle = {
	statusBarColor: '#222222',
	statusBarTextColorScheme: 'light',
	navigationBarColor: 'black',
	navBarBackgroundColor: '#0a0a0a',
	navBarTextColor: '#777777',
	navBarButtonColor: '#777777',
	navBarTitleTextCentered: true,
}

const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		justifyContent: 'center',
		backgroundColor: '#222222',
	},
	contentContainer: {
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		marginLeft: 30,
		marginTop: 70,
	},
	imagecontainer: {
		...StyleSheet.absoluteFillObject,
		alignItems: 'center',
		justifyContent: 'center',
		borderBottomWidth: 1,
		borderColor: '#e4ff64',
		height: 140,
	},
	iconcontainer: {
		...StyleSheet.absoluteFillObject,
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
	},
	bigtouch: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#e4ff64',
		borderRadius: 56,
		marginHorizontal: 30,
		marginVertical: 70,
		height: 112,
		width: 112,
	},
	smalltouch: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#e4ff64',
		borderRadius: 28,
		height: 56,
		width: 56,
	},
	member: {
		alignItems: 'center',
		marginRight: 30,
	},
	membername: {
		fontSize: 14,
		color: 'white',
		marginTop: 10,
	},
	formcontainer: {
		marginHorizontal: 30,
		marginTop: 10,
		alignItems: 'flex-start',
	},
	head: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#e4ff64'
	},
	buttoncontainer: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		padding: 30,
		marginTop: 40,
	},
	contactcontainer: {
		marginVertical: 10,
	},
	pin: {
		marginRight: 10
	},
	pinhead: {
		marginHorizontal: 5
	},
	contactlist: {
		flexDirection: 'row',
		marginVertical: 10,
	},
	about: {
		fontSize: 16,
		color: 'white',
	},
	smaller: {
		fontSize: 14,
		color: '#e4ff64'
	},
})