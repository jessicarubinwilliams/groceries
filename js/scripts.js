function makeList(groceryArray) {
  groceryArray.sort();
  let capitalizedGroceryArray= [];
  groceryArray.forEach(function(item) {
    capitalizedGroceryArray.push(item.charAt(0).toUpperCase()+item.slice(1));
  });
  capitalizedGroceryArray.forEach(function(item) {
    $("div#output").append("<li>" + item + "</li>");
  })
}

$(document).ready(function() {
  $("#formList").submit(function(event) {
    event.preventDefault();

    let listArray = ["item1", "item2", "item3"];
    let groceryArray = [];

    listArray.forEach(function(item) {
      let groceryItem = $("#" + item).val();    
      groceryArray.push(groceryItem);
    });
    makeList(groceryArray);
    $("#listEntry").hide();
    $("div#output").show();
  });
});