import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function CardsHome() {
  return (
    <div className='cards'>
      <h1>Browse items by category</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/car.png'
                text='Vehicle Parts'
                path='/VehicleParts'
              />
              <CardItem
                src='images/smartphone (2).png'
                text='Electronic Devices'
                path='/ElectronicDevices'
              />
              <CardItem
                src='images/house.png'
                text='Home & Garden'
                path='/HomeGarden'
              />
              <CardItem
                src='images/cat.png'
                text='Animals'
                path='/Animals'
              />
            </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/customer-service.png'
              text='Services'
              path='/Services'
            />
            <CardItem
              src='images/sports.png'
              text='Hobby & Sport'
              path='/HobbySport'
            />
            <CardItem
              src='images/burger.png'
              text='Foods'
              path='/Foods'
            />
            <CardItem
              src='images/education.png'
              text='Education'
              path='/Education'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/essential-oil.png'
              text='Essentials'
              path='/Essentials'
            />
            <CardItem
              src='images/dress.png'
              text='Fashion & Beauty'
              path='/FashionBeauty'
            />
            <CardItem
              src='images/delivery-box.png'
              text='Other'
              path='/Other'
            />
            <CardItem
              src='images/working.png'
              text='No'
              path='/No'
            />
          </ul>

  <div className='cards'>
    <div className='cards__container'></div>
      <h1>How it works?</h1>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/round-account-button-with-user-inside.png'
              text='Create free account in SLTsymphony.lk easily using Facebook or Google'             
            />
            <CardItem
              src='images/pencil.png'
              text='Post ads about any items or services you need to share online'
            />
            {/* <CardItem
              src='images/black-shop-tag.png'
              text='Your ads will be exposed to thousands of buyers online everyday'
            /> */}
            <CardItem
              src='images/free.png'
              text='Select the best item you received and start share your items or services'
            />
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default CardsHome;
