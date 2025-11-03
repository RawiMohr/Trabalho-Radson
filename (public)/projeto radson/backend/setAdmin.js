var admin = require("firebase-admin");

// Caminho correto para o JSON da chave
var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://radson-6f74d-default-rtdb.firebaseio.com"
});

// UID do usuário que será admin
const UID = "JsWm5VDu72Wxun73QOaJNCgi5MR2";

// Define a permissão "admin: true"
admin.auth().setCustomUserClaims(UID, { admin: true })
  .then(() => {
    console.log(`✅ Usuário ${UID} agora é admin!`);
  })
  .catch((error) => {
    console.error("❌ Erro ao definir admin:", error);
  });
