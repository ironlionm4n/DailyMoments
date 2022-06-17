import {
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar
} from '@ionic/react'
import React from 'react'
import { entries } from '../data'

const HomePage: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Daily Moments - HomePage</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonList>
          {entries.map(entry => {
            return (
              <IonItem button key={entry.id} routerLink={`/my/entries/${entry.id}`}>
                <IonText>{entry.title}</IonText>
                <IonText>{entry.id}</IonText>
                <IonText>{entry.description}</IonText>
              </IonItem>
            )
          })}
        </IonList>
      </IonContent>
    </IonPage>
  )
}

export default HomePage
