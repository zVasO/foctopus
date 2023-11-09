interface NoiseCardProps {
    name: string
    svgName?: string
}

const NoiseCard = ({name, svgName}: NoiseCardProps) => {
    return (
        <div className={"flex justify-center"}>
            <div
                className="flex items-center flex-col justify-center group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
                <i className={`${svgName} jtbI-4x`}></i>
                <p className={`m-2 max-w-[30ch] text-sm opacity-50`}>
                    {name.toUpperCase()}
                </p>
            </div>
        </div>
    )
}
export default NoiseCard;
