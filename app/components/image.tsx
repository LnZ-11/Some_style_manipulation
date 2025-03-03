interface ImageProps {
    padding:number;
    shadow: number;
    radius: number;
    file: File | null;
  }
export default function Image({padding, shadow, radius, file}: ImageProps) {

    return(
        <div className="flex flex-col items-center justify-center  bg-gray-100">
            {file ? <img src={URL.createObjectURL(file)} style={{padding: `${padding}px`, boxShadow: `0 0 ${shadow}px black`, borderRadius: `${radius}px`}} /> : <h1>Choose a file</h1>}
        </div>
        
    );
}