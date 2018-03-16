'use strict'

import React, { Component } from 'react'
import {
	Platform,
	StyleSheet,
	Text,
	Image,
	View,
	ScrollView,
	TouchableOpacity,
} from 'react-native'
import BlockButton from '../ui/button/BlockButton'
import LineYellowTextInput from '../ui/LineYellowTextInput'
import Icon from 'react-native-vector-icons/Ionicons'
import TextButton from '../ui/button/TextButton'
import OutlineButton from '../ui/button/OutlineButton'

import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin'
import {
	LoginManager
}
from 'react-native-fbsdk'

export default class Login extends Component<{}> {

	personIcon = () => {
		return (
			<Icon name="ios-person" size={20} color="#e4ff64" style={styles.pin} />
		)
	}

	componentDidMount() {
		this._setupGoogleSignin();
	}

	async _setupGoogleSignin() {
		try {
			await GoogleSignin.hasPlayServices({ autoResolve: true });
			await GoogleSignin.configure({
				webClientId: '173551620746-hjr9uu7sp8l7oqpptf35o521sd6qvib1.apps.googleusercontent.com',
				offlineAccess: true
			})

			const user = await GoogleSignin.currentUserAsync();
			console.log("userDetais",user);
			this.setState({user});
		}
			catch(err) {
			console.log("There are any error", err.message);
		}
	}

	_fbAuth() {
		LoginManager.logInWithReadPermissions(['public_profile']).then(function (result) {
			if (result.isCancelled) {
				console.log("Login Cancelled");
			} else {
				console.log("Login Success permission granted:" + result.grantedPermissions);
			}
		}, function (error) {
			console.log("some error occurred!!");
		})
	}

	_signIn() {
		GoogleSignin.signIn()
			.then((user) => {
				console.log(user);
				this.setState({
					user: user
				});
			})
			.catch((err) => {
				console.log('WRONG SIGNIN', err);
			})
			.done();
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
				<ScrollView>
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
						<TextButton textStyle={styles.subset} text={'Lupa password?'} />
						<BlockButton style={styles.button} onPress={() => { console.log('klutik') }} text={'LOGIN'} />
						<View style={styles.memberside}>
							<Text style={styles.yellowtext}>Belum memiliki akun? </Text>
							<TextButton textStyle={styles.yellowtextbold} text={'DAFTAR'} onPress={() => { console.log('klutik') }} />
						</View>
						<View style={styles.oauth}>
							<Text style={styles.space}>ATAU</Text>
							<OutlineButton
								leftSide={<Icon name="logo-facebook" size={20} color="#e4ff64" style={styles.icon} />}
								style={styles.button} onPress={() => { this._fbAuth() }} text={'Masuk dengan akun facebook'} />
							<OutlineButton 
								leftSide={<Icon name="logo-google" size={20} color="#e4ff64" style={styles.icon} />}
								style={styles.button} text={'Masuk dengan akun google'}
								onPress={() => { this._signIn() }}
								/>
						</View>
					</View>
				</ScrollView>
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
	oauth: {
		alignItems: 'center',
		marginTop: 10,
	},
	button: {
		flexDirection: 'row',
		marginVertical: 10,
	},
	icon: {
		borderRightWidth: 1,
		borderColor: '#e4ff64',
		paddingRight: 10,
		marginRight: 10,
	},
	memberside: {
		flexDirection: 'row',
	},
	space: {
		fontWeight: 'bold',
		color: 'white',
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