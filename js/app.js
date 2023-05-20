function generateGroups() {
  var frequencies = ["R1", "R8", "F2", "F4"];
  var namesInput = document.getElementById("names");
  var names = namesInput.value.split(",").map(function(name) {
    return name.trim();
  });

  // Verifica se ci sono abbastanza nomi per coprire tutte le frequenze
  if (names.length < frequencies.length) {
    var errMessage = "Il numero di nomi inseriti non è sufficiente per coprire tutte le frequenze.";
    window.alert(errMessage);
    return;
  }

  // Mescola l'array dei nomi casualmente
  var shuffledNames = shuffle(names.slice());

  // Inizializza i gruppi
  var groups = [];
  for (var frequency of frequencies) {
    groups.push({ frequency: frequency, members: [] });
  }

  // Assegna ad ogni nome una frequenza
  for (var i = 0; i < shuffledNames.length; i++) {
    var frequencyIndex = i % frequencies.length;
    var frequency = frequencies[frequencyIndex];
	
    groups[frequencyIndex].members.push(shuffledNames[i]);
  }

  // Ordina i gruppi in base alla colonna "frequenza"
  groups.sort(function(a, b) {
    if (a.frequency < b.frequency) {
      return -1;
    } else if (a.frequency > b.frequency) {
      return 1;
    } else {
      return 0;
    }
  });

  // Mostra i gruppi generati
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "";

  // Aggiungi i dati della tabella
  var tableBody = document.getElementById("frequency-table-body");
  tableBody.innerHTML = "";
  for (var i = 0; i < groups.length; i++) {
    var group = groups[i];
    var frequency = group.frequency;
    var groupMembers = group.members;
    for (var j = 0; j < groupMembers.length; j++) {
      var row = document.createElement("tr");

      var nameCell = document.createElement("td");
      nameCell.textContent = groupMembers[j];
      row.appendChild(nameCell);

      var frequencyCell = document.createElement("td");
      frequencyCell.textContent = frequency;
      row.appendChild(frequencyCell);

      tableBody.appendChild(row);
    }
  }

  // Aggiungi il messaggio dopo la tabella
  var message = document.createElement("p");
  message.textContent = "Happy FLY!!!!";
  outputDiv.appendChild(message);
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

document.getElementById("generate-button").addEventListener("click", generateGroups);
