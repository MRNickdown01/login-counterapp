import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { add, magnet } from "ionicons/icons";
// import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <h1>buttons</h1>
        {/* <IonTitle>buttons</IonTitle> */}
        <IonButton>defult</IonButton>
        <IonButton color="dark" expand="full">
          Full Button
        </IonButton>
        <IonButton color="tertiary" expand="block">
          block button
        </IonButton>
        <IonButton fill="clear">no border</IonButton>
        <IonButton fill="outline">outline</IonButton>
        <IonButton color="success" fill="solid">
          solid
        </IonButton>
        <IonButton size="small">small</IonButton>
        <IonButton color="warning" size="large">
          large
        </IonButton>
        <IonButton color="danger">
          <IonIcon slot="start" icon={add}></IonIcon>add
        </IonButton>
        <IonButton routerLink="/tab2">
          <IonIcon icon={magnet}></IonIcon>
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
