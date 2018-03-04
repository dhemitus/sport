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

export default class BlockButton extends Component<{}> {
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
BlockButton.propTypes = {
	leftSide: PropTypes.any,
	rightSide: PropTypes.any,
	textStyle: PropTypes.object,
	style: PropTypes.object,
	text: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired
}

BlockButton.defaultProps = {
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
		padding: 10,
		alignItems: 'center',
		borderColor: '#e4ff64',
		borderWidth: 1,
		borderRadius: 10,
	},
	buttontext: {
		fontWeight: 'bold',
		color: '#222222'
	},
})