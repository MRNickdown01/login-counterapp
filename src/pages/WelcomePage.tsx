import { IonButton, IonContent, IonImg, IonPage } from "@ionic/react";

const WelcomePage: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <>
          <h1 className="ion-text-center">Welcome to New Page</h1>
        </>
        <IonImg src="https://img.freepik.com/free-vector/people-hugging-each-other-with-welcoming-greeting_52683-23927.jpg?w=996&t=st=1663937311~exp=1663937911~hmac=02d815e904b6b774d7e7594c89732807d1bdb14abc5bb8434d96bdf61bd1227d"></IonImg>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <IonButton routerLink="/counterapp"> Go To</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default WelcomePage;
