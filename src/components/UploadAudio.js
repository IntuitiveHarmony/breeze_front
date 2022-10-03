import React, { useState, useEffect } from "react";

const upload = upload

const AudioPlay = () => {
    const [uploadAudio, setUploadAudio] = useState("Play");

    const [audio, setAudio] = useState();

    useEffect(() => {
        if (upload) {
            upload.puploaduse();
            upload = null;
            setUploadAudio("Play");
        }
    if (audio) {
            upload = new Audio(audio);
            upload.onended = () => {
            setUploadAudio("Play");
        };
    }
  }, [audio]);

  const handleUpload = () => {
    if (uploadAudio === "Play") {
        upload.play();
        setUploadAudio("Pause");
    } else {
        upload.pause();
        setUploadAudio("Play");
    }
  };

  const addFile = (e) => {
    if (e.target.files[0]) {
        setAudio(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div>
        <button onClick={handleUpload}>{uploadAudio}</button>
        <input type="file" onChange={addFile} />
    </div>
  );
};

export default AudioPlay;