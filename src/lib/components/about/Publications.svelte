<script>
	let publications = [
		{
			title:
				'The barley pan-genome reveals the hidden legacy of mutation breeding. Nature 588 (2020) 284-289.',
			authors:
				'Jayakodi M, Padmarasu S, Haberer G, Bonthala V S, Gundlach H, Monat C, Lux T, Kamal N, Lang D, Himmelbach A, Ens J, Zhang X Q, Angessa T T, Zhou G, Tan C, Hill C, Wang P, Schreiber M, Boston L B, Plott C, Jenkins J, Guo Y, Fiebig A, Budak H, Xu D, Zhang J, Wang C, Grimwood J, Schmutz J, Guo G, Zhang G, Mochida K, Hirayama T, Sato K, Chalmers K J, Langridge P, Waugh R, Pozniak C J, Scholz U, Mayer K F X, Spannagl M, Li C, Mascher M, Stein N',
			doi: 'https://doi.org/10.1038/s41586-020-2947-8'
		},
		{
			title:
				'Building pan-genome infrastructures for crop plants and their use in association genetics. DNA Res. 28 (2021) dsaa030.',
			authors: 'Jayakodi M, Schreiber M, Stein N, Mascher M',
			doi: 'https://doi.org/10.1093/dnares/dsaa030'
		},
		{
			title:
				'Long-read sequence assembly: a technical evaluation in barley. Plant Cell 33 (2021) 1888-1906.',
			authors:
				'Mascher M, Wicker T, Jenkins J, Plott C, Lux T, Koh C S, Ens J, Gundlach H, Boston L B, Tulpová Z, Holden S, Hernández-Pinzón I, Scholz U, Mayer K F X, Spannagl M, Pozniak C J, Sharpe A G, Šimková H, Moscou M J, Grimwood J, Schmutz J, Stein N',
			doi: 'https://doi.org/10.1093/plcell/koab077'
		},
		{
			title:
				"Chromosome-scale assembly of wild barley accession 'OUH602'. G3 Genes Genom. Genet. 11 (2021) jkab244.",
			authors: 'Sato K, Mascher M, Himmelbach A, Haberer G, Spannagl M, Stein N',
			doi: 'https://doi.org/10.1093/g3journal/jkab244'
		},
		{
			title:
				'A genome assembly of the barley transformation reference cultivar Golden Promise. G3-Genes Genom. Genet. 10 (2020) 1823-1827.',
			authors:
				'Schreiber M, Mascher M, Wright J, Padmarasu S, Himmelbach A, Heavens D, Milne L, Clavijo B J, Stein N, Waugh R',
			doi: 'https://doi.org/10.1534/g3.119.401010'
		},
		{
			title:
				"Chromosome-scale assembly of barley Cv. 'Haruna Nijo' as a resource for barley genetics, DNA Research, 2022;, dsac001.",
			authors:
				'SAKKOUR, A, MASCHER, M, HIMMELBACH, A, HABERER, G, LUX, T, SPANNAGL, M, STEIN, N, KAWAMOTO, S, SATO, K',
			doi: 'https://doi.org/10.1093/dnares/dsac001'
		},
		{
			title:
				'PhenoApp: A mobile tool for plant phenotyping to record field and greenhouse observations [version 1; peer review: awaiting peer review]. F1000Research 2022, 11:12.',
			authors:
				'Röckel F, Schreiber T, Schüler D, Braun U, Krukenberg I, Schwander F, Peil A, Brandt C, Willner E, Gransow D, Scholz U, Kecke, S, Maul E, Lange M, Töpfer R',
			doi: 'https://doi.org/10.12688/f1000research.74239.1'
		}
	];
</script>

<table class="table">
	<tbody>
		{#each publications as publication}
			<tr class="hover:bg-base-300">
				<td>
					<a target="_blank" href={publication.doi}>
						<p class="font-semibold">{publication.title}</p>
						<p class="text-xs italic">{publication.authors}</p>
					</a>
				</td>
			</tr>
		{/each}
	</tbody>
</table>
