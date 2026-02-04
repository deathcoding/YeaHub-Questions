import { useEffect, type RefObject } from 'react';
import hljs from '@/shared/lib/utils/hljs'; 

const loadingLanguages = new Map<string, Promise<unknown>>();

async function loadLanguage(lang: string) {
  if (hljs.getLanguage(lang)) {
    return true;
  }

  if (loadingLanguages.has(lang)) {
    return loadingLanguages.get(lang);
  }

  try {
    const promise = import(`hljs-languages/${lang}.js`);
    loadingLanguages.set(lang, promise);
    
    const languageModule = await promise;
    hljs.registerLanguage(lang, languageModule.default);

    loadingLanguages.delete(lang);
    return true;
  } catch (error) {
    console.error(`Failed to load language: ${lang}`, error);
    loadingLanguages.delete(lang);
    return false;
  }
}

export function useDynamicHighlight(contentRef: RefObject<HTMLDivElement | null>, content: string) {
  useEffect(() => {
    if (!contentRef.current) return;

    const blocks = contentRef.current.querySelectorAll<HTMLElement>('pre code');
    blocks.forEach(async (block) => {
      if (block.dataset.highlighted) {
        return;
      }

      const languageClass = Array.from(block.classList).find(cls => cls.startsWith('language-'));
      if (!languageClass) {
        return;
      }

      const lang = languageClass.replace('language-', '');

      const loaded = await loadLanguage(lang);

      if (loaded && !block.dataset.highlighted) {
        block.classList.add("hljs");
        hljs.highlightElement(block);
        block.dataset.highlighted = 'true';
      }
    });
  }, [contentRef, content]);


  // useEffect(() => {
  //   if (contentRef.current) {
  //     const blocks = contentRef.current.querySelectorAll("pre code");
  //     blocks.forEach((block) => {
  //       const el = block as HTMLElement;

  //       if (!el.dataset.highlighted) {
  //         el.classList.add("hljs");
  //         hljs.highlightElement(el);
  //         el.dataset.highlighted = "true";
  //       }
  //     });
  //   }
  // }, [contentRef]);
}