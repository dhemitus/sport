'use strict'

import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View, Button,
} from 'react-native'

import SettingListItem from '../ui/list/SettingListItem'

export default class Setting extends Component<{}> {

	componentWillMount() {
//		this.props.navigator.setTitle({ title: 'WERESPORT' })
	}

	render() {
		return (
			<View style={styles.container}>
				<SettingListItem text={'Poin'} />
				<SettingListItem text={'Profil Saya'} />
				<SettingListItem text={'Lapanganku'} />
				<SettingListItem text={'Pindah Olahraga'} />
				<SettingListItem text={'Daftar Blokir Saya'} />
				<SettingListItem text={'Tentang WERESPORT'} />
				<SettingListItem text={'Hubungi Kami'} />
				<SettingListItem text={'Pengaturan'} />
				<SettingListItem text={'Keluar'} />
			</View>
		)
	}
}

Setting.navigatorStyle = {
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
		flex: 1,
		backgroundColor: '#222222',
	},
	aboutcontainer: {
		margin: 20,
	},
	about: {
		color: 'white'
	},
});
