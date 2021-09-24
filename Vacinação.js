var tabela;
var quantasLinhas;
var linhaAtual = 0;

function preload(){
	tabela = loadTable('covidvacinas.csv', 'csv', "header"); 
}

function setup(){
 	createCanvas(windowWidth, windowHeight);
	quantasLinhas = tabela.getRowCount();
	console.log(quantasLinhas);
}

function draw(){
	let c;
	c = color(255);
//	verde ('rgb(0, 255, 156)'); azul ('rgb(0, 255, 246)'); 
	
	background(0);
	let texto1 = tabela.getString(linhaAtual, "estado") + ":";
	  c = color(255);
		fill(c);
	  text(texto1, 50, 50);
	  textSize(30);
	
	let valor1 = tabela.getNum(linhaAtual, "primeira dose");
		c = color('rgb(0, 255, 246)');
	  fill(c);
	  rect(225, 202, 630, 148);
	
	  c = color(176, 255, 234);
	  fill(c);
	  rect(225, 207, 400-valor1, 138);
	
	let valor2 = tabela.getNum(linhaAtual, "segunda dose");
	noStroke();
	
	c = color('rgb(0, 255, 246)');
	fill(c);
	rect(225, 442, 630, 148);
	
	 c = color(176, 255, 234);
	  fill(c);
	  rect(225, 447, 530-valor2, 138);
	
	//tampa
	
	c = color('rgb(0,255, 156)');
  fill(c);
	rect(220, 420, 15, 190);
	c = color('rgb(0,255, 156)');
  fill(c);
	rect(220, 180, 15, 190); 
	
	//bico
		
	c = color('rgb(0,255, 156)');
  fill(c);
	rect(860, 455, 50, 120);
	
	c = color('rgb(0,255, 156)');
  fill(c);
	rect(860, 215, 50, 120); 
	
	//agulha
	c = color('rgb(0, 255, 246)');
	fill(c);
	rect(915, 509, 250, 15);
	
	c = color('rgb(0, 255, 246)');
	fill(c);
	rect(915, 269, 250, 15);
	
	//total de imunizados
	 
	let texto2 = tabela.getString(linhaAtual, "segunda dose") + " da população vacinada com duas doses";
	c = color(255);
	fill(c);
	text(texto2, 350, 50);
	
	// primeira dose texto 
	let texto3 = tabela.getString(linhaAtual, "primeira dose") + " tomou a primeira dose";
	c = color(0);
	fill(c);
	text(texto3, 250, 259, 500, 50);
	
	// segunda dose texto 
	let texto4 = tabela.getString(linhaAtual, "segunda dose") + " tomou a segunda dose";
	c = color(0);
	fill(c);
	text(texto4, 250, 500, 500, 50);

}

function mousePressed(){
	linhaAtual++;
	linhaAtual = linhaAtual%quantasLinhas; 
}
