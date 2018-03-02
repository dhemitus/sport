'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
	StyleSheet,
	View,
	TextInput,
} from 'react-native'

export default class LineGreyTextInput extends Component {
	render() {
		let { leftSide, rightSide, style, ...restProps } = this.props
		let textstyle = styles.inputstyle;
		textstyle = StyleSheet.flatten([textstyle, style]);
		return (
			<View style={textstyle}>
				{leftSide}
				<TextInput
					{...restProps}
					placeholderTextColor={'#777777'}
					underlineColorAndroid={'transparent'}
					style={styles.text}
					selectionColor={'#777777'}
				/>
				{rightSide}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	inputstyle: {
		marginTop: 25,
		paddingHorizontal: 10,
		backgroundColor: '#222222',
		borderColor: '#777777',
		borderWidth: 1,
		borderRadius: 10,
		flexDirection: 'row',
		justifyContent: 'flex-start',
	},
	text: {
		flex: 1,
		color: 'white',
	},
})