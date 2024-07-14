import SoundsCardContainer from "@/components/sounds/SoundsCardContainer";
import SoundCard from "@/components/sounds/SoundCard";


const Sounds = () => {
    return (
        //todo: make impossible to choose 2 songs in the same time 'toggleActive'
        <div>
            <SoundsCardContainer>
                <SoundCard name={"lofi"}/>
                <SoundCard name={"piano"}/>
            </SoundsCardContainer>
        </div>
    )
}

export default Sounds;
