import React, { Component } from 'react';

import {
	Container, Header, Button, Content, Left, Right, Icon, Body, Title, Text,
	ListItem, CheckBox,
} from 'native-base';

import styles from './styles';

class CheckBoxTest extends Component {
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
						<Title>CheckBox</Title>
					</Body>
					<Right />
				</Header>

				<Content padder>
					<ListItem>
						<CheckBox checked={true} />
						<Body>
						<Text>Daily Stand Up</Text>
						</Body>
					</ListItem>
					<ListItem>
						<CheckBox checked={false} />
						<Body>
						<Text>Discussion with Client</Text>
						</Body>
					</ListItem>
				</Content>
			</Container>
		);
	}
}

export default CheckBoxTest;
