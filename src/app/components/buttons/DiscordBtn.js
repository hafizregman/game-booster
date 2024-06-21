import Image from "next/image"

export const DiscordBtn = ({btnText, icon, alt, additionClass}) => {
    return (
        <a href="#" className={`text-sm font-semibold ${additionClass} px-4 py-3 gap-2 rounded-full bg-[#5865F2] flex justify-center items-center shadow-blue-light`}>
            {icon && (
                <Image
                    src={icon}
                    className="w-5 h-5"
                    alt={alt}
                />
            )}
            {btnText}
        </a>
    )
}