import React, { useState } from "react";

export const AccountContext = React.createContext();

export const AccountConsumer = AccountContext.Consumer;

const AccountProvider = (props) => {
  const [username, setUsername] = useState("RoseApothicary");
  const [first_name, setFirstName] = useState("David");
  const [last_name, setLastName] = useState("Rose");
  const [email, setEmail] = useState("rosebud@gmail.com");
  const [membershipLevel, setMembershipLevel] = useState("Silver");
  const [dateJoined, setDateJoined] = useState("12/23/20");

  return (
    <AccountContext.Provider
      value={{
        username,
        membershipLevel,
        dateJoined,
        email,
        first_name,
        last_name,
        setUsername,
        setFirstName,
        setLastName,
        setMembershipLevel,
        setEmail,
        setDateJoined,
      }}
    >
      {props.children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
