document.addEventListener("DOMContentLoaded", function () {

//alert('я работаю');
var elem=document.getElementById('uname');
//console.log(elem);
var ul=document.getElementById("list");
//console.log(ul);
elem.addEventListener("keyup", function(){
//console.log("привет", elem.value);
if (elem.value.length>3){
	//console.log("true");


  // 1. Создаём новый объект XMLHttpRequest
var xhr = new XMLHttpRequest();

// 2. Конфигурируем его: GET-запрос на URL 'phones.json'
xhr.open('GET', 'http://localhost/dashboard/slisenko/result.json', false);

// 3. Отсылаем запрос
xhr.send();

// 4. Если код ответа сервера не 200, то это ошибка
if (xhr.status != 200) {
  // обработать ошибку
  alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
} else {
  // вывести результат
  //alert( xhr.responseText); // responseText -- текст ответа.

  var answer = JSON.parse(xhr.responseText);
  //console.log(answer);
  	list.innerHTML="";
  for (var i=0; i < answer.length; i++){
  	//console.log(answer[i]);

var newLi = document.createElement('li');
  newLi.innerHTML=answer[i];
  list.appendChild(newLi);
  }
}}else{
	list.innerHTML="";
}
});

});