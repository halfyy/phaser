var Intro5={
	preload:function(){
		game.load.image('george','img/george.png');
		game.load.image('mason','img/mason.png');
		game.load.image('gg','img/gg.png');
		game.load.image('james','img/james.png');
		game.load.image('ruby','img/ruby.png');
		game.load.image('1place','img/1place.jpg');
		game.load.image('2place','img/2place.jpg');
		game.load.image('home','img/home.jpg');
		game.load.image('black','img/Black.jpg');
		game.load.image('cafe','img/cafe.jpg');
		game.load.image('ds','img/ds.jpg');
		game.load.image('cloud','img/cloud.png');
		game.load.image('next','img/1.png');
	},
	create:function(){
		game.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL;
		var home=game.add.image(-30,-20,'black');
		
		var cloud=game.add.image(50,580,'cloud');
		var next = game.add.button(830, 710, 'next', Intro5.actionOnClick);
		next.inputEnabled = true;
		next.scale.setTo(0.20,0.20);
		home.scale.setTo(1.2,1.5);


	},
	update:function(){
		
	},
	actionOnClick:function () {
		game.state.start("scene1")
}
};