// IIFE -- Immediately Invoked Function Expression
(function() {
  function Start() {
    console.log(
      `%c App Started...`,
      "font-size: 20px; color: blue; font-weight: bold"
    );
    //defines a single stand-alone element (can be a class, tag etc)
    $(".btn-danger").click(function(event) {
      //confirm interrupts users flow
      if (!confirm("Are you sure? ")) {
        //prevent default behavior
        event.preventDefault();
        //Refresh the contact-list
        window.location.assign("/contact-list");
      }
    });

    //returns all elements that match this btn
    //document.querySelectorAll(".btn-danger").addEventListener("click", ()
  }

  window.addEventListener("load", Start);
})();
