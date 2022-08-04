import React from 'react';
import styled from 'styled-components';
const Button = styled.button`
background: #FFFFFF;
color: #707070;
font-weight: 400;
font-size: 17px;
width:100%;
height:40px;
border: 1px dashed #FFEFF8;
margin-bottom:10px;
`

/* identical to box height */


const ImageUploader = props => {
    const hiddenFileInput = React.useRef(null);
    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        props.handleFile(fileUploaded);
    };
    return (
        <div>
            <Button onClick={handleClick}>Upload Image</Button>
            <input type="file" accept=".png, .jpg, .jpeg"
                className="inputbox" ref={hiddenFileInput} onChange={handleChange} style={{ display: 'none' }} />

        </div>
    );
};

export default ImageUploader;