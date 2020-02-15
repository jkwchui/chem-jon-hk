# Organic Chemistry

## Sequence

<mermaid>
graph TB
	F0("Structural formula") --> F1("Simplified / Condensed Structural Formula")
	subgraph Introductions
		SB4A("Lewis str (sans excp)") --> O1
		F1 --> O1("Isomers & Homologous Series")
		F1 --> O2A("Mol class names I")
		O1 --> O2A
		O2A --> O2B("Mol class names II")
		O2B --> O3("FG ID")
		O2B --> O4("FG names")
		O3 --> O5A("1/2/3 C, N")
		O5A --- O5B("1/2/3 OH, X")
	end
	subgraph D - Med chem
		O3 --- D1("Common med chem mol")
	end
	subgraph IUPAC Nomenclature
		F1 --> N0("Chain length")
		O1 --> N0
		N0 --> N1A("Chain numbering")
		N1B("Halo/Alkyl prefix") --> N1A
		O4 --> N1B
		O4 --> N2("FG suffix I")
		O3 --> N2
		O2B --> N2
		N2 --> N3("Multi-substituents")
		N3 --> N4A("Esters")
		N3 --> N4B("N,N-")
		N3 --> N5["OH, C=O prefix"]
	end
	SB4A --> Mech0("Curly arrows")
	subgraph Reactions
		Mech0 --> Ene1("Alkene - Sym Add")
		Ene1 --> Ene2("Alkene - asym add")
		O3 --> Ene1
		Ene2 --> EneHL("Markovnikov (HL)")
		O5A --> EneHL
		Mech0 --> SN2("SN2 mech (HL)")
		SN2 --> SN1("SN1 mech (HL)")
		O5B --> SN2
		O5B --> SN1
		Mech0 --> Rad("Free radical subst")
		O3 --> Rad
		Ene2 --> NucSub("Nucl-phil. sub (HL)")
		O3 --> NucSub
		O5B --> Ox1("OH oxidation - reflux")
		Ox1 --> Ox2("OH oxidation - dist")
		Ox2 --> RedHL1("Carbonyl/carboxyl red'n (HL)")
		NucSub --> RedHL2("Nitrobenzene red'n (HL)")
	end
	Kin0("6 - kinetic order") --> SN2
	Kin0 --> SN1
	Per1("Electronegativity") --> SN2
	Per1 --> SN1
	Red0("Redox") --> Ox1
	Red0 --> RedHL1
	subgraph Stereochemistry
	end
</mermaid>

Teaching simplified / condensed structural formula months ago --- takes a long time to mature.

## Naming organic compounds

Overview

@[vimeo](240626450)

Step-by-step nomenclature

@[vimeo](240692544)

Practice

|                              Q                              |                                  A                                   |
|:-----------------------------------------------------------:|:--------------------------------------------------------------------:|
| ![Simple](/image/practice/10-nomenclature_practice_1_Q.png) | ![Simple-Solution](/image/practice/10-nomenclature_practice_1_A.png) |

<Subsubtopic id='10.1.NoS1' type='Nature of Science' content='Serendipity and scientific discoveries—PTFE and superglue. (1.4)' />
<Subsubtopic id='10.1.NoS2' type='Nature of Science' content='Ethical implications—drugs, additives and pesticides can have harmful effects on both people and the environment. (4.5)' />
<Subsubtopic id='10.1.U1' type='Understandings' content='A homologous series is a series of compounds of the same family, with the • same general formula, which differ from each other by a common structural.' />
<Subsubtopic id='10.1.U2' type='Understandings' content='Structural formulas can be represented in full and condensed format.' />
<Subsubtopic id='10.1.U3' type='Understandings' content='Structural isomers are compounds with the same molecular formula but different arrangements of atoms.' />
<Subsubtopic id='10.1.U4' type='Understandings' content='Functional groups are the reactive parts of molecules.' />
<Subsubtopic id='10.1.U5' type='Understandings' content='Saturated compounds contain single bonds only and unsaturated compounds contain double or triple bonds.' />
<Subsubtopic id='10.1.U6' type='Understandings' content='Benzene is an aromatic, unsaturated hydrocarbon.' />
<Subsubtopic id='10.1.AS1' type='Applications and skills' content='Explanation of the trends in boiling points of members of a homologous series.' />
<Subsubtopic id='10.1.AS2' type='Applications and skills' content='Distinction between empirical, molecular and structural formulas.' />
<Subsubtopic id='10.1.AS3' type='Applications and skills' content='Identification of different classes: alkanes, alkenes, alkynes, halogenoalkanes, alcohols, ethers, aldehydes, ketones, esters, carboxylic acids, amines, amides, nitriles and arenes.' />
<Subsubtopic id='10.1.AS4' type='Applications and skills' content='Identification of typical functional groups in molecules eg phenyl, hydroxyl, carbonyl, carboxyl, carboxamide, aldehyde, ester, ether, amine, nitrile, alkyl, alkenyl and alkynyl.' />
<Subsubtopic id='10.1.AS5' type='Applications and skills' content='Construction of 3-D models (real or virtual) of organic molecules.' />
<Subsubtopic id='10.1.AS6' type='Applications and skills' content='Application of IUPAC rules in the nomenclature of straight-chain and branched - chain isomers.' />
<Subsubtopic id='10.1.AS7' type='Applications and skills' content='Identification of primary, secondary and tertiary carbon atoms in halogenoalkanes and alcohols and primary, secondary and tertiary nitrogen atoms in amines.' />
<Subsubtopic id='10.1.AS8' type='Applications and skills' content='Discussion of the structure of benzene using physical and chemical evidence.' />
<Subsubtopic id='10.1.G1' type='Guidance' content='Skeletal formulas should be discussed in the course.' />
<Subsubtopic id='10.1.G2' type='Guidance' content='The general formulas (eg CnH2n+2) of alkanes, alkenes, alkynes, ketones, alcohols, aldehydes and carboxylic acids should be known.' />
<Subsubtopic id='10.1.G3' type='Guidance' content='The distinction between class names and functional group names needs to be made. Eg for OH, hydroxyl is the functional group whereas alcohol is the class name.' />
<Subsubtopic id='10.1.G4' type='Guidance' content='The following nomenclature should be covered: i. non-cyclic alkanes and halogenoalkanes up to halohexanes. ii. alkenes up to hexene and alkynes up to hexyne. iii. compounds up to six carbon atoms (in the basic chain for nomenclature purposes) containing only one of the classes of functional groups: alcohols, ethers, aldehydes, halogenoalkanes, ketones, esters and carboxylic acids.' />
<Subsubtopic id='10.1.IM1' type='International-mindedness' content='A small proportion of nations have control over the world’s oil resources. The interdependence of the countries that are net importers and those that are net exporters is an important factor in shaping global policies and economic developments.' />
<Subsubtopic id='10.1.IM2' type='International-mindedness' content='The octane rating (octane number) can be described as a standard measure of the performance of the fuel used in cars and aircraft. Octane ratings often vary quite widely regionally throughout the globe, and are complicated by the fact that different countries use different means of expressing the values.' />
<Subsubtopic id='10.1.ToK1' type='Theory of Knowledge' content='The label “organic chemistry” originates from a misconception that a vital force was needed to explain the chemistry of life. Can you think of examples where vocabulary has developed from similar misunderstandings? Can and should language ever be controlled to eliminate such problems?' />
<Subsubtopic id='10.1.ToK2' type='Theory of Knowledge' content='Kekulé claimed that the inspiration for the cyclic structure of benzene came from a dream. What role do the less analytical ways of knowledge play in the acquisition of scientific knowledge?' />
<Subsubtopic id='10.1.Uz1' type='Utilization' content='Fractional distillation makes great use of many petrochemicals.' />
<Subsubtopic id='10.1.Uz2' type='Utilization' content='Dyes, pesticides, herbicides, explosives, soap, cosmetics, synthetic scents and flavourings.' />
<Subsubtopic id='10.1.Aims1' type='Aims' content='Aim 6: Either use model kits or suitable computer-generated molecular graphics programmes to construct three-dimensional models of a wide range of organic molecules.' />
<Subsubtopic id='10.1.Aims2' type='Aims' content='Aim 6: Experiments could include distillation to separate liquids or the use of a rotary evaporator to remove a solvent from a mixture.' />
<Subsubtopic id='10.1.Aims3' type='Aims' content='Aim 8: There are consequences in using fossil fuels as our main source of energy. Many products can be obtained from fossil fuels due to the inherently rich chemistry of carbon. This raises some fundamental questions—are fossil fuels too valuable to burn and how do they affect the environment? Who should be responsible for making decisions in this regard?' />
<Subsubtopic id='10.1.Aims4' type='Aims' content='Aim 8: Discuss the use of alcohols and biofuels as fuel alternatives to petrol (gasoline) and diesel.' />
<Subsubtopic id='10.2.NoS' type='Nature of Science' content='Use of data—much of the progress that has been made to date in the developments and applications of scientific research can be mapped back to key organic chemical reactions involving functional group interconversions. (3.1)' />
<Subsubtopic id='10.2.U1' type='Understandings' content='Alkanes have low reactivity and undergo free-radical substitution reactions.' />
<Subsubtopic id='10.2.U2' type='Understandings' content='Alkenes are more reactive than alkanes and undergo addition reactions. Bromine water can be used to distinguish between alkenes and alkanes.' />
<Subsubtopic id='10.2.U3' type='Understandings' content='Alcohols undergo nucleophilic substitution reactions with acids (also called esterification or condensation) and some undergo oxidation reactions.' />
<Subsubtopic id='10.2.U4' type='Understandings' content='Halogenoalkanes are more reactive than alkanes. They can undergo (nucleophilic) substitution reactions. A nucleophile is an electron-rich species containing a lone pair that it donates to an electron-deficient carbon.' />
<Subsubtopic id='10.2.U5' type='Understandings' content='Addition polymers consist of a wide range of monomers and form the basis of the plastics industry.' />
<Subsubtopic id='10.2.U6' type='Understandings' content='Benzene does not readily undergo addition reactions but does undergo electrophilic substitution reactions.' />
<Subsubtopic id='10.2.AS1' type='Applications and skills' content='Alkanes: Writing equations for the complete and incomplete combustion of hydrocarbons.' />
<Subsubtopic id='10.2.AS2' type='Applications and skills' content='Alkanes: Explanation of the reaction of methane and ethane with halogens in terms of a free-radical substitution mechanism involving photochemical homolytic fission.' />
<Subsubtopic id='10.2.AS3' type='Applications and skills' content='Alkenes: Writing equations for the reactions of alkenes with hydrogen and halogens and of symmetrical alkenes with hydrogen halides and water.' />
<Subsubtopic id='10.2.AS4' type='Applications and skills' content='Alkenes: Outline of the addition polymerization of alkenes.' />
<Subsubtopic id='10.2.AS5' type='Applications and skills' content='Alkenes: Relationship between the structure of the monomer to the polymer and repeating unit.' />
<Subsubtopic id='10.2.AS6' type='Applications and skills' content='Alcohols: Writing equations for the complete combustion of alcohols.' />
<Subsubtopic id='10.2.AS7' type='Applications and skills' content='Alcohols: Writing equations for the oxidation reactions of primary and secondary alcohols (using acidified potassium dichromate(VI) or potassium manganate(VII) as oxidizing agents). Explanation of distillation and reflux in the isolation of the aldehyde and carboxylic acid products.' />
<Subsubtopic id='10.2.AS8' type='Applications and skills' content='Alcohols: Writing the equation for the condensation reaction of an alcohol with a carboxylic acid, in the presence of a catalyst (eg concentrated sulfuric acid) to form an ester.' />
<Subsubtopic id='10.2.AS9' type='Applications and skills' content='Halogenoalkanes: Writing the equation for the substitution reactions of halogenoalkanes with aqueous sodium hydroxide.' />
<Subsubtopic id='10.2.G1' type='Guidance' content='Reference should be made to initiation, propagation and termination steps in free-radical substitution reactions. Free radicals should be represented by a single dot.' />
<Subsubtopic id='10.2.G2' type='Guidance' content='The mechanisms of SN1 and SN2 and electrophilic substitution reactions are not required.' />
<Subsubtopic id='10.2.IM1' type='International-mindedness' content='Methane is a greenhouse gas, and its release from ruminants in countries such as Brazil, Uruguay, Argentina and New Zealand contributes significantly to total greenhouse gas emissions. Landfills are also a source of methane, and technologies are developing in some countries to capture the gas as a source of energy for electricity and heat generation.' />
<Subsubtopic id='10.2.IM2' type='International-mindedness' content='Alcohol misuse is a growing problem in many countries and can have an impact on their economies and social structures.' />
<Subsubtopic id='10.2.Uz1' type='Utilization' content='Alkane usage as fuels.' />
<Subsubtopic id='10.2.Uz2' type='Utilization' content='The role of ethene in fruit ripening.' />
<Subsubtopic id='10.2.Uz3' type='Utilization' content='Alcohols, usage as fuel additives.' />
<Subsubtopic id='10.2.Uz4' type='Utilization' content='Alcohols, role in the breathalyser.' />
<Subsubtopic id='10.2.Uz5' type='Utilization' content='Esters, varied uses—perfumes, food flavourings, solvents, nitroglycerin, biofuels and painkillers.' />
<Subsubtopic id='10.2.Aims1' type='Aims' content='Aim 6: Experiments could include distinguishing between alkanes and alkenes, preparing soap and the use of gravity filtration, filtration under vacuum (using a Buchner flask), purification including recrystallization, reflux and distillation, melting point determination and extraction.' />
<Subsubtopic id='10.2.Aims2' type='Aims' content='Aim 8: Discuss the significance of the hydrogenation of alkenes in the food production including trans-fats as by-products.' />
<Subsubtopic id='20.1.NoS1' type='Nature of Science' content='Looking for trends and discrepancies—by understanding different types of organic reactions and their mechanisms, it is possible to synthesize new compounds with novel properties which can then be used in several applications. Organic reaction types fall into a number of different categories. (3.1)' />
<Subsubtopic id='20.1.NoS2' type='Nature of Science' content='Collaboration and ethical implications—scientists have collaborated to work on investigating the synthesis of new pathways and have considered the ethical and environmental implications of adopting green chemistry. (4.1, 4.5)' />
<Subsubtopic id='20.1.U1' type='Understandings' content='Nucleophilic Substitution Reactions: SN1 represents a nucleophilic unimolecular substitution reaction and SN2 represents a nucleophilic bimolecular substitution reaction. SN1 involves a carbocation intermediate. SN2 involves a concerted reaction with a transition state.' />
<Subsubtopic id='20.1.U2' type='Understandings' content='Nucleophilic Substitution Reactions: For tertiary halogenoalkanes the predominant mechanism is SN1 and for primary halogenoalkanes it is SN2. Both mechanisms occur for secondary halogenoalkanes.' />
<Subsubtopic id='20.1.U3' type='Understandings' content='Nucleophilic Substitution Reactions: The rate determining step (slow step) in an SN1 reaction depends only on the concentration of the halogenoalkane, rate = k[halogenoalkane]. For SN2, rate = k[halogenoalkane [nucleophile]. SN2 is stereospecific with an inversion of configuration at the carbon.' />
<Subsubtopic id='20.1.U4' type='Understandings' content='Nucleophilic Substitution Reactions: SN2 reactions are best conducted using aprotic, non-polar solvents and SN1 reactions are best conducted using protic, polar solvents.' />
<Subsubtopic id='20.1.U5' type='Understandings' content='Electrophilic Addition Reactions: An electrophile is an electron-deficient species that can accept electron pairs from a nucleophile. Electrophiles are Lewis acids.' />
<Subsubtopic id='20.1.U6' type='Understandings' content='Electrophilic Addition Reactions: Markovnikov’s rule can be applied to predict the major product in electrophilic addition reactions of unsymmetrical alkenes with hydrogen halides and interhalogens. The formation of the major product can be explained in terms of the relative stability of possible carbocations in the reaction mechanism.' />
<Subsubtopic id='20.1.U7' type='Understandings' content='Electrophilic Substitution Reactions: Benzene is the simplest aromatic hydrocarbon compound (or arene) and has a delocalized structure of π bonds around its ring. Each carbon to carbon bond has a bond order of 1.5. Benzene is susceptible to attack by electrophiles.' />
<Subsubtopic id='20.1.U8' type='Understandings' content='Reduction Reactions: Carboxylic acids can be reduced to primary alcohols (via the aldehyde). Ketones can be reduced to secondary alcohols. Typical reducing agents are lithium aluminium hydride (used to reduce carboxylic acids) and sodium borohydride' />
<Subsubtopic id='20.1.AS1' type='Applications and skills' content='Nucleophilic Substitution Reactions: Explanation of why hydroxide is a better nucleophile than water' />
<Subsubtopic id='20.1.AS2' type='Applications and skills' content='Nucleophilic Substitution Reactions: Deduction of the mechanism of the nucleophilic substitution reactions of halogenoalkanes with aqueous sodium hydroxide in terms of SN1 and SN2 mechanisms. Explanation of how the rate depends on the identity of the halogen (ie the leaving group), whether the halogenoalkane is primary, secondary or tertiary and the choice of solvent.' />
<Subsubtopic id='20.1.AS3' type='Applications and skills' content='Nucleophilic Substitution Reactions: Outline of the difference between protic and aprotic solvents.' />
<Subsubtopic id='20.1.AS4' type='Applications and skills' content='Electrophilic Addition Reactions: Deduction of the mechanism of the electrophilic addition reactions of alkenes with halogens/interhalogens and hydrogen halides.' />
<Subsubtopic id='20.1.AS5' type='Applications and skills' content='Electrophilic Substitution Reactions: Deduction of the mechanism of the nitration (electrophilic substitution) reaction of benzene (using a mixture of concentrated nitric acid and sulfuric acid).' />
<Subsubtopic id='20.1.AS6' type='Applications and skills' content='Reduction Reactions: Writing reduction reactions of carbonyl containing compounds: aldehydes and ketones to primary and secondary alcohols and carboxylic acids to aldehydes, using suitable reducing agents.' />
<Subsubtopic id='20.1.AS7' type='Applications and skills' content='Reduction Reactions: Conversion of nitrobenzene to phenylamine via a two-stage reaction' />
<Subsubtopic id='20.1.G1' type='Guidance' content='Reference should be made to heterolytic fission for SN1 reactions.' />
<Subsubtopic id='20.1.G2' type='Guidance' content='The difference between homolytic and heterolytic fission should be understood' />
<Subsubtopic id='20.1.G3' type='Guidance' content='The difference between curly arrows and fish-hooks in reaction mechanisms should be emphasized.' />
<Subsubtopic id='20.1.G4' type='Guidance' content='Use of partial charges (δ+ and δ-) and wedge-dash three-dimensional representations (using tapered bonds as shown below) should be encouraged where appropriate in explaining reaction mechanisms' />
<Subsubtopic id='20.1.G5' type='Guidance' content='Typical conditions and reagents of all reactions should be known (eg catalysts, reducing agents, reflux etc.). However, more precise details such as specific temperatures need not be included.' />
<Subsubtopic id='20.1.IM1' type='International-mindedness' content='What role does green and sustainable chemistry, in relation to organic chemistry, play in a global context?' />
<Subsubtopic id='20.1.Uz1' type='Utilization' content='Organic synthesis plays a vital role in drug design and drug uptake in medicine and biochemistry.' />
<Subsubtopic id='20.1.Uz2' type='Utilization' content='Nutrition, food science and biotechnology also are underpinned by organic chemistry.' />
<Subsubtopic id='20.1.Aims1' type='Aims' content='Aim 6: Three-dimensional visualization of organic compounds using molecular models could be covered.' />
<Subsubtopic id='20.1.Aims2' type='Aims' content='Aim 6: A range of experiments of organic synthetic reactions exploring various types of reactions and functional group interconversions could be done. Core techniques of organic chemistry could include reflux, distillation, filtration, purification (including chromatographic techniques), separations and extractions.' />
<Subsubtopic id='20.1.Aims3' type='Aims' content='Aim 6: Synthesis (or reaction) in the laboratory of an example of a widely used drug or medicine (eg aspirin) or a household product (eg fading of tomato ketchup—electrophilic addition reaction of bromine).' />
<Subsubtopic id='20.2.NoS' type='Nature of Science' content='Scientific method—in synthetic design, the thinking process of the organic chemist is one which invokes retro-synthesis and the ability to think in a reverse-like manner. (1.3)' />
<Subsubtopic id='20.2.U1' type='Understandings' content='The synthesis of an organic compound stems from a readily available starting material via a series of discrete steps. Functional group interconversions are the basis of such synthetic routes.' />
<Subsubtopic id='20.2.U2' type='Understandings' content='Retro-synthesis of organic compounds.' />
<Subsubtopic id='20.2.AS1' type='Applications and skills' content='Deduction of multi-step synthetic routes given starting reagents and the product(s).' />
<Subsubtopic id='20.2.G1' type='Guidance' content='Conversions with more than four stages will not be assessed in synthetic routes.' />
<Subsubtopic id='20.2.G2' type='Guidance' content='Reaction types can cover any of the reactions covered in topic 10 and sub-topic 20.1.' />
<Subsubtopic id='20.2.IM1' type='International-mindedness' content='How important are natural products to developing countries? Explore some specific examples of natural products available in developing countries which are important to the developed world.' />
<Subsubtopic id='20.2.ToK1' type='Theory of Knowledge' content='A retro-synthetic approach is often used in the design of synthetic routes. What are the roles of imagination, intuition and reasoning in finding solutions to practical problems?' />
<Subsubtopic id='20.2.Uz1' type='Utilization' content='Natural products are compounds isolated from natural sources and include taxol, mescaline and capsaicin.' />
<Subsubtopic id='20.2.Aims1' type='Aims' content='Aim 6: Multiple stage organic synthetic route series of experiments (up to a maximum of four stages).' />
<Subsubtopic id='20.3.NoS' type='Nature of Science' content='Transdisciplinary—the three-dimensional shape of an organic molecule is the foundation pillar of its structure and often its properties. Much of the human body is chiral. (4.1)' />
<Subsubtopic id='20.3.U1' type='Understandings' content='Stereoisomers are subdivided into two classes—conformational isomers, which interconvert by rotation about a σ bond and configurational isomers that interconvert only by breaking and reforming a bond.Configurational isomers are further subdivided into cis-trans and E/Z isomers and optical isomers.' />
<Subsubtopic id='20.3.U2' type='Understandings' content='Cis-trans isomers can occur in alkenes or cycloalkanes (or heteroanalogues) and differ in the positions of atoms (or groups) relative to a reference plane. According to IUPAC, E/Z isomers refer to alkenes of the form R1R2C=CR3R4 (R1 ≠ R2, R3 ≠ R4) where neither R1 nor R2 need be different from R3 or R4.' />
<Subsubtopic id='20.3.U3' type='Understandings' content='A chiral carbon is a carbon joined to four different atoms or groups' />
<Subsubtopic id='20.3.U4' type='Understandings' content='An optically active compound can rotate the plane of polarized light as it passes through a solution of the compound. Optical isomers are enantiomers. Enantiomers are non-superimposeable mirror images of each other. Diastereomers are not mirror images of each other.' />
<Subsubtopic id='20.3.U5' type='Understandings' content='A racemic mixture (or racemate) is a mixture of two enantiomers in equal amounts and is optically inactive.' />
<Subsubtopic id='20.3.AS1' type='Applications and skills' content='Construction of 3-D models (real or virtual) of a wide range of stereoisomers.' />
<Subsubtopic id='20.3.AS2' type='Applications and skills' content='Explanation of stereoisomerism in non-cyclic alkenes and C3 and C4 cycloalkanes.' />
<Subsubtopic id='20.3.AS3' type='Applications and skills' content='Have drugs and medicines in some countries been sold and administered as racemates instead of as the desired enantiomer with the associated therapeutic activity? Can you think of any drugs or medicines which may serve as good case studies for this?' />
<Subsubtopic id='20.3.AS4' type='Applications and skills' content='Description and explanation of optical isomers in simple organic molecules.' />
<Subsubtopic id='20.3.AS5' type='Applications and skills' content='Distinction between optical isomers using a polarimeter.' />
<Subsubtopic id='20.3.G1' type='Guidance' content='The term geometric isomers as recommended by IUPAC is now obsolete and cis-trans isomers and E/Z isomers should be encouraged in the teaching programme.' />
<Subsubtopic id='20.3.G2' type='Guidance' content='In the E/Z system, the group of highest Cahn–Ingold–Prelog priority attached to one of the terminal doubly bonded atoms of the alkene (ie R1 or R2) is compared with the group of highest precedence attached to the other (ie R3 or R4). The stereoisomer is Z if the groups lie on the same side of a reference plane passing through the double bond and perpendicular to the plane containing the bonds linking the groups to the double-bonded atoms; the other stereoisomer is designated as E.' />
<Subsubtopic id='20.3.G3' type='Guidance' content='Wedge-dash type representations involving tapered bonds should be used for representations of optical isomers.' />
<Subsubtopic id='20.3.IM1' type='International-mindedness' content='Have drugs and medicines in some countries been sold and administered as racemates instead of as the desired enantiomer with the associated therapeutic activity? Can you think of any drugs or medicines which may serve as good case studies for this?' />
<Subsubtopic id='20.3.ToK1' type='Theory of Knowledge' content='The existence of optical isomers provide indirect evidence for a tetrahedrally bonded carbon atom. Which ways of knowing allow us to connect indirect evidence to our theories?' />
<Subsubtopic id='20.3.ToK2' type='Theory of Knowledge' content='Stereoisomerism can be investigated by physical and computer models. What is the role of such models in other areas of knowledge?' />
<Subsubtopic id='20.3.ToK3' type='Theory of Knowledge' content='One of the challenges for the scientist and the artist is to represent the three-dimensional world in two dimensions. What are the similarities and differences in the two approaches? What is the role of the different ways of knowing in the two approaches?' />
<Subsubtopic id='20.3.Uz1' type='Utilization' content='Many of the drugs derived from natural sources are chiral and include nicotine, dopamine, thyroxine and naproxen.' />
<Subsubtopic id='20.3.Uz2' type='Utilization' content='The role of stereochemistry is vision science and food science.' />
<Subsubtopic id='20.3.Uz3' type='Utilization' content='In many perfumes, stereochemistry often can be deemed more important than chemical composition.' />
<Subsubtopic id='20.3.Aims1' type='Aims' content='Aim 6: Experiments could include the synthesis and characterization of an enantiomer (eg (-) menthol) or the resolution of a racemic mixture.' />