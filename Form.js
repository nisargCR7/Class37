class Form {
  constructor() {
 this.input = createInput("Name");
 this.button = createButton('Play');  
 this.greeting = createElement('h3');
}

 hide(){
 this.greeting.hide()
 this.input.hide();
 this.button.hide();
}


  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayHeight/2-150, 0);
    
    
    this.input.position(displayHeight/2-150, 100);
    this.button.position(displayHeight/2, 150);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

       player.name = this.input.value()
      
      playerCount+=1;
      player.index=playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name )
      this.greeting.position(displayHeight/2-100, 150)
    });

  }
}
