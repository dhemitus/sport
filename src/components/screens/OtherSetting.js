'use strict'

import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View, Button,
} from 'react-native'
import { Switch } from 'react-native-switch'

import SettingListItem from '../ui/list/SettingListItem'

export default class OtherSetting extends Component<{}> {

	componentWillMount() {
		this.props.navigator.setTitle({ title: 'SETTING' })
	}

	render() {
		return (
			<View style={styles.container}>
				<SettingListItem text={'Sembunyikan Status'} 
					rightSide={<Switch circleSize={25} 
					activeText={''}
					inActiveText={''} 
					backgroundActive={'black'}
					backgroundInactive={'#777777'}
					circleActiveColor={'#e4ff64'}
					circleInActiveColor={'#e4ff64'}
					/>} />
				<SettingListItem text={'Matikan Notifikasi'}
					rightSide={<Switch circleSize={25}
						activeText={''}
						inActiveText={''}
						backgroundActive={'black'}
						backgroundInactive={'#777777'}
						circleActiveColor={'#e4ff64'}
						circleInActiveColor={'#e4ff64'}
					/>} />
				<SettingListItem text={'Filter Teman'} />
				<SettingListItem text={'Ubah Bahasa'} />
			</View>
		)
	}
}

OtherSetting.navigatorStyle = {
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
