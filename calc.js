function updatePrice() {
  let price = 0;
  let prices = getPrices();
  let priceIndex = parseInt(select.value) - 1;
  if (priceIndex >= 0) {
      price = prices.prodTypes[priceIndex];
  }
  let quantity = Number(document.getElementById('vibor').value);
  let Dogz_Div = document.querySelectorAll('#Dogz input');
  Dogz_Div.forEach(function (checkbox) {
      if (checkbox.checked) {
          let propPrice = prices.prodProperties[checkbox.name];
          if (propPrice !== undefined) {price += propPrice;}
      }
  });
  let prodOptionz = document.getElementsByName('prodOptionz');
  let k=0;
  prodOptionz.forEach(function (radio) {
      if (radio.checked) {
          let optionPrice = prices.prodOptionz[radio.value];
          if (optionPrice !== undefined) {
              price += optionPrice;
              
          }
      }
});


  let cou = document.getElementById('vibor');
  cou.addEventListener('input',function (){updatePrice();});
  let s = document.getElementsByName('type');
  s[0].addEventListener('change', function (event) {
      let select = event.target;
      let Catz = document.getElementById('Catz');
      let Dogz = document.getElementById('Dogz');
      if (select.value === '1') {
          Catz.style.display = 'none';
          Dogz.style.display = 'none';
          firstq();
          Dogz_hide();
          document.getElementById('price').innerHTML =
              'Всего: ' + prices.prodTypes[0]*quantity + ' рублей';
      }
      else if (select.value === '2') {
          Dogz_hide();
          Catz.style.display = 'block';
          Dogz.style.display = 'none';
          document.getElementById('price').innerHTML =
              'Всего: ' + prices.prodTypes[1]*quantity + ' рублей';
      }
      else if (select.value === '3') {
          Catz.style.display = 'none';
          Dogz.style.display = 'block';
          firstq();
          document.getElementById('price').innerHTML =
              'Всего: ' + prices.prodTypes[2]*quantity + ' рублей';
      } else {
      }
  });
  let price_pr = document.getElementById('price');
  price_pr.innerHTML = 'Всего: ' + price * quantity + ' рублей';
}
function getPrices() {
  return {
      prodTypes: [20000, 5000, 1000],
      prodOptionz: {
          Maine_Coon: 3000,
          Egyptian_mau: 10000,
          Sphinx: 6000,
      },
      prodProperties: {
          Beagle: 5000,
          Shiba_inu: 34000,
          Doberman: 13000,
      },
  };
}
let elm = document.getElementById('firstq');
elm.style.display = 'none';
function firstq() {
  elm.checked = !elm.checked;
}
function Dogz_hide() {
  document.getElementById('Beagle').checked = false;
  document.getElementById('Shiba_inu').checked = false;
  document.getElementById('Doberman').checked = false;
}



window.addEventListener('DOMContentLoaded', function () {

  let radioDiv = document.getElementById('Catz');
  radioDiv.style.display = 'none';

  let Dogz = document.getElementById('Dogz');
  Dogz.style.display = 'none';

  let s = document.getElementsByName('type');
  let select = s[0];

  select.addEventListener('change', function () {
      updatePrice();
  });
  let prodOptionz = document.getElementsByName('prodOptionz');
  prodOptionz.forEach(function (radio) {
      radio.addEventListener('change', function () {updatePrice();});
  });
  let sniper_option = document.querySelectorAll('#Dogz input');
  sniper_option.forEach(function (checkbox) {
      checkbox.addEventListener('change', function () {updatePrice();});
  });
  updatePrice();
});