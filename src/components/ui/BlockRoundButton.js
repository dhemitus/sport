'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from 'react-native'

import WButton from './WButton'
/** 
 * 			<TouchableOpacity
				style={buttonstyle}
				onPress={() => onPress()}
			>
				<Text style={styles.buttontext}>{text}</Text>
			</TouchableOpacity>

*/

export default class BlockRoundButton extends Component<{}> {
	render() {
		let { leftSide, rightSide, text, style, textStyle } = this.props

		let buttonstyle = styles.button;
		buttonstyle = StyleSheet.flatten([buttonstyle, style]);
		textStyle = StyleSheet.flatten([styles.buttontext, textStyle])
		return (
			<WButton props={this.props} style={buttonstyle}>
				{leftSide}
				<Text style={textStyle}>{text}</Text>
				{rightSide}
			</WButton>
		)
	}
}
BlockRoundButton.propTypes = {
	leftSide: PropTypes.any,
	rightSide: PropTypes.any,
	textStyle: PropTypes.object,
	style: PropTypes.object,
	text: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired
}

BlockRoundButton.defaultProps = {
	leftSide: <View style={{ flex: 1 }} />,
	rightSide: <View style={{ flex: 1 }} />,
	text: '',
	onPress: () => { },
	textStyle: {},
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