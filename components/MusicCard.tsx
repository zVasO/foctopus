import Image from "next/image";

interface NoiseCardProps {
    name: string
}

const MusicCard = ({name}: NoiseCardProps) => {
    return (
        <a
            className="h-56 w-56 flex flex-col justify-between group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
            <div style={{position: 'relative', width: '180px', height: '180px'}}>
                <Image
                    src={`/images/${name}.png`}
                    fill={true}
                    alt="The lofi music logo"
                    style={{
                        objectFit: 'contain',
                    }}
                />
            </div>
            <p className={`mt-2 max-w-[30ch] text-sm opacity-50 text-center`}>
                {name.toUpperCase()}
            </p>
        </a>
    )
}

export default MusicCard;
