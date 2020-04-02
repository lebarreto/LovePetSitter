import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import AddAgenda from '../pages/Dashboard/AddAgenda';
import Clients from '../pages/Clients';
import EditClient from '../pages/Clients/EditClient';
import Pets from '../pages/Pets';
import PetsModal from '../pages/Pets/PetsModal';
import Route from './Route';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" exact component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/agenda" exact component={AddAgenda} isPrivate />
      <Route path="/clients" component={Clients} isPrivate />
      <Route path="/client/:id" exact component={EditClient} isPrivate />
      <Route path="/pets" component={Pets} isPrivate />
      <Route path="/pet/:id" exact component={PetsModal} isPrivate />
    </Switch>
  );
}
