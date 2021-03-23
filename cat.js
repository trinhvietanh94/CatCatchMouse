class Cat {
  constructor(name, weight, speed) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
  }
  speak(str) {
    console.log( this.name + " " + str);
  }
  catch(mouse) {
    if (this.speed > mouse.speed) {
      console.log(this.name + "da bat duoc chuot" + mouse.name);
    }else{
        console.log("con chuot nay chay nhanh qua")
    }
  }
  eat(mouse) {
    if (mouse.status) {
      mouse.status = false;
      this.weight += mouse.weight;
      console.log("chuot" + mouse.name + "da bi meo" + this.name + "thit");
    }
  }
}
let tom=new Cat("tom",60,30);

tom.catch(jerry)
tom.catch(mikey)
tom.eat(jerry)
console.log(tom.weigh)