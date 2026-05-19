import useStore from "../store";
import {
  generateAnalogous,
  generateComplementary,
  generateSquare,
  generateTriad,
  generateShades,
  generateTones,
} from "../utils/utils";

const GenerateButton = () => {
  const { method, setPalette } = useStore();

  const generate = (method: string) => {
    if (method === "analogous") {
      const palette = generateAnalogous();
      setPalette(palette);
    }
    if (method === "complementary") {
      const palette = generateComplementary();
      setPalette(palette);
    }
    if (method === "triad") {
      const palette = generateTriad();
      setPalette(palette);
    }
    if (method === "square") {
      const palette = generateSquare();
      setPalette(palette);
    }
    if (method === "shades") {
      const palette = generateShades();
      setPalette(palette);
    }
    if (method === "tones") {
      const palette = generateTones();
      setPalette(palette);
    }
  };

  return (
    <button
      onClick={() => generate(method)}
      className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold py-2 cursor-pointer"
    >
      Generate
    </button>
  );
};

export default GenerateButton;
