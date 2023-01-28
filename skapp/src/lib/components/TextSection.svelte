<script>
  import { onMount } from "svelte";

  export let html = "";

  let articleRef;

  onMount(() => {
    const element = document.createElement("section");
    element.classList.add("text-section");
    element.innerHTML = html;
    const line = document.createElement("hr");
    element.appendChild(line);
    articleRef.appendChild(element);
  });
</script>

<article bind:this={articleRef}>
</article>

<style>
  article {
    width: 100%;
    margin: 1rem 0;
    line-height: 1.35rem;
  }
</style>
