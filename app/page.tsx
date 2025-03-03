"use client"
import { types } from "util";
import Settings from "./components/settings";
import {useState} from 'react';

interface ISettings {
  setPadding: (padding: number) => void;
  setShadow: (shadow: number) => void;
  setRadius: (radius: number) => void;
  setFile: (file: File) => void;
}

export default function Home() {
  const [padding, setPadding] = useState<number>(0);
  const [shadow, setShadow] = useState<number>(0);
  const [radius, setRadius] = useState<number>(0);
  const [file, setFile] = useState<File | null>(null);
console.log(padding, shadow, radius, file);
  return (
  <>
    <Settings setRadius={setRadius} setShadow={setShadow} setPadding={setPadding} setFile={setFile}  />
  </>
  );
}