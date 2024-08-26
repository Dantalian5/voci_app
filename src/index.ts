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
    console.log(
      `${this.nome} ${this.cognome} si è iscritta al programma "${programma.titolo}".`
    );
  }
}
//-- Class ProgrammaFormzione --
class ProgrammaFormazione implements IProgrammaFormazione {
  public partecipanti: IProfessionistaMedia[] = [];

  constructor(
    public titolo: string,
    public descrizione: string,
    public ambitoSpecializzazione: string,
    public durata: number
  ) {}

  aggiungiPartecipante(professionista: IProfessionistaMedia): void {
    this.partecipanti.push(professionista);
    console.log(
      `Aggiunta ${professionista.nome} ${professionista.cognome} al programma "${this.titolo}".`
    );
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
const blogPiattaforma = new Piattaforma(
  'Voci Blog',
  'online',
  'Piattaforma online per articoli e opinioni.',
  ['blog', 'articoli', 'opinioni']
);

const canaleYoutube = new Piattaforma(
  'Voci YouTube',
  'audiovisivo',
  'Canale YouTube per video e documentari.',
  ['video', 'documentari', 'interviste']
);

const tiktokPiattaforma = new Piattaforma(
  'Voci TikTok',
  'audiovisivo',
  'Piattaforma per video brevi e contenuti virali che promuovono la parità di genere e la diversità.',
  ['video brevi', 'contenuti virali', 'advocacy']
);
