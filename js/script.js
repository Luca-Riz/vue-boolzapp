const app = new Vue(
    {
        el: '#app',
        data: {
            nomi: '',
            active: 0,
            sendSms: '',
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_0',
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                        },
                    ],
                },

                {
                    name: 'Fabio',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                        },
                        {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                        },
                        {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                        },
                    ],
                },

                {
                    name: 'Matteo',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                        date: '20/04/2020 16:30:00',
                        text: 'Ciao omo, come xea?',
                        status: 'sent'
                        },
                        {
                        date: '20/04/2020 16:30:55',
                        text: 'Ben grassie! Stasera se vedemo?',
                        status: 'received'
                        },
                        {
                        date: '20/04/2020 16:35:00',
                        text: 'Si, va ben',
                        status: 'sent'
                        },
                    ],
                },

                {
                    name: 'Marco',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                        date: '21/06/2021 16:30:00',
                        text: 'Ciao Marchetto, come stai? Stiamo facendo vuejs con Boolean',
                        status: 'sent'
                        },
                        {
                        date: '21/06/2021 16:30:55',
                        text: 'Bomba Vue, poi mi dirai',
                        status: 'received'
                        },
                        {
                        date: '21/06/2021 16:35:00',
                        text: 'Cosa hai fatto oggi?',
                        status: 'received'
                        },
                        {
                        date: '21/06/2021 16:36:00',
                        text: 'Solo l\'introduzione, oggi pomeriggio studio slide e facciamo esercizi semplici',
                        status: 'sent'
                        },
                        {
                        date: '21/06/2021 16:37:00',
                        text: 'Ok, poi se hai bisogno chiedimi',
                        status: 'received'
                        },
                        {
                        date: '21/06/2021 16:38:00',
                        text: 'Grazie mille! Come vá col lavoro post Boolean? Non ti ho mai chiesto se ti piace! Com\'è l\'ambiente?!',
                        status: 'sent'
                        },
                        {
                        date: '21/06/2021 16:39:30',
                        text: 'Una figata, tutto super ok',
                        status: 'received'
                        },
                        {
                        date: '21/06/2021 16:39:40',
                        text: 'Lavoro una bomba, ambiente e colleghi una bomba',
                        status: 'received'
                        },
                        {                        
                        date: '21/06/2021 16:39:50',
                        text: 'Si sta bene, quindi sono super contento',
                        status: 'received'
                        },
                    ],
                },

                {
                    name: 'Filippo',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                        date: '20/05/2021 16:30:00',
                        text: 'Ciao Luca',
                        status: 'received'
                        },
                        {
                        date: '20/05/2021 16:30:55',
                        text: 'nel css togli la riga 90  z-index: -1; /*? appena sopra il bgr (riga 16) */',
                        status: 'received'
                        },
                        {
                        date: '20/05/2021 16:35:00',
                        text: 'Pazzesco... Non sai quanto tempo ci ho perso... ',
                        status: 'sent'
                        },
                        {
                        date: '20/05/2021 16:35:30',
                        text: 'Grazie',
                        status: 'sent'
                        },
                        {
                        date: '20/05/2021 16:36:30',
                        text: 'Figurati!',
                        status: 'received'
                        },
                        {
                        date: '20/05/2021 16:37:30',
                        text: 'adesso l\'importante che funziona',
                        status: 'received'
                        },
                    ],
                },

                {
                    name: 'Lisa',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                        date: '20/03/2021 12:30:00',
                        text: 'Com\'è andata stamattina coi bimbi?',
                        status: 'received'
                        },
                        {
                        date: '20/03/2021 12:30:55',
                        text: 'Bene dai! Mattia non voleva proprio entrare, ma con un cartone animato gli ho cambiato la giornata',
                        status: 'sent'
                        },
                        {
                        date: '20/03/2021 13:35:00',
                        text: 'Il solito viziatello',
                        status: 'received'
                        }
                    ],
                },
                {
                    name: 'Cristina',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                        date: '28/06/2021 10:30:00',
                        text: 'Come va con l\'esercizio Luca?',
                        status: 'received'
                        },
                        {
                        date: '28/06/2021 10:31:00',
                        text: 'Speravo meglio, ieri ho fatto un paio di stupidaggini che mi hanno portato via ore, la più ridicola è stata "const app = new Vue", al posto di Vue avevo messo quello che suggerisce vs code... ore...',
                        status: 'sent'
                        },
                        {
                        date: '28/06/2021 10:32:53',
                        text: 'Non ti preoccupare, anche queste cose servono, l\'importante è risolvere',
                        status: 'received'
                        }    
                    ],
                },
                {
                    name: 'Luca',
                    avatar: '_7',
                    visible: true,
                    messages: [
                    ],
                },
            ],
        },
        methods: {
            activeContact: function(index){
                this.active = index;
                // console.log(index);
            },

            sendMessage: function(testo){
                this.sendSms = testo;
                this.sendSms = '';
                // console.log(testo);
                let now = dayjs(); //* usando dayjs */
                let date = now.format("DD/MM/YYYY");
                let time = now.format("HH:mm:ss");
                let nowDate = date + ' ' + time;

                this.contacts[this.active].messages.push({
                    date: nowDate,
                    text: testo,
                    status: 'sent',
                });
                // console.log(this.contacts[this.active].messages);

                //todo setTimeout(function(){ alert("Hello"); }, 1000);
            }
        },
    }
)