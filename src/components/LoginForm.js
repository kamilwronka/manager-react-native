import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Container, Spinner, Header, Toast, Body, Content, Title, Button, Text, Form, Input, Item, Label } from 'native-base';

class LoginForm extends Component {
    static navigationOptions = {
        header: (
            <Header>
                <Body>
                    <Title>Sign in</Title>
                </Body>
            </Header>
        )
      };
    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }
    onButtonPress() {
        const { email, password } = this.props;

        this.props.loginUser( {email, password});
    }
    renderButton() {
        if(this.props.loading) {
            return <Spinner color="blue" />  
        }

        return (
            <Button block full onPress={this.onButtonPress.bind(this)}>
                <Text>Sign in</Text>
            </Button>
        );
    }
    renderError() {
        console.log(this.props.error);
        if(this.props.error) {
            return (
                <Content>
                    <Text>Errur</Text>
                </Content>
        );
        }
    }
    render() {
        return (
            <Content padder>
                <Form>
                    <Item stackedLabel>
                    <Label>Email</Label>
                    <Input
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                    </Item>
                    <Item stackedLabel>
                    <Label>Password</Label>
                    <Input
                        secureTextEntry
                        onChangeText={this.onPasswordChange.bind(this)}
                    />
                    </Item>
                    <Content padder>
                        {this.renderButton()}
                    </Content>
                </Form>
                {this.renderError()}
            </Content>
        )
    }
}
const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = ({ auth }) => {
    const { password, email, error, loading } = auth;
    console.log(password);
    return {
        email,
        password,
        error,
        loading
    }
};


export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);