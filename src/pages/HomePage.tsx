import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react'
import React from 'react'

const HomePage: React.FC = () => {

 const test = async () => await fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Daily Moments - HomePage</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'></IonContent>
    </IonPage>
  )
}

export default HomePage
