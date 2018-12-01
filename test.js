// Username
describe('Unqinename', function () {

	beforeEach(function () {
		const users = ["alex", "matt", "gabe"]
	})

	// Positive
	it('should enforce unqine username', function () {
		expect(unqinename("fakename")).to.equal(true);
	});
	it('should each user an unqine I.D'), function () {
	}

	// Negative
	testusername
	it('should enforce unqine username', function () {
		expect(unqinename("matt")).to.equal(false);
	});

});


// Password
describe('UniquePassword', function () {

	before(function () {
		const passwords = ["password", "1", "1234"]
	})

	// Positive
	it('accept unbasic password', function () {
		expect(basicPassword("password1234")).to.equal(true);
	});

	it('accept unbasic password', function () {
		expect(basicPassword("password1")).to.equal(true);
	});

	// Negative
	it('reject basic password', function () {
		expect(basicPassword("password")).to.equal(false);
	});
	it('reject basic password', function () {
		expect(basicPassword("1234")).to.equal(false);
	});
	
});





