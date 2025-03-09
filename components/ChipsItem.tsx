interface ChipsItemProps {
  prefix: string;
  suffix: string;
}

export function ChipsItem(props: ChipsItemProps) {
  return (
    <li>
      <span class="prefix">{props.prefix}</span>
      <span class="chips">Chips</span>
      <span class="suffix">{props.suffix}</span>
    </li>
  );
}
