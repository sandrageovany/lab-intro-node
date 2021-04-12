class SortedList {
  constructor() {
    this.items= [];
    this.length= this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort((a, b) => a - b);

  }

  get(pos) {
    if(this.length ===0 || pos>this.length-1){
      throw new Error('OutOfBounds');
    }else
    return this.items[pos]
  }

  max() {
    if(this.items.length===0){
      throw new Error('EmptySortedList');
    }else
   return Math.max(...this.items);
  }

  min() {
    if(this.items.length===0){
      throw new Error('EmptySortedList');
    }else
   return Math.min(...this.items);
  }

  sum() {
   let sum =0;
    if(this.items.length===0){
      return 0;
    }else{
      for(let i=0; i<this.items.length; i++){
        sum+= this.items[i];
      }
      return sum;
    }
   
  }

  avg() {
    if(this.items.length===0){
      throw new Error('EmptySortedList');
    }else
    return this.sum()/this.items.length

  }
}

module.exports = SortedList;
