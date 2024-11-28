function insert_Row() {
  const table = document.getElementById("sampleTable");
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  td1.innerHTML = "New Cell1";
  const td2 = document.createElement("td");
  td2.innerHTML = "New Cell2";
  tr.append(td1,td2);
  table.prepend(tr);
  
}
