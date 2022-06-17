import { IonLabel } from '@ionic/react'
import {
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonIcon
} from '@ionic/react'
import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SettingsPage from './pages/SettingsPage'
import EntryPage from './pages/EntryPage'

import { home as homeIcon, settings as settingsIcon } from 'ionicons/icons'

const AppTabs: React.FC = () => {
  return (
    // Must have only 1 IonApp component
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path='/my/entries'>
          <HomePage />
        </Route>
        <Route exact path='/my/settings'>
          <SettingsPage />
        </Route>
        <Route exact path={'/my/entries/:id'}>
          <EntryPage />
        </Route>
        <Redirect exact path='/' to='/my/entries' />
      </IonRouterOutlet>
      <IonTabBar slot='bottom'>
        <IonTabButton tab='home' href='/my/entries'>
          <IonIcon icon={homeIcon} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab='settings' href='/my/settings'>
          <IonIcon icon={settingsIcon} />
          <IonLabel>Settings</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  )
}

export default AppTabs
