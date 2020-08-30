import React, {Component} from 'react';
import Form from './components/Form'
import Message from './components/Message'

class App extends Component {

    render() {
        return (<div>
            <Form isFormValid={(value)=>value} ></Form>
            <Message></Message>
        </div>);
    }
}

export default App;
