<script>
	import { api } from '$lib/stores/apiconfig';
	import { appConfig } from '$lib/stores/appconfig';
	import { params } from '$lib/stores/gwas';
	import { onMount } from 'svelte';
	onMount(() => {
		$params.baseURL = $api.base_url;
		const server = $appConfig.servers.filter((server) => server.url == $api.base_url);
		if (server[0].auth) {
			$params.authorization = $api.basic_auth;
		}
	});
</script>

<div class="p-8">
	<section class="mb-6">
		<div class="divider divider-neutral text-lg font-semibold select-none">
			Connection Parameters
		</div>
		<table class="table">
			<tbody>
				<tr>
					<th>Base URL</th>
					<td>{$params.baseURL}</td>
				</tr>
				<tr>
					<th>Authorization</th>
					<td>{$params.authorization}</td>
				</tr>
			</tbody>
		</table>
	</section>

	<section class="mb-6">
		<div class="divider divider-neutral text-lg font-semibold select-none">Germplasm Selection</div>
		<table class="table">
			<tbody>
				<tr>
					<th>Germplasm List</th>
					<td>{$params.prefix}/{$params.list}</td>
				</tr>
			</tbody>
		</table>
	</section>

	<section class="mb-6">
		<div class="divider divider-neutral text-lg font-semibold select-none">Phenotyping Filters</div>
		<table class="table">
			<tbody>
				<tr>
					<th>Observation Variable</th>
					<td>{$params.variable}</td>
				</tr>
				<tr>
					<th>Include Outliers</th>
					<td>{$params.includeOutliers}</td>
				</tr>
			</tbody>
		</table>
	</section>

	<section>
		<div class="divider divider-neutral text-lg font-semibold select-none">Genotyping Filters</div>
		<table class="table">
			<tbody>
				<tr>
					<th>VCF File</th>
					<td>{$params.vcfFile}</td>
				</tr>
				<tr>
					<th>Filter MAF</th>
					<td>{$params.filterMAF}</td>
				</tr>
				<tr>
					<th>Filter Heterozygosity</th>
					<td>{$params.filterHeterozygous}</td>
				</tr>
				<tr>
					<th>Filter Missing Data</th>
					<td>{$params.filterMissing}</td>
				</tr>
			</tbody>
		</table>
	</section>
</div>
