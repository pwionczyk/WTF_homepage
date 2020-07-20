let name = "Przemysław Wionczyk";
console.log(`Hi, my name is ${name}. I built this site.`);

const owner = document.querySelector(".site-footer__owner--js");
owner.innerHTML = "Przemysława Wionczyka";

const invitation2 = (name, age) => {
  if ([2, 3, 4].includes(age % 10))
    alert(`Dzień dobry. Nazywasz się ${name} i masz ${age} lata.`);
  else alert(`Dzień dobry. Nazywasz się ${name} i masz ${age} lat.`);
};

function invitation(name, age) {
  if ([2, 3, 4].includes(age % 10))
    alert(`Dzień dobry. Nazywasz się ${name} i masz ${age} lata.`);
  else alert(`Dzień dobry. Nazywasz się ${name} i masz ${age} lat.`);
}
