describe("countUp", function() {

  it("returns false if countTo is less than countBy", function() {
    expect(countUp(2, 3)).to.equal("Invalid Input");
  });

  it ("returns false if either input is a negative number", function() {
    expect(countUp(-3, -4)).to.equal("Please enter a positive number");
  });
});


describe("multiplyUp", function() {

  it("returns array if countTo is less than countBy", function() {
    expect(multiplyUp(3, 3)).to.eql([3]);
  });

  it("returns array if countTo is greater than countBy", function() {
    expect(multiplyUp(5, 3)).to.eql([3]);
  });

  it("returns array if with multiples up to countTo", function() {
    expect(multiplyUp(15, 5)).to.eql([5, 10, 15]);
  });

});
