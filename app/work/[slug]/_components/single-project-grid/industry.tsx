interface IndustryProps {
  area: string;
  value: string;
}

export function Industry({ area, value }: IndustryProps) {
  return (
    <div
      className="bg-indigo-surface border border-indigo-border rounded-lg p-5 flex flex-col justify-between min-h-40"
      style={{ gridArea: area }}
    >
      <p className="text-xs uppercase text-indigo-300">industry</p>
      <div>
        <h3 className="heading-36 uppercase text-indigo-400">{value}</h3>
        <p className="text-indigo-300">sector</p>
      </div>
    </div>
  );
}
