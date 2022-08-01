function addCode() {
  document.getElementById("add_to_me").innerHTML +=
    `<div class="add" id="add_to_me">
    <button type="button" class="btn btn-secondary btn-sm" style="margin-left: 975px;"  onclick="removeCode()">remove Experience</button>
  <div id="nested" class="nested">
  <div class="form-group">
    <label for="Experience">Experience</label>
    <input type="text" class="form-control" id="i" >
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">Uni/school</label>
      <input type="text" class="form-control" id="inputCity">
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">Degree</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>BE</option>
        <option>BCA</option>
        <option>Btec</option>
        <option>Bcom</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">total Experience</label>
      <input type="text" class="form-control" id="inputZip">
    </div>
  </div>
</div>
  </div>`;
}


function removeCode(event) {
 let node = event.target
 let abc = document.getElementById("nested")
node.parentNode.parentNode.removeChild(node.parentNode)
 console.log('abc');

}
