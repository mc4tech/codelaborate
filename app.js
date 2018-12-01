let total = 0;

const addValue = function(total, newValue) {
  newValue = parseFloat(newValue);
  let sum = total + newValue;
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
  let item = $(this).val();
  $.get(`/price/${item}`, function(data){
    total = addValue(total, data.price);
    const displayTotal = total.toFixed(2)
    setText(displayTotal);
  })
}

$('.btn').on('click', clickHandler);