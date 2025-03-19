import { ChipsItem } from "../components/ChipsItem.tsx";

export default function Home() {
  return (
    <div class="px-4 py-8 mx-auto bg-[#ffbf44] h-dvh">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.webp"
          width="128"
          height="128"
          alt="Logo officiel de ChipsOfficiel"
        />
        <h1 class="text-4xl font-bold">
          Bienvenue sur la liste de chips officiel !
        </h1>
        <p class="my-4 italic">
          Approuvé par le créateur de ce site, tout autre personne qui dira le
          contraire aura tort par défaut.
        </p>
        <ul class="my-4">
          <ChipsItem prefix="" suffix="" />
          <ChipsItem prefix="Contre" suffix="" />
          <ChipsItem prefix="Sur" suffix="" />
          <ChipsItem prefix="Over" suffix="" />
          <ChipsItem prefix="Turbo" suffix="" />
          <ChipsItem prefix="Mega" suffix="" />
          <ChipsItem prefix="Omega" suffix="" />
          <ChipsItem prefix="Hyper" suffix="" />
          <ChipsItem prefix="Ultra" suffix="" />
          <ChipsItem prefix="Supreme" suffix="" />
          <ChipsItem prefix="Master" suffix="" />
          <ChipsItem prefix="Galaxie" suffix="" />
          <ChipsItem prefix="Super galaxie" suffix="" />
          <ChipsItem prefix="Univers" suffix="" />
          <ChipsItem prefix="Super univers" suffix="" />
          <ChipsItem prefix="" suffix="Infini" />
        </ul>
      </div>
    </div>
  );
}
