import Image from 'next/image';
import Navbar from './Components/Navbar';
import Newsletter from './components/NewsLetter/NewsLetter';

export default function Home() {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Newsletter></Newsletter>
      </div>
    </div>
  );
}
