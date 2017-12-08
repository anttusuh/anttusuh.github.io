// BUTTONS

// Task button
const btnDish = document.getElementById('btnDish');
var cdBool = false;
btnDish.addEventListener('click', function () {
  if(!cdBool) {
    writeTask(document.getElementById('dropdownDish').value);
    cdBool = true;
    setTimeout(function() {
      cdBool = false;
      $('#dishSuccess').hide();
    }, 3000);
  }
  else {
    $('#dishSuccess').show();
  }
});

// Show more/less info -buttons
$('#scoreButton').click(function() {
  if ($('#scoreCountList').is(":hidden")) {
    $('#scoreCountList').slideDown("fast");
    $('#scoreButton').removeClass('glyphicon-chevron-down');
    $('#scoreButton').addClass('glyphicon-chevron-up');
  } else {
    $('#scoreCountList').slideUp("fast");
    $('#scoreButton').addClass('glyphicon-chevron-down');
    $('#scoreButton').removeClass('glyphicon-chevron-up');
  }
});

$('#showMoreButton').click(function() {
  if ($('#task p:gt(9)').is(":hidden")) {
    $('#task > p').slideDown("fast");
    $('#showMoreButton').removeClass('glyphicon-chevron-down');
    $('#showMoreButton').addClass('glyphicon-chevron-up');
  } else {
    $('#task p:gt(9)').slideUp("fast");
    $('#showMoreButton').removeClass('glyphicon-chevron-up');
    $('#showMoreButton').addClass('glyphicon-chevron-down');
  }
});

// Profile button
$('#btnProfile').click(function() {
  mainBody.style.display = 'none';
  profileForm.style.display = 'block';

  // Accept the new username
  $('#acceptUsername').click(function() {
    var newUsername = $('#newUsername').val();

    updateUsername(newUsername);

    $('#usernameMessage').html('Käyttäjänimi vaihdettu!');
    setTimeout(function() {
      $('#usernameMessage').fadeOut();
    }, 3000);
  });

  // Close the profile window
  $('#profileClose').click(function() {
    $('#profileForm').fadeOut("fast");
    // profileForm.style.display = 'none';
    mainBody.style.display = 'block';
  });
});

//Adding people to the group
document.getElementById('btnGroup').addEventListener('click', e => {
  const mainBody = document.getElementById('mainBody');
  const groupForm = document.getElementById('groupForm');
  const closeGroup = document.getElementById('groupClose');
  const groupInvite = document.getElementById('btnGroupInvite');
  const showInvitation = document.getElementById('showInvitation');
  const acceptDecline = document.getElementById('divAcceptDecline');
  const acceptInvite = document.getElementById('btnAcceptInvite');
  const declineInvite = document.getElementById('btnDeclineInvite');
  const leaveGroup = document.getElementById('btnGroupLeave');

  mainBody.style.display = 'none';
  groupForm.style.display = 'block';

  let user = firebase.auth().currentUser;
  let dbUser, inviter;

  //Pending invite functionality
  firebase.database().ref().child('Users/User').orderByChild('uid').equalTo(user.uid).once('value', snap => {
    snap.forEach((childSnap) => {
      let dbValue = childSnap.val();
      if(dbValue.invitedToGroup) {
        showInvitation.innerHTML = dbValue.invitedBy + " kutsui sinut ryhmään";
        acceptDecline.style.display = 'block';
        dbUser = {
          username: dbValue.username,
          uid: dbValue.uid,
          email: dbValue.email,
          groupid: dbValue.groupid,
          invitedToGroup: dbValue.invitedToGroup,
          invitedBy: dbValue.invitedBy
        }
        acceptInvite.addEventListener('click', e => {
          let groupid = ID();
          updateUser(dbUser.username, dbUser.uid, dbUser.email, groupid);
          firebase.database().ref('Users/User/').orderByChild('groupid').equalTo(dbUser.invitedToGroup).once('value', snap => {
            snap.forEach(data => {
              updateUserGroup(data.val().uid, groupid)});
          });
          showInvitation.innerHTML = "Sinulla ei ole kutsuja...";
          acceptDecline.style.display = 'none';
          groupForm.style.display = 'none';
          mainBody.style.display = 'block';
        //  location.reload();
        });

        declineInvite.addEventListener('click', e => {
          updateUser(dbUser.username, dbUser.uid, dbUser.email, dbUser.groupid);
          acceptDecline.style.display = 'none';
          showInvitation.innerHTML = "Sinulla ei ole kutsuja...";
          location.reload();
        });
      }
    });
  });

  // Invite button
  groupInvite.addEventListener('click', e => {

    let txtEmail = document.getElementById('txtInviteEmail').value;
    let inviter, dbUser, dbInvGroupId, dbInvBy;

    firebase.database().ref('Users/User').orderByChild('email').equalTo(txtEmail).once('value', snap => {

      if(snap.val()) {
        $('#inviteMessage').html("<br>Kutsu lähetetty!");
        $('#inviteError').html("");
        setTimeout(function() {
          $('#inviteMessage').fadeOut();
        }, 3000);
        snap.forEach(data => {
            let dbData = data.val();
            dbUser = {
              username: dbData.username,
              uid: dbData.uid,
              email: dbData.email,
              groupid: dbData.groupid
            }
        });
        firebase.database().ref().child('Users/User').orderByChild('uid').equalTo(user.uid).once('value', snap => {
          const dbUserData = snap.val();
          if(dbUserData) {
            snap.forEach((childSnap) => {
              let dbValue = childSnap.val();
              dbInvGroupId = dbValue.groupid;
              dbInvBy = dbValue.username;
            });
            inviteUser(dbUser, dbInvGroupId, dbInvBy);
          }
        });
      }
      else {
        $('#inviteError').html("<br>Tarkista osoite.");
        $('#inviteMessage').html("");
      }
    });

    txtEmail.value = "";
  });

  leaveGroup.addEventListener('click', e => {
    groupid = ID();
    updateUserGroup(user.uid, groupid);
    updateTaskList(groupid);
    $('#groupClose').click();
  });

  //Close group view
  closeGroup.addEventListener('click', e => {
    groupForm.style.display = 'none';
    mainBody.style.display = 'block';
  });
});

//To be able to press enter on input
$("#txtPassword_SI").keyup(function(event) {
  if (event.keyCode === 13) {
    $("#btnSignIn").click();
  }
});
$("#txtEmail_SI").keyup(function(event) {
  if (event.keyCode === 13) {
    $("#btnSignIn").click();
  }
});
$("#txtUsername").keyup(function(event) {
  if (event.keyCode === 13) {
    $("#btnSignUp").click();
  }
});
$("#txtInviteEmail").keyup(function(event) {
  if (event.keyCode === 13) {
    $("#btnGroupInvite").click();
  }
});
$("#newUsername").keyup(function(event) {
  if (event.keyCode === 13) {
    $("#acceptUsername").click();
  }
});
