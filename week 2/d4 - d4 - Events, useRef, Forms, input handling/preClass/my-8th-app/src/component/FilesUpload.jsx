// Another usecase of USEREFF HOOk.
import React from 'react'

const FilesUpload = () => {
    const ref = React.useRef();
    // console.log('reff:', ref);
    React.useEffect(() => {
        // effect
        return () => {
            // cleanup
        };
    }, []);
    const onSubmit = () =>{
        console.log("ref : ",ref);

       
        console.log("ref.current.files : ",ref.current.files);
        console.log("ref.current.files[0] : ",ref.current.files[0]);
    }

  return (
    <>
        <h6>---- FilesUpload ----</h6>
        <div >
            <h4>Image</h4>
            <input type="file" ref={ref}  />
            <button onClick={onSubmit}>SUBMIT</button>
        </div>
    </>
  )
}

export default FilesUpload