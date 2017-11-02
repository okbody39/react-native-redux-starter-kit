import React, { Component } from 'react';

import {
	Container, Header, Button, Content, Left, Right, Icon, Body, Title, Text,
	Spinner,
} from 'native-base';

import styles from './styles';

class SpinnerTest extends Component {
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
						<Title>Spinner</Title>
					</Body>
					<Right />
				</Header>

				<Content padder>
					<Spinner />
					<Spinner color='red' />
					<Spinner color='green' />
					<Spinner color='blue' />
				</Content>
			</Container>
		);
	}
}

export default SpinnerTest;
