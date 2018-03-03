$(document).ready(function() {
	$("#submitBtn").click(function() {

		const validateForm = () => {
			let isValid = true;
			$(".text-bars").each(function() {
				if($(this).val() === "") {
					isValid = false;
				}
			});

			$(".survey-answer").each(function() {
				if($(this).val() === "") {
					isValid = false;
				}
			})

			return isValid;
		}

		if (validateForm()) {

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

			$.post("/api/findFriend", newFriend)
			.then(function(data){
				console.log(data);
				$("#friendName").text(data.name);
				$("#friendPic").attr("src", data.photo);
			})

			$("#myModal").modal({
				backdrop: "show"				
			});
			$(".modal-backdrop").addClass("fade in");
		}
		else {
			alert("Please fill in the form");
		}
	})
})