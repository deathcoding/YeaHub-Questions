// import { useEffect, useRef } from "react";
// import parse from "html-react-parser";
// import hljs from "highlight.js";
// import "highlight.js/styles/atom-one-dark.min.css";
// import styles from "./AnswerContent.module.css";

// hljs.registerAliases(['typescriptreact'], {languageName: 'typescript'})

// interface AnswerContentProps {
//   content: string;
// }

// export function AnswerContent({ content }: AnswerContentProps) {
//   const contentRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (contentRef.current) {
//       const codeBlocks = contentRef.current.querySelectorAll("pre code");
//       codeBlocks.forEach((block) => {
//         hljs.highlightElement(block as HTMLElement);
//       });
//     }
//   }, [content]);

//   return (
//     <div ref={contentRef} className={styles.container}>
//       {parse(content)}
//     </div>
//   );
// }
