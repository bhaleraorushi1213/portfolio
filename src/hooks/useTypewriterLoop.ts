import { useEffect, useState } from "react";

interface UseTypewriterLoopOptions {
	typeSpeed?: number;
	deleteSpeed?: number;
	pauseDuration?: number;
	pauseBeforeType?: number;
}

/**
 * Cycles through `words`, typing each one out, pausing, deleting it,
 * then moving to the next — loops forever. Respects prefers-reduced-motion
 * by freezing on the first word.
 */
export const useTypewriterLoop = (
	words: string[],
	{
		typeSpeed = 65,
		deleteSpeed = 35,
		pauseDuration = 1600,
		pauseBeforeType = 300,
	}: UseTypewriterLoopOptions = {}
) => {
	const [text, setText] = useState("");
	const [wordIndex, setWordIndex] = useState(0);
	const [phase, setPhase] = useState<"typing" | "pausing" | "deleting" | "waiting">(
		"typing"
	);

	useEffect(() => {
		const prefersReducedMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)"
		).matches;

		if (prefersReducedMotion) {
      setTimeout(() => {
        setText(words[0] ?? "");
			}, 0);
			return;
		}

		if (words.length === 0) return;
		const current = words[wordIndex % words.length];
		let timeout: ReturnType<typeof setTimeout>;

		if (phase === "typing") {
			if (text.length < current.length) {
				timeout = setTimeout(
					() => setText(current.slice(0, text.length + 1)),
					typeSpeed
				);
			} else {
				timeout = setTimeout(() => setPhase("pausing"), pauseDuration);
			}
		} else if (phase === "pausing") {
			timeout = setTimeout(() => setPhase("deleting"), 0);
		} else if (phase === "deleting") {
			if (text.length > 0) {
				timeout = setTimeout(() => setText(text.slice(0, -1)), deleteSpeed);
			} else {
				timeout = setTimeout(() => setPhase("waiting"), pauseBeforeType);
			}
		} else if (phase === "waiting") {
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % words.length);
        setPhase("typing");
			}, 0);
		}

		return () => clearTimeout(timeout);
	}, [text, phase, wordIndex, words, typeSpeed, deleteSpeed, pauseDuration, pauseBeforeType]);

	return text;
};