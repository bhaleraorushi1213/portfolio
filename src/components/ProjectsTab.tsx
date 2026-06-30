import { PROJECTS_DATA } from "../lib/utils";

interface ProjectsTabProps {
  onProjectClick: (id: number) => void,
  onImageClick: (url: string) => void
}

const ProjectsTab = ({ onProjectClick, onImageClick }: ProjectsTabProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {PROJECTS_DATA.map((project) => (
        <div
          key={project.id}
          className="border border-gray-200 rounded-xl overflow-hidden flex flex-col bg-white hover:shadow-md transition-shadow"
        >
          <div
            className="h-40 w-full overflow-hidden border-b border-gray-100 bg-gray-50 cursor-pointer"
            onClick={() => onImageClick(project.image)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-90"
            />
          </div>

          <div className="p-4 flex flex-col grow">
            <h3 className="font-bold text-lg mb-1">{project.title}</h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
              {project.description} <span onClick={() => onProjectClick(project.id)} className="text-primary hover:underline cursor-pointer">see more</span>
            </p>
            <div className="flex flex-wrap gap-2 mb-4 mt-auto">
              {project.tags.map((tag) => (
                <span key={tag} className="bg-gray-100 border border-gray-200 text-gray-700 text-[13px] px-2.5 py-1 rounded-md font-medium">
                  {tag}
                </span>
              ))}
            </div>
            <button onClick={() => onProjectClick(project.id)}  className="w-full py-2 border border-gray-300 rounded-lg text-sm font-semibold text-primary hover:bg-gray-50 transition-colors cursor-pointer">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectsTab;