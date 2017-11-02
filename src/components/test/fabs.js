import React, { Component } from 'react';

import {
	Container, Header, Button, Content, Left, Right, Icon, Body, Title, Text,
	Fab, View,
} from 'native-base';

import styles from './styles';

class FABsTest extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false,
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
						<Title>FABs</Title>
					</Body>
					<Right />
				</Header>

				<View style={{ flex: 1 }}>
					<Fab
						active={this.state.active}
						direction="up"
						containerStyle={{ }}
						style={{ backgroundColor: '#5067FF' }}
						position="bottomRight"
						onPress={() => this.setState({ active: !this.state.active })}>
						<Icon name="share" />
						<Button style={{ backgroundColor: '#34A34F' }}>
							<Icon name="logo-whatsapp" />
						</Button>
						<Button style={{ backgroundColor: '#3B5998' }}>
							<Icon name="logo-facebook" />
						</Button>
						<Button disabled style={{ backgroundColor: '#DD5144' }}>
							<Icon name="mail" />
						</Button>
					</Fab>
					{/* <Fab direction="left" position="topRight"> */}
					{/* .... */}
					{/* </Fab> */}
					{/* <Fab direction="down" position="topLeft"> */}
					{/* .... */}
					{/* </Fab> */}
					{/* <Fab direction="right" position="bottomLeft"> */}
					{/* .... */}
					{/* </Fab> */}
				</View>
			</Container>
		);
	}
}

export default FABsTest;
