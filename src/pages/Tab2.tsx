import {
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab2.css";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <h1>inputs</h1>
        <IonItem>
          <IonLabel position="fixed">fixed label</IonLabel>
          <IonInput></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">floating label</IonLabel>
          <IonInput></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">stacked label</IonLabel>
          <IonInput></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">multiple inputs</IonLabel>
          <IonInput placeholder="address"></IonInput>
          <IonInput placeholder="address line-2"></IonInput>
          <IonInput placeholder="city"></IonInput>
          <IonInput placeholder="state"></IonInput>
          <IonInput placeholder="zip code"></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel>input text</IonLabel>
          <IonInput placeholder="text" type="text"></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel>input number</IonLabel>
          <IonInput placeholder="number" type="number"></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel>enter password</IonLabel>
          <IonInput placeholder="password" type="password"></IonInput>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
