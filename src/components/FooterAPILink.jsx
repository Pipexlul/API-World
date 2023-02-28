const FooterAPILink = ({ label, url }) => {
  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={url}
      className="hover:text-violet-400"
    >
      {label}
    </a>
  );
};

export default FooterAPILink;
