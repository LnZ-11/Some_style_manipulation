interface ImageProps {
    padding:number;
    shadow: number;
    radius: number;
    file: File | null;
  }
export default function Image({padding, shadow, radius, file}: ImageProps) {

    return(
        <>
            {file ? 
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: `${padding}px`, height: '50vh', width: '50vw'}}> 
                <img src={URL.createObjectURL(file)} style={{ boxShadow: `0 0 ${shadow}px black`, borderRadius: `${radius}px`}} /> 
            </div>
            : <h1>Choose a file</h1>}
        </>
        
    );
}