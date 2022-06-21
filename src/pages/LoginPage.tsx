import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react'
import React from 'react'
import { Redirect } from 'react-router'
import { useAuth } from '../Auth'

interface LoginProps {
  onLogin: () => void
}

const LoginPage: React.FC<LoginProps> = ({ onLogin }) => {
  const { loggedIn } = useAuth()

  if (loggedIn) {
    return <Redirect to='/my/entries' />
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Daily Moments - Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonButton expand='block' onClick={onLogin}>
          Login
        </IonButton>
      </IonContent>
    </IonPage>
  )
}

export default LoginPage
