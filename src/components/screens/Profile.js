'use strict'

import React, { Component } from 'react'
import {
	Platform,
	StyleSheet,
	Text,
	Image,
	View,
	NativeModules,
	TouchableOpacity,
} from 'react-native'
import LineYellowButton from '../ui/LineYellowButton'
import UnderlineYellowTextInput from '../ui/UnderlineYellowTextInput'
import LineYellowTextInput from '../ui/LineYellowTextInput'
import Icon from 'react-native-vector-icons/Ionicons'
import TextButton from '../ui/TextButton'
const ImagePicker = NativeModules.ImageCropPicker

export default class Profile extends Component<{}> {
	state = {
		avatarSource: null,
		images: null,
		image: null
	}
	pickSingleBase64 = () => {
		ImagePicker.openPicker({
			width: 300,
			height: 300,
			cropping: false,
			includeBase64: true,
			includeExif: true,
		}).then(image => {
			console.log('received base64 image');
			this.setState({
				image: { uri: `data:${image.mime};base64,` + image.data, width: image.width, height: image.height },
				images: null
			})
			console.log(this.state.image.uri)
		}).catch(e => alert(e))
	}

	personIcon = () => {
		return (
			<Icon name="ios-person" size={20} color="#e4ff64" style={styles.pin} />
		)
	}
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.imagecontainer}>
					<TouchableOpacity style={styles.bigtouch}
						onPress={
							() => {
								this.pickSingleBase64()
							}
						}
					>
					{this.state.image === null ?
							<Icon name="ios-person" size={80} color="#222222" />
						:
							<Image
								style={{
									height:102,
									width:102,
									borderRadius: 51,
									resizeMode: Image.resizeMode.cover,
								}}
								source={this.state.image}
							/>
					}
					</TouchableOpacity>
				</View>
				<View style={styles.formcontainer}>
					<UnderlineYellowTextInput
						style={styles.input}
						leftSide={this.personIcon()}
						placeholder="Alamat Email"
					/>
					<UnderlineYellowTextInput
						style={styles.input}
						leftSide={<Icon name="ios-key" size={20} color="#222222" style={styles.pin} />}
						placeholder="Tanggal Lahir"
						/>
					<LineYellowButton style={styles.button} onPress={() => {console.log('klik')}} text={'Selanjutnya'} />
				</View>
			</View>
		)
	}
}

Profile.navigatorStyle = {
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
	pin: {
		paddingTop: 15,
		paddingRight: 10,
	},
	formcontainer: {
		flexDirection:'column',
		marginHorizontal: 50,
	},
	imagecontainer: {
		...StyleSheet.absoluteFillObject,
		alignItems: 'center',
		marginTop: 60,
	},
	bigtouch: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#e4ff64',
		borderRadius: 56,
		height: 112,
		width: 112,
	},
	input: {
		marginTop: 25,
	},
	button: {
		marginVertical: 40,
	},
})