<script>
  import { onMount } from "svelte";
  import DarkModeToggle from "$lib/components/DarkModeToggle.svelte";
  import TableOfContents from "$lib/components/TableOfContents.svelte";
  import TextSection from "$lib/components/TextSection.svelte";

  let sectionText = [];
  let toc = [];

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

<main>
  <DarkModeToggle />
  <h1>Diseased Abyss</h1>
  <hr />
  <h2>A world of piracy for D&D 5e</h2>
  <TableOfContents {toc} />
  {#each sectionText as html}
    <TextSection {html} />
  {/each}
</main>

<style>
  main {
    min-height: 100%;
    padding: 1rem 2.3rem;
    background: hsl(44, 56%, 80%);
  }

  h1 {
    margin: 2rem 0;
    padding: 0.4rem 0.8rem;
    color: #3a1906;
    font-size: 2rem;
    text-align: center;
  }

  hr {
    width: 30%;
    margin: auto;
  }

  h2 {
    margin: 2rem 0;
    color: #3a1906;
    text-align: center;
  }
</style>
