import React,{useState} from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = ()=>{
    const [file , setFile] = useState(null);
    const [error , setError] = useState('');
    const types = ['image/png','image/jpeg'];
    const changeHandler =(e)=>{
        e.preventDefault();
        let selectedFile = e.target.files[0];
        if(selectedFile && types.includes(selectedFile.type)){
            setFile(selectedFile);
            setError('');
        }else{
            setFile(null);
            setError('Please select a valid image file (png,jpeg)');
        }
    }
    return(
        <>
            <form>
            <label>
                <input type="file" onChange={changeHandler} />
                <span>+</span>
            </label>
            <div className="output">
                { error && <div className="error">{ error }</div>}
                { file && <div>{ file.name }</div> }
                { file && <ProgressBar file={file} setFile={setFile} /> }
            </div>
            </form>
        </>
    )
}

export default UploadForm;