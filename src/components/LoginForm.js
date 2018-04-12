import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Keyboard } from 'react-native';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Container, Spinner, Toast, Icon, Content, Title, Button, Text, Form, Input, Item, Label } from 'native-base';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }
    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser( {email, password} );
        Keyboard.dismiss();
    }
    renderButton() {
        if(this.props.loading) {
            return <Spinner color="blue" />;
        }
        return (
                <Button block full onPress={this.onButtonPress.bind(this)}>
                    <Text>Sign in</Text>
                </Button>
        );
    }
    render() {
         return (
            <Content padder>
                <Form>
                    <Item stackedLabel>
                    <Label>Email</Label>
                    <Input
                        autoCorrect={false}
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                    </Item>
                    <Item stackedLabel>
                    <Label>Password</Label>
                    <Input
                        value={this.props.password}
                        secureTextEntry
                        autoCorrect={false}
                        onChangeText={this.onPasswordChange.bind(this)}
                    />
                    </Item>
                    <Content padder>
                        {this.props.error? <Text style={{ color: 'red' }}>Could not log in. Please make sure you are passing good credentials.</Text>: null}
                    </Content>
                    <Content padder>
                        {this.renderButton()}
                    </Content>
                </Form>
            </Content>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    const { password, email, error, loading } = auth;
    return {
        email,
        password,
        error,
        loading
    };
};


export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);