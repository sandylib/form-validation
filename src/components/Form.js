import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }


    function validURL(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
          '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return !!pattern.test(str);
      }

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEmailValid: false,
            isNameValid: false,
            isPhoneValid: false,
            isUrlValid: false,
            name:'',
            email:'',
            url:'',
            phone:'',
            
        };


    }

     onHandleChange = (name) => (e)=> {
        const {value} = e.target;
        switch(name) {
            case 'email':{
                this.setState({isEmailValid: validateEmail(value)})
                break;
            }
            case 'phone': {
                this.setState({isPhoneValid: (value !== undefined && value !== null && value.length === 10) })
                break;
            }
            case 'name': {
                this.setState({isNameValid: value && value.length > 0 })
                break;
            }
            case 'url': {
                this.setState({isUrlValid : validURL(value)})
                break;
            }
            default:
                break;
        }

        this.setState({[name]: value});
    }

    onClick = ()=>{
     
       const isValid = this.state.isEmailValid  && this.state.isPhoneValid  && this.state.isUrlValid && this.state.isNameValid;
     
       return this.props.isFormValid(isValid)

   
    }
    
    render() {
        return (
            <div className="row">
            <h1 className="text-center">Form Validation</h1>
            <form>
                <h3>Name:
                </h3>
                <input className='name' type="text" id="name" name="name" onChange={this.onHandleChange('name')} value={this.state.name}/>
                <h3>Email:
                </h3>
                <input className='email' type="text" id="email" name="email" onChange={this.onHandleChange('email')} value={this.state.email}/>
                <h3>Phone:
                </h3>
                <input className='phone' type="text" id="phone" name="phone" onChange={this.onHandleChange('phone')} value={this.state.phone}/>
                <h3>Blog URL:
                </h3>
                <input className='url' type="text" id="url" name="url" onChange={this.onHandleChange('url')} value={this.state.url}/>
                <div className="small-6 small-centered text-center columns">
                    <a href="#" className="button success expand round text-center" onClick={this.onClick}>Verify</a>
                </div>
            </form>
        </div>);
    }
}

export default Form;
