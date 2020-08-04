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

document.querySelector('.aside__menu-bar').addEventListener('click', () => {
  const nav = document.querySelector(".aside__navigation");
  if (nav.classList.contains("aside__navigation--visible"))
    document.querySelector(".aside__menu-bar").innerHTML = "menu (click to open):";
  else
    document.querySelector(".aside__menu-bar").innerHTML = "menu (click to hide):";
  nav.classList.toggle("aside__navigation--visible");
});
