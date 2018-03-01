'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
	StyleSheet,
	View,
	TextInput,
} from 'react-native'

export default class UnderineYellowTextInput extends Component {
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
					underlineColorAndroid={'#e4ff64'}
					style={styles.text}
					selectionColor={'#e4ff64'}
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