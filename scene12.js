var Scene12={
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
		game.load.image('cloud','img/cloud.png');
		game.load.image('next','img/1.png');
		game.load.image('dom','img/dom.jpg');
	},
	create:function(){
		game.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL;
		var home=game.add.image(0,0,'dom2');
		
		var cloud=game.add.image(50,580,'cloud');
		var next = game.add.button(940, 330, 'zapiska', Scene12.actionOnClick);
		next.inputEnabled = true;
		next.scale.setTo(0.06,0.06);
		home.scale.setTo(1.1,1.1);
		text = game.add.text(50, 50, "");
		game.add.text(65, 590, 'Ньургун:',{
			fill:'#ffffff',
			fontSize:"33px",
			fontFamily:"Arial",
			fontWeight:"300"
		});
		text1 = game.add.text(50, 50, "");
		game.add.text(80, 650, 'Ээ, о5урсуу итиннэ сытар эбит ди эрдэ! Записка баар буолбут! Что же там написано?',{
			fill:'#ffffff',
			fontSize:"28px",
			fontFamily:"Arial",
			fontWeight:"100"
		});

	},
	update:function(){
		
	},
	actionOnClick:function () {
		game.state.start("scene13");
}
};