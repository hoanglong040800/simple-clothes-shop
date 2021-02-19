import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from '../components/Header/Header'
import Home from './Home'
import Shop from './Shop'
import About from './About'
import Contact from './Contact'

function App() {
  return (

    <Router>
      <Header />

      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/shop' exact component={Shop} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </Router>

  );
}

export default App;
