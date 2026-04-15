export interface Keyword {
  id: string;
  name: string;
  frenchName?: string;
  syntax: string;
  semantics: string;
  example: string;
  category: 'Instruction' | 'Contrôle' | 'Entrée/Sortie' | 'Variable' | 'Pré-processeur' | 'Déclaration' | 'Instrument' | 'Mathématique';
}

export interface DictionaryData {
  keywords: Keyword[];
}
