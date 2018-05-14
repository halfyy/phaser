var Scene11={
	cloud:null,
	text:null,
	text1:null,
	text2:null,
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
		game.load.image('dom2','img/dom2.jpg');
		game.load.image('cucumber','img/cucumber.png');
		game.load.image('zapiska','img/zapiska.png');
	},
	create:function(){
		game.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL;
		var home=game.add.image(0,0,'dom2');
		var home2=game.add.image(0,400,'dom2');
		this.cloud=game.add.image(50,580,'cloud');
		var next = game.add.button(930, 180, 'cucumber', Scene11.actionOnClick);
		next.inputEnabled = true;
		next.scale.setTo(0.035,0.035);
		var next2 = game.add.button(950, 540, 'zapiska', Scene11.actionOnClick);
		next2.inputEnabled = true;
		next2.scale.setTo(0.03,0.03);
		home.scale.setTo(1.1,0.55);
		home2.scale.setTo(1.1,0.55);
		
		this.text=game.add.text(65, 590, 'Ньургун:',{
			fill:'#ffffff',
			fontSize:"33px",
			fontFamily:"Arial",
			fontWeight:"300"
		});
		
		this.text1=game.add.text(80, 650, 'Миэхэ хаартыска баар, Эбээ Люда киэнэ. До и после претупления.',{
			fill:'#ffffff',
			fontSize:"28px",
			fontFamily:"Arial",
			fontWeight:"100"
		});
		this.text2=game.add.text(80, 700, 'Отличие надо найти короче',{
			fill:'#ffffff',
			fontSize:"28px",
			fontFamily:"Arial",
			fontWeight:"100"
		});
		game.time.events.add(Phaser.Timer.SECOND*4, this.hide)
	},
	hide:function(){
		Scene11.cloud.alpha=0;
		Scene11.text.alpha=0;
		Scene11.text1.alpha=0;
		Scene11.text2.alpha=0;
	},
	update:function(){
		
	},
	actionOnClick:function () {
		game.state.start("scene12");
}
};