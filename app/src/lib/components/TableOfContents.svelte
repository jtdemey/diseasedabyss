<script>
  export let toc = [];

  const formatTitle = (title, index) => `${index + 1}. ${title}`;
</script>

<section>
  {#each toc as sectionTitle, i}
    <a href="#{sectionTitle}">
      <p>{formatTitle(sectionTitle, i)}</p>
    </a>
  {/each}
</section>

<style>
  p {
    padding: 0.25rem 1rem;
    font-size: 1.1rem;
  }
</style>
