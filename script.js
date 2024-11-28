function insert_Row() {
  const table = document.getElementById("sampleTable");
  const newRow = table.insertRow(0)

  const newCell1 = newRow.insertCell(0);
  newCell1.innerHTML = "New Cell1";

  const newCell2 = newRow.insertCell(1);
  newCell2.innerHTML = "New Cell2";
}
