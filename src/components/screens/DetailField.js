'use strict'

import React, { Component } from 'react'
import {
	Platform,
	StyleSheet,
	Text,
	TextInput,
	View, Button, Dimensions
} from 'react-native'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'
import Icon from 'react-native-vector-icons/Ionicons'
import StarRating from 'react-native-star-rating'

import mapstyle from '../../libs/constants/mapstyle'
import LineWhiteTextInput from '../ui/LineWhiteTextInput'

let {
	width,
	height
} = Dimensions.get('window')
const ASPECT_RATIO = width / height;
const LATITUDE = 0
const LONGITUDE = 0
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

export default class DetailField extends Component<{}> {

	constructor() {
		super()
		this.state = {
			region: {
				latitude: LATITUDE,
				longitude: LONGITUDE,
				latitudeDelta: LATITUDE_DELTA,
				longitudeDelta: LONGITUDE_DELTA,
			},
			starCount: 3
		}
	}
	componentDidMount() {
		console.log('run')
		this.props.navigator.setTitle({ title: 'DETAIL LAPANGANKU' })

		navigator.geolocation.getCurrentPosition(
			(position) => {
				this.setState({
					region: {
						latitude: position.coords.latitude,
						longitude: position.coords.longitude,
						latitudeDelta: LATITUDE_DELTA,
						longitudeDelta: LONGITUDE_DELTA,
					}
				})
				console.log(position)
			},
			(error) => {
				console.log(error)
			}, {
				enableHighAccuracy: true,
				timeout: 25000,
				maxAge: 0,
				distanceFilter: 1
			},
		)
	}

	onStarRatingPress(rating) {
		this.setState({
			starCount: rating
		})
	}
/** 
 				<MapView
					provider={PROVIDER_GOOGLE}
					style={styles.map}
					region={this.state.region} >
				</MapView>

*/
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.searchcontainer}>
					<View style={styles.search}>
						<LineWhiteTextInput
							leftSide={<Icon name="ios-locate" size={10} color="#FFFFFF" style={styles.pin} />}
							style={styles.location}
							placeholder="Mulai"
						/>
					</View>
					<View style={styles.search}>
						<LineWhiteTextInput
							leftSide={<Icon name="ios-pin" size={20} color="#FFFFFF" style={styles.pin} />}
							style={styles.location}
							placeholder="Finish"
						/>
					</View>
				</View>
				<MapView
					provider={PROVIDER_GOOGLE}
					style={styles.map}
					region={this.state.region} >
				</MapView>
				<View style={styles.foot}>
					<Text style={styles.title}>12 Km</Text>
				</View>
			</View>
		);
	}
}

DetailField.navigatorStyle = {
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
		flexDirection: 'column',
		backgroundColor: '#222222',
		justifyContent: 'space-between',
	},
	pin: {
		marginTop: 20,
		marginRight: 10
	},
	searchcontainer: {
		justifyContent: 'flex-start',
	},
	search: {
		paddingLeft: 20,
	},
	location: {
		marginRight: 20,
	},
	map: {
		...StyleSheet.absoluteFillObject,
		height: 400,
//		marginVertical: 56,
		marginVertical: 110,
	},
	title: {
		fontSize: 18,
		color: '#FFFFFF',
		marginBottom: 5,
	},
	foot: {
		flexDirection: 'column',
		alignItems: 'flex-start',
		marginBottom: 10,
		marginLeft: 20,
	}
});
