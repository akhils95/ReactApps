import React, { useEffect } from 'react';

function FaceRecognition() {

    useEffect(() => {
        window.open("https://face-recogn-brain.herokuapp.com/", "_blank")
    })

    return(
        <h2>Redirecting to Face Recognition App</h2>
    )

}

export default FaceRecognition;