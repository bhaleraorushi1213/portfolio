import { useEffect, useRef, useState } from "react";

/**
 * Animates a number from 0 -> target once the element enters the viewport.
 * No external dependencies — plain IntersectionObserver + rAF.
 */
export const useCountUp = (target: number, duration = 1200) => {
	const [value, setValue] = useState(0);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const node = ref.current;
		if (!node) return;

		const prefersReducedMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)"
		).matches;

		if (prefersReducedMotion) {
      setTimeout(() => {
				setValue(target);
			}, 0);
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting) return;
				const start = performance.now();

				const tick = (now: number) => {
					const progress = Math.min((now - start) / duration, 1);
					// ease-out cubic
					const eased = 1 - Math.pow(1 - progress, 3);
					setValue(Math.round(eased * target));
					if (progress < 1) requestAnimationFrame(tick);
				};

				requestAnimationFrame(tick);
				observer.disconnect();
			},
			{ threshold: 0.4 }
		);

		observer.observe(node);
		return () => observer.disconnect();
	}, [target, duration]);

	return { value, ref };
};