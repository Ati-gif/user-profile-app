import './App.css';
import Navbar from './components/Navbar';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import AccountProfile from './components/AccountProfile';
import AddUser from './components/AddUser';

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/users/new' component={AddUser} />
          <Route
            exact
            path='/account/profile'
            render={() => <AccountProfile x='RoseApothicary' />}
          />
        </Switch>
      </Container>
    </>
  );
}

export default App;