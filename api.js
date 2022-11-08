let id;
let somaTotal = 0;

addEventListener("load",function(){
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1",
    "method": "GET"
  }

  $.ajax(settings).done(function (response) {
      console.log(response);
     id = response.deck_id;
     console.log(id)
    })

})

function NovaCarta() {
    $("#my_image").empty();
    $("#somaTotal").empty();
    $("#cartasrestantes").empty();   

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://www.deckofcardsapi.com/api/deck/"+id+"/draw/?count=1",
        "method": "GET"
      }
    $.ajax(settings).done(function (response) {
        console.log(response);
        $("#my_image").attr("src", response.cards[0].image);

        $("#my_array").append('<img  class="img-min" src="'+response.cards[0].image+'">');
        if(response.cards[0].value == "JACK")
        {
        somaTotal = somaTotal + 11;
        }
        if(response.cards[0].value == "ACE")
        {
        somaTotal = somaTotal + 1;
        }
        if(response.cards[0].value == "QUEEN")
        {
        somaTotal = somaTotal + 12;
        }
        if(response.cards[0].value == "KING")
        {
        somaTotal = somaTotal + 13;
        }
        if(response.cards[0].value != "KING" & response.cards[0].value != "JACK" & response.cards[0].value != "QUEEN" & response.cards[0].value != "ACE")
        {
        somaTotal = somaTotal + parseInt(response.cards[0].value);
        }
        

        $('#somaTotal').append('Soma Total: '+somaTotal);
        $('#cartasrestantes').append('Cartas Restantes: '+response.remaining);

        if(somaTotal==21)
        {
            window.alert("Parabéns, você venceu o game")
        }
        if(somaTotal>21)
        {
            window.alert("Que pena, você perdeu o game")
        }
    })

    


}