import { PROJECTS_DATA } from "../lib/constants";

interface ProjectsTabProps {
	onProjectClick: (id: number) => void;
	onImageClick: (url: string, imgType: string) => void;
}

const handleSpotlight = (e: React.MouseEvent<HTMLDivElement>) => {
	const rect = e.currentTarget.getBoundingClientRect();
	e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
	e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
};

const ProjectsTab = ({ onProjectClick, onImageClick }: ProjectsTabProps) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 sm:px-6">
			{PROJECTS_DATA.map((project) => (
				<div
					key={project.id}
					onMouseMove={handleSpotlight}
					className="spotlight-card border border-border rounded-xl overflow-hidden flex flex-col bg-panel hover:border-primary/40 transition-colors"
				>
					<div
						className="h-40 w-full overflow-hidden border-b border-border bg-bg cursor-pointer"
						onClick={() => onImageClick(project.image, "project")}
					>
						<img
							src={project.image}
							alt={project.title}
							className="w-full h-full object-cover opacity-90"
						/>
					</div>

					<div className="p-4 flex flex-col grow">
						<div className="flex items-center justify-between mb-1">
							<h3 className="font-bold text-lg text-text">{project.title}</h3>
							<span className="font-mono text-[11px] text-muted">{project.date}</span>
						</div>
						<p className="text-muted text-sm mb-4 line-clamp-2 leading-relaxed">
							{project.description}{" "}
							<span
								onClick={() => onProjectClick(project.id)}
								className="text-primary hover:underline cursor-pointer"
							>
								see more
							</span>
						</p>
						<div className="flex flex-wrap gap-2 mb-4 mt-auto">
							{project.tags.map((tag) => (
								<span
									key={tag}
									className="bg-bg border border-border text-muted text-[12px] px-2.5 py-1 rounded-md font-mono"
								>
									{tag}
								</span>
							))}
						</div>
						<button
							onClick={() => onProjectClick(project.id)}
							className="magnet-btn w-full py-2 border border-border rounded-lg text-sm font-semibold text-primary hover:bg-panel-hover transition-colors cursor-pointer"
						>
							View Details
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default ProjectsTab;