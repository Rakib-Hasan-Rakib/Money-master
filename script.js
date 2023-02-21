function getInputValue(inputId){
    let  inputField = document.getElementById(inputId);
    let inputValueString = inputField.value;
    let inputValueNumber = parseInt(inputValueString);
    return inputValueNumber;
}

function getInnerText(elementId){
    let textField = document.getElementById(elementId);
    return textField;
}


document.getElementById('calculate-btn').addEventListener('click', function () {
    let income = getInputValue('income');

    let food = getInputValue('food');
    let rent = getInputValue('rent');
    let clothes = getInputValue('clothes');

    if (isNaN(income) === false && isNaN(food) === false && isNaN(rent) === false && isNaN(clothes) === false) {

        if (income >= 0 && food >= 0 && rent >= 0 && clothes >= 0) {
            let totalExpense = food + rent + clothes;
            let balance = income - totalExpense;

            if (income >= totalExpense) {
                getInnerText('total-expense').innerText = totalExpense;
                getInnerText('balance').innerText = balance;
            }
            else { alert('you can not spend more than income') }
        }

        else {
            alert('income or expense can not be negative')
        }

    } else {
        alert('please provide valid input')
    }

})

document.getElementById('save-btn').addEventListener('click', function () {
    let balanceString = getInnerText('balance').innerText;
    let balanceNumber = parseFloat(balanceString);

    let save = getInputValue('save');

    if (isNaN(balanceNumber) === false) {
        if (isNaN(save) === false) {
            if (save >= 0 && save <= 100) {
                let savingAmount = (balanceNumber * (save / 100)).toFixed(2);
                getInnerText('saving-amount').innerText = savingAmount;

                let remainingBalance = (balanceNumber - savingAmount).toFixed(2);
                getInnerText('remaining-balance').innerText = remainingBalance;
            } else {
                alert('percentage can not be negative or more than hundred');
            }
        } else {
            alert('please provide valid input');
        }
    } else {
        alert('please calculate balance first')
    }
})