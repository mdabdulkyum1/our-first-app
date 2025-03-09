import Banner from './Components/Banner';
import Issues from './components/Issues/Issues';
import LatestCourse from './Components/LatestCourse/LatestCourse';
import Newsletter from './Components/NewsLetter/NewsLetter';
import Popular from './Components/Popular/Popular';

export default function Home() {
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <LatestCourse></LatestCourse>
      <Popular></Popular>
      <Newsletter></Newsletter>
      <Issues></Issues>
    </div>
  );
}
