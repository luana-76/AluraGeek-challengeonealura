class Add{

  constructor(){

    this.urlBox = document.querySelector('#urlBox');
    this.url = document.querySelector('#url');
    this.spanUrl = document.querySelector('#spanUrl');

    this.categoryBox = document.querySelector('#categoryBox');
    this.category = document.querySelector('#category');
    this.spanCategory = document.querySelector('#spanCategory');

    this.productNameBox = document.querySelector('#productNameBox');
    this.productName = document.querySelector('#productName');
    this.productNameSpan = document.querySelector('#productNameSpan');

    this.productDescriptionBox = document.querySelector('#productDescriptionBox');
    this.textAdd = document.querySelector('#text');
    this.textSpan = document.querySelector('#textSpan');

    this.but = document.querySelector('#addProductButton');

    this.priceFunction();
    this.buttonEvent();

  }

  priceFunction(){

    let textField = document.querySelector('#priceField');

    const input = SimpleMaskMoney.setMask(textField, {

        prefix: 'R$ ',
        suffix: '',
        fixed: true,
        fractionDigits: 2,
        decimalSeparator: ',',
        thousandsSeparator: '.',
        cursor: 'end'

    });


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

  buttonEvent(){
    setInterval(()=>{

      this.but.addEventListener('click', e=>{

        this.messageCases(this.url, this.urlBox, this.spanUrl, 1);
        this.messageCases(this.url, this.urlBox, this.spanUrl, 2, 'Digite uma url de imagem válida');
        this.messageCases(this.url, this.urlBox, this.spanUrl, 3);

        this.messageCases(this.category, this.categoryBox, this.spanCategory, 1);
        this.messageCases(this.category, this.categoryBox, this.spanCategory, 2, 'Digite apenas letras');
        this.messageCases(this.category, this.categoryBox, this.spanCategory, 3);

        this.messageCases(this.productName, this.productNameBox, this.productNameSpan, 1);
        this.messageCases(this.productName, this.productNameBox, this.productNameSpan, 2, 'Digite apenas caracteres alfanumericos');
        this.messageCases(this.productName, this.productNameBox, this.productNameSpan, 3);

        this.messageCases(this.textAdd, this.productDescriptionBox, this.textSpan, 1);

      });
    },1000);

  }

}
new Add();