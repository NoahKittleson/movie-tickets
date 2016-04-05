//BUSINESS LOGIC

function Ticket(movie, time, age){
  this.movie = movie;
  this.time = time;
  this.age = age;
}

Ticket.prototype.calculatePrice = function() {
  var price = 0;

  switch (this.movie) {
    case "Wayne's World":
      price = 5;
      break;

    case "Batman Vs. Superman":
      price = 10;
      break;

    case "Easy Rider":
      price = 8;
      break;

    case "The Manchurian Candidate":
      price = 6;
      break;
  }
  if (this.time > 2) {
    price *= 1.25;
  }
  switch (this.age) {
    case "child":
      price *= 0;
      break;
    case "adult":
      break;
    case "senior":
      price *= .5;
      break;
    case "dead":
      price *= 0;
      break;
  }
  return price;
}

Ticket.prototype.displayTicket = (function() {
  return  "Your Movie: " + this.movie + "<br>" + "Showtime: " + this.time + "<br>" + "Age: " + this.age;
});

// USER INTERFACE
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var inputtedMovie = $("#movie").val();
    var inputtedTime = parseInt($("#time").val());
    var inputtedAge = $("#age").val();

    var newTicket = new Ticket (inputtedMovie, inputtedTime, inputtedAge);
    var ticketPrice = newTicket.calculatePrice();

    $("#results").append("<h3>" + newTicket.displayTicket() + "<br>" +  "Price: " + ticketPrice + "</h3>");


  })
})
