function checkpass(){
        password = 'Incorrect123';
        result = document.getElementById('result');
    do
    
    {
        let secret = document.getElementById('input').value;
    
         if(secret === password){
         result.innerHTML = (`Password is Correct`);
         }
    
         else{
            result.innerHTML = (`Password is incorrect<br>Try again`);
    
         }
    
    }
    
     while(secret!== 'Incorrect123') ;
    
    }
    
    function reset(){
        let secret = document.getElementById('input').value = " ";
        let result = document.getElementById('result').innerHTML = " ";
    }