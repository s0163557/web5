function func() {
  let result;
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  if (! (/^[0-9]+$/.test(num1) ) || ! (/^[0-9]+$/.test(num2))) {
  document.getElementById("result").innerHTML = "ошибка";
  }
  else{
    result=num1*num2;
    document.getElementById("result").innerHTML = result;
    }
}

window.addEventListener("DOMContentLoaded", function(event)  {
    console.log("DOM gotov");
    let buttonProiz = document.getElementById("func");
    buttonProiz.addEventListener("Click", func);
});
