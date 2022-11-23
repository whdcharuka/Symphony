import React from 'react';
import '../../../App.css';
import ContactItem from './ContactItem';
import Cont from './Cont';

export default function Products() {
  return (
    <>
    <section>
        <div className='container d_flex'>
          <ContactItem />
            <div className='contact_box'>
              <Cont />
            </div>
        </div>
      </section>
    </>
  );
}