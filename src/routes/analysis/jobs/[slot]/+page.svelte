<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    let slot;
    let job;
    onMount(async () => {
        slot = $page.params.slot;
        console.log(slot);

        const response = await fetch(`https://divportal.ipk-gatersleben.de/brapi/v2/jobs/${slot}`);
        job = (await response.json()).result;

        console.log(job);
    });
</script>

