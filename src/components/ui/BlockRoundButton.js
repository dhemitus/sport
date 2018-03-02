'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from 'react-native'

export default class BlockRoundButton extends Component<{}> {
	render() {
		let { style, text, onPress } = this.props
		let buttonstyle = styles.button;
		buttonstyle = StyleSheet.flatten([buttonstyle, style]);
		return (
			<TouchableOpacity
				style={buttonstyle}
				onPress={() => onPress()}
			>
				<Text style={styles.buttontext}>{text}</Text>
			</TouchableOpacity>
		)
	}
}
BlockRoundButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
}

BlockRoundButton.defaultProps = {
	text: '',
	onPress: () => { },
	style: {},
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#e4ff64',
		paddingVertical: 5,
		alignItems: 'center',
		borderRadius: 16,
		height: 32,
	},
	buttontext: {
		fontWeight: 'bold',
		color: '#222222'
	},
})