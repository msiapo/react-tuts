import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginForm from "../forms/LoginForm";
import { Container} from 'semantic-ui-react';
import { login } from '../../actions/auth';

class LoginPage extends React.Component {

    submit = data => this.props.login(data).then(() => this.props.history.push("/"));
    
    render(){
        return(
            <Container>
                <h1>Login Page</h1>
                <LoginForm submit={this.submit}/>
            </Container>
        );
    }

}

LoginPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
}

export default connect(null, { login })(LoginPage);
