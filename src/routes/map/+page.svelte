<script>
	import { onMount } from 'svelte';

	onMount(() => {
		// @ts-ignore
		const map = L.map('map').setView([51.82215, 11.28661], 5);

		// @ts-ignore
		L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 19,
			attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		}).addTo(map);

		// @ts-ignore
		L.marker([51.82215, 11.28661])
			.addTo(map)
			.bindPopup('<b>A</b> pretty CSS3 popup.<br> Easily customizable.');
	});
</script>

<section class="p-4 bg-base-300">
	<div class="p-2 rounded-md w-[48rem] border border-neutral-950 h-[24rem]" id="map" />
</section>
