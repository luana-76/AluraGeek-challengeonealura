class Contato{

    constructor(){

        this.boxInput = document.querySelector('#nameBoxOnForm');
        this.name = document.querySelector('#name');
        this.spanName = document.querySelector('#spanName');
        this.text = document.querySelector('#textBoxOnForm');
        this.spanText = document.querySelector('#spanText');
        this.but = document.querySelector('#buttonSubmit');
        this.clickingTheButton();

    }

    emptyField(span, input){

        span.innerHTML = 'O campo não pode ser vazio';
        input.classList.add('error');

    }

    okField(input, span){

        input.classList.remove('error');
        span.innerHTML = '';

    }

    clickingTheButton(){

        setInterval(()=>{

            this.but.addEventListener('click', event=>{

                if(this.text.validity.valueMissing && this.name.validity.valueMissing){

                    this.emptyField(this.spanText, this.text);
                    this.emptyField(this.spanName, this.boxInput);

                }else if(this.text.validity.valueMissing){

                    this.emptyField(this.spanText, this.text);

                }else if(this.name.validity.valueMissing){

                    this.emptyField(this.spanName, this.boxInput);

                };
                
                if(this.name.validity.valid == false && this.name.validity.valueMissing == false){

                    this.boxInput.classList.add('error');
                    this.spanName.innerHTML= 'Digite apenas letras';

                };

                if(this.name.validity.valid) this.okField(this.boxInput, this.spanName);
                if(this.text.validity.valid) this.okField(this.text, this.spanText);


            })

        },1000);

        this.but.addEventListener('click', event=>{

            if(this.name.validity.valid && this.text.validity.valid){

                alert('Formulário enviado!');
    
            };

        });
        
    }


}

new Contato()