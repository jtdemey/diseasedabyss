<script>
  import { onMount } from "svelte";

  export let html = ""; 

  let articleRef;

  onMount(() => {
    console.log(html);
    const element = document.createElement("section");
    element.innerHTML = html;
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
