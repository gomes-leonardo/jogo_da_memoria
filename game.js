let game = {

    lockMode: false,
    firstCard: null,
    seconCard: null,

    setCard: function (id) {

        let card = this.cards.filter(card => card.id === id)[0]

        if (card.flipped || this.lockMode) {
            return false
        }
        if(!this.firstCard)
        {this.firstCard = card
         this.firstCard.flipped = true
            return true

        }else{
            this.seconCard = card
            this.seconCard.flipped = true
            this.lockMode = true
            return true
        }
    
    
},

    checkMatch: function(){
        if(!this.firstCard || !this.seconCard){
            return false
        }
        return this.firstCard.icon === this.seconCard.icon}
    ,

    clearCards: function(){
        this.firstCard = null
        this.seconCard = null
        this.lockMode = false
    },

    unflipCards(){

        this.firstCard.flipped = false
        this.seconCard.flipped = false
        this.clearCards()
    },

    checkGameOver(){
       return this.cards.filter(card =>!card.flipped).length == 0

    },

    techs: [
        "bootstrap",
        "css",
        "electron",
        "firebase",
        "html",
        "javascript",
        "jquery",
        "mongo",
        "node",
        "react",
    ],

    card: null,



    createCardsFromTechs: function () {
        this.cards = [];

        this.techs.forEach((tech) => {
            this.cards.push(this.createPairFromTech(tech));
        })

        this.cards = this.cards.flatMap(pair => pair);
        this.shuffleCards()
        return this.cards
    },

    createPairFromTech: function (tech) {
        return [{
                id: this.createIdWithTech(tech),
                icon: tech,
                flipped: false,
            },
            {
                id: this.createIdWithTech(tech),
                icon: tech,
                flipped: false,
            },
        ];
    },

    createIdWithTech: function (tech) {
        return tech + parseInt(Math.random() * 1000);
    },

    shuffleCards: function (cards) {
        let currentIndex = this.cards.length
        let randomIndex = 0;

        while (currentIndex !== 0) {

            // o currentIndex vai pegar a quantidade de cartas, enquanto ele for maior que 0 ele vai ficar fazendo o looping no while, cada vez que ele executa uma rodada ele reduz 1 
            // currentIndex -- seria o mesmo que currentIndex = currentIndex -1
            // Quando ele chegar a 0 significa que todas as cartas foram embaralhadas

            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--;

            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]]
        }

    }
}