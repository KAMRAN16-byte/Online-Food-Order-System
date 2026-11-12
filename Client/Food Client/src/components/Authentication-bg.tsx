import temp_video from "../assets/temp_video.mp4"
function AuthenticationBg() {
    return (
        <div className={'z-0 absolute h-full w-full overflow-hidden'}>
            <div className={'h-full w-full'} >
                <video autoPlay={true} muted={true} loop={true} className={'w-full h-full object-cover'}>
                    <source src={temp_video}/>
                </video>
            </div>

        </div>
    )
}

export default AuthenticationBg;

