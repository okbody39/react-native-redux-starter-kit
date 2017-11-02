import React, { Component } from 'react';

import {
	Container, Header, Button, Content, Left, Right, Icon, Body, Title, Text,
} from 'native-base';

import styles from './styles';

class IconTest extends Component {
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
						<Title>Icon</Title>
					</Body>
					<Right />
				</Header>
				<Content padder>
					<Icon name='home' />
					<Icon ios='ios-menu' android="md-menu" style={{ fontSize: 20, color: 'red' }}/>
				</Content>
			</Container>
		);
	}
}

export default IconTest;
