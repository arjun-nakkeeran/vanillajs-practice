
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
        this.amount = amount;
        this.description = description;
        this.date = date;
    }
}

const trans = [];
const addTransaction = (amount, description, date) => {
    let newTrans = new Transaction(amount, description, date);
    trans.push(newTrans);
};

const renderHistory = () => {
    let historyContainer = document.querySelector('div.history-container');

    const createElement = (tagName, textContent) => {
        let newElement = document.createElement(tagName);
        newElement.textContent = textContent;
        return newElement;
    };

    trans.forEach(tran => {
        let historyRow = document.createElement('div');
        historyRow.setAttribute('class', 'history-row');

        historyRow.appendChild(createElement('span', tran.date));
        historyRow.appendChild(createElement('span', tran.description));
        historyRow.appendChild(createElement('span', tran.amount));

        historyContainer.appendChild(historyRow);
    });
    
}

const renderTotalExpense = () => {
    let totalExpense = trans.map(tran => tran.amount).reduce((prev, current) => prev+= current);
    document.querySelector('span#expense').textContent = totalExpense;
}


(() => {
    setupClock();

    // Add a dummy transaction for now instead of submitting from forms
    addTransaction(450, 'Swiggy', new Date().toLocaleDateString());
    addTransaction(170, 'Zomato', new Date().toLocaleDateString());

    renderHistory();
    renderTotalExpense();
})()