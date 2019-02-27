import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup,Input,Label, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
class Contact extends Component {

    constructor(props) {
        super(props);

        this.state ={
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message:''
        }
    }

    render(){
        return(
            <div className="container">
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 ossset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121,Clear Water Bay Road<br/>
                        Clear Water Bay, Knowloon<br/>
                        HONG KONG<br/>
                        <i className="fa fa-phone"></i>: 852 345 6789<br/>
                        <i className="fa fa-fax"></i>: 852 125 0089<br/>
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85234567899"><i className="fa fa-phone"></i>Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i>Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope"></i>Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3> Send us Your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                    <Col md={10}>
                                        <Input type="text" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        value={this.state.firstname} />
                                        </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                    <Col md={10}>
                                        <Input type="text" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        value={this.state.lastname} />
                                         </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                    <Col md={10}>
                                        <Input type="tel" id="telnum" name="telnum"
                                        placeholder="Tel. Number"
                                        value={this.state.telnum} />
                                    </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                    <Col md={10}>
                                        <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                        value={this.state.email} />
                                    </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:6, offset:2}} >
                                <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="agree"
                                    checked={this.state.agree} /> { ' ' }
                                    <strong>May we Contact You?</strong>

                                </Label>
                                </FormGroup>
                                </Col>
                                <Col md={{size:3, offset:1}} >  <Col md={{size:6, offset:2}} >
                                </Col>
                                    <Input type="select" name="contactType"
                                    value={this.state.contactType} >
                                    <option>Tel.</option>
                                    <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                    <Col md={10}>
                                        <Input type="textarea" id="message" name="message"
                                       rows="12"
                                        value={this.state.message} />
                                    </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:10, offset:2}} >
                                <Button type="submit" color="primary">
                                Send Feedback
                                </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
    }
export default Contact;
