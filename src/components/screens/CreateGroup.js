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

export default class CreateGroup extends Component<{}> {
	state = {
		avatarSource: null,
		images: null,
		image: null
	}
	componentDidMount() {
		console.log('run')
		this.props.navigator.setTitle({ title: 'BUAT GROUP' })
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
					<View style={styles.formcontainer}>
						<LineGreyTextInput
							placeholder="Nama Group"
						/>
						<LineGreyTextInput
							placeholder="Lokasi"
						/>
						<LineGreyTextInput
							placeholder="Maks Anggota"
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

CreateGroup.navigatorStyle = {
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