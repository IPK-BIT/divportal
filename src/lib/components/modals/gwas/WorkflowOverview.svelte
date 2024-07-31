<script>
	// @ts-nocheck

	import { definition } from '$lib/stores/gwas';

	let workflow = $definition;
</script>

<div class="p-8">
	<section>
		<div class="divider divider-neutral text-lg font-semibold select-none">
			{workflow.procedureName}
		</div>
		<div>
			<p>{workflow.description}</p>
			<a
				class="link text-sm flex justify-end italic"
				href={workflow.documentationURL}
				target="_blank">{workflow.documentationURL}</a
			>
		</div>
	</section>
</div>
