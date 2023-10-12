function multiNum(){
   var player1_score=0;
   var player2_score=0;
    
 const player_name1_input = document.getElementById("player_name1_input");
      const player1_name = document.getElementById("player1_name");
      
  var  num1=document.getElementById("number1").value;
  var  num2=document.getElementById("number2").value;
    if(!isNaN(num1)&& !isNaN(num2)){
   var result=num1*num2;
    if (result===num1 * num2) {
          player1_score++;
          document.getElementById("player1_score").textContent = player1_score;
    }
    if(result===num1*num2){
        player2_score++;
        document.getElementById("player2_score").textContent =player2_score;
        
    }
    }
    documnet.getElementById("number1").value= "";
    document.getElementById("number2").value= "";
    
    
}