window.onload = function(){
        
		var objChl  = document.getElementById("board").children;
		
        for (i = 0; i <= objChl.length - 1; i++) {
			
          	objChl[i].className="square";
			
        }
		
		
		var score = [];
		var positon =[0,3,6];
		var col = [0,1,2];
		document.addEventListener('click', function (event) {

	if (event.target.matches('.square')) {
		if(!(event.target.matches('.O')) && !(event.target.matches('.X'))){
		
		if(score.length == 0 || score[score.length-1]  == 'o'){
				event.target.innerHTML = 'X';
				var newthing = score.push('x');
				event.target.classList.add("X");
				for(var i =0; i <3 ; i++){
					console.log(positon[i]);
				if(((objChl[positon[i]].innerHTML == "X")&&(objChl[positon[i] + 1].innerHTML == "X") &&(objChl[positon[i ] + 2].innerHTML == "X"))||(objChl[col[i]].innerHTML == "X" && objChl[col[i] + 3].innerHTML =="X" && objChl[col[i] + 6].innerHTML =="X")
					||(objChl[0].innerHTML == "X" && objChl[4].innerHTML == "X" && objChl[8].innerHTML == "X")||(objChl[2].innerHTML == "X" && objChl[4].innerHTML == "X" && objChl[6].innerHTML == "X")){
					
					document.getElementById("status").classList.add("you-won");
					document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
				}
				}
			}
			else {
				event.target.innerHTML = 'O';
				for(var i =0; i <3 ; i++){
					if((objChl[positon[i]].innerHTML == "O" && objChl[positon[i] + 1].innerHTML =="O" && objChl[positon[i] + 2].innerHTML =="O")||(objChl[col[i]].innerHTML == "O" && objChl[col[i] + 3].innerHTML =="O" && objChl[col[i] + 6].innerHTML =="O")
						||(objChl[0].innerHTML == "O" && objChl[4].innerHTML == "O" && objChl[8].innerHTML == "O")||(objChl[2].innerHTML == "O" && objChl[4].innerHTML == "O" && objChl[6].innerHTML == "O")){
						document.getElementById("status").classList.add("you-won");
						document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
					}
				}
				var newthing = score.push('o');
				event.target.classList.add("O");
			}
			console.log(score);
	}}}, false);
	
	document.addEventListener('mouseover', function (event) {

	if (event.target.matches('.square')) {
		
		
				event.target.classList.add("hover");
			
			}
    }, false);
	
	document.addEventListener('mouseout', function (event) {

	if (event.target.matches('.square')) {
		
		
				event.target.classList.remove("hover");
			
			}
    }, true);
	
	document.addEventListener('click', function (event) {
		if (event.target.matches('.btn')) {
			document.getElementById("status").classList.remove("you-won");
			document.getElementById("status").innerHTML ="Move your mouse over a square and click to play an X or an O.";
			for (i = 0; i <= objChl.length - 1; i++) {
			
          	objChl[i].classList.remove("X");
			objChl[i].classList.remove("O");
			objChl[i].innerHTML = "";
			score = [];
			
        }
		}
	},true);
		
 }

