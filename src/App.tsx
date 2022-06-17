import { IonLabel } from '@ionic/react'
import {
  IonApp,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonIcon
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SettingsPage from './pages/SettingsPage'
import EntryPage from './pages/EntryPage'
import LoginPage from './pages/LoginPage'
import AppTabs from './AppTabs'
import { useState } from 'react'

import { home as homeIcon, settings as settingsIcon } from 'ionicons/icons'

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(true)
  return (
    // Must have only 1 IonApp component
    <IonApp>
      <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path='/login'>
              <LoginPage onLogin={() => setLoggedIn(true)} loggedIn={loggedIn}/>
            </Route>
            <Route path="/my">
              <AppTabs />
            </Route>
            <Redirect exact path='/' to='/my/entries' />
          </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  )
}

export default App
