import React, { useRef, useState } from "react";
import { Trash, Upload, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ProfilePhotoSelector = ({ image, setImage }) => {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      // Update the image state
      setImage(file);

      // Generate a preview URL from the file
      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl(null);
  };

  const onChooseFile = () => {
    inputRef.current.click();
  };

  return (
    <div className="flex justify-center mb-4 md:mb-6 lg:mb-8">
      <Input
        type="file"
        accept="image/*"
        className="hidden"
        ref={inputRef}
        onChange={handleImageChange}
      />

      {!image ? (
        <div className="relative w-20 h-20 flex items-center justify-center bg-primary/10 rounded-full cursor-pointer">
          <User size={35} className="text-primary" />
          <Button
            type="button"
            className="h-8 w-8 rounded-full absolute -bottom-1 -right-1"
            onClick={onChooseFile}
          >
            <Upload />
          </Button>
        </div>
      ) : (
        <div className="relative">
          <img
            src={previewUrl}
            alt="profile photo"
            className="w-20 h-20 rounded-full object-cover"
          />
          <Button
            type="button"
            className="absolute -bottom-1 -right-1 rounded-full h-8 w-8 bg-destructive hover:bg-destructive/90"
            onClick={handleRemoveImage}
          >
            <Trash />
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProfilePhotoSelector;
