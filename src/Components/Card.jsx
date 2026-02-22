import SocialMedia from "./SocialMedia"

import links from "../Data/social-media-links.json"

import imgPerfil from "../assets/meu-avatar.jpg"

const Card = () => {
    return (
        <div className="max-w-md flex flex-col items-center bg-grey-800 p-10 rounded-xl">
            <img
                className="max-w-20 rounded-full mb-6" 
                src={imgPerfil} 
                alt="Ícone de perfil" 
                />

            <h2 className="text-white text-xl font-bold">Kelly Trindade</h2>
            <span className="text-green text-xs font-bold mt-1">Rio de Janeiro, Brasil</span>
            <div className="my-4 text-white font-light text-sm text-center">
                <span>Desenvolvedora Fullstack e Multiartista</span>
                <br />
                <span>Fotógrafa, Producer, Desenhista e DJ</span>
            </div>

            {
                links.socialMedias.map( link => (
                    <SocialMedia 
                        link={link.url}
                        name={link.name}
                        />
                ) )
            }

        </div>
    )
}

export default Card