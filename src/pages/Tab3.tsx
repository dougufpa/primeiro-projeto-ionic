import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
        IonButton, IonToast
 } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
          <IonTitle>Inline Toast</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 3 page" />

        <IonButton id="open-toast" expand="block">
          Open
        </IonButton>
        <p>This toast example uses triggers to automatically open a toast when the button is clicked.</p>
        <IonToast trigger="open-toast" message="This toast will disappear after 5 seconds" duration={5000}></IonToast>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
