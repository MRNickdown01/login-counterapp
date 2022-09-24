import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const NewPage: React.FC = () => {
  return (
    <IonPage>
      <IonToolbar color="success">
        <IonTitle>Register</IonTitle>
      </IonToolbar>
      <IonContent>
        <IonItem>
          <IonLabel position="floating"> Your First Name</IonLabel>
          <IonInput></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Your Last Name </IonLabel>
          <IonInput></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating"> Your Email Id</IonLabel>
          <IonInput></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Date of Birth </IonLabel>
          <IonInput></IonInput>
        </IonItem>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <IonButton routerLink="/welcompage" color="success" fill="solid">
            Submit
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default NewPage;
