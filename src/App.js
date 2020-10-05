import React from 'react';
import { BrowserRouter, Switch, Route, Link as RLink } from 'react-router-dom';
import {
  AppBar,
  Link,
  Toolbar,
  withStyles,
} from '@material-ui/core';

import Convert from './Pages/Convert';
import Q2 from './Pages/Q2';
import Q3 from './Pages/Q3';

const MainLink = withStyles(theme=>({
  root: {
    marginRight: theme.spacing(2),
  },
}))(props => (<Link color="inherit" component={RLink} {...props} />))

const App = props => {
  return (<React.Fragment>
    <BrowserRouter>
      <AppBar position="static">
        <Toolbar>
          <MainLink to="/q1">ข้อ 1</MainLink>
          <MainLink to="/q2">ข้อ 2</MainLink>
          <MainLink to="/q3">ข้อ 3</MainLink>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route path="/q2" component={Q2} />
        <Route path="/q3" component={Q3} />
        <Route path="/" component={Convert} />
      </Switch>
    </BrowserRouter>
  </React.Fragment>)
}

export default App;
