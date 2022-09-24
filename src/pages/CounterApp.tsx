import {
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonImg,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { count } from "console";
import { add, removeOutline } from "ionicons/icons";
import { useState } from "react";

const CounterApp: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <IonPage>
      <IonToolbar color="success">
        <IonTitle> welcome to Counter App</IonTitle>
      </IonToolbar>
      <IonContent>
        <h1
          style={{
            fontSize: "50px",
          }}
          className="ion-text-center"
        >
          {count}
        </h1>
        <IonImg src="https://img.freepik.com/free-vector/counting-stars-concept-illustration_114360-4729.jpg?w=740&t=st=1664000737~exp=1664001337~hmac=51a27db1e449ef360410d4b4da2573003ad7503ae438219cdbec3d439a2aaec9"></IonImg>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => setCount(count + 1)}>
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
        </IonFab>
        <IonFab vertical="bottom" horizontal="start" slot="fixed">
          <IonFabButton onClick={() => setCount(count - 1)}>
            <IonIcon icon={removeOutline}></IonIcon>
          </IonFabButton>
        </IonFab>
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => setCount(0)}>Rest</IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default CounterApp;
