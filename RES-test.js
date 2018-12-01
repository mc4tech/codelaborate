//Unit Tests
describe('addValue', function() {
  it('should return the sum of two whole numbers', function() {
    expect(addValue(2, 4)).to.equal(6);
  });

  it('should return the sum of two decimal numbers', function() {
    expect(addValue(2.5, 1.5)).to.equal(4);
  });

  it('should return the sum of a decimal number and a string that is coercible to a number', function() {
    expect(addValue(2.5, '1.5')).to.equal(4);
  });

  it('should return the original total for invalid inputs', function() {
    expect(addValue(4, 'cow')).to.equal(4);
  });
});

//Functional Tests
describe('price click', function () {

  let server;

  beforeEach(function () {
    server = sinon.fakeServer.create();
    total = 0;
  });

  afterEach(function () {
    server.restore();
  });

  it('should add a price on click', function () {

    server.respondWith('GET', '/price/plate', [
      200, { 'Content-Type': 'application/json' }, JSON.stringify({item: 'plate', price: '3.50'})
    ]);

    $('#plate-btn').trigger('click');

    server.respond();

    expect($('#total').text()).to.equal('3.50');
  });

  it('should add 2 prices on 2 clicks', function () {
    
    server.respondWith('GET', '/price/plate', [
      200, { 'Content-Type': 'application/json' }, JSON.stringify({item: 'plate', price: '3.50'})
    ]);
    server.respondWith('GET', '/price/cup', [
      200, { 'Content-Type': 'application/json' }, JSON.stringify({item: 'cup', price: '1.50'})
    ]);

    $('#plate-btn').trigger('click');
    $('#cup-btn').trigger('click');

    server.respond();

    expect($('#total').text()).to.equal('5.00');
  });

});