import React, { Component } from 'react';

import {
	Container, Header, Button, Content, Left, Right, Icon, Body, Title, Text,
	Toast,
} from 'native-base';

import styles from './styles';

class ToastTest extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showToast: false,
		};
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
						<Title>Toast</Title>
					</Body>
					<Right />
				</Header>

				<Content padder>
					<Button onPress={()=> Toast.show({
						type: 'warning',
						text: 'Wrong password!',
						position: 'bottom',
						buttonText: 'OK',
						duration: 2000,
					})}>
						<Text>Toast</Text>
					</Button>
				</Content>
			</Container>
		);
	}
}

export default ToastTest;
