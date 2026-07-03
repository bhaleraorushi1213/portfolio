import { ExternalLink, X } from "lucide-react";
import { PROFILE_DATA } from "../lib/utils";
import { BsGithub } from "react-icons/bs";
import ProfileImg from "../assets/profile.png";

interface ProjectModalProps {
  project: {
    id: number,
    title: string,
    description: string,
    fullDescription: string,
    image: string,
    tags: string[],
    githubUrl: string,
    liveUrl: string,
    date: string,
  },
  onClose: () => void,
  onImageClick: (url: string, imgType: string) => void
}

const ProjectModal = ({ project, onClose, onImageClick }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose} style={{
      scrollBehavior: 'auto',
      scrollbarWidth: 'thin'
    }}>
      <div
        className="bg-white rounded-2xl w-full max-w-150 max-h-[90vh] flex flex-col shadow-xl scroll-container"
        onClick={(e) => e.stopPropagation()}
      // style={{
      //   scrollBehavior: 'auto',
      //   scrollbarWidth: 'thin'
      // }}
      >
        {/* MODAL HEADER */}
        <div className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-gray-100 flex items-center justify-between p-4 z-10">
          <h2 className="font-bold text-lg">Project Details</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
            <X size={20} />
          </button>
        </div>

        {/* POST CONTENT */}
        <div className="p-5">

          {/* POST HEADER (AUTHOR) */}
          <div className="flex gap-3 mb-4">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 shrink-0 border border-gray-100">
              <img src={ProfileImg} className="w-full h-full object-cover" alt="Author" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-gray-900">{PROFILE_DATA.name}</span>
                <span className="text-gray-500 text-sm">· {project.date}</span>
              </div>
              <div className="text-gray-500 text-sm">{PROFILE_DATA.handle}</div>
            </div>
          </div>

          {/* Post Body */}
          <div className="mb-4">
            <h3 className="font-bold text-xl mb-2">{project.title}</h3>
            <p className="text-[15px] leading-relaxed text-gray-800 whitespace-pre-wrap mb-4">
              {project.fullDescription}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag: string) => (
                <span key={tag} className="text-primary text-sm font-medium hover:underline cursor-pointer">
                  #{tag.replace(/\s+/g, '')}
                </span>
              ))}
            </div>

            {/* Media */}
            <div
              className="rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 cursor-pointer"
              onClick={() => onImageClick(project.image, "project")}>
              <img src={project.image} className="w-full h-auto max-h-100 object-cover" alt={project.title} />
            </div>
          </div>

          {/* Post Actions */}
          <div className="border-t border-gray-100 pt-4 flex gap-4 mt-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <BsGithub size={18} />
              GitHub Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal;