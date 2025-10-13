import { ChipsItem } from "../components/ChipsItem.tsx";

export default function Home() {
  return (
    <div class="flex flex-col h-dvh bg-[#ffbf44]">
      {/* Header qui devient sticky */}
      <div
        id="header"
        class="top-0 z-10 bg-[#ffbf44] px-4 pt-8 pb-4 transition-all duration-300"
      >
        <div class="max-w-screen-md mx-auto flex flex-col items-center">
          <img
            id="logo"
            class="mb-4 animate-bounce transition-all duration-300"
            src="/logo.webp"
            width="128"
            height="128"
            alt="Logo officiel de ChipsOfficiel"
            style="animation-duration: 2s"
          />
          <h1 class="text-4xl font-bold text-center">
            Bienvenue sur la liste de chips officiel !
          </h1>
          <p class="mt-4 italic text-center">
            Approuvé par le créateur de ce site, tout autre personne qui dira le
            contraire aura tort par défaut.
          </p>
        </div>
      </div>

      {/* Liste scrollable */}
      <div id="scrollContainer" class="flex-1 overflow-y-auto px-4 pb-24">
        <div class="max-w-screen-md mx-auto">
          <ul class="my-6 space-y-2">
            <ChipsItem prefix="" suffix="" />
            <ChipsItem prefix="Contre" suffix="" />
            <ChipsItem prefix="Sur" suffix="" />
            <ChipsItem prefix="Turbo" suffix="" />
            <ChipsItem prefix="Over" suffix="" />
            <ChipsItem prefix="Mega" suffix="" />
            <ChipsItem prefix="Giga" suffix="" />
            <ChipsItem prefix="Tera" suffix="" />
            <ChipsItem prefix="Hyper" suffix="" />
            <ChipsItem prefix="Ultra" suffix="" />
            <ChipsItem prefix="Supreme" suffix="" />
            <ChipsItem prefix="Ultime" suffix="" />
            <ChipsItem prefix="Master" suffix="" />
            <ChipsItem prefix="Grand Master" suffix="" />
            <ChipsItem prefix="Étoile" suffix="" />
            <ChipsItem prefix="Super Étoile" suffix="" />
            <ChipsItem prefix="Constellation" suffix="" />
            <ChipsItem prefix="Galaxie" suffix="" />
            <ChipsItem prefix="Super Galaxie" suffix="" />
            <ChipsItem prefix="Cluster" suffix="" />
            <ChipsItem prefix="Univers" suffix="" />
            <ChipsItem prefix="Super Univers" suffix="" />
            <ChipsItem prefix="Multivers" suffix="" />
            <ChipsItem prefix="Omnivers" suffix="" />
            <ChipsItem prefix="Cosmique" suffix="" />
            <ChipsItem prefix="Dimensionnel" suffix="" />
            <ChipsItem prefix="Transcendant" suffix="" />
            <ChipsItem prefix="Absolu" suffix="" />
            <ChipsItem prefix="Divin" suffix="" />
            <ChipsItem prefix="" suffix="Infini" />
            <ChipsItem prefix="" suffix="Infini +" />
            <ChipsItem prefix="" suffix="Infini Ultime" />
            <ChipsItem prefix="" suffix="Au-delà de l'Infini" />
          </ul>
        </div>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            const scrollContainer = document.getElementById('scrollContainer');
            const header = document.getElementById('header');
            const logo = document.getElementById('logo');
            
            scrollContainer.addEventListener('scroll', () => {
              const scrolled = scrollContainer.scrollTop > 50;
              
              if (scrolled) {
                header.classList.add('sticky', 'shadow-md');
                logo.style.opacity = '0';
                logo.style.height = '0';
                logo.style.marginBottom = '0';
              } else {
                header.classList.remove('sticky', 'shadow-md');
                logo.style.opacity = '1';
                logo.style.height = '128px';
                logo.style.marginBottom = '1rem';
              }
            });
          `,
        }}
      />
    </div>
  );
}
