import { ReactElement } from "react"; // Importa il tipo ReactElement da React per la tipizzazione dei componenti.

/**
 * Interfaccia per un elemento della barra di navigazione principale.
 */
export interface NavbarItem {
    label: string; // Etichetta visibile dell'elemento di navigazione.
    value: string; // Valore o URL associato all'elemento.
}

/**
 * Interfaccia per un elemento secondario della barra di navigazione (submenu).
 */
export interface NavbarSubItem {
    icon: ReactElement | string; // Icona associata all'elemento secondario, può essere un ReactElement o una stringa (es. URL).
    label: string; // Etichetta visibile dell'elemento secondario.
    value: string; // Valore o URL associato all'elemento secondario.
}

/**
 * Interfaccia per le proprietà del componente principale.
 */
export interface ComponentProps {
    children?: ReactElement; // Contenuto opzionale da renderizzare all'interno del componente.
    navbarItems: Array<NavbarItem>; // Elenco degli elementi principali della barra di navigazione.
    logo: string | null; // URL del logo o null se non è presente.
}
