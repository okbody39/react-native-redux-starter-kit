import React, { Component } from 'react';

import {
	Container, Header, Button, Content, Left, Right, Icon, Body, Title, Text,
	Radio, ListItem,
} from 'native-base';

import styles from './styles';

class RadioButtonTest extends Component {
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
						<Title>Action Sheet Example</Title>
					</Body>
					<Right />
				</Header>

				<Content padder>
					<ListItem>
						<Text>Daily Stand Up</Text>
						<Right>
							<Radio selected={false} />
						</Right>
					</ListItem>
					<ListItem>
						<Text>Discussion with Client</Text>
						<Right>
							<Radio selected={true} />
						</Right>
					</ListItem>
				</Content>
			</Container>
		);
	}
}

export default RadioButtonTest;
