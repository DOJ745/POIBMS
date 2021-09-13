import React, { useState } from 'react';
import { IonContent, IonFooter, IonHeader, IonItem, IonItemDivider, IonLabel, IonList, IonListHeader, IonPage, IonRadio, IonRadioGroup, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [selected, setSelected] = useState<string>('item1');
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1 - Radio Buttons (HEADER)</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonList>
          <IonRadioGroup value={selected} onIonChange={e => setSelected(e.detail.value)}>
            <IonListHeader>
              <IonLabel>Radio buttons</IonLabel>
            </IonListHeader>

            <IonItem>
              <IonLabel>item1</IonLabel>
              <IonRadio slot="start" value="item1" />
            </IonItem>

            <IonItem>
              <IonLabel>item2</IonLabel>
              <IonRadio slot="start" value="item2" />
            </IonItem>

            <IonItem>
              <IonLabel>item3</IonLabel>
              <IonRadio slot="start" value="item3" />
            </IonItem>
          </IonRadioGroup>
          <IonItemDivider>Your Selection</IonItemDivider>
          <IonItem>{selected ?? '(none selected'}</IonItem>
        </IonList>

      </IonContent>

      <IonFooter>
        <IonToolbar>
            <IonTitle>FOOTER</IonTitle>
            <ExploreContainer name="Tab 1 page" />
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Tab1;
