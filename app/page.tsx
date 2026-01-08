import { WikiCard } from "@/components/wiki-card";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto mt-10 flex flex-col gap-6">
      <WikiCard
        title="Décryptage des bases génétiques des traits comportementaux chez les chiens : l'analyse GWAS des traits observés et l'analyse GWAS des traits latents révèlent des gènes et des variants clés"
        author="Maryam Mahmoodi"
        date="Déc 2024"
        summary="Cette étude a analysé le génome de milliers de chiens de différentes races afin d’identifier des variantes génétiques associées à des traits comportementaux comme l’agressivité, la peur, l’attachement ou l’anxiété de séparation."
        href="https://www.sciencedirect.com/science/article/abs/pii/S1090023324001904"
      />
      <WikiCard
        title="Les effets de l'utilisation de methode d'éducation cohercitive chez le chien"
        author="Gal Ziv"
        date="2017"
        summary="Revue systématique analysant les recherches existantes sur les méthodes d’entraînement dites “aversives” (punitions, colliers coercitifs, stimulations électriques, etc.)"
        href="https://www.sciencedirect.com/science/article/abs/pii/S1558787817300357"
      />
      <WikiCard
        title="L'anxiété de séparation chez le chien : Quels progrès ont été fait sur notre compréhension du problème le plus commun chez le chien ?"
        author="Niwako Ogata"
        date="2016"
        summary="Etude sur l'anxiété de séparation chez le chien"
        href="https://www.sciencedirect.com/science/article/abs/pii/S1558787816000216"
      />
      <WikiCard
        title="Méthodes de test comportemental chez les chiens : revue exploratoire et analyse des stimuli utilisés dans les tests"
        author="Ariella Y. Moser"
        date="Oct 2024"
        summary="Cadre qui catégorise les stimuli en trois grands types (stimuli centrés sur l’humain, l’environnement et les motivateurs)"
        href="https://www.frontiersin.org/journals/veterinary-science/articles/10.3389/fvets.2024.1455574/full"
      />
    </main>
  );
}
