import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from '../components/Header/Header'
import Home from './Home'
import About from './About'
import Contact from './Contact'

function App() {
  return (

    <Router>
      <Header />

      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </Router>

  );
}

export default App;
