
        import { motion } from "framer-motion";

interface PreviewContactCardProps {
  title: string;
  icon: React.ReactNode;
  value: string;
  color: {
    primary: string;
    secondary: string;
    hover: string;
  };
  link?: {
    href: string;
    icon?: React.ReactNode;
  };
  additionalInfo?: string;
}

const ContactCard = ({
  title,
  icon,
  value,
  color,
  link,
  additionalInfo,
}: PreviewContactCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative flex flex-col items-center justify-center p-8 rounded-xl bg-[#1a191e] hover:bg-[#25242a] transition-all h-full"
    >
      <div className={`p-5 ${color.secondary} rounded-full mb-5`}>{icon}</div>

      <h3 className="text-2xl font-bold mb-2">{title}</h3>

      {link ? (
        <a
          href={link.href}
          className={`text-gray-300 hover:${color.primary} transition-colors flex items-center gap-2 justify-center`}
        >
          {value}
          {link.icon}
        </a>
      ) : (
        <>
          <p className="text-gray-300 text-center">{value}</p>
          {additionalInfo && (
            <p className="text-gray-400 text-sm mt-2 text-center">
              {additionalInfo}
            </p>
          )}
        </>
      )}
    </motion.div>
  );
};

export default ContactCard;
