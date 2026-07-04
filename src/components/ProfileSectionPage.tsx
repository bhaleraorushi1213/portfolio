import { Download, Mail, MapPin } from "lucide-react";
import { PROFILE_DATA } from "../lib/constants";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import ProfileImg from "../assets/profile.png";
import Resume from "../assets/resume.pdf";
import TerminalIntro from "./TerminalIntro";
import StatsStrip from "./StatsStrip";

const ProfileSectionPage = ({
	onImageClick,
}: {
	onImageClick: (url: string, imgType: string) => void;
}) => {
	return (
		<div className="px-4 sm:px-6 relative">
			{/* PROFILE PICTURE + ACTIONS */}
			<div className="flex justify-between items-start mb-4">
				<div
					onClick={() => onImageClick(ProfileImg, "profile")}
					className="relative -mt-16 rounded-full border-4 border-bg overflow-hidden w-32 h-32 bg-panel cursor-pointer ring-1 ring-border"
				>
					<img
						src={ProfileImg}
						alt="Profile Avatar"
						className="w-full h-full object-cover"
					/>
				</div>

				<div className="pt-3 flex gap-1 md:gap-2 justify-end">
					<a href="mailto:bhaleraorushi1213@gmail.com" target="_blank" rel="noreferrer">
						<button className="magnet-btn flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full border border-border text-text font-medium text-sm hover:bg-panel-hover transition-colors cursor-pointer">
							<Mail size={16} />
							Hire Me
						</button>
					</a>
					<a href={Resume} download="Rushikesh_Bhalerao_Resume.pdf">
						<button className="magnet-btn px-4 md:px-5 py-1.5 rounded-full flex items-center gap-2 bg-primary text-bg font-semibold text-sm hover:brightness-110 transition-colors cursor-pointer">
							Resume
							<Download size={16} />
						</button>
					</a>
				</div>
			</div>

			{/* TERMINAL INTRO */}
			<div className="mb-3">
				<TerminalIntro roles={PROFILE_DATA.roles} />
			</div>

			{/* NAME & STATUS */}
			<div className="mb-4">
				<div className="flex items-center gap-2 mb-1">
					<h1 className="text-2xl font-display font-bold text-text">
						{PROFILE_DATA.name}
					</h1>
					<span className="flex items-center gap-1.5 text-[12px] font-mono text-primary">
						<span className="ping-dot" />
						available
					</span>
				</div>
				<p className="text-muted text-sm mb-3 font-mono">{PROFILE_DATA.handle}</p>
				<p className="text-[15px] leading-relaxed text-text/90">
					{PROFILE_DATA.bio}
				</p>
			</div>

			{/* STATS */}
			<div className="mb-6">
				<StatsStrip />
			</div>

			{/* Meta Info */}
			<div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted mb-6">
				<div className="flex items-center gap-1.5">
					<MapPin size={16} />
					<span>{PROFILE_DATA.location}</span>
				</div>
				<div className="flex items-center gap-1.5">
					<BsGithub size={16} />
					<a
						href={PROFILE_DATA.linkUrl}
						target="_blank"
						rel="noreferrer"
						className="text-primary hover:underline"
					>
						{PROFILE_DATA.link}
					</a>
				</div>
				<div className="flex items-center gap-1.5">
					<FaLinkedinIn size={16} />
					<a
						href={PROFILE_DATA.linkedinUrl}
						target="_blank"
						rel="noreferrer"
						className="text-primary hover:underline"
					>
						{PROFILE_DATA.linkedin}
					</a>
				</div>
				<div className="flex items-center gap-1.5">
					<Mail size={16} />
					<a
						href={`mailto:${PROFILE_DATA.gmail}`}
						target="_blank"
						rel="noreferrer"
						className="text-primary hover:underline"
					>
						{PROFILE_DATA.gmail}
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProfileSectionPage;