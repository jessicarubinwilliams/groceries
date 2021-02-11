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


});