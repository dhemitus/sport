'use strict'

import React, { Component } from 'react'
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	TouchableOpacity,
} from 'react-native'
import LineYellowTextInput from '../ui/LineYellowTextInput'
import BlockButton from '../ui/button/BlockButton'
import TextButton from '../ui/button/TextButton'

export default class Register extends Component<{}> {

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
				<View style={styles.headcontainer}>
					<Text style={styles.head}>DAFTAR</Text>
				</View>
 				<View style={styles.formcontainer}>
					<LineYellowTextInput
						placeholder="Alamat Email"
					/>
					<LineYellowTextInput
						placeholder="Nama Lengkap"
					/>
					<LineYellowTextInput
						placeholder="Password"
						secureTextEntry={true}
					/>
					<LineYellowTextInput
						placeholder="Konfirmasi Password"
						secureTextEntry={true}
					/>
					<View>
						<LineYellowTextInput
							placeholder="Kode Referall"
						/>
						<Text style={styles.subset}>(Jika ada)</Text>
					</View>
					<BlockButton style={styles.button} onPress={() => { console.log('klik') }} text={'Daftar'} />
					<View style={styles.memberside}>
						<Text style={styles.yellowtext}>Sudah memiliki akun? </Text>
						<TextButton textStyle={styles.yellowtextbold} text={'MASUK'} onPress={() => { console.log('klutik') }} />
					</View>
				</View>
			</View>
		)
	}
}

Register.navigatorStyle = {
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
	headcontainer: {
		...StyleSheet.absoluteFillObject,
		alignItems: 'center',
		marginTop: 25,
	},
	formcontainer: {
		marginHorizontal: 40,
	},
	head: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#e4ff64'
	},
	memberside: {
		marginTop: 10,
		flexDirection: 'row',
	},
	button: {
		marginTop: 40,
	},
	yellowtextbold: {
		textDecorationLine: 'underline',
		fontWeight: 'bold',
		color: '#e4ff64'
	},
	subset: {
		marginTop: 5,
		color: 'white',
		fontStyle: 'italic',
	},
	yellowtext: {
		color: '#e4ff64'
	}
})