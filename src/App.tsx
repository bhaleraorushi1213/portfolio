import { useState } from "react";

import { Briefcase, GraduationCap } from "lucide-react";
import { EDUCATION_DATA, EXPERIENCE_DATA, PROJECTS_DATA, TABS } from "./lib/constants";

import ProfileSectionPage from "./components/ProfileSectionPage";
import TimelineTab from "./components/TimelineTab";
import ProjectsTab from "./components/ProjectsTab";
import SkillsTab from "./components/SkillsTab";
import ProjectModal from "./components/ProjectModal";
import ImagePreview from "./components/ImagePreview";
import AnimatedBackground from "./components/AnimatedBackground";

type TabName = "projects" | "experience" | "skills" | "education";

const renderTabsSection = (
	activeTab: TabName,
	setActiveTab: (tab: TabName) => void
) => {
	return (
		<div className="flex overflow-x-auto border-b border-border hide-scrollbar">
			{TABS.map((tab) => (
				<button
					key={tab.id}
					onClick={() => setActiveTab(tab.id)}
					className={`px-6 py-3 text-sm font-medium whitespace-nowrap transition-colors relative cursor-pointer ${
						activeTab === tab.id
							? "text-text"
							: "text-muted hover:bg-panel-hover hover:text-text"
					}`}
				>
					{tab.label}
					{activeTab === tab.id && (
						<div className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-t-full" />
					)}
				</button>
			))}
		</div>
	);
};

const App = () => {
	const [activeTab, setActiveTab] = useState<TabName>("projects");
	const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
	const [isImagePreviewOpen, setIsImagePreviewOpen] = useState(false);
	const [imagePreview, setImagePreview] = useState("");
	const [imgType, setImgType] = useState("");

	const selectedProject = PROJECTS_DATA.find((p) => p.id === selectedProjectId);

	const handleImageClick = (image: string, imgType: string) => {
		setImgType(imgType);
		setIsImagePreviewOpen(true);
		setImagePreview(image);
	};

	return (
		<div className="min-h-screen bg-bg">
			<main className="max-w-200 mx-auto bg-bg min-h-screen border-x border-border pb-12">
				{/* COVER — animated signal background instead of a static screenshot */}
				<div className="h-48 w-full relative overflow-hidden">
					<AnimatedBackground />
				</div>

				{/* PROFILE SECTION */}
				<ProfileSectionPage onImageClick={handleImageClick} />

				{/* TABS */}
				{renderTabsSection(activeTab, setActiveTab)}

				{/* TABS CONTENT */}
				<div className="mt-2">
					{activeTab === "projects" && (
						<ProjectsTab
							onProjectClick={setSelectedProjectId}
							onImageClick={handleImageClick}
						/>
					)}
					{activeTab === "skills" && <SkillsTab />}
					{activeTab === "experience" && (
						<TimelineTab
							items={EXPERIENCE_DATA}
							icon={Briefcase}
							title="Experience Timeline"
						/>
					)}
					{activeTab === "education" && (
						<TimelineTab
							items={EDUCATION_DATA}
							icon={GraduationCap}
							title="Academic Foundations"
						/>
					)}
				</div>
			</main>

			{/* PROJECT DETAILS MODAL */}
			{selectedProject && (
				<ProjectModal
					project={selectedProject}
					onClose={() => setSelectedProjectId(null)}
					onImageClick={handleImageClick}
				/>
			)}

			{isImagePreviewOpen && (
				<ImagePreview
					image={imagePreview}
					onClose={() => setIsImagePreviewOpen(!isImagePreviewOpen)}
					imgType={imgType}
				/>
			)}
		</div>
	);
};

export default App;