class Login{

    constructor(){

        this.email = document.querySelector('#loginSection input[type="email" ]');
        this.password = document.querySelector('#loginSection input[type="password" ]');
        this.spanEmail = document.querySelector('#emailError');
        this.spanPassword = document.querySelector('#passwordError');
        this.buttonSubmit = document.querySelector('#loginSection #submitButton');
        
        this.buttonEvent()
        this.buttonValidation()

    }

    messageCases(input, box, span, opc, msg){
        /* OBS( Deixar os cases sem break )*/
        switch(opc){
    
          case 1:
    
            if(input.validity.valueMissing){
    
              box.classList.add('error');
              span.innerHTML = 'O campo não pode ser vazio';
        
            };
    
          case 2:
            if(input.validity.valid == false){
    
              box.classList.add('error');
              span.innerHTML = msg;
        
            };
    
          case 3:
    
            if(input.validity.valid == false && input.validity.valueMissing){
    
              box.classList.add('error');
              span.innerHTML = 'O campo não pode ser vazio';
        
            };
    
          case 4:
            input.addEventListener('focusout', e=>{
              if(input.validity.valid){
    
                box.classList.remove('error');
                span.innerHTML = '';
          
              };
            });
    
        }
        
    
      }

      buttonValidation(){

        setInterval(()=>{
            if(this.email.validity.valid && this.password.validity.valid){

                this.buttonSubmit.setAttribute('href','page-with-all-products.html');
    
            }else{

                this.buttonSubmit.removeAttribute("href");

            };

        },1000)
      }

      buttonEvent(){
        setInterval(()=>{
    
            this.buttonSubmit.addEventListener('click', e=>{
    
                this.messageCases(this.email, this.email, this.spanEmail, 1)
                this.messageCases(this.email, this.email, this.spanEmail, 2, 'Digite um email válido use:(A/a, 0-9, -_)')
                this.messageCases(this.email, this.email, this.spanEmail, 3)

                this.messageCases(this.password, this.password, this.spanPassword, 1)
                this.messageCases(this.password, this.password, this.spanPassword, 2, 'No mínimo 8 caracteres (pelo menos uma letra maiúscula)')
                this.messageCases(this.password, this.password, this.spanPassword, 3)

            });
        },1000);
    
      }
    
}

new Login()

