'use strict';
console.log("działa!")
   document.addEventListener('DOMContentLoaded', function() {
      // tutaj będziemy umieszczać kod ze wszystkich zadań
       //wpisując coś między te nawiasy mam 100% pewności że cały HTML się wczytał
        var menuList = document.querySelectorAll(".nav-list > li"); //wyszukaj mi tylko bezpośrednie dzieci
       console.log(menuList);
       for(var i = 0 ; i < menuList.length; i++){
           menuList[i].addEventListener("mouseover", function(){
               console.log("working");
               //this to taka zmienna która jest tym na co najchał użytkownik
               var dropdown = this.querySelector(".dropdown")
               console.log(dropdown);
               if( dropdown != null ){
               dropdown.style.display = "block";
                }
            });
        }
        for(var i = 0 ; i < menuList.length; i++){
           menuList[i].addEventListener("mouseout", function(){
               console.log("working");
               //this to taka zmienna która jest tym na co najchał użytkownik
               var dropdown = this.querySelector(".dropdown")
               console.log(dropdown);
               if( dropdown != null ){
               dropdown.style.display = "none";
                }
            });
        }
//Zadanie 2
        var buttons = document.querySelectorAll('.read-more');
        console.log(buttons);
        console.log(buttons[0].previousElementSibling); // Powinnaś zobaczyć w konsoli paragraf o klasie `more`
    function showHide() {
      var textArea = this.previousElementSibling;
    
      if (textArea.style.display === 'none' || textArea.style.display === '') {
        textArea.style.display = 'block';
        this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
      } else {
        textArea.style.display = 'none';
        this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
      }
    }
     for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', showHide);
     }
});