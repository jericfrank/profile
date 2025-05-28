import { useEffect, useState } from 'react';

import Career from '../components/Career';
import Footer from '../components/Footer';
import Introduction from '../components/Introduction';
import TechStack from '../components/TechStack';

import fetchInfoByUserId, { ProfileInfo } from '../firebase/fetchInfoByUserId';

function Main() {
  const [profileInfo, setProfileInfo] = useState<ProfileInfo>({
    work_experiences: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchInfoByUserId('74oXZVN8nMh9lnr1j13X');
        setProfileInfo({
          work_experiences: data.work_experiences,
        });
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Introduction />
      <Career workExperiences={profileInfo.work_experiences} />
      <TechStack />
      <Footer />
    </>
  );
}

export default Main;
