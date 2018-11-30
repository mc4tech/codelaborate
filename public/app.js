let total = 0;

const addValue = function(total, newValue) {
  newValue = parseFloat(newValue);
  let sum = total + newValue;
  sum = parseFloat(sum.toFixed(2));
  if(isNaN(sum)){
    return total;
  }
  return sum;
}

const setText = function(content){
  $('#total').text(content);
}

const clickHandler = function (event) {
  event.preventDefault();

  //This code has changed
  let item = $(this).val();
  $.get('/price/' + item, function(data){
    total = addValue(total, data.price);
    setText(total)
  })
  
}

$('.btn').on('click', clickHandler);