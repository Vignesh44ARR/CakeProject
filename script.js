
var price = 0;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
   Chocolate: 300,
    Strawberry:   100,
   Butterscotch:  200,
   Vennila :  250,
   Redvelvet:  350
};

var state = {
    Chocolate: true,
    Strawberry:   true,
   Butterscotch:  true,
   Vennila :  true,
   Redvelvet:  true 
  };

  function renderAll() {
    renderCholoate();
    renderStrawberry();
    renderButter();
    renderVennila();
    renderRedvlvet();
  }
  var itemlist = document.querySelectorAll("#items-list");

  function renderCholoate() {
    let chol = document.querySelector("#Cho");
    if (state.chol) {
      chol.style.display = "inherit";
      itemlist[0].innerHTML="Choloate";
    } else {
      patty.style.display = "none";
      itemlist[0].innerHTML="";
    }
  }