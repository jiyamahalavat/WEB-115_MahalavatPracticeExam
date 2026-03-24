// event listener
document.getElementById("calculateBudget").addEventListener("click", calcBudget);

function calcBudget() {
    try {

        // input
        let income = parseFloat(prompt("Enter monthly income (no commas):"));
        let expenses = parseFloat(prompt("Enter monthly expenses:"));
        let months = parseInt(prompt("Enter number of months:"));

        // error check
        if (isNaN(income) || isNaN(expenses) || isNaN(months)) {
            throw "Please enter numbers only.";
        }

        // calculations
        let savings = income - expenses;
        let totalSavings = savings * months;

        // rounding 
        income = Math.round(income * 100) / 100;
        expenses = Math.round(expenses * 100) / 100;
        savings = Math.round(savings * 100) / 100;
        totalSavings = Math.round(totalSavings * 100) / 100;

        // shows output
        let results = document.getElementById("budgetResults");
        results.innerHTML = "";

        // summary output
        results.innerHTML += "<p>Monthly Income: $" + income.toFixed(2) + "</p>";
        results.innerHTML += "<p>Monthly Expenses: $" + expenses.toFixed(2) + "</p>";
        results.innerHTML += "<p>Monthly Savings: $" + savings.toFixed(2) + "</p>";
        results.innerHTML += "<p>Total Projected Savings: $" + totalSavings.toFixed(2) + "</p>";
        
        // warning
        if (savings < 0) {
            results.innerHTML += "<p><b>Warning: Spending exceeds income!</b></p>";
        }

        // monthly projection loop
            for (let i = 1; i <= months; i++) {
                let monthTotal = savings * i;
                let p = document.createElement("p");
                p.textContent = "Month " + i + " Savings: $" + monthTotal.toFixed(2);
                results.appendChild(p);

    } catch (error) {
        alert("Error: " + error);
    }
}
