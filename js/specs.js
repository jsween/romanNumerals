describe("roman", function() {

  it("will return M for 1000", function() {
    expect(roman(2000)).to.eql("MM");
  });

  it("will return MMD for 2500", function() {
    expect(roman(2500)).to.eql("MMD");
  });

  it("will return CC for 200", function() {
    expect(roman(200)).to.eql("CC");
  });

  it("will return L for 50", function() {
    expect(roman(50)).to.eql("L");
  });

  it("will return X for 10", function() {
    expect(roman(10)).to.eql("X");
  });

  it("will return V for 5", function() {
    expect(roman(5)).to.eql("V");
  });

  it("will return I for 1", function() {
    expect(roman(1)).to.eql("I");
  });

  it("will return MCM for 1900", function() {
    expect(roman(1900)).to.eql("MCM");
  });

  it("will return CD for 400", function() {
    expect(roman(400)).to.eql("CD");
  });

  it("will return XC for 90", function() {
    expect(roman(90)).to.eql("XC");
  });

  it("will return XL for 40", function() {
    expect(roman(40)).to.eql("XL");
  });

  it("will return IX for 9", function() {
    expect(roman(9)).to.eql("IX");
  });

  it("will return IV for 4", function() {
    expect(roman(4)).to.eql("IV");
  });

});
