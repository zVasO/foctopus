import React from "react";

interface SoundsCardContainerProps {
    children: React.ReactNode[] | React.ReactNode;
}

const SoundsCardContainer: React.FC<SoundsCardContainerProps> = ({children}) => {


    return (
        <div className="z-10 max-w-5xl w-full items-center font-mono text-sm lg:flex mb-12">
            {children}

        </div>
    )
}
export default SoundsCardContainer;
