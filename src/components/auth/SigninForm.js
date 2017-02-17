import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import GrommetLoginForm from 'grommet/components/LoginForm';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Logo from '../Logo';
import validate from './LoginValidator';
import { signin } from '../../actions';


class SigninForm extends Component {
    state = {
        busy: false,
        errors: []
    };

    onSubmit(fields) {
        const errors = _.toArray(validate(fields));
        
        if (!_.isEmpty(errors)) {
            this.setState({ errors });
        } else {
            this.props.signin(fields);
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

const mapStateToProps = (state) => {
    return {
        error: state.auth.error
    }
}

export default connect(mapStateToProps, { signin })(SigninForm);

