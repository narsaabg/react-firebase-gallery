import { useState,useEffect } from "react";
import {firegramStorage ,ref ,uploadBytesResumable,getDownloadURL ,firegramFirestore,collection,addDoc} from '../firebase/config'

const useStorage = (file) =>{
    const [progress,setProgress] = useState(0);
    const [error,setError] = useState(null);
    const [url,setUrl] = useState(null);

    useEffect(()=>{
        const storageRef = ref(firegramStorage,`/files/${file.name}`);
        
        const uplaodTask = uploadBytesResumable(storageRef,file);
        uplaodTask.on('state_changed',(snap)=>{
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage)
        },(error)=>{
            setError(error)
        }, async ()=>{
            const url = await getDownloadURL(storageRef);
            setUrl(url)
            let collectionRef = await addDoc(collection(firegramFirestore,'images'),{url});
            
        });
    },[file]);
    
    return {progress , error ,url}
}

export default useStorage;