let balance=0;

let input_deposit=document.getElementById("deposit");
let btn_deposit=document.getElementById("btn-dep");

btn_deposit.addEventListener("click",input_function_deposit);


function input_function_deposit(){
    if(input_deposit.value < 0){
        alert("Enter a valied amount...!");
    }else{
        balance+=Number(input_deposit.value);
        alert("Deposit successfully completed...!");
        input_deposit.value="";
    }
       
}

// -----------------------------------------------------------

let input_withdraw=document.getElementById("withdraw");
btn_withdraw=document.getElementById("btn-with");

btn_withdraw.addEventListener("click",input_function_withdraw);

function input_function_withdraw(){

    if(input_withdraw.value > balance){
        alert("Insufficent amount in your account...!");
    }
    else if(input_withdraw.value < 0){
        alert("Enter the valied amount to withdraw...!");

    }
    else{
        balance-=Number(input_withdraw.value);
        alert("withdrawal successfully completed...!");
        input_withdraw.value="";
    }
   
}


// ---------------------------------------------------------------------

button_check_balance=document.getElementById("balance-check");
amount_show=document.getElementById("balance-amount");

button_check_balance.addEventListener("click",check_balance);

function check_balance(){
    amount_show.textContent="₹ "+balance;
    
}