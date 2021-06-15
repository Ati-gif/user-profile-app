import {useContext} from 'react'
import { AccountContext} from '../providers/AccountProvider'
import { UsersContext } from '../providers/UsersProvider'
import { Card, Icon } from 'semantic-ui-react'
const Home = ()=> {

    const {email, username, membershipLevel} = useContext(AccountContext)
    const {users} = useContext(UsersContext)
    return (
        <div>
            <h1>Home</h1>
            <Card.Group>
    <Card>
      <Card.Content>
              <Card.Header> <Icon color='red' name='users' /> Username: { username}
            </Card.Header>
        <Card.Meta>MembershipLevel: { membershipLevel}</Card.Meta>
        <Card.Meta><p>Email: { email}</p></Card.Meta>
        <Card.Description>
            {users.map( u => <p>{u}</p>)}
            </Card.Description>
      </Card.Content>
    </Card>
    </Card.Group>
        </div>

    )
}

export default Home