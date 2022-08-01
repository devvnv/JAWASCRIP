
    var myItems = [];

    function displayInfo() {

      var htmlItems = myItems.map(function (value, index) {

        return ` <p class=title">${value}</p>
          <div class="btn-container">
            <!-- edit btn -->
            <input type="text" id="edit1" placeholder="e.g." />
            <button type="button" class="edit-btn" onclick="editItem('${value}')">
              <i class="fas fa-edit"></i>
            </button>
            <!-- delete btn -->
            <button type="button" class="delete-btn" onclick="deleteItem('${index}')" >

              <i class="fas fa-trash"></i>
            </button>
          </div>

        </div>`
      });

      document.getElementById("htmlItems").innerHTML = htmlItems.join("");

    }


    function addItemsInArray() {
      var item = document.getElementById("grocery").value;

      myItems.unshift(item);

      displayInfo();

    }

    function deleteItem(index) {
      myItems.splice(index, 1);

      displayInfo();
    }

    function clearAll() {
      myItems.splice(0);
      console.log(typeof myItems);
      displayInfo();
    }

    function editItem() {
        
      var item = document.getElementById("grocery").value;
      var item1 = document.getElementById("edit1").value;
      if (item == item1) {
        return item
      } else {
        return item1
      }

      // myItems.splice(index,item,item1);

      // deleteItem(index-10)

      displayInfo();

    }
