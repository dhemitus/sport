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
import CircleButton from '../ui/button/CircleButton'

export default class Edit extends Component<{}> {
	state = {
		avatarSource: null,
		images: null,
		image: null
	}
	componentDidMount() {
		console.log('run')
		this.props.navigator.setTitle({ title: 'EDIT AKUN' })
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
			})
		}).catch(e => alert(e))
	}

	pickOneBase64 = () => {
		ImagePicker.openPicker({
			width: 300,
			height: 300,
			cropping: false,
			includeBase64: true,
			includeExif: true,
		}).then(image => {
			console.log('received base64 image');
			this.setState({
				images: { uri: `data:${image.mime};base64,` + image.data, width: image.width, height: image.height },
			})
		}).catch(e => alert(e))
	}

	render() {
		return (
			<View style={styles.container}>
				<ScrollView>
					<View style={styles.imagecontainer}>
						<TouchableOpacity style={styles.covertouch}
							onPress={
								() => {
									this.pickOneBase64()
								}
							}
						>
							<Image
								style={{
									height: 98,
									width: 298,
									borderRadius: 8,
									resizeMode: Image.resizeMode.cover,
								}}
								source={this.state.images === null ? require('../../assets/images/banner1.jpg') : this.state.images}
							/>
						</TouchableOpacity>
					</View>
					<View style={styles.imagecontainer}>
						<CircleButton style={styles.bigtouch} onPress={() => { this.pickSingleBase64() }}>
							{
								this.state.image === null ?
									<Icon name="ios-person" size={80} color="#222222" />
									:
									<Image
										style={{
											height: 110,
											width: 110,
											borderRadius: 55,
											resizeMode: Image.resizeMode.cover,
										}}
										source={this.state.image}
									/>
							}
						</CircleButton>
					</View>
					<View style={styles.formcontainer}>
						<LineGreyTextInput
							placeholder="Nama Lengkap"
						/>
						<LineGreyTextInput
							placeholder="Nama Panggilan"
						/>
						<LineGreyTextInput
							placeholder="Alamat Email"
						/>
						<LineGreyTextInput
							placeholder="Tanggal Lahir"
						/>
						<LineGreyTextInput
							placeholder="Password"
							secureTextEntry={true}
						/>
						<LineGreyTextInput
							placeholder="Konfirmasi Password"
							secureTextEntry={true}
						/>
						<View style={styles.buttoncontainer}>
							<BlockRoundButton style={styles.button} onPress={() => { console.log('klik') }} text={'Simpan'} />
						</View>
					</View>
				</ScrollView>
			</View>
		)
	}
}

Edit.navigatorStyle = {
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
		paddingVertical: 0,
		borderColor: '#777777',
		borderWidth: 1,
		borderRadius: 10,
	},
	imagecontainer: {
		alignItems: 'center',
		marginTop: 30,
	},
	covertouch: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#777777',
		borderRadius: 10,
		height: 100,
		width: 300,
	},
	bigtouch: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#e4ff64',
		borderRadius: 56,
		height: 112,
		width: 112,
	},
	formcontainer: {
		marginHorizontal: 40,
		marginBottom: 40,
	},
	head: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#e4ff64'
	},
	buttoncontainer: {
		alignItems: 'center'
	},
	button: {
		padding: 50,
		marginTop: 40,
	},
})