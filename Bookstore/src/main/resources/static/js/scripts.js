/**
 * 
 */

function checkBillingAddress() {
	if ($("#theSameAsShippingAddress").is(":checked")) {
		$(".billingAddress").prop("disabled", true);
	}
	else {
		$(".billingAddress").prop("disabled", false);
	}
}


function checkPasswordMatch() {
	var password = $("#txtNewPassword").val();
	var confirmPassword = $("#txtConfirmPassword").val();
	
	if (password == "" && confirmPassword == "") {
		$("#checkPasswordMatch").html("");
		$("#updateUserInfoButton").prop('disable', false);
	}
	else {
		if (password != confirmPassword) {
			$("#checkPasswordMatch").html("Password do not match!");
			$("updateUserInfoButton").prop('disable', true);
		}
		else {
			$("#checkPasswordMatch").html("Password match!");
			$("updateUserInfoButton").prop('disable', false);
		}
	}
	
}


$(document).ready(function(){
	$(".cartItemQty").on('change', function(){
		var id=this.id;
		
		$('#update-item-'+id).css('display', 'inline-block');
	});
	
	$("#theSameAsShippingAddress").on('click', checkBillingAddress);
	$("#txtConfirmPassword").keyup(checkPasswordMatch);
	$("#updateUserInfoButton").keyup(checkPasswordMatch);
	
});