{\rtf1\ansi\ansicpg1252\cocoartf2639
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 \
function generateGroups() \{\
  var frequencies = ["r1", "r8", "f2", "f4"];\
  var namesInput = document.getElementById("names");\
  var names = namesInput.value.split(",").map(function(name) \{\
    return name.trim();\
  \});\
\
  // Verifica se ci sono abbastanza nomi per coprire tutte le frequenze\
  if (names.length < frequencies.length) \{\
    alert("Il numero di nomi inseriti non \'e8 sufficiente per coprire tutte le frequenze.");\
    return;\
  \}\
\
  // Assegna ad ogni nome una frequenza\
  var assignedFrequencies = \{\};\
  for (var i = 0; i < names.length; i++) \{\
    var frequencyIndex = i % frequencies.length;\
    assignedFrequencies[names[i]] = frequencies[frequencyIndex];\
  \}\
\
  // Forma gruppi casuali che contengono tutte le frequenze\
  var shuffledNames = names.slice().sort(function() \{ return 0.5 - Math.random() \});\
  var groups = [];\
  while (shuffledNames.length > 0) \{\
    var group = [];\
    for (var frequency of frequencies) \{\
      var name = shuffledNames.pop();\
      group.push(\{ name: name, frequency: assignedFrequencies[name] \});\
    \}\
    groups.push(group);\
  \}\
\
  // Mostra i gruppi generati\
  var outputDiv = document.getElementById("output");\
  outputDiv.innerHTML = "";\
  for (var i = 0; i < groups.length; i++) \{\
    var groupHeading = document.createElement("h3");\
    groupHeading.textContent = "Gruppo " + (i + 1);\
    outputDiv.appendChild(groupHeading);\
    var groupList = document.createElement("ul");\
    for (var j = 0; j < groups[i].length; j++) \{\
      var listItem = document.createElement("li");\
      listItem.textContent = groups[i][j].name + " (" + groups[i][j].frequency + ")";\
      groupList.appendChild(listItem);\
    \}\
    outputDiv.appendChild(groupList);\
  \}\
\}\
\
}