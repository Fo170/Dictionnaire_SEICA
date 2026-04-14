import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Code2, Info, Terminal, Search, FileText, Book } from 'lucide-react';
import Markdown from 'react-markdown';
import { VIVA_KEYWORDS } from './constants';

export default function App() {
  const [selectedId, setSelectedId] = useState<string>(VIVA_KEYWORDS[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const selectedKeyword = VIVA_KEYWORDS.find(k => k.id === selectedId) || VIVA_KEYWORDS[0];

  const filteredKeywords = VIVA_KEYWORDS.filter(k => 
    k.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    (k.frenchName && k.frenchName.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const groupedKeywords = filteredKeywords.reduce((acc, kw) => {
    if (!acc[kw.category]) acc[kw.category] = [];
    acc[kw.category].push(kw);
    return acc;
  }, {} as Record<string, typeof VIVA_KEYWORDS>);

  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);
      try {
        // Try to fetch the .md file
        const response = await fetch(`/docs/viva/${selectedKeyword.id}.md`);
        if (response.ok) {
          const text = await response.text();
          setContent(text);
        } else {
          // Fallback to generating markdown from constants if file not found
          const fallbackMd = `
# ${selectedKeyword.frenchName || selectedKeyword.name} (${selectedKeyword.name})

${selectedKeyword.semantics}

## Syntaxe
\`\`\`viva
${selectedKeyword.syntax}
\`\`\`

## Exemple de Code
\`\`\`viva
${selectedKeyword.example}
\`\`\`
          `;
          setContent(fallbackMd);
        }
      } catch (err) {
        setContent(`# Erreur\nImpossible de charger la documentation.`);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [selectedId, selectedKeyword]);

  return (
    <div className="flex h-screen bg-bg-main text-text-main overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-72 bg-sidebar-bg border-r border-border-ui flex flex-col shrink-0">
        <div className="p-6 border-b border-border-ui">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-accent-primary/20 rounded-lg flex items-center justify-center">
              <Terminal className="text-accent-primary w-6 h-6" />
            </div>
            <div className="font-extrabold text-xl text-accent-primary tracking-wider uppercase">
              Viva v1.0
            </div>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-dim" />
            <input 
              type="text" 
              placeholder="Rechercher..." 
              className="w-full bg-bg-main border border-border-ui rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-accent-primary transition-colors"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 custom-scrollbar">
          {Object.entries(groupedKeywords).map(([category, kws]) => (
            <div key={category} className="mb-6">
              <div className="px-6 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-primary/60">{category}</span>
              </div>
              <ul className="space-y-1">
                {kws.map((keyword) => (
                  <li key={keyword.id}>
                    <button
                      onClick={() => setSelectedId(keyword.id)}
                      className={`w-full px-6 py-3 flex items-center justify-between text-sm transition-all border-l-4 ${
                        selectedId === keyword.id 
                          ? 'bg-highlight text-text-main border-accent-primary font-semibold' 
                          : 'text-text-dim border-transparent hover:bg-white/5 hover:text-text-main'
                      }`}
                    >
                      <div className="flex flex-col items-start overflow-hidden">
                        <span className="uppercase tracking-wide truncate w-full">{keyword.frenchName || keyword.name}</span>
                        <span className="text-[10px] opacity-60 truncate w-full">({keyword.name})</span>
                      </div>
                      {selectedId === keyword.id && <ChevronRight className="w-4 h-4 text-accent-primary shrink-0" />}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-border-ui text-[10px] text-text-dim/50 flex justify-between uppercase tracking-widest bg-black/10">
          <div className="flex items-center gap-2">
            <Book className="w-3 h-3" />
            <span>Dictionnaire Viva</span>
          </div>
          <span>2026</span>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.05)_0%,transparent_50%)] pointer-events-none" />
        
        <header className="h-16 border-b border-border-ui flex items-center px-12 justify-between bg-bg-main/50 backdrop-blur-sm sticky top-0 z-10">
          <div className="flex items-center gap-2 text-[10px] text-text-dim uppercase tracking-[0.2em]">
            <span>Dictionnaire</span>
            <ChevronRight className="w-3 h-3" />
            <span>Mots-clés</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-accent-secondary">{selectedKeyword.name}</span>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto relative">
          <div className="max-w-4xl mx-auto px-12 py-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedId}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="markdown-body"
              >
                {loading ? (
                  <div className="flex items-center justify-center h-64">
                    <div className="w-8 h-8 border-2 border-accent-primary border-t-transparent rounded-full animate-spin" />
                  </div>
                ) : (
                  <Markdown>{content}</Markdown>
                )}
              </motion.div>
            </AnimatePresence>

            <footer className="mt-20 pt-8 border-t border-border-ui flex justify-between items-center text-[10px] text-text-dim/40 uppercase tracking-widest">
              <div className="flex items-center gap-6">
                <span className="flex items-center gap-1">
                  <FileText className="w-3 h-3" />
                  Fichier: docs/viva/{selectedKeyword.name}.md
                </span>
                <span>Encodage: UTF-8</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent-primary rounded-full animate-pulse" />
                <span>Système Viva v1.0 Prêt</span>
              </div>
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
}
