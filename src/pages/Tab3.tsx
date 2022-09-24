import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { eye, eyeOff, lockClosed, person } from "ionicons/icons";
import { useState } from "react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab3.css";

const Tab3: React.FC = () => {
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="success">
          <IonTitle> welcome Login Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=740&t=st=1663760932~exp=1663761532~hmac=4b967c635f2d7ee16d437d63451d6327909691e201c27e94492f42ff977c403e"></img>

        <h2
          style={{
            textAlign: "center",
            color: "grey",
            fontSize: "30px",
          }}
        >
          Login Page
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <IonItem
            style={{
              padding: "2rem 0rem",
            }}
          >
            <IonLabel></IonLabel>
            <IonInput placeholder="Enter UserName" type="text"></IonInput>
            <IonIcon slot="start" icon={person}></IonIcon>
          </IonItem>
          <IonItem>
            <IonLabel></IonLabel>
            <IonInput
              onClick={handleClick}
              placeholder="Enter password"
              type={state === false ? "password" : "text"}
            ></IonInput>
            <IonIcon slot="start" icon={lockClosed}></IonIcon>
          </IonItem>
          <IonIcon slot="end" icon={!state ? eyeOff : eye}></IonIcon>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <IonButton color="success" fill="solid">
            Login
          </IonButton>
          <IonButton routerLink="/newpage" color="success" fill="solid">
            Sign Up
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
