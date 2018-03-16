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

export default class MyProfile extends Component<{}> {

	componentDidMount() {
		console.log('run')
//		this.props.navigator.setTitle({ title: 'PROFIL SAYA' })
	}

	render() {
		return (
			<View style={styles.container}>
				<ScrollView>
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
						<Icon name="ios-create-outline" size={32} color="white" />
					</CircleButton>
				</View>
				<View style={styles.profileContainer}>
					<View style={styles.titlehead}>
						<Text style={styles.head}>
							12
						</Text>
						<Text style={styles.underhead}>Teman</Text>
					</View>
					<View style={styles.titlelinehead}>
						<Text style={styles.head}>
							1
						</Text>	
						<Text style={styles.underhead}>Tahun</Text>
					</View>
					<View style={styles.titlehead}>
						<Text style={styles.head}>
							3
						</Text>
						<Text style={styles.underhead}>Olahraga</Text>
					</View>
				</View>
				<View style={styles.contentContainer}>
					<Text style={styles.head}>
						GIta Safitri (Gita)
					</Text>						
					<Text style={styles.subhead}>
						"Running Running"
					</Text>						
					<View style={styles.contactcontainer}>
						<View style={styles.contactlist}>
							<Icon name="ios-refresh-circle-outline" size={20} color="#e4ff64" style={styles.pin} />
							<Text style={styles.about}>
								25 Tahun
							</Text>
						</View>
						<View style={styles.contactlist}>
							<Icon name="ios-female-outline" size={20} color="#e4ff64" style={styles.pin} />
							<Text style={styles.about}>
								Wanita
							</Text>
						</View>
						<View style={styles.contactlist}>
							<Icon name="ios-clock-outline" size={20} color="#e4ff64" style={styles.pin} />
							<Text style={styles.about}>
								Rutin
							</Text>
						</View>
						<View style={styles.contactlist}>
							<Icon name="ios-walk-outline" size={20} color="#e4ff64" style={styles.pin} />
							<Text style={styles.about}>
								Hobi
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
							<View>
								<Text style={styles.membername}>Jakarta Runner</Text>
								<Text style={styles.membersub}>3 Anggota</Text>
							</View>
						</View>
					</ScrollView>
				</View>
				</ScrollView>
			</View>
		)
	}
}

MyProfile.navigatorStyle = {
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
	profileContainer: {
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
		marginRight: 10,
		marginTop: 150,
	},
	contentContainer: {
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		marginLeft: 30,
		marginTop: 30,
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
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		marginRight: 30,
	},
	membername: {
		fontSize: 16,
		color: '#e4ff64',
		fontWeight: 'bold',
		marginLeft: 10,
	},
	membersub: {
		fontSize: 16,
		color: 'white',
		marginLeft: 10,
	},
	formcontainer: {
		marginHorizontal: 30,
		marginTop: 10,
		alignItems: 'flex-start',
	},
	head: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'white'
	},
	subhead: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#e4ff64'
	},
	underhead: {
		fontSize: 16,
		color: 'white'
	},
	titlehead: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 5,
		paddingHorizontal: 10,
	},
	titlelinehead: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderLeftColor: 'white',
		borderLeftWidth: 1,
		borderRightColor: 'white',
		borderRightWidth: 1,
	},
	buttoncontainer: {
		...StyleSheet.absoluteFillObject,
		justifyContent: 'flex-start',
		alignItems: 'flex-end',
		marginTop: 70,
		marginRight: 28,
	},
	button: {
		backgroundColor: '#222222',
		justifyContent: 'center',
		alignItems: 'center',
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
		marginVertical: 5,
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