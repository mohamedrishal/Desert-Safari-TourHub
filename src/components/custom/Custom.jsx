import React from 'react'
import './custom.css'

const Custom = () => {
  return (
    <section className="mx-2 mb-5">
      <div className="custom-container container text-center  text-white p-5 border border-2 rounded border-danger shadow">
        <h2 className="font-weight-bold text-black mb-4">
          Customize Your Dream Adventures
        </h2>
        <p className="mb-4 text-secondary">
          Our tour package offer that grants customers the freedom to
          personalize their experiences, ensuring tailored adventures that cater
          to individual preferences and desires.
        </p>
        <button className="btn btn-grid">BOOK YOUR TRIP</button>
      </div>
    </section>
  )
}

export default Custom