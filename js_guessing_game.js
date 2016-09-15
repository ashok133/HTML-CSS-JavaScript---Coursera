no_guesses = 0;
			finished = false ;
			var target;
			var guess_input ;

function do_game() 
{
			target = (Math.floor(Math.random()*100)) + 1 ;
			console.log("Random number: " + target) ;

			while(!finished)
			{
				guess_input = parseInt(prompt("Please enter a number: "));
				console.log("Entered input: " + guess_input);
				console.log("Type of input: "+ typeof guess_input);

				no_guesses += 1 ;
				finished = check_guess() ;	
			}
}			//prompting the user to enter a number
			
			function check_guess() 
			{

				if (isNaN(guess_input))
				{
					alert("Please enter a number!");
					return false ;
				}

				if (guess_input < 1 || guess_input >100)
				{
					alert("Enter a valid number!");
					return false ;
				}

				if (guess_input < target)
				{
					alert("Number too low!");
					return false ;
				}
				
				if (guess_input > target)
				{
					alert("Number too high!");
					return false ;
				}

				alert("You took " +no_guesses+" guesses! You win!");
				return true ;

			}

			

		