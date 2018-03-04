'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
	StyleSheet,
	View,
	TextInput,
} from 'react-native'

export default class LineWhiteTextInput extends Component {
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
					underlineColorAndroid={'white'}
					selectionColor={'#777777'}
					style={styles.text}
				/>
				{rightSide}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	inputstyle: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
	},
	text: {
		flex: 1,
		color: 'white',
	},
})