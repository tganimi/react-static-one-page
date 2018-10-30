import React from 'react'

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.790889971919!2d-46.72601088446101!3d-23.647658670671195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce56c155542827%3A0x1359aba3e7c95db7!2sCredicard+Hall!5e0!3m2!1spt-BR!2sbr!4v1534978937741" 
                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen>
             </iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    )
}

export default Location;
