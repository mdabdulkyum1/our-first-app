import Image from 'next/image';
import Navbar from './Components/Navbar';
import Popular from './Components/Popular';

export default function Home() {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
     
      <Popular></Popular>
    </div>
  );
}
