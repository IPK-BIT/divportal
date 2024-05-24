<script>
	import { appConfig } from '$lib/stores/appconfig';
</script>

<footer class="bg-base-300 py-4 mt-auto">
	<div class="container mx-auto px-4">
		<div class="flex justify-between">
			<div class="text-sm">
				© 2024 <a target="_blank" href="https://leibniz-ipk.de" class="link link-primary"
					>Leibniz Institute of Plant Genetics and Crop Plant Research (IPK)</a
				>. All rights reserved.
			</div>
			<nav>
				<ul class="flex space-x-4">
					<li><a href="/about" class="hover:text-gray-600">About</a></li>
					<li><a href="/contact" class="hover:text-gray-600">Contact</a></li>
					<li>
						<a href={$appConfig.impressum} class="hover:text-gray-600">Impressum</a>
					</li>
				</ul>
			</nav>
		</div>
	</div>
</footer>
