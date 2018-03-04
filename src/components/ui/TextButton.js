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

export default class TextButton extends Component<{}> {
	render() {
		let { leftSide, rightSide, text, style, textStyle } = this.props

		let buttonstyle = styles.button;
		buttonstyle = StyleSheet.flatten([buttonstyle, style]);

		return (
			<WButton props={this.props} style={buttonstyle}>
				{leftSide}
				<Text style={textStyle}>{text}</Text>
				{rightSide}
			</WButton>
		)
	}
}

TextButton.propTypes = {
	leftSide: PropTypes.any,
	rightSide: PropTypes.any,
	textStyle: PropTypes.object,
	text: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired,
}

TextButton.defaultProps = {
	leftSide: <View style={{ flex: 1 }} />,
	rightSide: <View style={{ flex: 1 }} />,
	text: '',
	onPress: () => { },
}

const styles = StyleSheet.create({
	button: {
		flexDirection: 'row',
	}
})