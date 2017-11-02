import React, { Component } from 'react';

import {
	Container, Header, Button, Content, Left, Right, Icon, Body, Title, Text,
	Thumbnail,
} from 'native-base';

import styles from './styles';

class ThumbnailTest extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="arrow-back" />
						</Button>
					</Left>
					<Body>
						<Title>Thumbnail</Title>
					</Body>
					<Right />
				</Header>

				<Content padder>
					<Text>Square Thumbnail</Text>
					<Thumbnail square source={{ uri: 'http://www.lattetalk.co.kr/images/bn01.png' }} />
					<Thumbnail square small source={{ uri: 'http://www.lattetalk.co.kr/images/bn01.png' }} />
					<Text>Circular Thumbnail</Text>
					<Thumbnail source={{ uri: 'http://www.lattetalk.co.kr/images/bn01.png' }} />
					<Thumbnail large source={{ uri: 'http://www.lattetalk.co.kr/images/bn01.png' }} />
				</Content>
			</Container>
		);
	}
}

export default ThumbnailTest;
