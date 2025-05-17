function Body() {
	
	function Task_1_4(){
		//Задание 1-2
		 let var1=prompt("Пожалуйста, введите значение переменной 1:", "0")
		 let var2=prompt("Пожалуйста, введите значение переменной 1:", "999999999999999999999")
		 let var3=prompt("Пожалуйста, введите значение переменной 1:", "true")
		 let var4=prompt("Пожалуйста, введите значение переменной 1:", "word")
		 //Задание 3
		 document.getElementById("text1").value=var1
		 document.getElementById("text2").value=var2
		 document.getElementById("text3").value=var3
		 document.getElementById("text4").value=var4
		 //Задание 4
		 var1=Number(var1)
		 var2=BigInt(var2)
		 var3=Boolean(var3)
		 var4=String(var4)
		 alert(
		 `Значение переменной var1= ${var1}, тип переменной var1: ${typeof(var1)}\n`+
		 `Значение переменной var1= ${var2}, тип переменной var2: ${typeof(var2)}\n`+
		 `Значение переменной var1= ${var3}, тип переменной var3: ${typeof(var3)}\n`+
		 `Значение переменной var1= ${var4}, тип переменной var4: ${typeof(var4)}`
		 )
		}
		
		
		function Task_5(){
			let A=prompt("Пожалуйста, введите значение коэффицента A:", "1")
			let B=prompt("Пожалуйста, введите значение коэффицента B:", "1")
			let C=prompt("Пожалуйста, введите значение коэффицента C:", "1")
			A=Number(A)
			B=Number(B)
			C=Number(C)
			
			if ((typeof(A) === "Number")&&(A=NaN)) {
				document.getElementById("textA").value=A
			} else {
				alert ("Коэффицент А не является числом")
				document.getElementById("textA").value=A
			}
			
			if ((typeof(B) === "Number")&&(B=NaN)) {
				document.getElementById("textB").value=B
			} else {
				alert ("Коэффицент B не является числом")
				document.getElementById("textB").value=B
			}
			
			if ((typeof(C) === "Number")&&(C=NaN)) {
				document.getElementById("textC").value=C
			} else {
				alert ("Коэффицент C не является числом")
				document.getElementById("textC").value=C
			}
			
			if ((!isNaN(A))&&(!isNaN(B))&&(!isNaN(C))) {
				let d=Math.pow(B,2)-4*A*C
			alert(`d=${d}`)
				if (d<0) {
					alert("Уравнение не имеет действительных корней")
				} else {
					alert("Корни есть")
					let x1=(-B+Math.sqrt(d))/(2*A)
					let x2=(-B-Math.sqrt(d))/(2*A)
					alert(
					`x1= ${x1}\n`+
					`x2= ${x2}`)
				}
				
			} else {
				alert ("Попробуйте снова ввести коэффиценты")
			}
			
			
		}
			
		
		
		function Task_6() {
		   document.getElementById("textFor").value=""
		   document.getElementById("textWhile").value=""
		   document.getElementById("textDoWhile").value=""
		   let loop = 
			  document.getElementsByClassName("loop")[0].checked ?
			  document.getElementsByClassName("loop")[0].value :
			  document.getElementsByClassName("loop")[1].checked ?
			  document.getElementsByClassName("loop")[1].value :
			  document.getElementsByClassName("loop")[2].value
		   
		   alert(loop)
		
		   let count=0
		 
		   switch (loop) {
			   case "for":
			   for (;count<10;count++) {
				   document.getElementById("textFor").value=document.getElementById("textFor").value+" "+count
			   }
			break
			  case "while":
			  while (count<10) {
				  document.getElementById("textWhile").value=document.getElementById("textWhile").value+" "+count
				  count++
			  }
			  break
			 
			  case "dowhile":
			  do {
				  document.getElementById("textDoWhile").value=document.getElementById("textDoWhile").value+" "+count
				  count++
			  } while (count<10)
				  break
		   }
		}
		
		function Task_7(){
				switch (document.getElementById("weather").value) {
					case document.getElementById("weather")[0].value:
					alert("Вам следует взять головной убор!")
					break
					
					case document.getElementById("weather")[1].value:
					alert("Вам следует взять с собой зонт!")
					break
					
					case document.getElementById("weather")[2].value:
					alert("Вам следует взять с собой варежки!")
					break
					
					case document.getElementById("weather")[3].value:
					alert("Вам следует взять кофе!")
					break
				}
				
		}
  return (
    <div>
      <p>
        Привет, Мир!
        </p>
	
		<form id="container1_4">
			<input
			type="button"
			value="Задание 1-4"
			class="elements"
			onClick={Task_1_4}
			/>
			
			<label for="text1">Переменная var1</label>
			<input
			type="text"
			id="text1"
			class="elements"
		
			/>
			
			<label for="text2">Переменная var2</label>
			<input
			type="text"
			id="text2"
			class="elements"
			/>
			
			<label for="text3">Переменная var3</label>
			<input
			type="text"
			id="text3"
			class="elements"
			/>
			
			<label for="text4">Переменная var4</label>
			<input
			type="text"
			id="text4"
			class="elements"
			/>
			
			
		</form>
		

		<form id="container5">
			<input
			type="button"
			value="Задание 5"
			class="elements"
			onClick={Task_5}
			/>
			
			<label for="textA">A=</label>
			<input
			type="text"
			id="textA"
			class="elements"
			/>	
			
			<label for="textB">B=</label>
			<input
			type="text"
			id="textB"
			class="elements"
			/>
			
			<label for="textC">C=</label>
			<input
			type="text"
			id="textC"
			class="elements"
			/>
			
			
			
		</form>
		
		<form id="container6">
			<input
			type="button"
			value="Задание 6"
			class="elements"
			onClick={Task_6}
			/>
			
			<label for="radioFor">
			<input
				type="radio"
				id="radioFor"
				name="loop"
				value="for"
				class="loop"
				checked
			/>
			Вывод с помощью цикла FOR (ДЛЯ)</label>
			
			<label for="radioWhile">
			<input
				type="radio"
				id="radioWhile"
				name="loop"
				value="while"
				class="loop"
				
			/>
			Вывод с помощью цикла WHILE (ПОКА)</label>
			
			<label for="radioDoWhile">
			<input
				type="radio"
				id="radioDoWhile"
				name="loop"
				value="dowhile"
				class="loop"
				
			/>
			Вывод с помощью цикла DO-WHILE (ДО)</label>
			
			<label for="textfor">Вывод с помощью цикла FOR</label>
			<input
			type="text"
			id="textFor"
			class="elements"
			/>
			
			<label for="textWhile">Вывод с помощью цикла WHILE</label>
			<input
			type="text"
			id="textWhile"
			class="elements"
			/>
			
			<label for="textDoWhile">Вывод с помощью цикла DO-WHILE</label>
			<input
			type="text"
			id="textDoWhile"
			class="elements"
			/>
			
		</form>
		
		<form id="container7">
			<input
			type="button"
			value="Задание 7"
			class="elements"
			onClick={Task_7}
			/>
			
			<select id="weather">
			<option>Солнечная</option>
			<option>Дождливая</option>
			<option>Снежная</option>
			<option>Пасмурная</option>
			</select>
			
			
		</form>
	</div>
  );
}
export default Body;
