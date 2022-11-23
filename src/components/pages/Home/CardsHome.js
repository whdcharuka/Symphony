import React from 'react';
import '../../Cards.css';
import CardItem from '../../CardItem';

function CardsHome() {
  return (
    <div className='cards'>
      <h1>Browse items by category</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/Categories/car.png'
                text='Vehicle Parts'
                path='/vehicalparts'
              />
              <CardItem
                src='images/Categories/smartphone (2).png'
                text='Electronic Devices'
                path='/ElectronicDevices'
              />
              <CardItem
                src='images/Categories/house.png'
                text='Home & Garden'
                path='/HomeGarden'
              />
              <CardItem
                src='images/Categories/cat.png'
                text='Pets'
                path='/Animals'
              />
            </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Categories/toys.png'
              text='Toys'
              path='/Toys'
            />
            <CardItem
              src='images/Categories/sports.png'
              text='Hobby & Sport'
              path='/HobbySport'
            />
            <CardItem
              src='images/Categories/burger.png'
              text='Foods'
              path='/Foods'
            />
            <CardItem
              src='images/Categories/education.png'
              text='Education'
              path='/Education'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Categories/essential-oil.png'
              text='Essentials'
              path='/Essentials'
            />
            <CardItem
              src='images/Categories/dress.png'
              text='Fashion & Beauty'
              path='/FashionBeauty'
            />
            <CardItem
              src='images/Categories/giftbox.png'
              text='Gifts'
              path='/Gifts'
            />
            <CardItem
              src='images/Categories/guitar.png'
              text='Music'
              path='/Music'
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
