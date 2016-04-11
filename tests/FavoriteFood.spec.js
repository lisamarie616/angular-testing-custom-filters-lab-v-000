describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

  it('should return people with the specified favorite food', function(){
    var people = [{ 
      name: "Scotty",
      favoriteFood: "anything"
    }, { 
      name: "Teddy",
      favoriteFood: "kibble"
    }, {
      name: "Matthew",
      favoriteFood: "ice cream"
    }, { 
      name: "Lisa",
      favoriteFood: "ice cream"
    }];

    var iceCream = $filter('favoriteFood')(people, 'ice cream');

    expect(iceCream.length).toBe(2);
    expect(iceCream[0].name).toBe('Matthew');
  });

	
});
