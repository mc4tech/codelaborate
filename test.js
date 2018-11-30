// Write a positive unit test
describe('Unqinename', function() {
    beforeEach(function(){
        const users =["alex", "matt","gabe"]
    })
it('should enforce unqine username', function() {
    expect(unqinename("fakename")).to.equal(true);
  });
it('should each user an unqine I.D'),function(){

}
// Write a negative unit test
it('should enforce unqine username', function() {
    expect(unqinename("matt")).to.equal(false);
  });
});