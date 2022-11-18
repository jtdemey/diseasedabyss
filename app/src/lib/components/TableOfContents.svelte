<script>
  export let toc = [];

  const formatTitle = (title, index) => `${index + 1}. ${title.replace("_", " ")}`;
</script>

<section>
  <h2>Table of Contents</h2>
  <h3>Click to navigate to section</h3>
  {#each toc as sectionTitle, i}
    <a href="#{sectionTitle.toLowerCase()}">
      <p>{formatTitle(sectionTitle, i)}</p>
    </a>
  {/each}
</section>

<style>
  h2 {
    padding: 0.4rem 0;
    font-size: 1.5rem;
  }

  h3 {
    padding: 0 0 0.8rem;
    font-size: 1.15rem;
  }

  p {
    padding: 0.25rem 1rem;
    font-size: 1.1rem;
    text-decoration: underline;
  }
</style>
