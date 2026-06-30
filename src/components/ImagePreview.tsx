import { X } from "lucide-react";

const ImagePreview = ({ image, onClose }: { image: string, onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" style={{
      scrollBehavior: 'auto',
      scrollbarWidth: 'thin'
    }}>
      <div className="absolute right-5 top-4 hover:bg-gray-300 cursor-pointer rounded-full p-2" onClick={onClose}>
        <X className="text-white size-8 hover:text-black" />
      </div>
      <img src={image} alt="Preview" className="w-250 max-h-full object-contain" />
    </div>
  )
}

export default ImagePreview;