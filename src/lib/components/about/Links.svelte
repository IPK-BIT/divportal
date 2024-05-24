<script>
	let tools = [
		{
			name: 'BRIDGE',
			description: 'Visual analytics tool suite for barley genebenk genomics.',
			link: 'https://bridge.ipk-gatersleben.de'
		},
		{
			name: 'Barley Genome',
			description:
				'Browse the Barley Genome on Genome Structure, Genes, molecular Markers or transposable Elements.',
			link: 'https://apex.ipk-gatersleben.de/apex/f?p=284:10::::::'
		},
		{
			name: 'Barley Pangenome',
			description: 'Blast the Barley Pangenome using Webblast Galaxy.',
			link: 'https://galaxy-web.ipk-gatersleben.de/'
		},
		{
			name: 'DivBrowse',
			description: 'SNP Browser mapping accessions against Morex.',
			link: 'https://divbrowse.ipk-gatersleben.de/shape'
		},
		{
			name: 'PanBarlex',
			description: 'Explore Genes and Orthologs of the Barley Pangenome.',
			link: 'https://panbarlex.ipk-gatersleben.de/'
		}
	];
</script>

<table class="table">
	<tbody>
		{#each tools as tool}
			<tr class="hover:bg-base-300">
				<td>
					<a target="_blank" href={tool.link}>
						<p class="font-semibold">{tool.name}</p>
						<p class="text-xs italic">{tool.description}</p>
					</a>
				</td>
			</tr>
		{/each}
	</tbody>
</table>
