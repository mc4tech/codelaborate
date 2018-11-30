// Write a positive unit test
describe('UniquePassword', function() {
  before(function(){
      const passwords =["password", "1","1234"]
  });
it('accept unbasic password', function() {
  expect(basicPassword("password1234")).to.equal(true);
});

it('accept unbasic password', function() {
  expect(basicPassword("password1")).to.equal(true);
});

// Write a negative unit test
it('reject basic password', function() {
  expect(basicPassword("password")).to.equal(false);
});

it('reject basic password', function() {
  expect(basicPassword("1234")).to.equal(false);
});
});