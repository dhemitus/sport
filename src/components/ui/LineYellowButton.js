'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from 'react-native'

export default class LineYellowButton extends Component<{}> {
	render() {
		let { style, text, onPress } = this.props
		return (
			<View style={style}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => onPress()}
				>
					<Text style={styles.buttontext}>{text}</Text>
				</TouchableOpacity>
			</View>
		)
	}
}
LineYellowButton.propTypes = {
	text: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
	button: {
		fontWeight: 'bold',
		backgroundColor: '#222222',
		padding: 10,
		alignItems: 'center',
		borderColor: '#e4ff64',
		borderWidth: 1,
		borderRadius: 10,
	},
	buttontext: {
		color: '#e4ff64'
	},
})