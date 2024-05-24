<script>
    import { onMount } from 'svelte';
    
    let browser;
    onMount(()=>{
        // @ts-ignore
        browser = divbrowse.startApp('divbrowse', {
            apiBaseUrl: 'https://divbrowse.ipk-gatersleben.de/shape_core1000_and_cultivars',
        });
    })
</script>

<div id="divbrowse"/>