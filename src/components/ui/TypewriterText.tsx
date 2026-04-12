import { useTypewriter } from "../../hooks/useTypewriter";

interface TypewriterTextProps {
  strings: string[];
}

export function TypewriterText({ strings }: TypewriterTextProps) {
  const { displayText } = useTypewriter({ strings });

  return (
    <span className="typewriter-cursor">
      {displayText}
    </span>
  );
}
