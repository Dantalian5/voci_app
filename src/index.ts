// Voci

// Definizione delle interfacce
//-- IProfessionistaMedia: --
interface IProfessionistaMedia {
  nome: string;
  cognome: string;
  specializzazione: string;
  esperienza: number; // in anni
  interessi: string[];

  partecipaProgramma(programma: IProgrammaFormazione): void;
}
//-- IProgrammaFormazione: --
interface IProgrammaFormazione {
  titolo: string;
  descrizione: string;
  ambitoSpecializzazione: string;
  durata: number; // in hore
  partecipanti: IProfessionistaMedia[];

  aggiungiPartecipante(professionista: IProfessionistaMedia): void;
}
//-- IPiattaforma: --
interface IPiattaforma {
  nome: string;
  tipo: string; // stampato, online, audiovisivo, ecc
  descrizione: string;
  categorieContenuto: string[];

  pubblicaContenuto(
    professionista: IProfessionistaMedia,
    contenuto: string
  ): void;
}
// Implementazione delle classi
//-- Class ProfessionistaMedia --
class ProfessionistaMedia implements IProfessionistaMedia {
  constructor(
    public nome: string,
    public cognome: string,
    public specializzazione: string,
    public esperienza: number,
    public interessi: string[]
  ) {}

  partecipaProgramma(programma: IProgrammaFormazione): void {
    programma.aggiungiPartecipante(this);
  }
}
//-- Class ProgrammaFormazione --
class ProgrammaFormazione implements IProgrammaFormazione {
  public partecipanti: IProfessionistaMedia[] = [];

  constructor(
    public titolo: string,
    public descrizione: string,
    public ambitoSpecializzazione: string,
    public durata: number
  ) {}

  aggiungiPartecipante(professionista: IProfessionistaMedia): void {
    if (this.partecipanti.includes(professionista)) {
      console.log(
        `${professionista.nome} ${professionista.cognome} è già iscritta al programma "${this.titolo}".`
      );
    } else {
      this.partecipanti.push(professionista);
      console.log(
        `Aggiunta ${professionista.nome} ${professionista.cognome} al programma "${this.titolo}".`
      );
    }
  }
}
//-- Class Piattaforma --
class Piattaforma implements IPiattaforma {
  constructor(
    public nome: string,
    public tipo: string,
    public descrizione: string,
    public categorieContenuto: string[]
  ) {}

  pubblicaContenuto(
    professionista: IProfessionistaMedia,
    contenuto: string
  ): void {
    console.log(
      `Pubblicato da ${professionista.nome} ${professionista.cognome} su ${this.nome}: "${contenuto}"`
    );
  }
}

// Creazione di istanze
//-- Professioniste Media --
const professionista1 = new ProfessionistaMedia(
  'Alessandra',
  'Greco',
  'Giornalismo',
  5,
  ['reportage', 'interviste']
);
const professionista2 = new ProfessionistaMedia(
  'Valentina',
  'De Luca,',
  'Regia',
  10,
  ['documentari', 'film sociali']
);
const professionista3 = new ProfessionistaMedia(
  'Silvia',
  'Marchetti',
  'Produzione',
  8,
  ['produzioni televisive', 'cinema']
);
const professionista4 = new ProfessionistaMedia(
  'Ludovica',
  'Romano',
  'Regia',
  2,
  ['interviste', 'cinema', 'documentari']
);
const professionista5 = new ProfessionistaMedia(
  'Federica',
  'Bellini',
  'Produzione',
  5,
  ['musica', 'spettacolo']
);
//-- Programmi di Formazione --
const programma1 = new ProgrammaFormazione(
  'Leadership Innovativa nei Media Digitali',
  'Un percorso avanzato per sviluppare competenze di leadership nelle nuove generazioni di professioniste dei media, con un focus su tecnologie emergenti e strategie di inclusione.',
  'Leadership e Innovazione',
  40 // Durata in ore
);

const programma2 = new ProgrammaFormazione(
  'Storytelling Immersivo e Realtà Aumentata',
  "Un programma che esplora l'uso delle tecnologie immersive come la realtà aumentata e virtuale per creare narrazioni potenti e coinvolgenti, dando voce alle storie che fanno la differenza.",
  'Storytelling e Tecnologie Immersive',
  24 // Durata in ore
);

const programma3 = new ProgrammaFormazione(
  'Strategia di Social Media per la Parità di Genere',
  'Un corso pratico che insegna come usare i social media in modo strategico per promuovere la parità di genere, influenzare il cambiamento culturale e amplificare le voci delle donne nel panorama mediatico globale.',
  'Social Media e Advocacy',
  30 // Durata in ore
);
// Piattaforme di Pubblicazione
const piattaforma1 = new Piattaforma(
  'Voci Blog',
  'online',
  'Piattaforma online per articoli e opinioni.',
  ['blog', 'articoli', 'opinioni']
);

const piattaforma2 = new Piattaforma(
  'YouTube',
  'audiovisivo',
  'Canale YouTube per video e documentari.',
  ['video', 'documentari', 'interviste']
);

const piattaforma3 = new Piattaforma(
  'Elle Magazine',
  'stampato',
  'Una delle riviste più influenti per le donne, con un focus su moda, cultura e empowerment femminile.',
  ['moda', 'cultura', 'empowerment']
);

console.log(
  'Simulazione di interazione tra professioniste e programmi di formazione:'
);
console.log('\n');
// Partecipazione delle professioniste ai programmi di formazione
professionista1.partecipaProgramma(programma1); // Alessandra Greco partecipa al programma 1
professionista2.partecipaProgramma(programma2); // Valentina De Luca partecipa al programma 2
professionista3.partecipaProgramma(programma1); // Silvia Marchetti partecipa al programma 3
professionista4.partecipaProgramma(programma1); // Ludovica Romano partecipa al programma 1
professionista5.partecipaProgramma(programma2); // Federica Bellini partecipa al programma 2
professionista4.partecipaProgramma(programma1); // Ludovica Romano era già iscritta al programma 1
console.log('\n');
console.log('----------------------------------------');
// Pubblicazione dei contenuti creati dalle professioniste
piattaforma1.pubblicaContenuto(
  professionista1,
  "Articolo sull'innovazione nei media digitali."
);
piattaforma2.pubblicaContenuto(
  professionista2,
  'Documentario su come la realtà aumentata trasforma le storie.'
);
piattaforma3.pubblicaContenuto(
  professionista3,
  'Reportage sulla leadership femminile nel cinema.'
);
console.log('\n');
console.log('----------------------------------------');

// Verifica del funzionamento della logica di collegamento
function mostraPartecipanti(programma: IProgrammaFormazione): void {
  console.log(`\nPartecipanti al programma "${programma.titolo}":`);
  if (programma.partecipanti.length === 0) {
    console.log('Nessun partecipante registrato.');
  } else {
    programma.partecipanti.forEach((partecipante, index) =>
      console.log(`${index + 1}. ${partecipante.nome} ${partecipante.cognome}`)
    );
  }
  console.log('----------------------------------------');
}
// Eseguiamo il test per mostrare i dettagli di un partecipante specifico
console.log(professionista1);
console.log('\n');
console.log('----------------------------------------');
// Eseguiamo il test per alcuni programmi
mostraPartecipanti(programma1);
mostraPartecipanti(programma2);
mostraPartecipanti(programma3);
