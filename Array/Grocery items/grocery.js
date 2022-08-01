      var employee = JSON.parse(localStorage.getItem("employess")) || [];

        displayEmployee();


        function displayEmployee() {
            var employee = JSON.parse(localStorage.getItem("employess")) || [];

            document.getElementById("display").innerHTML

                = employee.map((value, index) => {

                    return (`<form class="grocery-form">
                    <p class="alert"></p>
                    <h3>grocery items</h3>
                    <div class="form-control">
                      <input type="text" id="grocery" placeholder="e.g. eggs" />
                      <input type="hidden" name="editindex" id="editindex" value="0" />
                      <button type="button" class="submit-btn" onclick="saveEmployee()">submit</button>
                    </div>
                  </form>
                  <div class="grocery-container">
                    <div class="grocery-list" id="htmlItems" ${value.htmlItems}>
                      <p class="title">test</p>
                      <div class="btn-container">
                        <!-- edit btn -->
                        <input type="text" id="edit1" placeholder="e.g." />
                        <button type="button" class="edit-btn" onclick="editValue(${index})">
                          <i class="fas fa-edit" ></i>
                        </button>
                        <!-- delete btn -->
                        <button type="button" class="delete-btn" onclick="deletevalue(${index})" >
                          <i class="fas fa-trash"></i>
                        </button>
                      </div>
              
                    </div>
                    <button class="clear-btn" onclick="clearAll();">clear items</button>
                  </div>`)

                }).join(" ");
        }

        function editValue(value) {

            var employee = JSON.parse(localStorage.getItem("employess"));
            var myobj = employee[value];
            document.getElementById("htmlItems").value = myobj.htmlItems;

            document.getElementById("editindex").value = value;
        }

        function deletevalue(index) {
            var employee = JSON.parse(localStorage.getItem("employess")) || [];
            employee.splice(index, 1);
            localStorage.setItem("employess", JSON.stringify(employee));

            displayEmployee();

        }

        function saveEmployee() {

            var myhiddenindex = document.getElementById("editindex").value;

            if (myhiddenindex == "0") {


                var obj = {

                    htmlItems: document.getElementById("htmlItems").value,
                    

                };

                console.log(obj);

                employee.push(obj);

                localStorage.setItem("employess", JSON.stringify(employee));


            }

            else {
                var employee1 = JSON.parse(localStorage.getItem("employess")) || [];

                employee1[myhiddenindex].htmlItems = document.getElementById("htmlItems").value;

                localStorage.setItem("employess", JSON.stringify(employee1));

                document.getElementById("editindex").value = 0;
            }
            displayEmployee();

        }
