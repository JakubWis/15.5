function Button(text) {
	this.text = text || 'Hello';
}

Button.prototype = {
	create: function() {
		let self = this;
		this.element = document.createElement('button');
		this.element.innerText = this.text;
		this.element.addEventListener('click', function() {
			alert(self.text);
		});
		document.body.appendChild(this.element);
	}
}

let btn1 = new Button()
let btn2 = new Button('Siemanko!')
let btn3 = new Button('Hola!')
btn1.create()
btn2.create()
btn2.create()
btn3.create()

function div(text){
	this.text = text || 'Click me'
	this.create = () => {
		this.element = document.createElement('div')
		this.element.innerText = this.text
		this.element.addEventListener('click', () => {
			alert(this.text);
		});
		document.body.appendChild(this.element);
	}
}


let div1 = new div("click me and say hello out loud")
let div2 = new div("It is working!")
let div3 = new div()

div1.create()
div2.create()
div3.create()
new div('yhym').create()
