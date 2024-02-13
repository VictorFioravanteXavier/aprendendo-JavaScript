let Tenis = {
    cardaco : 'G',
    tipo : 'Tênis de corrida',
    estoque : false,
    tamanho:{
        palmilha : 39,
        tenis : 40, 
        caixa : {
            larura : 35,
            altura : 40,
            profundidade:10,
        },
    },

    marcaArrayValores : ['Nike', "Adidas",'Etc'],

    marcaArrayObjetos : [  
        {
            nome :'Nike',
        },
        {
            nome :'Adidas',
        },
        {
            nome :'Etc',
        },
    ],
    getMarcaArrayValores : function(param){
        return this.marcaArrayValores[param];
    },
    getMarcaArrayOBJ : function(param){
        return this.marcaArrayObjetos[param].nome;
    },

};

console.log(Tenis);
console.log(Tenis.tipo);
console.log(Tenis.tamanho);