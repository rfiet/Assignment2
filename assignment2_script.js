
            //Step 1
            // Create an application that prompts the user for their name. Then, find the length of characters in the 
            //  person’s name.  Use the alert method to display the result.
            //var yourName = prompt("Please enter your name");
            //alert("The number of characters in your name is " + yourName.length);
            
            //Step 2
            // Create an application that prompts the user for their name. Then, prompt the user for a numeric value 
            // so that they can find the letter in the string based on the number they specify. Use the alert method 
            // to display the result.
            //var yourName = prompt("Please enter your name");
           // var charNum = prompt("Enter a number for a character in your name string");
           // alert("the character at " + charNum + " is " + yourName.charAt(charNum) );
            
            //Step 3
            // Create an application that prompts the user for their first name. Then, prompt the user for their last 
            // name using a second prompt. Use the alert method to display the text "Your name is: " along with the result
            // of the first name and last name concatenated together. You will use a concatenation operator to concatenate
            // the literal string with the result of the String object method’s result.

          //  var first = prompt("Please enter your first name");
            //var last = prompt("Please enter your last name"); 
            //alert("Your name is: " + first + " " + last);
            
            //Step 4
            // Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a 
            // variable. Then, find and display within an alert the index of the word “fox”.
           // var brownFox = "The quick brown fox jumps over the lazy dog";
           // alert("index of fox = " + brownFox.indexOf("fox") );
            
            //Step 5
            // Create an application that stores the text “The quick brown fox jumps over the lazy fox” within a
            // variable. Then, find and display within an alert the index of the last instance of the word “fox”.

            // var brownFox = "The quick brown fox jumps over the lazy fox";
            // alert("last index of fox = " + brownFox.lastIndexOf("fox") );    
            
            //Step 6
            // Create an application that stores the text “The quick brown fox jumped over the lazy dog” within a 
            // variable. Then, prompt the user for their full name. Then, replace the text “the lazy dog” in the 
            //variable with the name that the user enters within the prompt. Use the alert method to display the result.

            // var brownFox = "The quick brown fox jumped over the lazy dog";
             //var yourName = prompt("Please enter your full name");
             //alert("new string = " + brownFox.replace("the lazy dog", yourName) );  
            
            //Step 7
            // Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. 
            // Then, prompt the user for a word. Next, search for the word within the string that the user enters into the
            // prompt. Use the alert method to display the result.
        /*    
             var brownFox = "the quick brown fox jumps over the lazy dog";
             var theWord = prompt("Please enter a word to match in '" + brownFox + "'");
             if(theWord.length <= 0){
                  alert("No input. refresh browser and try again" );
             }
            else{
                var regEx = eval("/" + theWord + "/g");
                var matches = brownFox.match(regEx);
                var numTimes =  matches.length;
                if(matches != null){
                    
                    while (result = regEx.exec(brownFox)) {
                       // obj = JSON.parse(result);
                        var parseRegex = result.toString();
                        var parsed = parseRegex.split(",");
                        console.log(result["index"]);
                    }
                    if(numTimes > 1){
                        alert("your word appears " + matches.length + " times" );
                    }
                    else{
                        alert("your word appears 1 time" );
                    }
                }
                else{             
                    alert("your word does not appear in the string" );
                }
            }
          */  
            
        // Step 8
        // Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable 
        // called old_string. Then, use slice(), substr(), or substring() to extract the words “the lazy dog” from the
        // old_string variable and store that result in a second variable called new_string. Use the alert method to 
        // display the uppercase result of new_string.   

     //  var old_string = "The quick brown fox jumps over the lazy dog";
      //  var new_string = old_string.substr(35).toUpperCase();
      // alert(new_string);

        // Step 9	
        // Create an application that stores the text “            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ” 
        // within a variable. Make sure to add space before and after the text so that appears very similar to the text here.
        // Use the alert method to display the lowercase result of the variable once the space has been trimmed off.
       // var mystr = "            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
       // alert(mystr.trim().toLowerCase());

        
        // Step 10	
        // Create an application that stores the text “"the quick brown fox jumps over the lazy dog” within a 
        // variable. The user clearly forgot to capitalize the first letter in the sentence. Programmatically capitalize 
        // the first letter in the sentence and display the result in an alert.
    
      //  var qbFox = "the quick brown fox jumps over the lazy dog";
      //  alert(qbFox.replace("the quick", "The quick") );

        // Part 2 ----------------------------------------------------------------
            
        // Step 1
       //       Create an application that prompts the user for a number. Regardless of whether they enter 
       //     a negative or positive number, make sure to display the positive version of that number in the 
       //     console window. If I enter -15 in the prompt and -15 is displayed in the console window, you did 
       //     this one wrong.
           
           // var val = prompt("plese enter a number");
           // alert("the absolute value is: " + Math.abs(val))
            
       // Step 2
       //     Create an application that prompts the user for a floating point value (decimal). Store the result 
       //     of that input in a variable and then round it up to the nearest whole number. Display the result 
       //     within a console window.
         
            
          //  var val = prompt("plese enter a floating point number");
          // alert("value rounded up is: " + Math.ceil(val));
            
        // Step 3
        //     Create an application that prompts the user for a floating point value (decimal). Store the result 
        //     of that input in a variable and then round it down to the nearest whole number. Display the result 
        //     within a console window.
         
          //  var val = prompt("plese enter a floating point number");
          //  alert("value rounded up is: " + Math.floor(val));
            
        // Step 4
        //    Create an application that prompts the user for 5 numbers. Ask them to comma delimit each number so 
        //    you get 1,2,3,4,5 for example. Store the result of that input in a variable and then find the largest 
        //    and smallest numbers in that list. Display both of those numbers within a console window.
           
       /*    
            var val1 = Number(prompt("plese enter a number"));
            var val2 = Number(prompt("plese enter a number"));
            var val3 = Number(prompt("plese enter a number"));
            var val4 = Number(prompt("plese enter a number"));
            var val5 = Number(prompt("plese enter a number"));
            
            var highest = Math.max(val1,val2,val3,val4,val5) ;
            var lowest = Math.min(val1,val2,val3,val4,val5);
            console.log("The highest number in the list is " + highest + "\nthe lowest numer is " + lowest );
         */
            
       // Step 5 
      //      Create an application that prompts the user for a number. Now find the square root of that number 
       //    and display the result within a console window. 
         
          //  var val = prompt("plese enter a number");
          //  console.log(Math.sqrt(val));
            
         // Step 6
         //   Create an application that gets the current date. Display that result within the console window.
         
          //  var dateVal = new Date();
          //  console.log("Todays date is " + dateVal.toDateString());
            
         // Step 7
         //    Create an application that gets the number of days in a month. Display that result within the 
         //    console window.
        
        /*    
            var myMonth = prompt("Please enter a month (full name)");
            var days;
            switch(myMonth.toLowerCase()){
                    
                case "february": days = 28;
                                break;
                case "april": case "june": case "september": case "november": days = 30;
                                break;
                case "january": case "march": case "may": case "july": case "august": case "october": case "december" : days = 31;
                                break;
                default:       days = -1;
            }
            if(days != -1){
                alert("There are days " + days + " in " + myMonth)
            }
            else{
                alert("There was an error in your entry, please refresh page and try again");  
            }
        */  
        // Step 8
        // 	Create an application that gets the month name from a particular date. Display that result within 
        //    the console window.
      
        
        //    var dateOb = new Date(),
        //    monthStr = dateOb.toLocaleString("en-us", { month: "long" });
        //    console.log(" month = " + monthStr);
       
        // Step 9
        //	Create an application that tests whether a date is a weekend. Display that result within the console window.
       
   
    //      var objDate = new Date();
    //      var day = objDate.getDay();
    //      if(day == (0 || 6)){
    //          console.log("the day is on the weekend: " + day);
    //      }
    //      else{
     //         console.log("the day is NOT on the weekend: " + day);
    //      }
   
            
  //  Step 10
   //     Create an application that gets yesterday’s day of the week. For instance, if today is Tuesday, 
   //     the console window should display Monday. 
   
    
    //      var objDate = new Date();
    //      var curDate =  objDate.getDate() - 1; // get previous day
    //      objDate.setDate(curDate);  //onvert date
    //      dayStr =  objDate.toLocaleString("en-us", { weekday: "long" });  // convert to day string
    //      console.log(" day = " + dayStr);  
  
            
   // Step 11
   //     Create an application that gets the current day of the week. The twist here is that I want 
   //     only the first letter of the day. If today is Tuesday, the letter T should be displayed in 
   //     the console window.
    
  
    //      var objDate = new Date();
    //      dayStr =  objDate.toLocaleString("en-us", { weekday: "long" });  // convert to day string
    //      console.log(" day = " + dayStr.charAt(0));     
   
    
   // Part 3
   //    Step 12
   //    Create an application that accepts two integers within two separate prompts. Then, display 
   //    only the larger of the two within the console window.   
   
 
  //       var int1 = prompt("Please enter an integer ");   
  //       var int2 = prompt("Please enter another integer ");  
  //       if(int1 > int2){
  //           console.log(int1 + " is larger" ); 
  //       }
  //       else if(int2 > int1){
  //            console.log(int2 + " is larger" ); 
  //       }
  //       else{
  //           console.log(int1 + " = " + int2 );
  //       }
            
  
            
    /* Step 13
       Create an application that records the marks for the following five students. Then, 
       these marks are used to determine the corresponding grade. All 5 students and their 
       grades should be displayed within the console window. 
       
       Student Name	Marks
       Ursula	      80
       Paul	          77    
       Henry	      88
       Tabitha	      95
       Lucy	          68
       
       The grades are computed as follows:

        Range	Grade
        <60	    F
        <70	    D
        <80	    C
        <90	    B
        <100    A

    */
   /*     
        var students = [["Ursula",80],["Paul",77],["Henry",88],["Tabitha",95],["Lucy",68]];
        
        for(i = 0; i < students.length; i++){
            
            if(students[i][1] < 60){
                console.log(students[i][0] + " - F");
            }
            else if(students[i][1] < 70){
                console.log(students[i][0] + " - D");
            }
            else if(students[i][1] < 80){
                console.log(students[i][0] + " - C");
            }
            else if(students[i][1] < 90){
                console.log(students[i][0] + " - B");
            }
            else if(students[i][1] <= 100){
                console.log(students[i][0] + " - A");
            } 
        }
 */
   // Step 14
   //     Create a JavaScript for loop that iterates from 1 to 15. Each iteration should check if 
    //    the current number is odd or even, and display a message within the console window.
   
       
   //     for(i = 1; i <= 15; i++){

   //         if(i%2 == 0){
   //             console.log(i + " is even");
    //        }
   //         else{
   //             console.log(i + " is odd");
   //         }
   //     }
   
   // Step 15
   //     Create an application which iterates numbers from 1 to 100. For multiples of 3, print "Fizz" 
   //     instead of the number and for multiples of 5, print "Buzz" instead of the number. For numbers 
   //     which are multiples of both 3 and 5 print "FizzBuzz". This is a VERY common JavaScript 
   //     interview question and you should know how to do this. You will need to take advantage of 
   //     the modulus operator to accomplish this task.   
    
     /*   
        for(i = 1; i <= 100; i++){
            
            if(i % 3 == 0 && i % 5 == 0){
                console.log("FizzBuzz");   
            }
            else if(i % 3 == 0){
                console.log("Fizz");
            }
            else if(i % 5 == 0){
                console.log("Buzz");
            }
            else{
                console.log(i);
            }
        }
    */
   // Part 4 The “Hitchhiker’s Guide to the Galaxy” Game 
   //    Step 1
   //    Begin your application by asking the user if they’re ready to play your game. If they are, 
   //    display the message “Awesome, our hero is waiting!”  If they’re not, display the message 
   //    “Too bad, we’re going to play anyway because our hero desperately needs your help!” You will 
   //    need to use the confirm box for this one and check for the Boolean result of clicking OK or 
   //    Cancel.     
  

 //   var ready = prompt("Are you ready to play \"Hitchhiker’s Guide to the Galaxy\"? (yes or no)");
 //       console.log(ready);
 //       var readyToPlay = false;
    
 //       if(ready.toLowerCase() == "yes"){
 //           alert("Awesome, our hero is waiting!");
 //           readyToPlay = true;
 //       }
 //       else{
 //         readyToPlay =  confirm( "Too bad, we’re going to play anyway because our hero desperately needs your help!");      
//        }
       
   // Step 2
   //     Now, alert the user to the following scenario: "You are in a dark, dingy, and humid cave searching for
  //      the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You 
  //      see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of 
  //      running water to your left. Your back is against the wall…"  
 
     //   if(readyToPlay){
            
    //        alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera.\nYou are disoriented, lost, hungry and extremely thirsty.\n You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left.\n Your back is against the wall…" );
        
  // Step 3
  //  	Then prompt the user with the following message: "Which direction would you like to head (please enter 
  //      forward, left, or right)."
  
      //    var direction = prompt("Which direction would you like to head (please enter forward, left, or right)." );
            
 //   Step 4
 //        Use a switch statement to check for the literal string values forward, left, and right. If they choose 
 //        forward, display the message "You walk about 100 yards and safely make your way out of the cave." 
 //        If they choose left, display the message "Your thirst has gotten the better of you. You trip on a rock, 
 //        hit your head, and fall into a pool of water and drown." If they choose right, display the message 
 //        "You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and 
 //        more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps 
 //        you in the room forever." If the user chooses anything other than those three values, display the message 
 //        "The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot 
 //        excoriation for lifeless lowlifes for not choosing the correct option….loser." 
  

 //           switch(direction){
  //              case "forward": alert("You walk about 100 yards and safely make your way out of the cave.");
 //                               break;
 //               case "left":    alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.");
 //                               break;
  //              case "right":   alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.");
   //                             break;
  //              default:        alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser." );
  //          }
          
 // Step 5
 //       Finally, ask the user to rate your game on a scale of 1 to 10. If the feedback score is between 6 and 10, 
 //       display the message "Thank you, we will continue to make improvements to the game!" If the feedback score 
 //       is between 1 and 5, display the message “Whatever, you weren’t very good at this game anyway!"
   
    //     var rating = prompt("Pease rate this game on a scale of 1 - 10");  
			  
	//			  if(rating >= 6 && rating <= 10){
	//				  alert("Thank you, we will continue to make improvements to the game!");
	//			  }
	//			  else if(rating >= 1 && rating <= 5){
	//				  alert("Whatever, you weren’t very good at this game anyway!");
	//			  }  
        
		
	// Step 6
	//		Before you evaluate the number that the user has entered, check to see if the user entered a valid numeric value between 1 and 10. 
	//		If they don’t, default the value to 10 and proceed with the evaluation.
		
	/*
          var rating = prompt("Pease rate this game on a scale of 1 - 10");  
		  var intRegex = /(1|2|3|4|5|6|7|8|9|10)/;
		  
		  if(!intRegex.test(rating)){
			rating = 10;
		  }

		  if(rating < 1 || rating > 10){
			rating = 10;
		  }
			
			if(rating >= 6 && rating <= 10){
				 alert("Thank you, we will continue to make improvements to the game!");
			}
			else if(rating >= 1 && rating <= 5){
				alert("Whatever, you weren’t very good at this game anyway!");
			}  
        }
	*/

	// Part 5 Coin flip
    //   Step 1
    //   Begin your application by creating a variable called coinFlip and set it equal to a random number. You will have 
    //   to use a Math method to get this number.    
   
  //    var coinFlip = Math.random();
            
   // Step 2
    //	Prompt the user to select “Heads or Tails” and set the result to a new variable called choice.
   
      
 //     var choice = prompt("Please enter heads or tails");
    
     // Step 3
     //   Use a conditional to check the result of the coin flip. If it’s less than a certain number, it will be heads. 
     //   If it’s greater than a certain number, it will be tails.  
 

//       var flipResult;
//       if(coinFlip < 0.5){
 //          flipResult = "heads"; 
//       }
 //      else{
 //           flipResult = "tails"; 
//       }

             
   
 //      Step 4
 //      If the result is heads and the user selects heads, display the following message within an alert:  The flip was 
 //      heads and you chose heads...you win!

      
  //     if(flipResult == "heads" && choice == "heads"){
  //         alert("The flip was heads and you chose heads...you win!");
  //     }

    
 //     Step 5
 //  	    If the result is heads and the user selects tails, display the following message within an alert: The flip was
 //       heads but you chose tails...you lose!
   
            
  //     if(flipResult == "heads" && choice == "tails"){
  //        alert(" The flip was heads but you chose tails...you lose!");
  //     }

    
//    Step 6
//        If the result is tails and the user selects heads, display the following message within an alert: 
//        The flip was tails but you chose heads...you lose!
    
    
 //    if(flipResult == "tails" && choice == "heads"){
 //        alert("The flip was tails but you chose heads...you lose!");
  //   }
     
  
//    Step 7
//   If the result is tails and the user selects tails, display the following message within an alert: 
//   The flip was tails and you chose tails...you win!

    
 //   if(flipResult == "tails" && choice == "tails"){
 //      alert("The flip was tails and you chose tails...you win!"); 
 //   }
            
 
//    Step 8
//   Use two Math methods to get a solid whole number on the coin flip. Modify the evaluation of the expression in 
//    your conditional so that it now checks for a Boolean result.   
 

//    var heads = false, tails = false;       
//    var coinFlip = Math.floor((Math.random() * 10)); 
//    if(coinFlip <= 5){
//        heads = true;
//    }
//    else{
//        tails = true;
//    }
  
    
  /* Part 6
     Step 1
     Begin your application by declaring a variable called coinFlip. Do not assign the variable a number just yet. 
  */
  //   var coinFlip;

  // Part 6
  //   Step 2
//	 Create a for loop that loops 10 times.  
 
    
//    for(i = 0; i < 10; i++){
        
//    }

 // Part 6
  //   Step 3
 //    Within the for loop assign a randomly generated number to coinFlip. You will have to use a Math method to get 
 //    this number. Also, make sure to round that number off so that you get either a 0 or 1 as the result.
  

 //   for(i = 0; i < 10; i++){
 //      coinFlip = Math.round((Math.random()));  
 //   }

  // Part 6
  //   Step 4
  //   Use a conditional to check the result of the coin flip. If it’s 0, write out “Heads” into the console window. 
 //    If it’s 1, write out “Tails” into the console window. 


 //   for(i = 0; i < 10; i++){
 //      coinFlip = Math.round((Math.random()));
 //       if(coinFlip == 0){
 //           console.log("Heads");
 //       }
  //      else if(coinFlip == 1){
  //          console.log("Tails");
 //       }
//    } 

            
  //  Part 7
  //  Step 1
  //  Begin your application by declaring a variable called coinFlip. Do not assign the variable a number just yet.
 
            
 //  var coinFlip;
            
 //  Part 7
  //  Step 2
 //   Create a do while loop.
 
   
//  var i = 0;
//  do {

//    i++;
//  }
//  while (i < 2);

  //  Part 7
 //   Step 3
 //  Within the do while loop assign a randomly generated number to coinFlip. You will have to use a Math method to 
//   get this number. Also, make sure to round that number off so that you get either a 0 or 1 as the result.

           
//  i = 0;
//  do {

//    i++;
//    coinFlip = Math.round((Math.random()));
//  }
//  while (i < 2);   
  
  //  Part 7
 //   Step 4
 //   Use a conditional to check the result of the coin flip. If it’s 0, write out “Heads” into the console window. 
 //   If it’s 1, write out “Tails” into the console window. 
//
   
//  if(coinFlip == 0){
//    console.log("Heads");   
//  }
//  else if(coinFlip == 1){
//    console.log("Tails");   
//  }

 //   Part 7
//    Step 5
//    Set the condition of the do while loop to end once the coinFlip becomes “Tails”.
 

//  var coinFlip;
//  do {

//    coinFlip = Math.round((Math.random()));
//      if(coinFlip == 0){
//        console.log("Heads");   
//      }
//      else if(coinFlip == 1){
//        console.log("Tails");   
//      }
//  }
//  while (coinFlip != 1);
    
            
//
//
// Part 8
//    Looping a Triangle 
//   Write a loop that displays the following triangle within a console window:   


//var hashStr = "#";
//for(i = 0; i < 7; i++){
  
 // console.log(hashStr); 
 // hashStr += "#";
//}


 //
//
// Part 9 Odd or Even? 
//   Write a loop that will iterate from 0 to 15. For each iteration it will check if the current number is odd or even, 
//   and display a message in the console window.   


//var i;
//for(i = 0; i < 15; i++){
 
//    if(i%2 == 0){
//        console.log("even");
//    }
//    else{
 //       console.log("odd");
 //   }
//}
