import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import bash from 'highlight.js/lib/languages/bash';

hljs.registerLanguage('javascript', javascript);

hljs.registerLanguage('xml', xml);

hljs.registerLanguage('bash', bash);

hljs.registerLanguage('typescript', javascript);

hljs.registerLanguage('plaintext', javascript);

hljs.registerLanguage('css', javascript);

hljs.registerAliases(["typescriptreact"], { languageName: "typescript" });

hljs.registerAliases(["ts", "tsx"], { languageName: "typescript" });

hljs.registerAliases(["js", "jsx", "javascriptreact"], {
  languageName: "javascript",
});

hljs.registerAliases(["html", "xhtml"], { languageName: "xml" });

export default hljs;