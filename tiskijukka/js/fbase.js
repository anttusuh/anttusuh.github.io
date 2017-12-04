(function() {

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyCqiuxQhyWc3voH49Zh2j3ze83s73DHaXk",
    authDomain: "tiskijukka-1.firebaseapp.com",
    databaseURL: "https://tiskijukka-1.firebaseio.com",
    projectId: "tiskijukka-1",
    storageBucket: "tiskijukka-1.appspot.com",
    messagingSenderId: "591860487071"
  };
  firebase.initializeApp(config);


  // // Get a reference to the database service
  // const db = firebase.database();
  //
  // //Get elements
  // const preObject = document.getElementById('task');
  //
  // //Create references
  // const refObject = db.ref('Tasks').orderByChild('Tasks');

}());

var taskID = 0;
var latestTask;
let dbUser;

//ID generator
var ID = function () {
  return '_' + Math.random().toString(36).substr(2, 9);
};

function writeUser(uname, uid, email) {
  var user = firebase.auth().currentUser;
  // user.testValue = "dingdong";
  console.log(user);
  // var uname, email, uid, groupid, ingroup;
  let groupid, ingroup;

  firebase.database().ref().child('Users/User').orderByChild('uid').equalTo(user.uid).once('value', snap => {
    const userData = snap.val();
    if (userData) {
      snap.forEach(function(childSnap) {
        var childKey = childSnap.key;
        var childData = childSnap.val();
        // console.log('User ID: ' + childKey + " user in group: " + childData.ingroup);
        // console.log('User group: ' + childData.groupid);
        ingroup = childData.ingroup;
        groupid = childData.groupid;
        if (!ingroup) {
          groupid = ID();
          ingroup = true;
        }
        updateUser(user.displayName, user.uid, user.email, ingroup, groupid);
      });
    }
    else {
      console.log('creating a new user for the database.');
      groupid = ID();
      firebase.database().ref('Users' + '/User/' + uid).set({
        username: uname,
        uid: uid,
        email: email,
        groupid: groupid,
        ingroup: true
      });
    }
  });
}

function setDBUser() {
  let user = firebase.auth().currentUser;
  firebase.database().ref().child('Users/User').orderByChild('uid').equalTo(user.uid).once('value', snap => {
    const dbUserData = snap.val();
    if(dbUserData) {
      snap.forEach((childSnap) => {
        let dbValue = childSnap.val();
          dbUser = {
          username: dbValue.username,
          uid: dbValue.uid,
          email: dbValue.email,
          groupid: dbValue.groupid,
          ingroup: dbValue.ingroup
        };
      });
    }
  });
}

function updateUser(uname, uid, email, ingroup, groupid) {
  firebase.database().ref('Users' + '/User/' + uid).set({
    username: uname,
    uid: uid,
    email: email,
    groupid: groupid,
    ingroup: ingroup
  });
}



function updateGroupStatus(boolean) {
  var user = firebase.auth().currentUser;
  user.updateProfile({
    ingroup: boolean
  });
}

//Writing the tasks
//Need to implement a way to separate groups (Group#X/Tasks/Task#X)?
function writeTask() {
  setDBUser();
  var user = firebase.auth().currentUser;
  var uname, email, uid, groupid;

  if (user) {
    //Getting user's information
    if (user != null) {
      uname = user.displayName;
      email = user.email;
      uid = user.uid;
      groupid = dbUser.groupid;
    }
  }

  //Returns the running id of tasks
  var taskid = returnTaskID();
  taskid++;

  console.log("Username: " + uname + " email: " + email + " user id: " + uid + " group id: " + groupid);

  //Sets a new Task table with task id as an identifier
  firebase.database().ref('Tasks/' + taskid).set({
    username: uname,
    email: email,
    uid: uid,
    groupid: groupid,
    taskid: taskid,
    date: getDate(),
    time: getTime()
  });
}

//Get (latest) task's data
function getTaskData() {
  firebase.database().ref('Tasks').on("value", function(snap) {
    snap.forEach(function(data) {
      taskID = data.key;
      latestTask = data.val().username + ": " + data.val().date + " | " + data.val().time;
    });
    returnTaskID();
    returnLatestTask();
  });
}

function returnLatestTask() {
  var latestTask_ = latestTask;
  var navbarTitle = document.getElementById('navbarTitle');
  if (latestTask_ != undefined) {
    navbarTitle.innerHTML = "Viimeisin: <p></p>" + latestTask_;
  } else {
    navbarTitle.innerHTML = "Aikoja ei ole vielä merkitty"
  }
}

function returnTaskID() {
  var taskID_ = taskID;
  return taskID_;
}

//Reading and listing the tasks
function readTasks() {
  // setDBUser();
  readUsers();
  $("#curUser").html("<p></p>" + getCurUser() + "<br><p></p>");
  getTaskData();
  // firebase.database().ref('Tasks').orderByValue().on("child_added", function(snap) {
  //   var task = snap.val().username + ": " + snap.val().date + " | " + snap.val().time;
  //   document.getElementById('task').insertAdjacentHTML("afterbegin", task + "<p></p>");
  // });
  let user = firebase.auth().currentUser;
  firebase.database().ref().child('Users/User').orderByChild('uid').equalTo(user.uid).once('value', snap => {
    const dbUserData = snap.val();
    if(dbUserData) {
      snap.forEach((childSnap) => {
        let dbValue = childSnap.val();
          dbUser = {
          username: dbValue.username,
          uid: dbValue.uid,
          email: dbValue.email,
          groupid: dbValue.groupid,
          ingroup: dbValue.ingroup
        };
        firebase.database().ref('Tasks').orderByChild('groupid').equalTo(dbUser.groupid).on("child_added", function(snap) {
          var task = snap.val().username + ": " + snap.val().date + " | " + snap.val().time;
          document.getElementById('task').insertAdjacentHTML("afterbegin", task + "<p></p>");
        });
      });
    }
  });
}

function readUsers() {
  firebase.database().ref('Users').on("child_added", function(snap) {
    numUsers = snap.numChildren();
    $('#scoreCount').html('TJ-PISTEET:<br>' + 'Käyttäjiä on ' + numUsers);
  });
}
