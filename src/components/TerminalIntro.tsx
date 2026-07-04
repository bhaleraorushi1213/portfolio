import { useEffect, useState } from "react";
import { useTypewriterLoop } from "../hooks/useTypewriterLoop";

interface TerminalIntroProps {
	roles: string[];
}

const LINE_1 = "whoami";

const TerminalIntro = ({ roles }: TerminalIntroProps) => {
	const [typed, setTyped] = useState("");
	const [showRole, setShowRole] = useState(false);
	const role = useTypewriterLoop(roles);

	useEffect(() => {
		const prefersReducedMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)"
		).matches;

		if (prefersReducedMotion) {
			setTimeout(() => {
				setTyped(LINE_1);
				setShowRole(true);
			}, 0);
			return;
		}

		let i = 0;
		const typeId = setInterval(() => {
			i++;
			setTyped(LINE_1.slice(0, i));
			if (i >= LINE_1.length) {
				clearInterval(typeId);
				setTimeout(() => setShowRole(true), 300);
			}
		}, 70);

		return () => clearInterval(typeId);
	}, []);

	return (
		<div className="font-mono text-[13px] leading-relaxed">
			<div className="text-muted">
				<span className="text-primary">$</span> {typed}
				{!showRole && <span className="terminal-cursor" />}
			</div>
			{showRole && (
				<div className="text-text mt-0.5 min-h-[1.4em]">
					<span className="text-amber">&gt;</span> {role}
					<span className="terminal-cursor" />
				</div>
			)}
		</div>
	);
};

export default TerminalIntro;