'use strict'

import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View, Button,
} from 'react-native'

export default class About extends Component<{}> {

	componentWillMount() {
		this.props.navigator.setTitle({ title: 'TENTANG WERESPORT' })
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.aboutcontainer}>
					<Text style={styles.about}>
						WeReSport adalah aplikasi yang dibuat untuk membantu kamu menemukan teman, grup, dan lapangan olahraga yang tepat sesuai dengan yang kamu butuhkan.
				</Text>
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
	about: {
		color: 'white'
	},
});
