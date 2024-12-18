const Button = ({ label, iconUrl, backgroundColor, textColor, fullWidth }) => {
  return (
    <button
      className={` flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full  border-coral-red  
      ${fullWidth && "w-full"}
       ${
         backgroundColor
           ? `${backgroundColor} ${textColor}`
           : "bg-coral-red text-white"
       }
      `}
    >
      {label}
      {iconUrl && (
        <img
          src={iconUrl}
          alt="someicon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
