$(function(){
  var currencies = [
    { value: '1 a.m', data: '1am' },
    { value: '2 a.m', data: '2am' },
    { value: '3 a.m', data: '3am' },
    { value: '4 a.m', data: '4am' },
    { value: '5 a.m', data: '5am' },
    { value: '6 a.m', data: '6am' },
    { value: '7 a.m', data: '7am' },
    { value: '8 a.m', data: '8am' },
	{ value: '9 a.m', data: '9am' },
    { value: '10 a.m', data: '10am' },
    { value: '11 a.m', data: '11am' },
    { value: '12 a.m', data: '12am' },
	{ value: '1 p.m', data: '1pm' },
    { value: '2 p.m', data: '2pm' },
    { value: '3 p.m', data: '3pm' },
    { value: '4 p.m', data: '4pm' },
    { value: '5 p.m', data: '5pm' },
    { value: '6 p.m', data: '6pm' },
    { value: '7 p.m', data: '7pm' },
    { value: '8 p.m', data: '8pm' },
	{ value: '9 p.m', data: '9pm' },
    { value: '10 p.m', data: '10pm' },
    { value: '11 p.m', data: '11pm' },
    { value: '12 p.m', data: '12pm' }
 
    
  ];
  
  // setup autocomplete function pulling from currencies[] array
  $('#autocomplete').autocomplete({
    lookup: currencies,
    onSelect: function (suggestion) {
     console.log(suggestion.value);
    }
  });
  

});