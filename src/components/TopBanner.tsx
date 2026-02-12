const bannerItems = [
  { bold: "B2B Lead Generation:", text: "targeted outreach & pipeline management" },
  { bold: "A.D.A.M. System:", text: "automated documents, proposals & client lifecycle" },
  { bold: "B2G Tender Strategy:", text: "public procurement & bid preparation" },
  { bold: "Trusted across:", text: "LATAM, Benelux, DACH & US" },
];

export default function TopBanner() {
  return (
    <div className="bg-bg-light border-b border-grid-500 overflow-hidden h-10 flex items-center">
      <div className="animate-scroll-banner flex gap-10 whitespace-nowrap">
        {[...bannerItems, ...bannerItems].map((item, i) => (
          <span key={i} className="text-xs text-muted-2 shrink-0">
            {item.bold && (
              <strong className="text-foreground font-medium">{item.bold}</strong>
            )}{" "}
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}
