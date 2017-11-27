function getDate() {
  var currentdate = new Date();
  var date = ('0' + currentdate.getDate()).slice(-2) + '.' +
  ('0' + (currentdate.getMonth()+1)).slice(-2)  + '.' +
  currentdate.getFullYear();
  return date;
}

function getTime() {
  var currentdate = new Date();
  var time =  + ('0' + currentdate.getHours()).slice(-2) + ":"
  + ('0' + currentdate.getMinutes()).slice(-2) + ":"
  + ('0' + currentdate.getSeconds()).slice(-2);
  return time;
}

// "Tiskit tehty!" -button
document.getElementById('dishButton').addEventListener('click', function () {
  writeTask();
});

function getCurUser() {
  var user = firebase.auth().currentUser;
  var uname, email, photoUrl, uid, emailVerified;

  if (user) {
    //Getting user's information
    if (user != null) {
      uname = user.displayName;
    }
  }
  return uname;
}

//function setProfImg()

// ANALYTICS
// function getCount(name) {
//   var result = null;
//   var scriptUrl = "php/getCount.php?name=" + name;
//   $.ajax({
//     url: scriptUrl,
//     type: 'get',
//     dataType: 'html',
//     async: false,
//     success: function(data) {
//       result = data;
//     }
//   });
//   return result;
// }

// Get usernames and calculate the precentage of entries/user
// function getUsernames() {
//     $.ajax({
//         type: 'POST',
//         url: 'php/getUsernames.php',
//         data: 'id=testdata',
//         dataType: 'json',
//         cache: false,
//         success: function(names) {
//           var arrLen = Object.keys(names).length;
//           var counts = new Array(arrLen);
//           var percents = new Array(arrLen);
//           var total = 0;
//           for (var i = 0; i < arrLen; i++) {
//             counts[i] = parseFloat(getCount(names[i]));
//             total += counts[i];
//           }
//           for (var i = 0; i < arrLen; i++) {
//             percents[i] = (counts[i] / total * 100.0).toFixed(2);
//           }
//           for (var i = 0; i < arrLen; i++) {
//             $('#scoreCount').append(names[i] + " - " + getCount(names[i]) + "(" + percents[i] + "%)<br/>");
//           }
//         },
//     });
// };

// // Dropdown menu
// function dropdown() {
//   $('.dropdown').on('show.bs.dropdown', function() {
//     $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
//   });
// }
//
// function dropdownUp() {
//   $('.dropdown').on('hide.bs.dropdown', function() {
//     $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
//   });
// }
//
// function play() {
//   $(document).ready(function() {
//     $("#audio").get(0).play();
//   });
// }
