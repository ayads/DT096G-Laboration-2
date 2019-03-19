//Author: Ayad Shaif
//Laboration: 2


//Iterator class
var Iterator = function(array){
    //declaring member variables.
    this.index = 0;
    this.array = array;
    //"next" method.
    this.next = function(){
        if(this.index <= this.array.length){
            var nextIndex = this.index++;
            return this.array[nextIndex];
        }else{
            return false;
        }
    }
    //"hasNext" method.
    this.hasNext = function(){
        if (this.index < this.array.length){
            return true;
        }else{
            return false;
        }
    }
};

//Prototyping
Array.prototype.begin = function(){
    return new Iterator(this);
};

//Array of integers.
var arr = [111, 122, 133, 144, 155];

//Main function.
(function(){
    var it = arr.begin();
    while(it.hasNext()){
        document.writeln("#", it.next());
       //console.log(it.next());
    }
})();
