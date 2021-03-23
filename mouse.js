class Mouse{
    constructor(name,weight,speed){
        this.status=true;
        this.name=name;
        this.weight=weight;
        this.speed=speed;
    }
    speak(str){
        return this.name+" "+str
    }
}
var jerry=new Mouse("jerry",49,50);
var mikey=new Mouse("mikey",23,25);