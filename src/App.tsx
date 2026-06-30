import { useState } from "react";

import { Briefcase, GraduationCap } from "lucide-react";
import { EDUCATION_DATA, EXPERIENCE_DATA, PROJECTS_DATA, TABS } from "./lib/utils";
import BackgroundImg from "./assets/screen.png";

import ProfileSectionPage from "./components/ProfileSectionPage";
import TimelineTab from "./components/TimelineTab";
import ProjectsTab from "./components/ProjectsTab";
import SkillsTab from "./components/SkillsTab";
import ProjectModal from "./components/ProjectModal";
import ImagePreview from "./components/ImagePreview";

type TabName = 'projects' | 'experience' | 'skills' | 'education';

const renderTabsSection = (activeTab: TabName, setActiveTab: (tab: TabName) => void) => {
  return (
    <div className="flex overflow-x-auto border-b border-gray-200 hide-scrollbar">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-6 py-3 text-sm font-medium whitespace-nowrap transition-colors relative cursor-pointer ${activeTab === tab.id
            ? 'text-gray-900'
            : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
            }`}
        >
          {tab.label}
          {activeTab === tab.id && (
            <div className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-t-full" />
          )}
        </button>
      ))}
    </div>
  )
}

const App = () => {
  const [activeTab, setActiveTab] = useState<TabName>('projects');
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const [isImagePreviewOpen, setIsImagePreviewOpen] = useState(false);
  const [imagePreview, setImagePreview] = useState("");

  const selectedProject = PROJECTS_DATA.find(p => p.id === selectedProjectId);

  const handleImageClick = (image: string) => {
    setIsImagePreviewOpen(true);
    setImagePreview(image)
  };

  return (
    <div className="min-h-screen">
      <main className="max-w-200 mx-auto bg-white min-h-screen border-x border-gray-100 shadow-sm pb-12">
        {/* COVER IMAGE */}
        <div className="h-48 w-full relative">
          <img
            src={BackgroundImg}
            alt="Cover"
            className="w-full h-full object-cover"
          />
        </div>

        {/* PROFILE SECTION */}
        <ProfileSectionPage />

        {/* TABS */}
        {renderTabsSection(activeTab, setActiveTab)}

        {/* TABS CONTENT */}
        <div className="p-4 sm:px-6 mt-2">
          {activeTab === 'projects' && (
            <ProjectsTab
              onProjectClick={setSelectedProjectId}
              onImageClick={handleImageClick}
            />
          )}
          {activeTab === 'skills' && <SkillsTab />}
          {activeTab === 'experience' && (
            <TimelineTab items={EXPERIENCE_DATA} icon={Briefcase} title="Experience Timeline" />
          )}
          {activeTab === 'education' && (
            <TimelineTab items={EDUCATION_DATA} icon={GraduationCap} title="Academic Foundations" />
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
        <ImagePreview image={imagePreview} onClose={() => setIsImagePreviewOpen(!isImagePreviewOpen)} />
      )}
    </div>
  )
}

export default App;
