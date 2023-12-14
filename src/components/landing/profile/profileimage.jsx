import Image from "next/image";

const ProfileImage = () => {
  return (
    <>
      <Image
        src="/tiny.png"
        alt="Description of the image"
        layout="fill"
        objectFit="cover"
      />
    </>
  );
};

export default ProfileImage;
