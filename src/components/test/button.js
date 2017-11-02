import React, { Component } from 'react';

import {
	Container, Header, Button, Content, Left, Right, Icon, Body, Title, Text,
} from 'native-base';

import styles from './styles';

class ButtonTest extends Component {
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
						<Title>Button</Title>
					</Body>
					<Right />
				</Header>

				<Content padder>
					<Button light><Text> Light </Text></Button>
					<Button transparent primary><Text> Primary transparent </Text></Button>
					<Button bordered success><Text> Success bordered </Text></Button>
					<Button rounded info><Text> Info rounded </Text></Button>
					<Button block warning><Text> Warning block </Text></Button>
					<Button full danger><Text> Danger full </Text></Button>
					<Button iconLeft dark>
						<Icon name='arrow-back' />
						<Text>Icon Button dark </Text>
					</Button>
				</Content>
			</Container>
		);
	}
}

export default ButtonTest;
