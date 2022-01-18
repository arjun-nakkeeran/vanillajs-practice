
const setupClock = () => {
    let clockElement = document.querySelector('#clock');
    let timeElement = document.createElement('time');
    clockElement.appendChild(timeElement);

    const updateTime = () => {
        let currentTime = new Date();
        let localTime = currentTime.toLocaleTimeString();
        timeElement.textContent = localTime;//
         `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
    }

    setInterval(() => {
        updateTime();
    }, 1000);
};


class Transaction {
    constructor(amount, description, date) {
        this.amount = Number(amount);
        this.description = description;
        this.date = new Date(date).toLocaleDateString();
    }
}

class expenseTracker {
    constructor(transactions) {
        this.trans = transactions;
    }

    get transactions () {
        return this.trans;
    }

    addTransaction = (amount, description, date) => {
        let newTrans = new Transaction(amount, description, date);
        this.trans.push(newTrans);
        this.renderHistoryRow(newTrans);
        this.renderTotalExpense();
    };
    
    renderHistory = () => {
        this.trans.forEach(tran => {
            this.renderHistoryRow(tran);
        });
    }
    
    renderTotalExpense = () => {
        let totalExpense = this.trans.map(tran => tran.amount).reduce((prev, current) => prev+= current);
        document.querySelector('span#expense').textContent = totalExpense;
    }

    createElement = (tagName, textContent) => {
        let newElement = document.createElement(tagName);
        newElement.textContent = textContent;
        return newElement;
    };

    renderHistoryRow = (tran) => {
        let historyContainer = document.querySelector('div.history-container');

        let historyRow = document.createElement('div');
        historyRow.setAttribute('class', 'history-row');

        historyRow.appendChild(this.createElement('span', tran.date));
        historyRow.appendChild(this.createElement('span', tran.description));
        historyRow.appendChild(this.createElement('span', tran.amount));

        historyContainer.appendChild(historyRow);
    }
}



(() => {
    setupClock();

    const trans = [];
    let app = new expenseTracker(trans);

    // Add a dummy transaction for now instead of submitting from forms
    app.addTransaction(450, 'Swiggy', new Date().toLocaleDateString());
    app.addTransaction(170, 'Zomato', new Date().toLocaleDateString());

    document.querySelector('form#transaction').addEventListener('submit',(e) => {
        e.preventDefault();
        console.log('Form submitted');

        let formElements = Array.from(e.target.elements);
        let validateResult = formElements.map(element => validateControl(element));
        console.table(validateResult);
        if (validateResult.every(val => val))
        {
            let amount = e.target.amount.value;
            let description = e.target.description.value;
            let transactionDate = e.target.transactiondate.value;
            app.addTransaction(amount, description, transactionDate);
            const submitButton = e.target.querySelector('button[type=submit]');
            showSucceess(submitButton);
        }
        

    });

    const validateControl = (element) => {
        const inputType = element.getAttribute('type');
        let val = element.value;
        let hasValidValue = true;
        switch (inputType)
        {
            case 'text':
                if (!validateText(val))
                {
                    hasValidValue = false;
                    showError(element);
                }
                else {
                    clearError(element);
                }
                break;
            case 'date':
                if (!validateDate(val))
                {
                    hasValidValue = false;
                    showError(element);
                }
                else {
                    clearError(element);
                }
                break;
            case 'number':
                if (!validateNumber(val))
                {
                    hasValidValue = false;
                    showError(element);
                }
                else {
                    clearError(element);
                }
                break;
        }
        return hasValidValue;
    }

    const validateText = (value) => {
        
        return isNaN(value) && value.length > 3;
    }

    const validateDate = (value) => {
        return value && value.length > 6;
    }

    const validateNumber = (value) => {
        return value && !isNaN(value);
    }

    const showError = (element) => {
        const formControl = element.parentElement;
        formControl.classList.add('error');
    }

    const clearError = (element) => {
        const formControl = element.parentElement;
        formControl.classList.remove('error');
    }

    const showSucceess = (button) => {
        const formControl = button.parentElement;
        formControl.classList.add('success');
        console.log('Proceed to submit form to server');
    }

    //app.renderHistory();
    //app.renderTotalExpense();
    
})()