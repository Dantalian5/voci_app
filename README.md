<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">

<h3 align="center">Voci - Sistema di Gestione dei Media</h3>

  <p align="center">
    Un progetto TypeScript per modellare l'operatività di un media online dedicato alla parità di genere.
    <br />
    <br />
    <a href="https://codepen.io/Marcos_Valenzuela/pen/vYqrpmR">Visualizza CodePen Demo</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Il progetto “Voci” è stato sviluppato in TypeScript per modellare un sistema che supporta la parità di genere nei media, con un focus specifico su interazioni tra professioniste del settore, programmi di formazione e piattaforme di pubblicazione. Questo sistema è strutturato utilizzando interfacce e classi che rappresentano i vari componenti, come professioniste dei media, programmi formativi e piattaforme di pubblicazione, mostrando come la tecnologia può supportare la promozione della parità di genere.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- Typescript

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- npm
  ```sh
  npm install npm@latest typescript -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Dantalian5/voci_app.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run tsx & ts-node (or use script)
   ```sh
   npm run start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Puoi utilizzare questo sistema per modellare scenari realistici di gestione dei media. Alcuni esempi di utilizzo includono:

• Iscrizione di professioniste a programmi formativi.
• Pubblicazione di contenuti su piattaforme come blog, YouTube, o riviste.

```ts
// Esempio di iscrizione a un programma formativo
professionista1.partecipaProgramma(programma1);

// Esempio di pubblicazione di contenuti
piattaforma1.pubblicaContenuto(
  professionista1,
  "Articolo sull'innovazione nei media digitali."
);
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Creazione delle interfacce per modellare il sistema.
- [x] Implementazione delle classi per gestire le professioniste, i programmi e le piattaforme.
- [x] Aggiunta di un sistema di autenticazione per gestire l’accesso alle risorse.
- [x] Estensione delle funzionalità di pubblicazione con opzioni avanzate.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

- Website - [Marcos Valenzuela](https://valenzuela.dev)
- Frontend Mentor - [@Dantalian5](https://www.frontendmentor.io/profile/Dantalian5)
- Github - [@Dantalian5](https://github.com/Dantalian5)
- Linkedin - [Marcos Valenzuela](https://www.linkedin.com/in/marcos-valenzuela-coding)
- Start2Impact Protfolio - [Marcos Valenzuela](https://talent.start2impact.it/profile/marcos-ernesto-planos-valenzuela)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Start2Impact](https://www.start2impact.it/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/Dantalian5/voci_app.svg?style=for-the-badge
[contributors-url]: https://github.com/Dantalian5/voci_app/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Dantalian5/voci_app.svg?style=for-the-badge
[forks-url]: https://github.com/Dantalian5/voci_app/network/members
[stars-shield]: https://img.shields.io/github/stars/Dantalian5/voci_app.svg?style=for-the-badge
[stars-url]: https://github.com/Dantalian5/voci_app/stargazers
[issues-shield]: https://img.shields.io/github/issues/Dantalian5/voci_app.svg?style=for-the-badge
[issues-url]: https://github.com/Dantalian5/voci_app/issues
[license-shield]: https://img.shields.io/github/license/Dantalian5/voci_app.svg?style=for-the-badge
[license-url]: https://github.com/Dantalian5/voci_app/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/marcos-valenzuela-coding
