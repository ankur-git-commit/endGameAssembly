interface ProgammingLanguage {
  title: string;
  color: string;
  text: string;
}

function Eliminations() {
  const languages: Array<ProgammingLanguage> = [
    { title: "html", color: "#E2680F", text: "white" },
    { title: "css", color: "#328AF1", text: "white" },
    { title: "javascript", color: "#F4EB13", text: "black" },
    { title: "react", color: "#2ED3E9", text: "black" },
    { title: "typescript", color: "#298EC6", text: "white" },
    { title: "node.js", color: "#599137", text: "white" },
    { title: "Python", color: "#FFD742", text: "black" },
    { title: "ruby", color: "#D02B2B", text: "white" },
    { title: "Assembly", color: "#2D519F", text: "white" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-1 w-1/2">
      {languages.map((item) => {
        console.log(item.color);

        return (
          <div
            key={item.title}
            className="rounded border-none p-2"
            style={{ backgroundColor: item.color }}
          >
            <span
              className="font-Han text-xl font-bold"
              style={{ color: item.text }}
            >
              {item.title === "html" || item.title === "css"
                ? item.title.toUpperCase()
                : item.title[0].toUpperCase() + item.title.slice(1)}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Eliminations;
