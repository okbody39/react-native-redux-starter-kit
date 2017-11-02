import React, { Component } from 'react';
import { Platform } from 'react-native';
import {
	Container, Header, Button, Content, Left, Right, Icon, Body, Title, Text,
	Picker, Form, Item as FormItem,
} from 'native-base';
const Item = Picker.Item;
import styles from './styles';

class PickerTest extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected1: 'key1',
			selected2: 'key1',
		};
	}

	onValueChange(value: string) {
		this.setState({
			selected1: value,
		});
	}

	onValueChange2(value: string) {
		this.setState({
			selected2: value,
		});
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
					<Form>
						<Picker
							iosHeader="Select one"
							mode="dropdown"
							placeholder="Select One"
							note={false}
							selectedValue={this.state.selected1}
							onValueChange={this.onValueChange.bind(this)}
						>
							<Item label="Wallet" value="key0" />
							<Item label="ATM Card" value="key1" />
							<Item label="Debit Card" value="key2" />
							<Item label="Credit Card" value="key3" />
							<Item label="Net Banking" value="key4" />
						</Picker>
					</Form>
				</Content>
			</Container>
		);
	}
}

export default PickerTest;
