class Mkulima{
    constructor(farm,orders,product,price){
        this.farm=[];
        this.products=[];
        this.orders=[];
        this.price=[];
    }
    addFarm(farmId,name,farmer,phoneNumber,address){
        var person={
            farmId:farmId,
            name:name,
            farmer:farmer,
            phoneNumber:phoneNumber,
            address:address,
        }
        this.farm.push(person);
        return this.farm

    }
    removefarm(farmId){
        let newScale=this.farm.find(newScale=>newScale.farmId==farmId)
        return delete this.farm[newScale]
    }
    updateFarm(farmId,name,farmer,phoneNumber,address){
        let ModernFarm=this.farm.find(ModernFarm=>ModernFarm.newFarm.farmId==farmId)
        MedernFarm={
            farmId:farmId,
            name:name,
            farmer:farmer,
            phoneNumber:phoneNumber,
            address:address
    }
    return ModernFarm
}

    updateProduct(productId,name,price){
        var update=this.product.find(update=>update.productId==productId)
           var update={ 
            productId:productId,
            name:name,
            price:price
          }
          return update
        }
        getfarm(farmId){
            let allfarms=this.farm.find(allfarms=>allfarms==farmId)
            return allfarms

        }
    printProduct(){
        for(let items of this.price){
            console.log(items.name+","+items.price)

        }
        calculateOrderCost(productId,quantity)
            var cost=productId*quantity
            return cost
        }

    }


      let man= new Mkulima(([],[],[]))
        console.log(man.addFarm(7678780,"Debby","Eden",69636921,3212))
        console.log(man.addFarm(607780,"Sam","Marist",1211034,3423))
        console.log(man.addFarm(121290,"Brain","Ndege",10574437,7054))
        console.log(man.removefarm(347890,"Barack","Kibra",14659433,6532))
        console.log(man.updateProduct(768021,"Felix","Linsaba",13783970,7657))
        console .log(man.getfarm(890057,"John","Dago",56078012,9000))
        console .log(man.addProduct(679067,"Robert","Malindi",12304209,67887))
        console .log(man.removeProductId(173006,"Newton","Mars",66016090,7890))
        console .log(man.updateProduct(780012,"Tilken","Wayaki",23980066,3421))
        console .log(Man.getProduct(712345,"Jadel","Migo",34766188,6677))
        man.printProduct()
        console .log(man.farm(347890))


