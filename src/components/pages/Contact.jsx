import React, { Component } from 'react';
import { Form ,FormGroup,Label ,Input ,Button, Col} from 'reactstrap';

class Contact extends Component{

    constructor(props){
        super(props);
        this.state = {

            firstname:'',
            lastname:'',
            telnum:'',
            email:'',
            agree:false,
            contactType:'',
            message:'',

            
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = event => {
        const  value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        const name = event.target.name
        this.setState({
            [name]:value
        })
    }

    handleSubmit = event => {
        console.log(this.state)
        event.preventDefault();
    }
    render(){
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center  bg-secondary mt-2 rounded text-white p-2  ">
                            <h1>Send Your Feedback</h1>
                        </div>
                        <div className="col-sm-12 mt-3 ">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                
                                <Label for="firstname">FirstName</Label>
                                <Input onChange={this.handleInputChange} type="text" value={this.state.firstname} name="firstname" placeholder="Enter Your First Name"/>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="lastname">LastName</Label>
                                <Input onChange={this.handleInputChange} type="text" value={this.state.lastname} name="lastname" placeholder="Enter Your Last Name"/>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="tel">Tel Number</Label>
                                <Input onChange={this.handleInputChange} type="number" value={this.state.telnum} name="telnum" placeholder="Enter Your Tel.Number"/>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="email">Email</Label>
                                <Input onChange={this.handleInputChange} type="email" value={this.state.email} name="email" placeholder="Enter Your Email"/>
                            </FormGroup>
                            

                            <FormGroup row>
                                <FormGroup check>
                                    <Input onChange={this.handleInputChange}  name='agree' type="checkbox" checked={this.state.agree}/>
                                    <Label check>Me We Contact You</Label>
                                </FormGroup>
                          
                            </FormGroup>

                            <FormGroup row>
                           
                                <Input onChange={this.handleInputChange} type='select' name='contactType' value={this.state.contactType}> 
                                <option>Tel Number</option>
                                <option>Email</option>
                                </Input>
                       
                            </FormGroup>

                            <FormGroup row>
                            <Label for="message">Your Feedback</Label>
                                <Input onChange={this.handleInputChange} type="textarea" name="message" value={this.state.message} rows="12" />
                            </FormGroup>
                            <Button>Submit</Button>
                        </Form>
                        </div>
                    </div>
                </div>
               </div>
        );
    };
}

 

export default Contact;