import React from 'react';
import LoginForm from "../forms/LoginForm";
import { Container} from 'semantic-ui-react';

class LoginPage extends React.Component {

    submit = (data) => {
        console.log(data);
    }
    render(){
        return(
            <Container>
                <h1>Login Page</h1>
                <LoginForm submit={this.submit}/>
            </Container>
        );
    }
}


export default LoginPage;
