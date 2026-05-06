import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/CharuSachindu" },
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/sachindu-charuka/" },
    // { icon: <FaYoutube />, path: "" },
    // { icon: <FaTwitter />, path: "" },
];

const Socials = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => (
                <a key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
                    {item.icon}
                </a>
            ))}
        </div>
    );
};

export default Socials;
