'use strict';
const seatContainer = document.getElementById('screen-container');
const seats = document.querySelectorAll('.row .seat:not(.sold)');
const movieSelected = document.getElementById('movie');
const count = document.getElementById('count')
const total = document.getElementById('total')
let ticketPrice = movieSelected.value

const updateSelectedCounts = function(){
	const selectedSeats = document.querySelectorAll('.row .seat.selected');
		count.innerText = (selectedSeats.length)
		total.innerText = ` ₹${selectedSeats.length * ticketPrice}`;
}
movieSelected.addEventListener('change', (e) =>{
	ticketPrice = Number(e.target.value);
})

seatContainer.addEventListener('click', function(e){
	if(e.target.classList.contains('seat') && !e.target.classList.contains('sold')){
		e.target.classList.toggle('selected')
		updateSelectedCounts();
	}
})

updateSelectedCounts()