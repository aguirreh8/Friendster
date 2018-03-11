//Start when page loads
$(document).ready(function() {
	$("#submitBtn").click(function() {
		// Function check to if all fields have valid inputs. Continue if true, else notify the user
		const validateForm = () => {
			let isValid = true;
			//Check text bar inputs
			$(".text-bars").each(function() {
				if($(this).val() === "") {
					isValid = false;
				}
			});
			//Check dropdown inputs
			$(".survey-answer").each(function() {
				if($(this).val() === "") {
					isValid = false;
				}
			})
			//return boolean
			return isValid;
		}

		//Run function first, then execute code
		if (validateForm()) {
			//if true, store all data from inputs into object
			const newFriend = {
				name: $('#nameInput').val(),
				photo: $('#imgInput').val(),
				scores: [
					$("#surveyAnswer1").val(),
					$("#surveyAnswer2").val(),
					$("#surveyAnswer3").val(),
					$("#surveyAnswer4").val(),
					$("#surveyAnswer5").val(),
					$("#surveyAnswer6").val(),
					$("#surveyAnswer7").val(),
					$("#surveyAnswer8").val(),
					$("#surveyAnswer9").val(),
					$("#surveyAnswer10").val()
				]
			}
			//Pass data into post, retrieve data from results
			$.post("/api/findFriend", newFriend)
			.then(function(data){
				//append retrieved data into modal elements
				$("#friendName").text(data.name);
				$("#friendPic").attr("src", data.photo);
			})
			//Show modal element
			$("#myModal").modal({
				backdrop: "show"				
			});
			//add fade in feature to page when modal is shown
			$(".modal-backdrop").addClass("fade in");
		}
		//if false, do not continue and inform user
		else {
			alert("Please fill in the form");
		}
	})
})