import _ from 'lodash';
import React, { Component } from 'react';
import GrommetLoginForm from 'grommet/components/LoginForm';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Logo from './Logo';
import validate from './LoginValidator';


class LoginForm extends Component {
    state = {
        busy: false,
        errors: []
    };

    onSubmit(fields) {
        const errors = _.toArray(validate(fields));
        
        if (errors) {
            this.setState({ errors });
        } else {
            console.log('Yeaaahh!!');
        }
    }
    
    render() {
        return (
            <Box align="center">
                <GrommetLoginForm onSubmit={ this.state.busy ? null : this.onSubmit.bind(this) }
                    logo={ <Logo /> }
                    errors={ this.state.errors }
                    forgotPassword={< Anchor href='#'
                    label='Forgot password?' /> }
                    rememberMe={ true } />
            </Box>
        );
    }
}

export default LoginForm;

