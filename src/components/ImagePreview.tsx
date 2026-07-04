import { X } from "lucide-react";

const ImagePreview = ({
	image,
	onClose,
	imgType,
}: {
	image: string;
	onClose: () => void;
	imgType: string;
}) => {
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
			<div
				className="absolute right-5 top-4 hover:bg-panel-hover cursor-pointer rounded-full p-2"
				onClick={onClose}
			>
				<X className="text-text size-8" />
			</div>
			<div
				className={
					imgType === "project"
						? "p-0.5 bg-panel rounded-xl border border-border"
						: "p-2 bg-panel rounded-full border border-border"
				}
			>
				<img
					src={image}
					alt="Preview"
					className={`${
						imgType === "profile" ? "w-100 rounded-full" : "w-280 rounded-xl max-h-full"
					} object-contain`}
				/>
			</div>
		</div>
	);
};

export default ImagePreview;