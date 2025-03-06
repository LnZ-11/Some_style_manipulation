
interface SettingsProps {
    setPadding: (value: number) => void;
    setShadow: (value: number) => void;
    setRadius: (value: number) => void;
    setFile: (value: File | null) => void;
  }
export default function Settings({ setPadding, setShadow, setRadius, setFile }: SettingsProps) {





  return (
      <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="bold">Settings</h1>
      <div className="flex flex-col items-center justify-center w-full">
        <h2>Choose file:</h2>
        <input id="file" type="file" className="file-input file-input-primary" onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)} />
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <h2>Padding :</h2>
        <input id="padding" type="range" className="range range-primary" onChange={(e) => setPadding(Number(e.target.value))}/>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <h2>Shadow :</h2>
        <input type="range" className="range range-primary" onChange={(e) => setShadow(Number(e.target.value))}/>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <h2>Radius :</h2>
        <input type="range" className="range range-primary" onChange={(e) => setRadius(Number(e.target.value))}/>
      </div>
    </div>
  );
}