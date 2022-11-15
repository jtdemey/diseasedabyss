<script>
  import { onMount } from "svelte";

  let toc = [];

  onMount(() => {
    fetch("/docs")
      .then(res => res.json())
      .then(res => {
        if (!res.docs) {
          console.error(`API returned no docs; perhaps run "npm run build"?`);
          return;
        }
        toc = res.docs.map(doc => doc.doctitle);
      })
      .catch(err => console.error(err));
  });
</script>

<main>
  <h1>Diseased Abyss</h1>
  <hr />
  <h2>A world of piracy for D&D 5e</h2>
  {#each toc as sectionTitle}
    <p>{sectionTitle}</p>
  {/each}
</main>

<style>
  main {
    width: 100%;
    height: 100%;
    margin: 1rem;
    background: hsl(44, 56%, 80%);
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
</style>
