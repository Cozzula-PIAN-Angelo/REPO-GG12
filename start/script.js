/*
  REGOLE
  - Continua quello che hai iniziato stamani in classe.
  - Niente eventi (li vediamo domani): chiama le funzioni dalla console o all'avvio.
  - Solo const/let, mai var. Solo querySelector/querySelectorAll per il DOM.
*/

const lista = document.querySelector("#lista-task");
const contatore = document.querySelector("#contatore");

function aggiungiTask(testo, classe) {
  const li = document.createElement("li");
  const butt = document.createElement("button");
  const date = document.createElement("span");
  const div = document.createElement("div");

  li.classList.add(classe);
  li.textContent = testo;

  date.textContent = new Date().toLocaleString();
  date.classList.add("date");

  butt.textContent = "Elimina";
  butt.classList.add("delete");

  div.classList.add("container");

  lista.appendChild(li);
  li.appendChild(div);
  div.appendChild(date);
  div.appendChild(butt);
  aggiornaContatore();
}

function aggiornaContatore() {
  const tasks = lista.querySelectorAll("li");
  contatore.textContent = tasks.length;
}
function marker(n) {
  const tasks = lista.querySelectorAll("li");
  for (let i = 0; i < tasks.length; i++) {
    if (i === n) {
      tasks[i].classList.add("evidenziato");
    }
  }
}

function contaPerPriorita() {
  const high = lista.querySelectorAll(".priorita-alta");
  console.log("alta: " + high.length);

  const low = lista.querySelectorAll(".priorita-bassa");
  console.log("bassa: " + low.length);

  const medium = lista.querySelectorAll(".priorita-media");
  console.log("media: " + medium.length);
}

aggiungiTask("Studiare JavaScript", "priorita-alta");
aggiungiTask("Bere il caffè", "priorita-media");
aggiungiTask("Riposarsi", "priorita-bassa");
aggiungiTask("Curasi", "priorita-alta");
aggiungiTask("Lavarsi", "priorita-bassa");
contaPerPriorita();
marker(1);

/* SCRIVI QUI LE TUE FUNZIONI:
   1. Modifica aggiungiTask per accettare priorita
   2. Aggiungi bottone Elimina su ogni task
   6. evidenzia(indice) / togliEvidenza(indice)
   7. data automatica nel task
   8. contaPerPriorita()
*/
