import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="akilaimalsha@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="077 587 8240" Image={FiPhone} />
      <SingleInfo text="kaduwela, kothalawala" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
