import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <Homes>
      <div className="main__img">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
      </div>
    </Homes>
  );
};

export default Home;
const Homes = styled.section`
  .main__img {
    width: 100%;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }
`;