import { useState } from "react";
import useStore from "../store";

const PaletteSection = () => {
  const { palette } = useStore();
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyToClipboard = async (color: string) => {
    try {
      await navigator.clipboard.writeText(color);
      setCopiedColor(color);

      // Clear the notification after 2 seconds
      setTimeout(() => {
        setCopiedColor(null);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  if (palette.length === 0) {
    return (
      <div className="flex-1 w-full h-full flex flex-col md:flex-row *:flex-1">
        <div className="flex justify-center items-center">
          <div className="w-fit bg-white font-semibold rounded p-1">
            Select a method an click on generate
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 w-full h-full flex flex-col md:flex-row *:flex-1">
      {palette.map((color) => (
        <div
          key={color}
          style={{ backgroundColor: color }}
          className="flex justify-center items-center"
        >
          <div
            onClick={() => copyToClipboard(color)}
            className="w-fit bg-white font-semibold rounded shadow py-1 px-2 hover:bg-gray-100 transition-colors cursor-pointer relative group"
          >
            {color}
            <div className="z-100 absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              {copiedColor === color ? "Copied! ✓" : "Click to copy"}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PaletteSection;
