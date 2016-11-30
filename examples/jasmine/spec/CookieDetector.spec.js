describe("CookieDetector", function () {
  var itemsWithoutCookie;
  var itemsWithCookie;

  beforeEach(function () {
    itemsWithoutCookie = ['apples', 'pears', 'bananas'];
    itemsWithCookie = ['bread', 'milk', 'Cookie'];
  });

  it("should detect no cookie", function () {
    var result = detectCookie(itemsWithoutCookie);
    expect(result).not.toBe(true);
  });

  it("should detect cookie", function () {
    var result = detectCookie(itemsWithCookie);
    expect(result).toBe(true);
  });
  
});
