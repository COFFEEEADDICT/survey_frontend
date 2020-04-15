import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


// function handleClick() {
 
//   console.log('The link was clicked.');
// }


const Log_in = ({handleClick}) => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2'  color='blue' textAlign='center'>
         Log-in to your account
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />
 
          <Button color='blue' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message   >
        <a href='#' onClick={() => handleClick()} >Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
)

export default Log_in
