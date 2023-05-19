function generateGroups() {
  var frequencies = ["R1", "R8", "F2", "F4"];
  var namesInput = document.getElementById("names");
  var names = namesInput.value.split(",").map(function (name) {
    return name.trim();
  });

  // Verifica se ci sono abbastanza nomi per coprire tutte le frequenze
  if (names.length < frequencies.length) {
	var errMessage = "Il numero di nomi inseriti non è sufficiente per coprire tutte le frequenze.";
    window.alert(errMessage);
    return;
  }

  // Assegna ad ogni nome una frequenza
  var assignedFrequencies = {};
  for (var i = 0; i < names.length; i++) {
    var frequencyIndex = i % frequencies.length;
    assignedFrequencies[names[i]] = frequencies[frequencyIndex];
  }

  // Forma gruppi casuali che contengono tutte le frequenze
  var shuffledNames = names.slice().sort(function () {
    return 0.5 - Math.random();
  });
  var groups = [];
  while (shuffledNames.length > 0) {
    var group = [];
    for (var frequency of frequencies) {
      var name = shuffledNames.pop();
      group.push({ name: name, frequency: assignedFrequencies[name] });
    }
    groups.push(group);
  }

  // Mostra i gruppi generati
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "";

  // Aggiungi i dati della tabella
  var tableBody = document.getElementById("frequency-table-body");
  tableBody.innerHTML = "";
  for (var i = 0; i < groups.length; i++) {
    for (var j = 0; j < groups[i].length; j++) {
      var row = document.createElement("tr");

      var nameCell = document.createElement("td");
      nameCell.textContent = groups[i][j].name;
      row.appendChild(nameCell);

      var frequencyCell = document.createElement("td");
      frequencyCell.textContent = groups[i][j].frequency;
      row.appendChild(frequencyCell);

      tableBody.appendChild(row);
    }
  }
}
