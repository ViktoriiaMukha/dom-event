
// input.oninput = function() {
//     result.innerHTML = input.value;
//   };
  let form=document.forms.calculator;

  table.money.oninput = calculate;
  table.amount.oninput = calculate;
  
  function calculate(){
   let price = +form.InputPrice1.value;
        if (!price) return;
   let num = +form.InputAmount1.value;
             if (!num) return;
  
   let result = Math.round(price * num);
  
  document.getElementById('InputPrice1').innerHTML = form.money.value;
  document.getElementById('InputAmount1').innerHTML = form.amount.value;
  document.getElementById('InputTotal').innerHTML = result
  }
  calculate();
  
  