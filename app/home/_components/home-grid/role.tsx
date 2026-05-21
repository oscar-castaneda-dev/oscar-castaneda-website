export function Role() {
  return (
    <div
      className="bg-card border border-border rounded-lg p-5 flex flex-col min-h-40"
      style={{ gridArea: "role" }}
    >
      <p className="subtitle text-xl mb-4 text-body">current role</p>
      <h3 className="heading-36 uppercase">
        Tech <br />
        Lead
      </h3>
    </div>
  );
}
