import {
  IonApp,
  IonRouterOutlet,
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import AppTabs from './AppTabs'
import { useState } from 'react'

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    // Must have only 1 IonApp component
    <IonApp>
      <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path='/login'>
              <LoginPage onLogin={() => setLoggedIn(true)} loggedIn={loggedIn}/>
            </Route>
            <Route path="/my">
              <AppTabs loggedIn={loggedIn} />
            </Route>
            <Redirect exact path='/' to='/my/entries' />
          </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  )
}

export default App
