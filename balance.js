const BALANCE = "userBalance";

export function getBalance() {
    return Number(localStorage.getItem(BALANCE)) || 0;
}

export function setBalance(amount){
    localStorage.setItem(BALANCE, amount);
    updateBalanceDisplay();
}

export function addBalance(amount){
    const currBalance = getBalance();
    setBalance(currBalance + amount);
}

export function subBalance(amount){
    const currBalance = getBalance();
    if (currBalance >= amount){
        setBalance(currBalance - amount);
        return true;
    } else {
        alert("Not enough Money");
        return false;
    }
}

export function updateBalanceDisplay(){
    const balanceDisplay = document.querySelector("#balanceAmount");
    if (balanceDisplay){
        balanceDisplay.textContent = `Balance: $${getBalance().toFixed(2)}`;
    }
}

window.addEventListener("DOMContentLoaded", updateBalanceDisplay);