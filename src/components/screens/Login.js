'use strict'

import React, { Component } from 'react'
import {
	Platform,
	StyleSheet,
	Text,
	Image,
	View,
	TouchableOpacity,
} from 'react-native'
import BlockYellowButton from '../ui/BlockYellowButton'
import LineYellowTextInput from '../ui/LineYellowTextInput'
import Icon from 'react-native-vector-icons/Ionicons'
import TextButton from '../ui/TextButton'

export default class Login extends Component<{}> {

	personIcon = () => {
		return (
			<Icon name="ios-person" size={20} color="#e4ff64" style={styles.pin} />
		)
	}
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
							height: 56,
							resizeMode: Image.resizeMode.contain,
						}}
						source={require('../../assets/images/logo_b.png')}
					/>
				</View>
				<View style={styles.formcontainer}>
					<LineYellowTextInput
						leftSide={this.personIcon()}
						placeholder="Alamat Email"
					/>
						<LineYellowTextInput
							leftSide={<Icon name="ios-key" size={20} color="#e4ff64" style={styles.pin} />}
							placeholder="Password"
							secureTextEntry={true}
						/>
					<TextButton style={styles.subset} text={'Lupa password?'} />
					<BlockYellowButton style={styles.button} onPress={() => {console.log('klik')}} text={'LOGIN'} />
					<View style={styles.memberside}>
						<Text style={styles.yellowtext}>Belum memiliki akun? </Text>
						<TextButton style={styles.yellowtextbold} text={'DAFTAR'} />
					</View>
				</View>
			</View>
		)
	}
}

Login.navigatorStyle = {
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
		marginTop: 15,
		marginRight: 10,
		paddingRight: 10,
		marginBottom: 15,
		borderRightWidth: 1,
		borderColor: '#e4ff64',
	},
	formcontainer: {
		flexDirection:'column',
		justifyContent: 'center',
		marginHorizontal: 50,
	},
	imagecontainer: {
		alignItems: 'center',
		marginTop: 60,
	},
	button: {
		marginVertical: 40,
	},
	memberside: {
		flexDirection: 'row',
	},
	yellowtextbold: {
		textDecorationLine: 'underline',
		fontWeight: 'bold',
		color: '#e4ff64'
	},
	password: {
		alignItems: 'flex-start',
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