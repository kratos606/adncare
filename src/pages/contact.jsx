import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import ReadySection from '../components/ReadySection/ReadySection'
import Footer from '../components/Footer/Footer'
import SwipeDown from '../components/SwipeDown/SwipeDown'

const Contact = () => {
  return (
    <>
        <section className='Contact__hero-section'>
        <Navbar colored={true} />
        <SwipeDown gold={true}/>
        </section>
        <ReadySection />
        <Footer />
    </>
  )
}

export default Contact