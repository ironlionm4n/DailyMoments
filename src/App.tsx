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

import { home as homeIcon, settings as settingsIcon } from 'ionicons/icons'

const App: React.FC = () => {
  return (
    // Must have only 1 IonApp component
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path={'/home'}>
              <HomePage />
            </Route>
            <Route exact path={'/settings'}>
              <SettingsPage />
            </Route>
            <Route exact path={'/entries/:id'}>
              <EntryPage />
            </Route>
            <Redirect exact path='/' to='/home' />
          </IonRouterOutlet>
          <IonTabBar slot='bottom'>
            <IonTabButton tab='home' href='/home'>
              <IonIcon icon={homeIcon}/>
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab='settings' href='/settings'>
              <IonIcon icon={settingsIcon} />
              <IonLabel>Settings</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  )
}

export default App
