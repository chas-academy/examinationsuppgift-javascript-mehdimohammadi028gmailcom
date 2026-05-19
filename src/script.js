// Hämta element
const descInput = document.getElementById("desc");
const amountInput = document.getElementById("amount");

const incomeBtn = document.getElementById("incomeBtn");
const expenseBtn = document.getElementById("expenseBtn");

const incomeList = document.getElementById("incomeList");
const expenseList = document.getElementById("expenseList");

const balanceElement = document.getElementById("balance");

let balance = 0;

// lägga till transaktion (type = beroende på vilken knapp som trycks, inkomst eller utgift)
function addTransaction(type) {
  // Hämta input värden
  const desc = descInput.value;
  const amountValue = amountInput.value;

  // validera input värden
  if (desc === "" || amountValue === "") {
    return;
  }

  const amount = Number(amountValue);
  if (isNaN(amount) ||amount == 0) {
    return;
  }

  // skapa ny listpunkt
  const li = document.createElement("li");

  if (type === "income") {
    li.textContent = `${desc} - ${amount} kr (Inkomst)`;

    incomeList.appendChild(li);

    balance += amount;
  } 
  else {
    li.textContent = `${desc} - ${amount} kr (Utgift)`;

    expenseList.appendChild(li);

    balance -= amount;
  }

  balanceElement.textContent = balance;

  descInput.value = "";
  amountInput.value = "";
}



// Event listeners för knappar
incomeBtn.addEventListener("click", ()=> {
  addTransaction("income");
});

expenseBtn.addEventListener("click", ()=> {
  addTransaction("expense");
});