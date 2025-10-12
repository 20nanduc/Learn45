import Image from 'next/image';

function LogoIcon() {
    return (
        <Image src="/icons/app-icon.svg" alt="Logo" width={28} height={28} />
    )
}

export default LogoIcon
