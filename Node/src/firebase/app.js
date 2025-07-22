import { cert, initializeApp } from 'firebase-admin/app'; //importada do firebase
import ServiceAccount from "../../serveceAccount.json" with {type: "json"}; // vai pegar o conteudo do service e transformar em json 

const app = initializeApp({
    credential: cert(ServiceAccount) //
}); // da start no projeto do firebase, atraves dele eu acesso o BD firebase, recursos...

export default app;



// o serviceAccount tem informações extremamente sensiveis e que não podem ser compartilhadas (principalmente a key e o id)