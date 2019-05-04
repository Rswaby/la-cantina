import React, { Component } from 'react'
import { Card} from 'semantic-ui-react'

class CardLink extends Component {


  render() {
    const { event } = this.props
    return (
     
        <Card href="#">
          <Card.Content>
            <Card.Header>{event.name}</Card.Header>
            <Card.Meta>Co-Worker</Card.Meta>
            <Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
          </Card.Content>
        </Card>
       
     
    )
  }
}
export default CardLink