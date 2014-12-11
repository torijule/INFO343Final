/* Victoria Wellington
Java-Script Challlenge
Validate feedback form for browsers not supporting html5 required tag

*/
"use strict";

document.addEventListener('DOMContentLoaded', onReady);

function onReady() {
	var form = document.getElementById("feedbackForm");
	


	});


	//check required fields of simple text input boxes
	document.getElementById("submit").addEventListener("click", function(event){
		try {
			var simpleText = ['userName', 'employeeName', 'date'];
			var valid = true;
			var i; 
			for (i = 0; i < simpleText.length; i++) {
				var test = testSimple(simpleText[i]);
				if (valid)
					valid = test;
			}


			if (!valid && event.preventDefault()){
				event.preventDefault;
			}
			}
			catch(error){
				console.log(error);
				valid = false;
			}

		return valid;

		});





	


	function testSimple(field){
		if ((document.getElementById(field).value == null) || (document.getElementById(field).value == "")){
			document.getElementById(field).style.border = "1px solid #FF0000";
			return false;
		} else {
			document.getElementById(field).style.borderColor = "silver";
			return true;
		}
	}
}









