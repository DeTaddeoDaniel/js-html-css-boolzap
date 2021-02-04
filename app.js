var app = new Vue({
    el: '#apps',
    data:{

        // contatti e chat
        contatti: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 23:50:33',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '11/01/2020 7:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '11/01/2020 8:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    },
                    {
                        date: '03/02/2020 14:50:33',
                        message: 'Ricordati che domani compleanno di Lucia?',
                        status: 'received'
                    },
                    {
                        date: '03/02/2020 15:05:33',
                        message: 'Domani faccio gli auguri',
                        status: 'sent'
                    },
                    {
                        date: '04/02/2020 8:50:33',
                        message: 'Li ho dato un regalo e un biglietto di buon compleanno',
                        status: 'sent'
                    },
                ],
            },
            
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [

                    {
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                    },
                    {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                    },
                    {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                    }
                ],
            },
            
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            
            {
                name: 'Luca',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },   

            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [

                    {
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                    },
                    {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                    },
                    {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                    }
                ],
            },
            
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            
            {
                name: 'Luca',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },

            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [

                    {
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                    },
                    {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                    },
                    {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                    }
                ],
            },
            
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            
            {
                name: 'Luca',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },    

        ],

        // user
        user:{
            imgLink: '_io',
            name: 'Lucia',
            info: 'Testo del info utente che ha scritto su ste stesso'
        },

        // chat attiva
        chatAttiva: undefined,
        chatIndex: 0,

        // search
        search: '',
        cercaMessagioArray:[],

        // input text
        textInputChatMessage: '',
        filterMessagiInput: '',

        // schermate
        openProfiloBooleano: false,
        editInput: false,
    },

    // attiva la chat al posto 0 del primo contatto
    beforeMount() {

        // attiva chat per difetto
        this.chatAttiva = this.contatti[0].messages;
        
        // trasforma data con moment.js
        this.contatti.forEach( contatto =>{
            contatto.messages.forEach( messaggio =>{
                // console.log(messaggio.date)
                messaggio.date = moment( messaggio.date,"DD/MM/YYYY hh:mm:ss");
                // console.log(messaggio.date)
            } );
        });

    },

    methods:{
        changeChat: function (index) {
            console.log(index);
            this.chatIndex = index;
            this.chatAttiva = this.contatti[index].messages;
            
            console.log(this.chatAttiva);
            this.filterMessagiInput = '';
            this.filterMessagi();
        },

        // filtra contatti
        filter: function () {

            if(this.search != ''){

                // filtro è attivo
                this.contatti.forEach(contatto => {

                    // tutto in minuscolo testo
                    let nome = contatto.name.toLowerCase()
                    let searchText = this.search.toLowerCase()

                    // nome contiene stringa search
                    if(nome.includes(searchText)){
                        contatto.visible = true;
                    } else {
                        contatto.visible = false;
                    }
                });

            } else {
                this.contatti.forEach(contatto => {
                    contatto.visible = true;
                });
            }

        },

        // add element chat
        addElementChat(){

            if(this.textInputChatMessage != ''){
                
                const message = {
                    date: moment(),
                    message: this.textInputChatMessage,
                    status: 'received'
                }

                this.contatti[this.chatIndex].messages.push(message)
                this.textInputChatMessage =''

                setTimeout(this.addAnswer, 3000)

            }
        },

        // risposta simulata
        addAnswer(){
            const message = {
                date: moment(),
                message: 'ok',
                status: 'sent'
            }

            this.contatti[this.chatIndex].messages.push(message)
        },

        // richiamo la funzione moment
        moment: function (stringa) {
            console.log(moment().date());
            console.log(moment().date(String));

            let check = undefined;

            // oggi
            if( moment().date() == moment(stringa).date() ){
                check = moment(stringa).format('[oggi ]H:mm:ss');
            
            // ieri
            } else if( moment().date() - 1 == moment(stringa).date() ){
                check = moment(stringa).format('[ieri ]H:mm');
            
            // l'altro ieri
            }  else if( moment().date() - 2 == moment(stringa).date() ){
                check = moment(stringa).format('[l\'altroieri ]H:mm');
            
            // passato
            } else {
                check = moment(stringa).format('[data ]D/MM/YY');
            }

            return check;
        },

        // click message
        clickMessage: function(index){
            let message = document.querySelectorAll('.messageAll .divMessage')[index]
            // console.log(message);
            let menuTendina = message.children[1]

            // console.log(menuTendina.classList);
            menuTendina.classList.add('show');
            // console.log(menuTendina.classList);
        },

        // info message
        infoMessage: function(index){
            console.log('info message: '+ index);
            let message = document.querySelectorAll('.messageAll .divMessage')[index];
            let menuTendina = message.children[1];

            menuTendina.classList.remove('show');
                    this.filterMessagi()
        },

        // cancella messaggio
        deleteMessage: function(index){
            let message = document.querySelectorAll('.messageAll .divMessage')[index];
            let menuTendina = message.children[1];

            this.contatti[this.chatIndex].messages.splice(index, 1);

            menuTendina.classList.remove('show');
        },

        playAudio: function(){
            let audio = document.getElementById("linkAudio");
            console.log(audio)
            audio.play();   
        },

        openProfilo: function(){
            this.openProfiloBooleano = true ;
        },

        closeProfiloFinestra: function(){
            this.openProfiloBooleano = false ;
        },

        attivaInput: function(message){
            
            this.editInput = true;

            document.getElementById('inputUserInput').disabled = false;
            document.getElementById('inputInfoInput').disabled = false;

        },

        disattivaInput: function(message){

            this.editInput = false;

            document.getElementById('inputUserInput').disabled = true;
            document.getElementById('inputInfoInput').disabled = true;
        },

        // filtra messagi
        filterMessagi: function () {

            this.cercaMessagioArray=[]

            if(this.filterMessagiInput != ''){

                // filtro è attivo
                this.chatAttiva.forEach((sms, index) => {

                    // tutto in minuscolo testo
                    let messaggio = sms.message.toLowerCase();
                    let inputSearch = this.filterMessagiInput.toLowerCase();

                    // nome contiene stringa search
                    if(messaggio.includes(inputSearch)){
                        
                        let msEdit = messaggio.replace(inputSearch, `<span class="text-blue">${inputSearch}</span>`)
                        
                        let ms ={
                            date: sms.date,
                            message: msEdit,
                            status: sms.status
                        }
                        console.log(ms)
                        this.cercaMessagioArray.push(ms);
                    }
                });

            } else {
                // svuota array per difetto
                this.cercaMessagioArray=[];
            }

        },


    }
});
