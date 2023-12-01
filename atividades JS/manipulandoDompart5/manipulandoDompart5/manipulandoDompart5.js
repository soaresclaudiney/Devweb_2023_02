var items = [];
    var quantities = [];
    var prices = [];

    function addItem() {
      var itemName = document.getElementById("itemName").value;
      var itemQuantity = parseInt(document.getElementById("itemQuantity").value);
      var itemPrice = parseFloat(document.getElementById("itemPrice").value);

      items.push(itemName);
      quantities.push(itemQuantity);
      prices.push(itemPrice);

      updateLists();
      clearForm();
    }

    function updateLists() {
      var itemList = document.getElementById("itemList");
      var subtotalList = document.getElementById("subtotalList");
      var totalGeralElement = document.getElementById("totalGeral");

      itemList.innerHTML = "";
      subtotalList.innerHTML = "";

      var totalGeral = 0;

      for (var i = 0; i < items.length; i++) {
        var listItem = document.createElement("li");
        listItem.className = "list-group-item";
        listItem.innerHTML = `${quantities[i]} ${items[i]} - ${quantities[i] * prices[i].toFixed(2)}`;

        var subtotalItem = document.createElement("li");
        subtotalItem.className = "list-group-item";
        subtotalItem.innerHTML = `${quantities[i]} ${items[i]} - ${quantities[i] * prices[i].toFixed(2)}`;

        itemList.appendChild(listItem);
        subtotalList.appendChild(subtotalItem);

        totalGeral += quantities[i] * prices[i];
      }

      var totalGeralItem = document.createElement("li");
      totalGeralItem.className = "list-group-item";
      totalGeralItem.innerHTML = `Total Geral: ${totalGeral.toFixed(2)}`;
      subtotalList.appendChild(totalGeralItem);

      totalGeralElement.textContent = totalGeral.toFixed(2);
    }

    function clearForm() {
      document.getElementById("itemName").value = "";
      document.getElementById("itemQuantity").value = "";
      document.getElementById("itemPrice").value = "";
    }