// your code here
const h3 = document.getElementById("url");
const name = document.getElementById("name");
const year = document.getElementById("year");
const button = document.getElementById("button");

button.addEventListener('click', () => {
   const inputName = name.value;
   const inputYear = year.value;

	// 1st approach
   // if(inputName && !inputYear) h3.textContent += "?name=" + inputName;
   // else if(!inputName && inputYear) h3.textContent += "?year=" + inputYear;
   // else h3.textContent += "?name=" + inputName + "&year="+inputYear;

	//single liner
	inputName && inputYear ? h3.textContent += `?name=${inputName}&year=${inputYear}`: inputName && !inputYear ? h3.textContent += `?name=${inputName}` : !inputName && inputYear ? h3.textContent += `?year=${inputYear}` : h3.textContent;
});

