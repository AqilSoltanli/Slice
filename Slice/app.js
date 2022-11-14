function showName(){
    var input = document.getElementById('inp');
    var value = input.value;

    
    var result = value.slice(1,-2)

    if (result==1) {
        document.getElementById('demo').innerHTML = value
        document.getElementById('demo').style.color = 'yellow'
    }
    else if(result==2){
        document.getElementById('demo').innerHTML = value
        document.getElementById('demo').style.color = 'green'
    }
    else if(result==3){
        document.getElementById('demo').innerHTML = value
        document.getElementById('demo').style.color = 'red'
    }

    
}
   



