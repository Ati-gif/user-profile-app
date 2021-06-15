import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { AccountConsumer } from '../providers/AccountProvider'

class AccountFormClass extends React.Component {
    state = {
        username: this.props.username,
        firstname: this.props.first_name,
        lastname: this.props.last_name,
        email: this.props.email,
        membershipLevel: this.props.membershipLevel
    }
    handleSubmitYo = (e) => {
        const {username,first_name, last_name, email, membershipLevel} = this.state
        e.preventDefault()
        console.log(username)
        console.log(first_name)
        console.log(last_name)
        console.log(email)
        console.log(membershipLevel)
    }
    handleChange = (e, {value, name}) => {
        this.setState({[name]: value})
            }
    render(){
    const {username,first_name, last_name, email, membershipLevel} = this.state
    return (
        <>
        <h1>title: {this.props.title}</h1>
        <Form onSubmit={this.handleSubmitYo}>
            <Form.Input 
              label='Username'
              type='text'
              name='username'
              value={username}
              onChange={this.handleChange}
            />
             <Form.Input 
              label='First Name'
              type='text'
              value={first_name}
              onChange={this.handleChange}
            />
            <Form.Input 
              label='Last Name'
              type='text'
              value={last_name}
              onChange={this.handleChange}
            />
            <Form.Input 
              label='Email'
              type='text'
              value={email}
              onChange={this.handleChange}
            />
            <Form.Select 
              label="Membership Level"
              name='membershipLevel'
              value={membershipLevel}
              options={membershipOptions}
              onChange={this.handleChange}
            />
            <Button basic color='green'>Save</Button>
        </Form>
        </>
    )
    }
}

const ConnectedAccountForm = (props) => {
    return (
        <AccountConsumer>
            {value => (<AccountForm 
                        {...props}
                        username={value.username}
                        firstname={value.first_name}
                        lastname={value.last_name}
                        email={value.email}
                        membershipLevel={value.membershipLevel}
                        />)}
        </AccountConsumer>
    )
}

const membershipOptions = [
    {key: 'b', value: 'Bronze', text: 'Bronze' },
    {key: 'g', value: 'Gold', text: 'Gold' },
    {key: 's', value: 'Silver', text: 'Silver' },
]

export default ConnectedAccountForm
// export default AccountFormClass
