import { IonApp } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import AppTabs from './AppTabs'
import { useState } from 'react'
import { AuthContext } from './Auth'
import NotFound from './pages/NotFound'

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    // Must have only 1 IonApp component
    <IonApp>
      <AuthContext.Provider value={{ loggedIn }}>
        <IonReactRouter>
          <Switch>
            <Route exact path='/login'>
              <LoginPage
                onLogin={() => setLoggedIn(true)}
              />
            </Route>
            <Route path='/my'>
              <AppTabs />
            </Route>
            <Redirect exact path='/' to='/my/entries' />
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </IonReactRouter>
      </AuthContext.Provider>
    </IonApp>
  )
}

export default App
