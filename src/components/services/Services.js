import React from 'react'
import './Services.css'
import { GiCheckMark } from 'react-icons/gi'

function Services() {
  return (
    <section id='services'>
        <h5>What I offer</h5>
        <h2>Services</h2>

        <div className='container services__container'>
          <article className='service'>
            <div className='service__head'>
              <h3>Front-end Develoment</h3>
            </div>

            <ul className='service__list'>
              <li>
                <GiCheckMark className='service__list-icon'/>
                <p>Lorem ipsum Lorem ipsum Lorem ipsum</p>
              </li>
              <li>
                <GiCheckMark className='service__list-icon'/>
                <p>Lorem ipsum Lorem ipsum Lorem ipsum</p>
              </li>
              <li>
                <GiCheckMark className='service__list-icon'/>
                <p>Lorem ipsum Lorem ipsum Lorem ipsum</p>
              </li>
              <li>
                <GiCheckMark className='service__list-icon'/>
                <p>Lorem ipsum Lorem ipsum Lorem ipsum</p>
              </li>
              <li>
                <GiCheckMark className='service__list-icon'/>
                <p>Lorem ipsum Lorem ipsum Lorem ipsum</p>
              </li>
              <li>
                <GiCheckMark className='service__list-icon'/>
                <p>Lorem ipsum Lorem ipsum Lorem ipsum</p>
              </li>
            </ul>
          </article>
          <article className='service'>
            <div className='service__head'>
              <h3>UI/UX Design</h3>
            </div>

            <ul className='service__list'>
              <li>
                <GiCheckMark className='service__list-icon'/>
                <p>Lorem ipsum Lorem ipsum Lorem ipsum</p>
              </li>
              <li>
                <GiCheckMark className='service__list-icon'/>
                <p>Lorem ipsum Lorem ipsum Lorem ipsum</p>
              </li>
              <li>
                <GiCheckMark className='service__list-icon'/>
                <p>Lorem ipsum Lorem ipsum Lorem ipsum</p>
              </li>
              <li>
                <GiCheckMark className='service__list-icon'/>
                <p>Lorem ipsum Lorem ipsum Lorem ipsum</p>
              </li>
              <li>
                <GiCheckMark className='service__list-icon'/>
                <p>Lorem ipsum Lorem ipsum Lorem ipsum</p>
              </li>
              <li>
                <GiCheckMark className='service__list-icon'/>
                <p>Lorem ipsum Lorem ipsum Lorem ipsum</p>
              </li>
            </ul>
          </article>
          <article className='service'>
            <div className='service__head'>
              <h3>Back-end Develoment</h3>
            </div>

            <ul className='service__list'>
              <li>
                <GiCheckMark className='service__list-icon'/>
                <p>Lorem ipsum Lorem ipsum Lorem ipsum</p>
              </li>
              <li>
                <GiCheckMark className='service__list-icon'/>
                <p>Lorem ipsum Lorem ipsum Lorem ipsum</p>
              </li>
              <li>
                <GiCheckMark className='service__list-icon'/>
                <p>Lorem ipsum Lorem ipsum Lorem ipsum</p>
              </li>
              <li>
                <GiCheckMark className='service__list-icon'/>
                <p>Lorem ipsum Lorem ipsum Lorem ipsum</p>
              </li>
              <li>
                <GiCheckMark className='service__list-icon'/>
                <p>Lorem ipsum Lorem ipsum Lorem ipsum</p>
              </li>
              <li>
                <GiCheckMark className='service__list-icon'/>
                <p>Lorem ipsum Lorem ipsum Lorem ipsum</p>
              </li>
            </ul>
          </article>
        </div>
    </section>
  )
}

export default Services