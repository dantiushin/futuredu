import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
} from 'react-router-dom';
import { TopBar } from './components/TopBar';
import { MainPage } from './components/MainPage';
import { Student } from './components/Student';
import { AboutUs } from './components/AboutUs';
import { Authorization } from './components/Authorization';
import { Entrant } from './components/Entrant';
import { PersonalPage } from './components/PersonalPage';
import { Calculator } from './components/Calculator';
import { Day } from './components/Day';
import { Hostel } from './components/Hostel';

const routes = [
  { path: '/', component: MainPage },
  { path: '/student', component: Student },
  { path: '/about-us', component: AboutUs },
  { path: '/authorization', component: Authorization },
  { path: '/entrant', component: Entrant },
  { path: '/personalPage', component: PersonalPage },
  { path: '/calculator', component: Calculator },
  { path: '/day', component: Day },
  { path: '/hostel', component: Hostel },
];

function App() {
  return (
    <Router>
      <TopBar />
      <Switch>
        {routes.map(({ path, component }) => <Route exact path={path} component={component} />)}
      </Switch>
    </Router>
  );
}

export default App;
