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
import { auth } from '../firebase'

interface LoginProps {
  onLogin: () => void
}

const LoginPage: React.FC<LoginProps> = ({ onLogin }) => {
  const { loggedIn } = useAuth()

  const handleLogIn = async () => {
    const credential = await auth.signInWithEmailAndPassword('ironlionm4n@gmail.com', 'Danknug2!')
    console.log(credential)
  }

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
        <IonButton expand='block' onClick={handleLogIn}>
          Login
        </IonButton>
      </IonContent>
    </IonPage>
  )
}

export default LoginPage
