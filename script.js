const storage = localStorage;
window.addEventListener("load", function() {
        if (storage.getItem('result')!=null){
        let array = storage.getItem('result').split(",")
        for (let n = 0;n<array.length;n++){
            createTable(array[n]);
        }}
}, false);



document.querySelector("#check").onclick = function(e){
    e.preventDefault()
    if (validateY() && validateX() && validateZ()){
        let y = document.querySelector('.y').value;
        let x= document.querySelector('.x').value;
        let z = document.querySelector('.z').value;
        let request = new XMLHttpRequest();
        request.open('GET','server.php?'+'x='+x+'&z='+z+'&y='+y,true);
        request.onreadystatechange = function (){
            if (request.readyState===4&& request.status ===200){
                save(this.responseText);
                createTable(this.responseText);


            }
        }
        request.send();

    }
}






function validateX(){
    let x= document.querySelector('.x').value;
    if (checkValue(x)){
        notify("валидация успешна")
        return true;
    }else {
        return false;
    }
}


function validateY(){
    let y = document.querySelector('.y').value;
    if (!checkValue(y)){
        notify("Y не число")
        return false;
    }else{
        if (y<5 && y>-3){
            notify("валидация успешна")
            return true;
        }
        else{
            notify("Y не попадает в ОДЗ")
            return false;
        }
    }
}


function validateZ(){
    let z = document.querySelector('.z').value;
    if (!checkValue(z)){
        notify("R не число")
        return false;
    }else {
        if (z < 4 && z > 1) {
            notify("валидация успешна")
            return true;
        } else {
            notify("R не попадает в ОДЗ")
            return false;
        }
    }
}


function checkValue(number){
    if (number===undefined){
        notify('элемент не введён')
        return false;
    }else {
    return !isNaN(parseFloat(number))&& isFinite(number);}
}


function notify(message){
    let note = document.querySelector('#notification');
    note.textContent=message;
}

function createTable(str){
        let line = str.split('|');
        let x =line[0];
        let y =line[1];
        let z =line[2];
        let result=line[3];
        let date = line[4];
        let time = line[5];
        let add = '<tr><td>'+x+'</td><td>'+y+'</td><td>'+z+'</td><td>'+result+'</td><td>'+date+'</td><td>'+time+'</td></tr>'
        $('#outTable').append(add);

}


function save(str){
    let data = storage.getItem("result");
    data = data ? Array(data) : [];
    data.push(str);
    storage.setItem("result",data);
}










