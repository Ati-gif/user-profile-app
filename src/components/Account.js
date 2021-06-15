import { useContext } from "react";
import { AccountContext } from "../providers/AccountProvider";
import { Card, Icon } from "semantic-ui-react";

const Account = () => {
  const {
    username,
    first_name,
    last_name,
    email,
    dateJoined,
    membershipLevel,
  } = useContext(AccountContext);
  return (
    <Card>
      <Icon.Group size='huge'>
    <Icon size='big'  />
    <Icon name='user' color='teal'/>
  </Icon.Group> 
              <Card.Content>
        <Card.Header>{username}</Card.Header>
        <Card.Meta>Date Joined: {dateJoined}</Card.Meta>
      </Card.Content>
      <Card.Content>
        <p>Membership Level : {membershipLevel}</p>
        <p>
          Full Name: {first_name}, {last_name}
        </p>
        <p>Email: {email}</p>
      </Card.Content>
    </Card>
  );
};

export default Account;

