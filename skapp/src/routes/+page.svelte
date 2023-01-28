<script>
  import { createEventDispatcher, onMount } from "svelte";
  import DarkModeToggle from "$lib/components/DarkModeToggle.svelte";
  import TableOfContents from "$lib/components/TableOfContents.svelte";
  import TextSection from "$lib/components/TextSection.svelte";

  let darkMode = false;
  let sectionText = [];
  let toc = [];

  const dispatch = createEventDispatcher();

  const onThemeChange = () => {
    darkMode = !darkMode;
    console.log(darkMode);
  };

  onMount(() => {
    fetch("/docs")
      .then(res => res.json())
      .then(res => {
        if (!res.docs) {
          console.error(`API returned no docs; perhaps run "npm run build"?`);
          return;
        }
        toc = res.docs.map(doc => doc.doctitle.substring(2, doc.doctitle.length - 3));
        sectionText = res.docs.map(doc => doc.doctext);
      })
      .catch(err => console.error(err));
  });
</script>

<main class={darkMode ? "dark" : "light"}>
  <DarkModeToggle {darkMode} on:themechange={onThemeChange} />
  <h1>Diseased Abyss</h1>
  <hr />
  <h2>A world of piracy for D&D 5e</h2>
  <TableOfContents {darkMode} {toc} />
  {#each sectionText as html}
    <TextSection {darkMode} {html} />
  {/each}
</main>

<style>
  main {
    min-height: 100%;
    padding: 1rem 2.3rem;
    transition: background 0.2s;
  }

  h1 {
    margin: 2rem 0;
    padding: 0.4rem 0.8rem;
    font-size: 2rem;
    text-align: center;
  }

  hr {
    width: 30%;
    margin: auto;
  }

  h2 {
    margin: 2rem 0;
    text-align: center;
  }

  @media all and (min-width: 900px) {
    main {
      padding: 1rem 22%;
    }
  }
</style>
