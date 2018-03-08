'use strict'

import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View, Button,
} from 'react-native'

import DetailFieldListItem from '../ui/list/DetailFieldListItem'

export default class DetailFieldList extends Component<{}> {

	componentWillMount() {
		this.props.navigator.setTitle({ title: 'WERESPORT' })
	}

	render() {
		return (
			<View style={styles.container}>
				<DetailFieldListItem text={{start:'Bundaran HI', finish:'Monas', distance:'jarak (12 km)'}} />
				<DetailFieldListItem text={{ start: 'Lubang Buaya', finish: 'TMII', distance:'jarak (10 km)' }} />
				<DetailFieldListItem text={{ start: 'Pasar Seni', finish: 'Kota Tua', distance: 'jarak (8 km)' }} />
			</View>
		)
	}
}

DetailFieldList.navigatorStyle = {
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
