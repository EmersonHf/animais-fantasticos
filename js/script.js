import ScrollSuave from './modules/scroll-suave.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
<<<<<<< HEAD
import initFetchAnimais from './modules/fetch-animais.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';
=======
import fetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';
>>>>>>> main

//scrollsuave
const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

//accordion
const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

//tabnav
const tabNav = new TabNav('[data-tab="menu"] li','[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]','[data-modal="fechar"]','[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();





initAnimacaoScroll();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
<<<<<<< HEAD
initFetchAnimais();
fetchBitcoin('https://blockchain.info/ticker','.btc-preco');

=======
initFetchBitcoin();

fetchAnimais('../../animaisapi.json','.numeros-grid');
>>>>>>> main
