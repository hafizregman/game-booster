import Image from "next/image"

export const LounchBtnPrimary = ({btnText, icon, alt, additionClass}) => {
    return (
        <a href="#" className={`flex w-max gap-2 ${additionClass} border-border-light bg-[#FFFFFF1A] rounded-full border px-3 py-1`}>
            <Image
                src={icon}
                className="w-4"
                alt={alt}
                width={50}  // Set appropriate width
                height={50} // Set appropriate height

            />
            <span className="white-gradient-light font-medium text-xs leading-7">
                {btnText}
            </span>
        </a>
    )
}