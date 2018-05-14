var Intro3={
	preload:function(){
		game.load.image('george','img/george.png');
		game.load.image('mason','img/mason.png');
		game.load.image('gg','img/gg.png');
		game.load.image('james','img/james.png');
		game.load.image('ruby','img/ruby.png');
		game.load.image('1place','img/1place.jpg');
		game.load.image('2place','img/2place.jpg');
		game.load.image('home','img/home.jpg');
		game.load.image('cafe','img/cafe.jpg');
		game.load.image('ds','img/ds.jpg');
		game.load.image('cloud','img/cloud.png');
		game.load.image('next','img/1.png');
	},
	create:function(){
		game.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL;
		var home=game.add.image(-30,-20,'home');
		
		var cloud=game.add.image(50,580,'cloud');
		var next = game.add.button(830, 710, 'next', Intro3.actionOnClick);
		next.inputEnabled = true;
		next.scale.setTo(0.20,0.20);
		home.scale.setTo(1.2,1.5);
		text = game.add.text(50, 50, "");
		game.add.text(65, 590, 'Толопуон:',{
			fill:'#ffffff',
			fontSize:"33px",
			fontFamily:"Arial",
			fontWeight:"300"
		});
		text1 = game.add.text(50, 50, "");
		game.add.text(80, 650, 'Але, бу кимий? Э тохтоо мин эрийдим бытта. Эн ханна сылдьа5ын? Короче кэл',{
			fill:'#ffffff',
			fontSize:"28px",
			fontFamily:"Arial",
			fontWeight:"100"
		});
		game.add.text(80, 700, 'манна. пип-пип',{
			fill:'#ffffff',
			fontSize:"28px",
			fontFamily:"Arial",
			fontWeight:"100"
		});

	},
	update:function(){
		
	},
	actionOnClick:function () {
		game.state.start("intro4")
}
};