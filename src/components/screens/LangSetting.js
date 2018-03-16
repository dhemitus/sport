'use strict'

import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View, Button,
} from 'react-native'

import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button'

const radio_props = [
	{ label: 'param1', value: 0 },
	{ label: 'param2', value: 1 }
]

export default class LangSetting extends Component<{}> {

	state = {
		value: 0,
		types2: [{ label: 'Bahasa Indonesia', value: 0 }, { label: 'English Language', value: 1 },],
		value2: 0,
		value2Index: 0,
	}

	componentWillMount() {
		this.props.navigator.setTitle({ title: 'UBAH BAHASA' })
	}

	render() {
		return (
			<View style={styles.container}>
				<RadioForm
					animation={true}
				>
					{this.state.types2.map((obj, i) => {
						var that = this;
						var is_selected = this.state.value2Index == i;
						return (
							<View key={i} style={styles.radioButtonWrap}>
								<RadioButton
									isSelected={is_selected}
									obj={obj}
									index={i}
									buttonColor={'#e4ff64'}
									labelColor={'white'}
									borderWidth={1}
									buttonSize={14}
									buttonOuterSize={24}
									style={[i !== this.state.types2.length - 1 && styles.radioStyle]}
									onPress={(value, index) => {
										this.setState({ value2: value })
										this.setState({ value2Index: index });
									}}
								/>
							</View>
						)
					})}
				</RadioForm>
			</View>
		)
	}
}

LangSetting.navigatorStyle = {
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
		padding: 20,
		alignItems: 'flex-start',
	},
	aboutcontainer: {
		margin: 20,
	},
	about: {
		color: 'white'
	},
	radioStyle: {
		borderColor: '#e4ff64',
		paddingBottom: 10
	},
	radioButtonWrap: {
		marginRight: 5
	},
});
