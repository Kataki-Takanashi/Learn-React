
function ProfilePicture() {

    const imgUrl = "/src/assets/AbdurRaheem_Ali.png";

    const handleClick = (e) => {
        e.target.style.display = "none";
    }

    return (
        <img src={imgUrl} alt="Ali AbdurRaheem Profile Picture" onClick={handleClick}/>
    );
};

export default ProfilePicture;