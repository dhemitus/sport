'use strict'

import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View, Button,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import LineWhiteTextInput from '../ui/LineWhiteTextInput'
import LineYellowButton from '../ui/LineYellowButton'

export default class About extends Component<{}> {

	componentWillMount() {
		this.props.navigator.setTitle({ title: 'HUBUNGI KAMI' })
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.aboutcontainer}>
					<Text style={[styles.about, styles.address]}>
						Alamat
					</Text>
					<Text style={styles.about}>
						Grand Slipi Tower, Jl. Letjen S. Parman, RT 1/RW 4, Palmerah, Kota jakarta Barat, daerah Khusus Ibukota Jakarta 11480
					</Text>
					<View style={styles.contactcontainer}>
						<View style={styles.contactlist}>
							<Icon name="ios-phone-portrait" size={20} color="#FFFFFF" style={styles.pin} />
							<Text style={styles.about}>
								021-6868-2121
							</Text>
						</View>
						<View style={styles.contactlist}>
							<Icon name="ios-mail" size={20} color="#FFFFFF" style={styles.pin} />
							<Text style={styles.about}>
								email@email.com
							</Text>
						</View>
					</View>
					<Text style={[styles.about, styles.address]}>
						Kirim Pesan
					</Text>
					<View>
						<LineWhiteTextInput
							style={styles.inputform}
							placeholder="Nama"
						/>
						<LineWhiteTextInput
							style={styles.inputform}
							placeholder="Email"
						/>
						<LineWhiteTextInput
							style={styles.inputform}
							placeholder="Pesan"
						/>
					</View>
					<View style={styles.buttonform}>
						<LineYellowButton style={styles.button} onPress={() => { console.log('klik') }} text={'Kirim'} />
					</View>
				</View>
			</View>
		);
	}
}

About.navigatorStyle = {
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
		backgroundColor: '#222222',
		alignItems: 'flex-start',
	},
	aboutcontainer: {
		margin: 20,
	},
	contactcontainer: {
		marginVertical: 20,
	},
	pin: {
		marginRight: 10
	},
	contactlist: {
		flexDirection: 'row',
		marginVertical: 10,
	},
	inputform: {
		marginVertical: 10,
	},
	buttonform: {
		marginVertical: 10,
		marginHorizontal: 40,
	},
	address: {
		fontWeight: 'bold'
	},
	about: {
		color: 'white'
	},
});
