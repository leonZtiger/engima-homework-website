const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");

const app = express();
app.use(cors({ origin: true }));

const membershipsRef = {
  gold: {
    maxInvocationsPerMonth: 50
  },
  silver: {
    maxInvocationsPerMonth: 20
  },
  free: {
    maxInvocationsPerMonth: 10
  }
}

//text generation callback
app.get("/generateText", (req, res) => {
  const userDoc = admin.firestore().doc("users/" + req.uid);

  //check authorization
  if (!userDoc) {
    res.send("user doesnt exist").status(403);
    return;
  }

  // check membership
  const user = userDoc.get().then((doc) => {
    return doc;
  })
  var userPrivleges = getPrivlege(user.uid);

  if (!userPrivleges) {
    res.send("could not find membership").status(403);
  }

  var text;
  
    switch (req.type) {
      case "rewrite":
       text = ReWriteText(req)
        break;
      case "write":
        text = WriteText(req)
        break;
      case "paraphrase":
        text = ParaphraseText(req)
        break;
      
      default:
        
      res.send("faild to read writing-type").status(500)
        break;
    }
   
  // remove coresponding invocations on the user account  
  removeInvocationFromUser(userDoc) 

  res.json({ text: text }).send().status(200);
});

function WriteText(specs) {
    
  
// write text based on previuse context
  if(specs.settnings.keepWriting)
  {
   
  }
  //else write a new text
  else{

  }
}
function ReWriteText(specs) {

}
function ParaphraseText(specs) {

}

function getPrivlege(uid) {
  const userDoc = admin.firestore().doc("userMemberShips/" + uid);

  if (!userDoc) {
    return false;
  }

  const user = userDoc.get().then((doc) => {
    return doc;
  })

  switch (user.membership) {
    case ("free"):
      return {
        maxwordlength: 200,
        specimens: 2,
        avaibleInvocations: user.avaibleInvocations,
      }


    case ("silver"):
      return {
        maxwordlength: 1000,
        specimens: 5,
        avaibleInvocations: user.avaibleInvocations,
      }

    case ("gold"):
      return {
        maxwordlength: 2000,
        specimens: 5,
        avaibleInvocations: user.avaibleInvocations,
      }

    default:
      return false;

  }
}

// when user created create document for that user
exports.createUserProfile = functions.auth.user().onCreate((user) => {

  const userdata = {
    uid: user.uid,
    documents: {

    },
    email: user.email,
    settings: {

    },
    membership: 'free'
  };

  admin.firestore().doc('users/' + user.uid).set(userdata)

})



exports.api = functions.https.onRequest(app);
