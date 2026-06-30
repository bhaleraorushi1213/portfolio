import { Download, Mail, MapPin } from "lucide-react";
import { PROFILE_DATA } from "../lib/utils";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import ProfileImg from "../assets/profile.png";
import Resume from "../assets/resume.pdf"

const ProfileSectionPage = ({onImageClick}: {onImageClick: (url: string, imgType: string) => void}) => {
  return (
    <div className="px-4 sm:px-6 relative">
      {/* PROFILE PICTURE*/}
      <div className="flex justify-between items-start mb-4">
        <div
          onClick={() => onImageClick(ProfileImg, "profile")}
          className="relative -mt-16 rounded-full border-4 border-white overflow-hidden w-32 h-32 bg-white cursor-pointer"
        >
          <img
            src={ProfileImg}
            alt="Profile Avatar"
            className="w-full h-full object-cover"
          />
        </div>

        {/* ACTION Buttons  */}
        <div className="pt-3 flex gap-2">
          <a href="mailto:bhaleraorushi1213@gmail.com" target="_blank">
            <button
              className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-300 font-medium text-sm hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <Mail size={16} />
              Hire Me
            </button>
          </a>
          <a href={Resume} download="Rushikesh_Bhalerao_Resume.pdf">

            <button
              onClick={() => { }}
              className="px-5 py-1.5 rounded-full flex items-center gap-2 bg-primary text-white font-medium text-sm hover:bg-primary/80 transition-colors cursor-pointer"
            >
              Resume
              <Download size={16} />
            </button>
          </a>
        </div>
      </div>
      {/* NAME & BIO */}
      <div className="mb-4">
        <h1 className="text-2xl font-display font-bold text-gray-900">{PROFILE_DATA.name}</h1>
        <p className="text-gray-500 text-sm mb-3">{PROFILE_DATA.handle}</p>
        <p className="text-[15px] leading-relaxed text-gray-800">
          {PROFILE_DATA.bio}
        </p>
      </div>

      {/* Meta Info */}
      <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500 mb-6">
        <div className="flex items-center gap-1.5">
          <MapPin size={16} />
          <span>{PROFILE_DATA.location}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <BsGithub size={16} />
          <a href={PROFILE_DATA.linkUrl} target="_blank" className="text-primary hover:underline">{PROFILE_DATA.link}</a>
        </div>
        <div className="flex items-center gap-1.5">
          <FaLinkedinIn size={16} />
          <a href={PROFILE_DATA.linkedinUrl} target="_blank" className="text-primary hover:underline">{PROFILE_DATA.linkedin}</a>
        </div>
        <div className="flex items-center gap-1.5">
          <Mail size={16} />
          <a href={`mailto:${PROFILE_DATA.gmail}`} target="_blank" className="text-primary hover:underline">{PROFILE_DATA.gmail}</a>
        </div>
      </div>
    </div>
  )
}

export default ProfileSectionPage