import type { GetQuestionsList, Question } from "../model/question.types";

export const mockQuestions: Question[] = [
  {
    id: 101,
    title: "Мок Какой тег используется для создания ссылок в HTML?",
    description:
      "Этот вопрос проверяет знание тега <a>, который используется для создания гиперссылок в HTML, и понимание его базовых атрибутов.",
    code: null,
    imageSrc: null,
    keywords: ["a", "link"],
    longAnswer:
      '# Пример текста с разной вложенностью и форматированием\n\n## 1. Основной раздел\n\nЭто **основной** текст с *разными* стилями форматирования.\n\n### 1.1 Подраздел\n\n* Элемент списка 1\n\n* Элемент списка 2\n\n  * Вложенный элемент\n\n  * Еще один вложенный\n\n### 1.2 Код\n\nВот пример кода на Python:\n\npython\n\nCopy\n\nDownload\n\n```plaintext\ndef hello_world():\n    print("Привет, мир!")\n\nhello_world()\n```\n\n## 2. Дополнительная информация\n\n> Это цитата, которая выделяется для важности.\n\n### 2.1 Таблица\n\n**Заголовок 1Заголовок 2**Данные 1Данные 2Данные 3Данные 4\n\n### 2.2 Форматированный текст\n\nВот `моноширинный` текст, а также **жирный** и *курсив*.\n\n#### 2.2.1 Глубокая вложенность\n\nЭтот текст находится на **третьем** уровне вложенности.\n\n---\n\n### 3. Заключение\n\nСпасибо за внимание! Вот еще один блок кода (JavaScript):\n\njavascript\n\nCopy\n\nDownload\n\n```plaintext\nconst sum = (a, b) => a + b;\nconsole.log(sum(2, 3)); // 5\n```\n\n**Конец документа.** 🚀',
    shortAnswer:
      '<p># Пример текста с разной вложенностью и форматированием\n\n## 1. Основной раздел\n\nЭто **основной** текст с *разными* стилями форматирования.\n\n### 1.1 Подраздел\n\n* Элемент списка 1\n\n* Элемент списка 2\n\n  * Вложенный элемент\n\n  * Еще один вложенный\n\n<strong>### 1.2 Код</strong>\n\nВот пример кода на Python:\n\npython\n\nCopy\n\nDownload\n\n```plaintext\ndef hello_world():\n    print("Привет, мир!")\n\nhello_world()\n```\n\n## 2. Дополнительная информация\n\n&gt; Это цитата, которая выделяется для важности.\n\n### 2.1 Таблица\n\n**Заголовок 1Заголовок 2**Данные 1Данные 2Данные 3Данные 4\n\n### 2.2 Форматированный текст\n\nВот `моноширинный` текст, а также **жирный** и *курсив*.\n\n#### 2.2.1 Глубокая вложенность\n\nЭтот текст находится на **третьем** уровне вложенности.\n\n---\n\n### 3. Заключение\n\nСпасибо за внимание! Вот еще один блок кода (JavaScript):\n\njavascript\n\nCopy\n\nDownload\n\n```plaintext\nconst sum = (a, b) =&gt; a + b;\nconsole.log(sum(2, 3)); // 5\n```\n\n**Конец документа.** 🚀</p>',
    status: "public",
    rate: 1,
    complexity: 1,
    createdAt: "2024-10-10T16:27:04.720Z",
    updatedAt: "2025-09-03T12:43:55.213Z",
    createdById: "0a1438a3-1776-43b4-9a95-e60ee6573903",
    updatedById: "0a1438a3-1776-43b4-9a95-e60ee6573903",
    createdBy: {
      id: "0a1438a3-1776-43b4-9a95-e60ee6573903",
      username: "ruslankuyanec",
    },
    updatedBy: {
      id: "0a1438a3-1776-43b4-9a95-e60ee6573903",
      username: "ruslankuyanec",
    },
    questionSpecializations: [
      {
        id: 11,
        title: "React Frontend Developer",
        description:
          "React-разработчик — это инженер-программист или веб-разработчик, который занимается фронтендом или дизайном пользовательских интерфейсов, используя библиотеку React",
        imageSrc: null,
        createdAt: "2024-10-03T09:08:10.605Z",
        updatedAt: "2024-12-13T15:29:16.935Z",
      },
    ],
    questionSkills: [
      {
        id: 15,
        title: "React Router",
        description:
          "React Router — это библиотека для навигации между разными частями веб-приложения, созданного на React.",
        imageSrc:
          "https://e5e684b1-4a6a-4be5-b7ee-b2b678239d61.selstorage.ru/skill/7f2921be-d268-4153-965e-70f93317d061",
        createdAt: "2024-06-04T13:40:16.610Z",
        updatedAt: "2025-01-18T19:57:40.588Z",
        specializations: [
          {
            id: 11,
            title: "React Frontend Developer",
            description:
              "React-разработчик — это инженер-программист или веб-разработчик, который занимается фронтендом или дизайном пользовательских интерфейсов, используя библиотеку React",
            imageSrc: null,
            createdAt: "2024-10-03T09:08:10.605Z",
            updatedAt: "2024-12-13T15:29:16.935Z",
          },
        ],
      },
      {
        id: 6,
        title: "React",
        description:
          "React - библиотека JavaScript для создания пользовательских интерфейсов. Поддерживается Facebook и сообществом разработчиков и компаний.",
        imageSrc:
          "https://e5e684b1-4a6a-4be5-b7ee-b2b678239d61.selstorage.ru/skill/dc42634d-468b-427d-9f7a-ea6d501911c5",
        createdAt: "2024-06-04T13:40:16.610Z",
        updatedAt: "2025-01-18T19:39:52.495Z",
        specializations: [
          {
            id: 11,
            title: "React Frontend Developer",
            description:
              "React-разработчик — это инженер-программист или веб-разработчик, который занимается фронтендом или дизайном пользовательских интерфейсов, используя библиотеку React",
            imageSrc: null,
            createdAt: "2024-10-03T09:08:10.605Z",
            updatedAt: "2024-12-13T15:29:16.935Z",
          },
        ],
      },
    ],
  },
  {
    id: 95,
    title: "Что такое React и какие ключевые особенности он имеет?",
    description:
      "Этот вопрос проверяет базовые знания о React — популярной библиотеке для создания пользовательских интерфейсов",
    code: null,
    imageSrc: null,
    keywords: ["react", "реакт"],
    longAnswer:
      '<p>React — это библиотека JavaScript, разработанная Facebook в 2013 году, которая используется для создания пользовательских интерфейсов (UI). В отличие от фреймворков (например, Angular), React отвечает только за <strong>представление</strong> (View) в архитектуре MVC.</p><h4 class="src-shared-ui-TextEditor-TextEditor-module__editor-heading--Bcqt5">&nbsp;</h4><h4 class="src-shared-ui-TextEditor-TextEditor-module__editor-heading--Bcqt5">Ключевые особенности React:</h4><p>&nbsp;</p><p><strong>Компонентный подход</strong><br>React позволяет разбивать интерфейс на небольшие независимые части (компоненты), которые можно переиспользовать. Компоненты упрощают разработку и поддержку кода.</p><p>Пример:</p><pre class="src-shared-ui-TextEditor-TextEditor-module__code-block--WLFIG"><code class="language-javascript">function Button({ label }) {\n    return &lt;button&gt;{label}&lt;/button&gt;;\n}\nfunction App() {\n  return (\n    &lt;div&gt;\n          &lt;Button label="Кликни меня" /&gt;\n    &lt;/div&gt;\n  );\n}</code></pre><p><strong>Виртуальный DOM</strong><br>React использует <strong>виртуальный DOM</strong> (виртуальное представление дерева DOM), чтобы минимизировать операции с реальным DOM, которые могут быть дорогими по производительности. При изменении состояния React обновляет только изменённые части страницы, а не всё дерево.</p><p>&nbsp;</p><p><strong>Однонаправленный поток данных</strong><br>Данные передаются сверху вниз (от родительских компонентов к дочерним) через свойства (props). Это делает код предсказуемым и легче тестируемым.</p><p>&nbsp;</p><p><strong>JSX</strong><br>React использует синтаксис JSX, который позволяет писать HTML внутри JavaScript. Это упрощает создание интерфейсов, объединяя разметку и логику.</p><p>Пример:</p><pre class="src-shared-ui-TextEditor-TextEditor-module__code-block--WLFIG"><code class="language-javascript">function Greeting() {\n  const name = "Мир";\n  return &lt;h1&gt;Привет, {name}!&lt;/h1&gt;;\n}</code></pre><p><strong>Состояние (State) и хуки (Hooks)</strong><br>React предлагает гибкие механизмы для работы с состоянием. Хуки, такие как <code class="src-shared-ui-TextEditor-TextEditor-module__inline-code--Tyh7n">useState</code> и <code class="src-shared-ui-TextEditor-TextEditor-module__inline-code--Tyh7n">useEffect</code>, позволяют добавлять состояние и управлять жизненным циклом компонента без использования классов.</p><p>&nbsp;</p><p>Пример:</p><pre class="src-shared-ui-TextEditor-TextEditor-module__code-block--WLFIG"><code class="language-javascript">import React, { useState } from "react";\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    &lt;div&gt;\n      &lt;p&gt;Счётчик: {count}&lt;/p&gt;\n      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;Увеличить&lt;/button&gt;\n    &lt;/div&gt;\n  );\n}</code></pre><p><strong>React Developer Tools</strong><br>React имеет мощные инструменты для дебага, которые помогают анализировать компоненты и их состояния.</p><h4 class="src-shared-ui-TextEditor-TextEditor-module__editor-heading--Bcqt5">&nbsp;</h4><h4 class="src-shared-ui-TextEditor-TextEditor-module__editor-heading--Bcqt5">Почему React популярен?</h4><p><strong>- Быстродействие</strong>: Благодаря виртуальному DOM.</p><p><strong>- Масштабируемость</strong>: Легко строить сложные приложения из компонентов.</p><p><strong>- Сообщество</strong>: Большое количество готовых библиотек и решений.</p><p><strong>- Инструменты</strong>: Широкая экосистема, включая Next.js для SSR, React Native для мобильных приложений.</p><h4 class="src-shared-ui-TextEditor-TextEditor-module__editor-heading--Bcqt5">&nbsp;</h4><h4 class="src-shared-ui-TextEditor-TextEditor-module__editor-heading--Bcqt5">Где используется React?</h4><p>&nbsp;</p><p>React применяется для:</p><p>- Одностраничных приложений (SPA).</p><p>- Сложных интерфейсов (например, панели администратора).</p><p>- Мобильных приложений через React Native.</p><p>&nbsp;</p><p>Пример React-приложения (корзина покупок):</p><pre class="src-shared-ui-TextEditor-TextEditor-module__code-block--WLFIG"><code class="language-javascript">function CartItem({ item, onRemove }) {\n  return (\n    &lt;div&gt;\n      &lt;span&gt;{item.name}&lt;/span&gt;\n      &lt;button onClick={() =&gt; onRemove(item.id)}&gt;Удалить&lt;/button&gt;\n    &lt;/div&gt;\n  );\n}\n\nfunction ShoppingCart() {\n  const [items, setItems] = useState([\n    { id: 1, name: "Яблоко" },\n    { id: 2, name: "Банан" },\n  ]);\n\n  const removeItem = (id) =&gt; setItems(items.filter((item) =&gt; item.id !== id));\n\n  return (\n    &lt;div&gt;\n      {items.map((item) =&gt; (\n        &lt;CartItem key={item.id} item={item} onRemove={removeItem} /&gt;\n      ))}\n    &lt;/div&gt;\n  );\n}</code></pre><p>React упрощает разработку динамичных, производительных интерфейсов, что делает его выбором номер один для современных веб-приложений.</p><p>&nbsp;</p>',
    shortAnswer:
      '<p>React — это библиотека JavaScript для создания интерфейсов. Она позволяет разработчикам строить приложения из компонентов, которые можно переиспользовать. Ключевые особенности: использование <strong>виртуального DOM</strong> для высокой производительности, <strong>однонаправленный поток данных</strong> (unidirectional data flow), компонентный подход, а также поддержка <strong>хуков</strong> для работы с состоянием и эффектами.</p><pre class="src-shared-ui-TextEditor-TextEditor-module__code-block--WLFIG"><code class="language-typescriptreact">const CustomCodeBlock = CodeBlockLowlight.extend({\n\taddInputRules() {\n\t\treturn [\n\t\t\ttextblockTypeInputRule({\n\t\t\t\tfind: /^```([a-z0-9+#/\\\\-]*)?[\\s\\n]$/i,\n\t\t\t\ttype: this.type,\n\t\t\t\tgetAttributes: (match) =&gt; ({\n\t\t\t\t\tlanguage: match[1] || \'plaintext\',\n\t\t\t\t}),\n\t\t\t}),\n\t\t];\n\t},\n\n\taddNodeView() {\n\t\treturn createCodeBlockNodeView(styles, lowlight);\n\t},\n});</code></pre><p>Пример простого компонента:</p><pre class="src-shared-ui-TextEditor-TextEditor-module__code-block--WLFIG"><code class="language-javascript">const CustomCodeBlock = CodeBlockLowlight.extend({\n\taddInputRules() {\n\t\treturn [\n\t\t\ttextblockTypeInputRule({\n\t\t\t\tfind: /^```([a-z0-9+#/\\\\-]*)?[\\s\\n]$/i,\n\t\t\t\ttype: this.type,\n\t\t\t\tgetAttributes: (match) =&gt; ({\n\t\t\t\t\tlanguage: match[1] || \'plaintext\',\n\t\t\t\t}),\n\t\t\t}),\n\t\t];\n\t},\n\n\taddNodeView() {\n\t\treturn createCodeBlockNodeView(styles, lowlight);\n\t},\n});</code></pre>',
    status: "public",
    rate: 3,
    complexity: 4,
    createdAt: "2024-10-10T13:10:58.311Z",
    updatedAt: "2025-05-28T05:13:34.863Z",
    createdById: "24f1c404-6665-42d1-8da9-2cd476af107f",
    updatedById: "0a1438a3-1776-43b4-9a95-e60ee6573903",
    createdBy: {
      id: "24f1c404-6665-42d1-8da9-2cd476af107f",
      username: "aleksejerchenko113",
    },
    updatedBy: {
      id: "0a1438a3-1776-43b4-9a95-e60ee6573903",
      username: "ruslankuyanec",
    },
    questionSpecializations: [
      {
        id: 11,
        title: "React Frontend Developer",
        description:
          "React-разработчик — это инженер-программист или веб-разработчик, который занимается фронтендом или дизайном пользовательских интерфейсов, используя библиотеку React",
        imageSrc: null,
        createdAt: "2024-10-03T09:08:10.605Z",
        updatedAt: "2024-12-13T15:29:16.935Z",
      },
    ],
    questionSkills: [
      {
        id: 6,
        title: "React",
        description:
          "React - библиотека JavaScript для создания пользовательских интерфейсов. Поддерживается Facebook и сообществом разработчиков и компаний.",
        imageSrc:
          "https://e5e684b1-4a6a-4be5-b7ee-b2b678239d61.selstorage.ru/skill/dc42634d-468b-427d-9f7a-ea6d501911c5",
        createdAt: "2024-06-04T13:40:16.610Z",
        updatedAt: "2025-01-18T19:39:52.495Z",
        specializations: [
          {
            id: 11,
            title: "React Frontend Developer",
            description:
              "React-разработчик — это инженер-программист или веб-разработчик, который занимается фронтендом или дизайном пользовательских интерфейсов, используя библиотеку React",
            imageSrc: null,
            createdAt: "2024-10-03T09:08:10.605Z",
            updatedAt: "2024-12-13T15:29:16.935Z",
          },
        ],
      },
    ],
  },
  {
    id: 89,
    title: "Что такое prop drilling?",
    description:
      "Этот вопрос проверяет знание концепции prop drilling в React, которая описывает передачу данных через множество уровней вложенности компонентов.",
    code: null,
    imageSrc: null,
    keywords: ["props"],
    longAnswer:
      '<p>В React данные передаются от родителя к дочерним компонентам через пропсы. Иногда возникает ситуация, когда данные нужны компоненту, находящемуся глубоко в иерархии, но на пути к этому компоненту их нужно передавать через несколько промежуточных компонентов, которые сами эти данные не используют. Это и называется <strong>prop drilling</strong>.</p><p>Пример проблемы prop drilling</p><pre class="src-shared-ui-TextEditor-TextEditor-module__code-block--WLFIG"><code class="language-plaintext">function App() {\n\tconst user = { name: "Иван" };\n\treturn &lt;Parent user={user} /&gt;;\n}\nfunction Parent({ user }) {\n\treturn &lt;Child user={user} /&gt;;\n}\nfunction Child({ user }) {\n\treturn &lt;Grandchild user={user} /&gt;;\n}\nfunction Grandchild({ user }) {\n\treturn &lt;h1&gt;Привет, {user.name}!&lt;/h1&gt;;\n}</code></pre><p>В данном примере компонент <code class="src-shared-ui-TextEditor-TextEditor-module__inline-code--Tyh7n">Parent</code> и <code class="src-shared-ui-TextEditor-TextEditor-module__inline-code--Tyh7n">Child</code> только "прокидывают" данные <code class="src-shared-ui-TextEditor-TextEditor-module__inline-code--Tyh7n">user</code>, но сами их не используют. Это делает код менее читаемым и увеличивает сложность при рефакторинге.</p><h3 class="src-shared-ui-TextEditor-TextEditor-module__editor-heading--Bcqt5">&nbsp;Почему это проблема?</h3><ul class="src-shared-ui-TextEditor-TextEditor-module__bullet-list--Q124z"><li class="src-shared-ui-TextEditor-TextEditor-module__list-item--V_CAg"><p><strong>Избыточность кода</strong>: Промежуточные компоненты получают пропсы, которые им не нужны.</p></li><li class="src-shared-ui-TextEditor-TextEditor-module__list-item--V_CAg"><p><strong>Сложность поддержки</strong>: При изменении структуры компонентов необходимо обновлять каждый уровень.</p></li><li class="src-shared-ui-TextEditor-TextEditor-module__list-item--V_CAg"><p><strong>Сложность масштабирования</strong>: При глубокой вложенности или множестве данных управление пропсами становится неудобным.</p></li></ul><h3 class="src-shared-ui-TextEditor-TextEditor-module__editor-heading--Bcqt5">Как избежать prop drilling?</h3><ul class="src-shared-ui-TextEditor-TextEditor-module__bullet-list--Q124z"><li class="src-shared-ui-TextEditor-TextEditor-module__list-item--V_CAg"><p><strong>Context API</strong><br>React предоставляет <code class="src-shared-ui-TextEditor-TextEditor-module__inline-code--Tyh7n">Context API</code> для передачи данных через дерево компонентов, минуя промежуточные уровни.<br>Пример:</p></li></ul><pre class="src-shared-ui-TextEditor-TextEditor-module__code-block--WLFIG"><code class="language-plaintext">import React, { createContext, useContext } from "react";\nconst UserContext = createContext();\nfunction App() {\n\tconst user = { name: "Иван" };\n\treturn (\n\t\t&lt;UserContext.Provider value={user}&gt;\n\t\t\t&lt;Parent /&gt;\n\t\t&lt;/UserContext.Provider&gt;\n\t);\n}\nfunction Parent() {\n\treturn &lt;Child /&gt;;\n}\nfunction Child() {\n\treturn &lt;Grandchild /&gt;;\n}\nfunction Grandchild() {\n\tconst user = useContext(UserContext);\n\treturn &lt;h1&gt;Привет, {user.name}!&lt;/h1&gt;;\n}</code></pre><ul class="src-shared-ui-TextEditor-TextEditor-module__bullet-list--Q124z"><li class="src-shared-ui-TextEditor-TextEditor-module__list-item--V_CAg"><p><strong>Управление состоянием</strong><br>Использование библиотек, таких как Redux или Zustand, помогает централизовать состояние приложения и избежать прямой передачи данных через пропсы.</p></li><li class="src-shared-ui-TextEditor-TextEditor-module__list-item--V_CAg"><p><strong>Компоненты высшего порядка (HOC) и рендер-пропсы</strong><br>Эти подходы позволяют передавать данные только туда, где они нужны, без вмешательства в промежуточные компоненты.</p></li></ul><h3 class="src-shared-ui-TextEditor-TextEditor-module__editor-heading--Bcqt5">Когда prop drilling допустим?</h3><p>Prop drilling может быть нормальным решением, если данные передаются через 1–2 уровня и архитектура приложения остаётся простой. Однако в больших и сложных приложениях этот подход становится неэффективным.</p><p>&nbsp;<strong>Prop drilling</strong> — это естественная часть React, но с увеличением сложности приложения важно избегать чрезмерной вложенности пропсов. Для решения проблемы можно использовать <code class="src-shared-ui-TextEditor-TextEditor-module__inline-code--Tyh7n">Context API</code>, централизованное управление состоянием или другие архитектурные подходы, которые упрощают передачу данных.</p>',
    shortAnswer:
      '<p><strong>Prop drilling</strong> — это процесс передачи данных от родительского компонента к дочерним через "пропсы", даже если промежуточные компоненты не используют эти данные. Это может усложнить код, особенно при глубокой вложенности компонентов. Проблему prop drilling можно решить, используя такие подходы, как <code class="src-shared-ui-TextEditor-TextEditor-module__inline-code--Tyh7n">Context API</code> или библиотеки управления состоянием (например, Redux).</p><p>&nbsp;Пример:</p><pre class="src-shared-ui-TextEditor-TextEditor-module__code-block--WLFIG"><code class="language-plaintext">function App() {\n\treturn &lt;Parent data="Привет" /&gt;;\n}\nfunction Parent({ data }) {\n\treturn &lt;Child data={data} /&gt;;\n}\nfunction Child({ data }) {\n\treturn &lt;Grandchild data={data} /&gt;;\n}\nfunction Grandchild({ data }) {\n\treturn &lt;h1&gt;{data}&lt;/h1&gt;;\n}</code></pre>',
    status: "public",
    rate: 3,
    complexity: 5,
    createdAt: "2024-10-06T07:21:33.965Z",
    updatedAt: "2025-06-04T08:42:37.337Z",
    createdById: "0a1438a3-1776-43b4-9a95-e60ee6573903",
    updatedById: "0a1438a3-1776-43b4-9a95-e60ee6573903",
    createdBy: {
      id: "0a1438a3-1776-43b4-9a95-e60ee6573903",
      username: "ruslankuyanec",
    },
    updatedBy: {
      id: "0a1438a3-1776-43b4-9a95-e60ee6573903",
      username: "ruslankuyanec",
    },
    questionSpecializations: [
      {
        id: 11,
        title: "React Frontend Developer",
        description:
          "React-разработчик — это инженер-программист или веб-разработчик, который занимается фронтендом или дизайном пользовательских интерфейсов, используя библиотеку React",
        imageSrc: null,
        createdAt: "2024-10-03T09:08:10.605Z",
        updatedAt: "2024-12-13T15:29:16.935Z",
      },
    ],
    questionSkills: [
      {
        id: 6,
        title: "React",
        description:
          "React - библиотека JavaScript для создания пользовательских интерфейсов. Поддерживается Facebook и сообществом разработчиков и компаний.",
        imageSrc:
          "https://e5e684b1-4a6a-4be5-b7ee-b2b678239d61.selstorage.ru/skill/dc42634d-468b-427d-9f7a-ea6d501911c5",
        createdAt: "2024-06-04T13:40:16.610Z",
        updatedAt: "2025-01-18T19:39:52.495Z",
        specializations: [
          {
            id: 11,
            title: "React Frontend Developer",
            description:
              "React-разработчик — это инженер-программист или веб-разработчик, который занимается фронтендом или дизайном пользовательских интерфейсов, используя библиотеку React",
            imageSrc: null,
            createdAt: "2024-10-03T09:08:10.605Z",
            updatedAt: "2024-12-13T15:29:16.935Z",
          },
        ],
      },
    ],
  },
];

export const mockQuestionsList: GetQuestionsList = {
  data: mockQuestions,
};
