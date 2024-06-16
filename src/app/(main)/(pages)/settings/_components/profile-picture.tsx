"use client";
import React from "react";
import UploadCareButton from "./upload-care";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "../../../../../components/ui/button";
import { X } from "lucide-react";

type Props = {
  onUpload?: any;
  onDelete?: any;
  userImage: string | null;
};

const ProfilePicture = ({ onUpload, onDelete, userImage }: Props) => {
  const router = useRouter();
  const onRemoveImage = async () => {
    const response = await onDelete();
    if (response) {
      router.refresh();
    }
  };
  return (
    <div className="flex flex-col">
      <p className="text-lg text-white">Profile Picture</p>
      <div className="flex h-[30vh] flex-col items-center justify-center">
        {userImage ? (
          <>
            <div className="relative h-full w-2/12">
              <Image fill src={userImage} alt="Profile Pic" />
            </div>
            <Button
              onClick={onRemoveImage}
              className="bg-transparent hover:bg-transparent text-white/70 hover:text-white"
            >
              <X /> Remove Logo
            </Button>
          </>
        ) : (
          <UploadCareButton onUpload={onUpload} />
        )}
      </div>
    </div>
  );
};

export default ProfilePicture;
