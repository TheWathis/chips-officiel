interface ChipsItemProps {
  prefix: string;
  suffix: string;
}

export function ChipsItem(props: ChipsItemProps) {
  return (
    <li class="flex justify-center items-baseline">
      <span class="text-lg text-right w-64">{props.prefix}</span>
      <span class="font-bold text-xl mx-2">Chips</span>
      <span class="text-lg text-left w-64">{props.suffix}</span>
    </li>
  );
}
