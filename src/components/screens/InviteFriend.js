'use strict'

import React, { Component } from 'react'
import {
	Platform,
	StyleSheet,
	Text,
	Image,
	View,
	FlatList,
	TouchableOpacity,
	Dimensions,
} from 'react-native'
import BlockRoundButton from '../ui/button/BlockRoundButton'
import UnderlineYellowTextInput from '../ui/UnderlineYellowTextInput'

const { width, height } = Dimensions.get('window');
const gutter = 20; // You can add gutter if you want

export default class InviteFriend extends Component<{}> {

	componentDidMount() {
		console.log('run')
		this.props.navigator.setTitle({ title: 'UNDANGAN TEMAN' })
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.imagecontainer}>
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
				<View style={styles.formcontainer}>
					<View style={styles.item}>
						<Text style={styles.head}>Nama</Text>
						<Text style={styles.desc}>Taqy</Text>
					</View>
					<View style={styles.item}>
						<Text style={styles.head}>Aktifitas Olahraga</Text>
						<Text style={styles.desc}>Intens</Text>
					</View>
					<View style={styles.item}>
						<Text style={styles.head}>Grup</Text>
						<Text style={styles.desc}>Jakarta Runner</Text>
					</View>
					<View style={styles.item}>
						<Text style={styles.head}>Umur</Text>
						<Text style={styles.desc}>21 Tahun</Text>
					</View>
					<View style={styles.item}>
						<Text style={styles.head}>Level</Text>
						<Text style={styles.desc}>Expert</Text>
					</View>
					<View style={styles.item}>
						<Text style={styles.head}>Tahun</Text>
						<Text style={styles.desc}>3-5</Text>
					</View>
				</View>
				<View style={styles.buttoncontainer}>
					<BlockRoundButton style={styles.blackbutton} textStyle={{color:'white'}} onPress={() => { console.log('klik') }} text={'TOLAK'} />
					<BlockRoundButton style={styles.button} onPress={() => { console.log('klik') }} text={'TERIMA'} />
				</View>
			</View>
		)
	}
}

InviteFriend.navigatorStyle = {
	statusBarColor: '#222222',
	statusBarTextColorScheme: 'light',
	navigationBarColor: 'black',
	navBarBackgroundColor: '#0a0a0a',
	navBarTextColor: '#777777',
	navBarButtonColor: '#777777',
}

const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		justifyContent: 'center',
		backgroundColor: '#222222',
	},
	formcontainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
		paddingHorizontal: gutter,
		marginTop: 50,
	},
    item: {
		width: (width - gutter * 3)/2,
		marginBottom: gutter,
		flexDirection: 'column',
		alignSelf: 'flex-start',
    },
	head: {
		fontSize: 16,
		color: '#e4ff64',
	},
	desc: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'white',
	},
	imagecontainer: {
		...StyleSheet.absoluteFillObject,
		alignItems: 'center',
		marginTop: 40,
	},
	bigtouch: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#e4ff64',
		borderRadius: 56,
		height: 112,
		width: 112,
	},
	buttoncontainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		padding: 30,
		marginTop: 40,
		marginHorizontal: 10,
	},
	blackbutton: {
		padding: 30,
		marginTop: 40,
		marginHorizontal: 10,
		backgroundColor: 'black',
	},
})