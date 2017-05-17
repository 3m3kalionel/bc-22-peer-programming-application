        
        
        function init() {
          //// Initialize Firebase.
          var config = {
            apiKey: "AIzaSyAVGWE5trc0RZ9DkYgMT4SfC-4p1dnBhWk",
            authDomain: "firepad-tests.firebaseapp.com",
            databaseURL: "https://firepad-tests.firebaseio.com",
            projectId: "pair-programming-application",
            storageBucket: "pair-programming-application.appspot.com",
            messagingSenderId: "20264414160"
          };


          firebase.initializeApp(config);
          //// Get Firebase Database reference.
          var firepadRef = getExampleRef();
          //// Create CodeMirror (with line numbers, line wrapping and the JavaScript mode).
          var codeMirror = CodeMirror(document.querySelector('#firepad'), {
            lineNumbers: true,
            mode: 'javascript',
            lineWrapping: true
          });

          // Create a random ID to use as our user ID (we must give this to firepad and FirepadUserList).
          var userId = Math.floor(Math.random() * 9999999999).toString();

            //create an andelaFeedback function stored in a variable feedback using template literals and used as the default text

            let feedback = `//Sample function using Firepad!!
function andelaFeedback() {
    let response = prompt("has your bootcamp experience been exhausting? [Y/N] ").toLowerCase();
    if(response === "y" || response === "yes") {
         console.log("guessed as much");
    } else if(response === "n" || response === "no") {
        console.log("sure??");
    } else {
        alert("please enter y/n or yes/no");
        andelaFeedback();
    }
}`

            //// Create Firepad with some text shortcuts, the rich text tooolbar, default text and the random user id
            var firepad = Firepad.fromCodeMirror(firepadRef, codeMirror, {
            // defaultText: '// Sample function using Firepad!!\nfunction go() {\n  var message = "Hello, world.";\n  console.log(message);\n}',
            
                richTextShortcuts: true,
                richTextToolbar: true,
                defaultText: feedback,
                userId: userId
            });

            //// Create FirepadUserList (with our desired userId).
            var firepadUserList = FirepadUserList.fromDiv(firepadRef.child('users'),
            document.getElementById('userlist'), userId);

        }


        // Helper to get hash from end of URL or generate a random one.
        function getExampleRef() {
          var ref = firebase.database().ref();
          var hash = window.location.hash.replace(/#/g, '');
          if (hash) {
            ref = ref.child(hash);
          } else {
            ref = ref.push(); // generate unique location.
            window.location = window.location + '#' + ref.key; // add it as a hash to the URL.
          }
          if (typeof console !== 'undefined') {
            console.log('Firebase data: ', ref.toString());
          }
          return ref;
        }
  