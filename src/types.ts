export interface Keyword {
  id: string;
  name: string;
  frenchName?: string;
  syntax: string;
  semantics: string;
  example: string;
  category: 'Instruction' | 'Contrôle' | 'Entrée/Sortie' | 'Variable';
}

export interface DictionaryData {
  keywords: Keyword[];
}
