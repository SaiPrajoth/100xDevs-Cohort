
document.getElementById("calculate-button").addEventListener("click", function() {
    let capital = parseFloat(document.getElementById("capital-input").value);
    let years = parseFloat(document.getElementById("years-input").value);
    let interest = parseFloat(document.getElementById("interest-input").value);
    
    if (isNaN(capital) || isNaN(years) || isNaN(interest)) {
        alert("Enter all the required fields or add valid inputs");
        // document.getElementById("capital-input").placeholder="Enter the required fields";
    } else {
        let result = return_calculator(capital, years, interest);
        document.getElementById("result").innerText = "Returns : "+result;
    }
});

function return_calculator(capital, years, interest) {
    let Future_Value = capital * (1+(interest/100))^years;
    return Future_Value - capital;
}
