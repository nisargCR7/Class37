class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",(data)=>{
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef=await database.ref('playerCount').once("value")
      if(playerCountRef.exists()){
      playerCount=playerCountRef.val()
      player.getCount();
      }
      form = new Form()
      form.display();
    }
  }

play(){
  form.hide();
  text("Start",120,120)
  Player.getPlayerinfo()
  
  
  if(allplayers!==undefined){
  var dislpaypos=120;
  
  for(var i in allplayers){
  
    dislpaypos=dislpaypos+20;
  
  text(allplayers[i].name + "=" + allplayers[i].distance,140,dislpaypos)
  
}
  }
}
}