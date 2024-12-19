import banner from "./../assets/Landing/banner_1.png";

function Landing(){
    return(
        <div>
            {/*banner*/}
            <div className="bg-center bg-cover h-dvh" style={{ backgroundImage: `url(${banner})` }}>

            </div>
        </div>
    );
}

export default Landing;