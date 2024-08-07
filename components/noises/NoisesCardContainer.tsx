import React from "react";

interface CardContainerProps {
    children: React.ReactNode[] | React.ReactNode;
}

const NoisesCardContainer: React.FC<CardContainerProps> = ({children}) => {


    return (
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
            {children}
        </div>
    )
}
export default NoisesCardContainer;
