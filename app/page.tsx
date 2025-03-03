"use client"

import Settings from "./components/settings";
import Image from "./components/image";
import {useState} from 'react';

export default function Home() {
  const [padding, setPadding] = useState<number>(0);
  const [shadow, setShadow] = useState<number>(0);
  const [radius, setRadius] = useState<number>(0);
  const [file, setFile] = useState<File | null>(null);
console.log(padding, shadow, radius, file);
  return (
  <>
    <Settings setRadius={setRadius} setShadow={setShadow} setPadding={setPadding} setFile={setFile}  />
    <Image radius={radius} shadow={shadow} padding={padding} file={file}/>
  </>
  );
}