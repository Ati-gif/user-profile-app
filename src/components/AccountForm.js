import { useState, useContext } from "react";
import { AccountContext } from "../providers/AccountProvider";
import { Form } from "semantic-ui-react";

const AccountForm = () => {
  const account = useContext(AccountContext);
  const [username, setUsername] = useState(account.username);
  const [first_name, setFirstName] = useState(account.firstname);
  const [last_name, setLastName] = useState(account.lastname);
  const [email, setEmail] = useState(account.email);
  const [membershipLevel, setMembershipLevel] = useState(
    account.membershipLevel
  );
  const handleSubmitYo = (e) => {
    e.preventDefault();
    account.setUsername(username);
    account.setFirstName(first_name);
    account.setLastName(last_name);
    account.setEmail(email);
    account.setMembershipLevel(membershipLevel);
    console.log(username);
    console.log(membershipLevel);
  };
  return (
    <Form onSubmit={handleSubmitYo}>
      <Form.Input
        label="Username"
        type="text"
        value={username}
        onChange={(e, { value }) => setUsername(value)}
      />
      <Form.Input
        label="First Name"
        type="text"
        value={first_name}
        onChange={(e, { value }) => setFirstName(value)}
      />
      <Form.Input
        label="Last Name"
        type="text"
        value={last_name}
        onChange={(e, { value }) => setLastName(value)}
      />
      <Form.Input
        label="Email"
        type="text"
        value={email}
        onChange={(e, { value }) => setEmail(value)}
      />
      <Form.Select
        label="Membership Level"
        value={membershipLevel}
        options={membershipOptions}
        onChange={(e, { value }) => setMembershipLevel(value)}
      />
      <Form.Button color="green">Save</Form.Button>
    </Form>
  );
};

const membershipOptions = [
  { key: "b", value: "Bronze", text: "Bronze" },
  { key: "g", value: "Gold", text: "Gold" },
  { key: "s", value: "Silver", text: "Silver" },
];

export default AccountForm;
