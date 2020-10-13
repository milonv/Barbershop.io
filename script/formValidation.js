//form validation

//name validation

function nameInput(evt) {
    const value = evt.target.value
    const nameRegex = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/g
    
    if (nameRegex.test(value.trim())) {
        evt.target.classList.add('valid')
        evt.target.classList.remove('invalid')
    } else {
        evt.target.classList.add('invalid')
        evt.target.classList.remove('valid')
    }
  
    if (!value) {
        evt.target.classList.remove('invalid')
    }
}
  
//data validation
  
function dateInput(e){
  
    const str=document.getElementById('date').value;
  
    function TstDate(){
  
      str2=str.split("/");
  
      if(str2.length!=3){return false;}
  
      str2=str2[2] +'-'+ str2[1]+'-'+ str2[0];
  
      if(new Date(str2)=='Invalid Date'){return false;}
  
      return str;
  
    }
  
    const S=TstDate()
   
    if(S) {
      e.target.classList.add('valid');
      e.target.classList.remove('invalid');
  
    } else {
      e.target.classList.add('invalid');
      e.target.classList.remove('valid');
    }
  
}
  
//time validation
  
function timeInput(e){
  
    let timeValue = e.target.value;
    console.log(timeValue);
  
    if( timeValue == "" || timeValue.indexOf(":") < 0) {
      e.target.classList.add('invalid');
      e.target.classList.remove('valid');
      return false;
    } else {
      let sHrs = time.value.split(":")[0];
      let smin = time.value.split(":")[1];
      smin = smin.substring(0, 2);
  
      e.target.classList.add('valid');
      e.target.classList.remove('invalid');
      console.log(sHrs, smin);
  
      if (sHrs == "" || isNaN(sHrs) || parseInt(sHrs) > 23) {
        e.target.classList.add('invalid');
        e.target.classList.remove('valid');
        return false;
      } 
      
      if (smin == "" || isNaN(smin) || parseInt(smin) > 59) {
        e.target.classList.add('invalid');
        e.target.classList.remove('valid');
        return false;
      }
    }
}

//остановить дефолтное поведение submit
const buttonSubmit = document.querySelector('.button-form');
buttonSubmit.onclick = submitForm;

function submitForm(e){
    e.preventDefault();
    //console.log("succes!")
    buttonSubmit.classList.add('loading');
}
