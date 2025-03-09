import Banner from './Components/Banner';
import BrandScroller from './Components/BrandScroller/BrandScroller';
import Demo from './Components/Demo/Demo';
import Demo2 from './Components/Demo2/Demo2';
import LatestCourse from './Components/LatestCourse/LatestCourse';
import Newsletter from './Components/NewsLetter/NewsLetter';
import Popular from './Components/Popular/Popular';

export default function Home() {
  return (
    <div>
      <div>
        <Banner></Banner>
        <BrandScroller></BrandScroller>
      </div>
      <LatestCourse></LatestCourse>
      <Popular></Popular>
      <Newsletter></Newsletter>
      <Demo></Demo>
      <Demo2></Demo2>
    </div>
  );
}
