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
import CircleButton from '../ui/button/CircleButton'
import Icon from 'react-native-vector-icons/Ionicons'
const ImagePicker = NativeModules.ImageCropPicker

export default class MyGroup extends Component<{}> {

	componentDidMount() {
		console.log('run')
		this.props.navigator.setTitle({ title: 'GROUP SAYA' })
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
				<View style={styles.buttoncontainer}>
					<CircleButton style={styles.button} onPress={() => { console.log('klik') }}>
						<Icon name="ios-person-add-outline" size={32} color="#222222" />
					</CircleButton>
					<CircleButton style={styles.button} onPress={() => { console.log('klik') }}>
						<Icon name="ios-chatbubbles-outline" size={32} color="#222222" />
					</CircleButton>
				</View>
				<View style={styles.contentContainer}>
					<View style={{flexDirection:'row'}}>
						<Text style={styles.head}>
							Jakarta Runner
						</Text>
						<View style={{flexDirection:'row', alignItems: 'space-between', marginLeft: 50}}>
							<Icon name="ios-add-outline" size={20} color="white" style={styles.pinhead} />
							<Text style={{ color: 'white', fontWeight: 'normal', fontSize: 16, marginLeft: 5 }}>
								Tambah Jadwal
							</Text>
						</View>
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
								8 Orang <Text style={styles.smaller}>max</Text>
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
				</View>
			</View>
		)
	}
}

MyGroup.navigatorStyle = {
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
		marginTop: 100,
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
		...StyleSheet.absoluteFillObject,
		justifyContent: 'flex-end',
		flexDirection: 'row',
		marginTop: 110,
		marginRight: 28,
	},
	button: {
		backgroundColor: '#e4ff64',
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
	},
	contactcontainer: {
		marginVertical: 10,
	},
	pin: {
		marginRight: 10
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
		color: 'red'
	},
})