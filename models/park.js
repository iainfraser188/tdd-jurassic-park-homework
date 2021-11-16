const Park = function (name,ticket_price){
    this.name = name;
    this.ticket_price = ticket_price;
    this.dino_list = []
}

Park.prototype.addDino = function(dino){
    this.dino_list.push(dino)
};
Park.prototype.removeDino = function(){
    this.dino_list.shift()
};
Park.prototype.findPopularDino = function(){
    let dinoGuests = 0;
    let dinosaurList = [];
    for(const dinosaur of this.dino_list){
        if (dinosaur.guestsAttractedPerDay > dinoGuests){
            dinoGuests = dinosaur.guestsAttractedPerDay
            dinosaurList.shift()
            dinosaurList.push(dinosaur)
        }
        
    }  
        return dinosaurList;
};
Park.prototype.findSpecies = function(species){
    
    let speciesList = []
    for(const dinosaur of this.dino_list){
        if (dinosaur.species == species){
            speciesList.push(dinosaur)
        }
    }
    return speciesList;

};
Park.prototype.findTotalVisitors = function(){
    let visitorNo = 0
    for (dinosaur of this.dino_list){
        visitorNo += dinosaur.guestsAttractedPerDay
    };
    return visitorNo;
};
Park.prototype.findYearlyVisitors = function(){
    
    let total = this.findTotalVisitors()*365;
    return total;
};
Park.prototype.totalRevenue = function(){
    
    let revenue = this.findYearlyVisitors() * this.ticket_price;
    return revenue;
};
module.exports = Park