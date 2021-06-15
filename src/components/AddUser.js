import { Button,Form } from "semantic-ui-react"
import {useContext} from 'react'
import {UsersContext} from '../providers/UsersProvider'
const AddUser = (props) => {
    const {addUser} = useContext(UsersContext)
    const handleSubmit =()=> {
        addUser('new user')
    } 
    return (
        <Form onSubmit={handleSubmit}>
            <Button>New User</Button>
        </Form>
    )
}
export default AddUser
