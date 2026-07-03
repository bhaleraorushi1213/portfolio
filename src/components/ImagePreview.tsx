import { X } from "lucide-react";

const ImagePreview = ({ image, onClose, imgType }: { image: string, onClose: () => void, imgType: string }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" style={{
      scrollBehavior: 'auto',
      scrollbarWidth: 'thin'
    }}>
      <div className="absolute right-5 top-4 hover:bg-gray-300 cursor-pointer rounded-full p-2" onClick={onClose}>
        <X className="text-white size-8 hover:text-black" />
      </div>
      <div className={imgType === "project" ? "p-0.5 bg-gray-300 rounded-xl" : "p-2 bg-white rounded-full"}>
        <img
          src={image}
          alt="Preview"
          className={`${imgType === "profile" ? "w-100 rounded-full" : "w-280 rounded-xl max-h-full"}  object-contain `}
        />
      </div>
    </div>
  )
}

export default ImagePreview;