const SocialMedia = (props) => {
    return (
        <a 
            className="bg-grey-700 py-3 w-full rounded-lg mt-4 text-white text-sm text-center font-bold hover:cursor-pointer hover:bg-green transition hover:text-grey-900"
            href={props.link}
            target="_blank">
            {props.name}
        </a>
    )
}

export default SocialMedia