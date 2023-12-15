import Image from "next/image";
import PropTypes from "prop-types";

const ProfileImage = ({ imagePath }) => {
  return (
    <>
      <Image
        src={imagePath}
        alt="Bahati Yves photo"
        layout="fill"
        objectFit="cover"
      />
    </>
  );
};

ProfileImage.propTypes = {
  imagePath: PropTypes.string.isRequired,
};

export default ProfileImage;
