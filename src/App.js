// React importd
import React from 'react'
import {
  BrowserRouter, // BrowserRouter does not use hash but will require a server logic to always send the request to index.html
  // HashRouter, // HashRounter uses hash, but this cannot be used for pages that need hash for client side logic, such as auth token or 3D workspace settings
  Switch,
  Route,
  Link,
} from "react-router-dom"
import * as matter from 'gray-matter'
import pkg from '../package.json'

// Atlas imports
import HomePage from './views/HomePage'
import GenericPage from './views/GenericPage'
import AuthenticatePage from './views/AuthenticatePage'
import AboutPage from './views/AboutPage'
import ContactPage from './views/ContactPage'


function importShopConfig (r) {
  const shopConfig = {}
  r.keys().forEach((key) => {
    const keyElem = key.slice(2, key.length - 5).split('/')
    let whereToAdd = shopConfig
    for (let i = 0; i < keyElem.length - 1; i += 1) {
      if (!(keyElem[i] in whereToAdd)) {
        whereToAdd[keyElem[i]] = {}
      }
      whereToAdd = whereToAdd[keyElem[i]]
    }
    whereToAdd[keyElem.pop()] = r(key)
  })
  return shopConfig
}

const shopConfig = importShopConfig(require.context('../shop', true, /\.json$/))
console.log('shopConfig', shopConfig)



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      topMenuOpen: false,
    }
  }

  render(){
    
    return (
      <BrowserRouter>
      <div>

        <div>
          
            


        
            <Switch>
              <Route path="/authenticate" component={AuthenticatePage} />
              <Route path="/about">
                <AboutPage message={pkg.name}/>
              </Route>
              <Route path="/contact" component={ContactPage} />
              <Route path="/:undef" component={GenericPage} />
              <Route path="/" component={HomePage} />
            </Switch>
        </div>

      </div>
    </BrowserRouter>
      
    )
  }
}

// export default withRouter(App)
export default App