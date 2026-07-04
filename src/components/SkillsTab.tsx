import { SKILLS_DATA } from "../lib/constants";

const SkillsTab = () => {
	return (
		<div className="space-y-1">
			{SKILLS_DATA.map((section, idx) => (
				<div key={idx} className="border-b border-border p-4 sm:px-6">
					<h3 className="font-mono text-[13px] tracking-wide uppercase text-muted mb-3">
						{section.category}
					</h3>
					<div className="flex flex-wrap gap-2">
						{section.skills.map((skill) => (
							<span
								key={skill}
								className="border border-border rounded-full px-4 py-1.5 text-sm font-medium text-text bg-panel hover:border-primary/50 hover:text-primary transition-colors cursor-default"
							>
								{skill}
							</span>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default SkillsTab;