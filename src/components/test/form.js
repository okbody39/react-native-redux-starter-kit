import React, { Component } from 'react';

import {
	Container, Header, Button, Content, ActionSheet, Left, Right, Icon, Body, Title, Text,
	Form, Item, Input, Label
} from 'native-base';

import styles from './styles';

class FormTest extends Component {
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
						<Title>Form</Title>
					</Body>
					<Right />
				</Header>

				<Content padder>
					<Form>
						<Item fixedLabel>
							<Label>fixedLabel</Label>
							<Input />
						</Item>
						<Item inlineLabel>
							<Label>inlineLabel</Label>
							<Input />
						</Item>
						<Item floatingLabel>
							<Label>floatingLabel</Label>
							<Input />
						</Item>
						<Item stackedLabel>
							<Label>stackedLabel</Label>
							<Input />
						</Item>
					</Form>
					<Item regular>
						<Input placeholder='Regular Textbox' />
					</Item>
					<Item>
						<Icon active name='home' />
						<Input placeholder='Icon Textbox'/>
					</Item>
					<Item success>
						<Input placeholder='Textbox with Success Input'/>
						<Icon name='checkmark-circle' />
					</Item>
					<Item error>
						<Input placeholder='Textbox with Error Input'/>
						<Icon name='close-circle' />
					</Item>
				</Content>
			</Container>
		);
	}
}

export default FormTest;
