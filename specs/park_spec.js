const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
   let park;

  beforeEach(function () {
    park = new Park("isla nubar",1000);
    dino1 = new Dinosaur('t-rex', 'carnivore', 50);
    dino2 = new Dinosaur('triceratops','herbavor',25);
    dino3 = new Dinosaur('t-rex','carnivore', 100)

  });

  it('should have a name', function(){
      const actual = park.name;
      assert.strictEqual(actual, "isla nubar");
    });
  it('should have a ticket price', function(){
    const actual = park.ticket_price;
    assert.strictEqual(actual, 1000);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = [];
    assert.deepStrictEqual(park.dino_list, actual);});

  it('should be able to add a dinosaur to its collection',function(){
    park.addDino(dino1);
    const actual = [dino1];
    assert.deepStrictEqual(park.dino_list,actual)

  });

  it('should be able to remove a dinosaur from its collection',function(){
    park.addDino(dino1);
    park.addDino(dino2);
    park.removeDino(dino1);
    const actual = [dino2];
    assert.deepStrictEqual(park.dino_list,actual)
  });

  it('should be able to find the dinosaur that attracts the most visitors',function(){
    park.addDino(dino1);
    park.addDino(dino2);
    park.findPopularDino();
    const actual = [dino1];
    assert.deepStrictEqual(park.findPopularDino(), actual);

  });

  it('should be able to find all dinosaurs of a particular species',function(){
    park.addDino(dino1);
    park.addDino(dino2);
    park.addDino(dino3);
    park.findSpecies('t-rex');
    const actual = [dino1,dino3];
    assert.deepStrictEqual(park.findSpecies('t-rex'),actual);
  });

  it('should be able to calculate the total number of visitors per day', function(){
    park.addDino(dino1);
    park.addDino(dino2);
    park.addDino(dino3);
    park.findTotalVisitors();
    const actual = 175;
    assert.strictEqual(park.findTotalVisitors(),actual)
  });

  it('should be able to calculate the total number of visitors per year',function(){
    park.addDino(dino1);
    park.addDino(dino2);
    park.addDino(dino3);
    let totalVisitors = park.findYearlyVisitors();
    const actual = 63875;
    assert.strictEqual(totalVisitors,actual);
  });

  it('should be able to calculate total revenue for one year', function(){
    park.addDino(dino1);
    park.addDino(dino2);
    park.addDino(dino3);
    let revenue = park.totalRevenue();
    const actual = 63875000;
    assert.strictEqual(revenue,actual);
  });

});
