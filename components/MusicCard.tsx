import Image from "next/image";

interface NoiseCardProps {
    name: string
}

const MusicCard = ({name}: NoiseCardProps) => {
    return (
        <a
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
            <Image
                src={`/images/${name}.png`}
                width={175}
                height={175}
                alt="The lofi music logo"
            />
            <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-center`}>
                LOFI
            </p>
        </a>
    )
}

export default MusicCard;
