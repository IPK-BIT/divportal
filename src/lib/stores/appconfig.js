import { get, writable } from 'svelte/store';

export const token = writable('');

//TODO: Restructure to be buildable by yamlscript
export const appConfig = writable({
	crop: 'SHAPE',
	icon: '/favicon.png',
	title: 'SHAPE Phenotyping Portal',
	impressum: 'https://leibniz-ipk.de/impressum',
	description:
		'<p class="p-2">The SHAPE project is entering its third funding phase with the aim of completing the information of the barley pan genome \
		and making it available as a basic knowledge base for breeding and research. The pan-genome describes the complete, non-redundant genome \
		information including all possible differences that can occur in the genome of any two or more individuals of the same species. This new \
		database for barley, including the spectrum of single nucleotide and structural variations (SNV, SV), will in future help to link plant \
		breeding at the highest resolution with data on natural genetic diversity, as well as traits for disease resistance or general agronomic \
		importance. As one of the much needed knowledge bases, the barley pan-genome will help to gain a systematic understanding of simple and \
		complex trait formation as a function of time and environment. As a result, contemporary barley breeding will transform into a new discipline \
		of systems analysis and modelling in the era of big data.</p>\
		<b class="flex justify-center">Sub-projects</b> \
		<div class="p-2 space-y-1"> \
		<p>Essential work begun in project phase P1 and continued in SHAPE-P2 will be completed and/or supplemented by central components: </p>\
		<ul> \
		<li class="pl-2">(i) creation of a bridging pan-genome from at least 20 elite cultivars with a central role in the phylogenetic tree of Central European barley breeding, </li>\
		<li class="pl-2">(ii) genome-wide annotation of all >70 Hifi chromosome-scale genome assemblies from SHAPE-P2 as well as the newly created 20 assemblies from SHAPE-P3, </li>\
		<li class="pl-2">(iii) integration, visualisation and targeted utilisation of the barley pan-genome data for research and breeding, </li>\
		<li class="pl-2">(iv) validation of possible new resistance genes not used in elite breeding in biparental crosses, </li>\
		<li class="pl-2">(v) further development of the core collection built up in P1 and P2 into trait-specific core collections. </li>\
		</ul> \
		</div> ',
	theme: 'ipk',
	servers: [
		{
			url: 'https://mira.ipk-gatersleben.de/bridge',
			name: 'BRIDGE'
		},
		{
			url: 'https://mira.ipk-gatersleben.de/shape',
			name: 'SHAPE',
			auth: 'basic'
		},
		{
			url: 'https://mira.ipk-gatersleben.de/test',
			name: 'Test Server'
		}
	],
	images: {
		locations: ['/carousel/image1.png', '/carousel/image2.png', '/carousel/image3.png'],
		copyright: 'Ronja Wonneberger'
	},
	contact: {
		logo: '/partners/IPK.png',
		email: 'feser@ipk-gatersleben.de',
		name: 'Manuel Feser',
		affiliation: 'IPK Gatersleben, Working Group BIT',
		address: 'Corrensstraße 3, D-06466 Stadt Seeland, OT Gatersleben, Germany'
	}
});

export async function init() {
	let theme = localStorage.getItem('theme');
	if (theme) {
		document.documentElement.setAttribute('data-theme', theme);
	} else {
		localStorage.setItem('theme', get(appConfig).theme);
	}
}
