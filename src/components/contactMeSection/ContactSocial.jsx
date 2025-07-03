import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/akila-liyanage/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/LAIkumara" Icon={FiGithub} />
      <SingleContactSocial link="https://www.facebook.com/share/1CEKxbcBcV/" Icon={FaFacebookF} />
      <SingleContactSocial link="https://wa.me/+94775878240" Icon={FaWhatsapp} />
    </div>
  );
};

export default ContactSocial;
