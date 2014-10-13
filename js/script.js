$(document).ready(function(){
	var testNumLength = function(number) {
        if (number.length > 9) {
            totaldiv.text(number.substr(number.length-9,9));
            if (number.length > 15) {
                number = "";
                totaldiv.text("Err");
            }
        } 
    };
	//Add your var's here!
	var number = ""
    newnumber = ""
    operator = ""
    totaldiv = $('#total');

    totaldiv.text("0");

    $("#numbers a").not("#clear,#clearall").click(function(){
        //action here
        number += $(this).html();
        totaldiv.text(number);
        testNumLength(number);
    });

    $("#operators a").not("#equals").click(function(){
        operator += $(this).html();
        newnumber = number;
        number = "";
        totaldiv.text("0");
    });

    $("#clear").click(function(){
        number = "";
        totaldiv.text("0");
    });
    $("#clearall").click(function(){
        number = "";
        totaldiv.text("0");
        newnumber = "";
    });

    $("#equals").click(function(){
        number = parseInt(number, 10);
        newnumber = parseInt(newnumber, 10);
        var result;
        if (operator === "+") {
            result = newnumber+number;
        }
        else if (operator === "-") {
            result = newnumber-number;  
        }
        else if (operator === "*") {
            result = newnumber*number;
        }
        else if (operator === "/") {
            result = newnumber/number;
        }

        result = result.toString(10);
        totaldiv.text(result);
        testNumLength(result);
        number = "";
        newnumber = "";
    });



});