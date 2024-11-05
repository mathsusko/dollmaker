import styles from './Gigs.module.css'
import { Ticket } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

const GIGS = [
  {
    imageUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1730809187/dollmaker/newUpgrade/qteaqcn6mzic1ra7hbot.png',
    date: '16/08/2024',
    festival: 'MORRETES - LIVE IN A MOMENT',
    location: 'Morretes-PR 🇧🇷',
    ticketLink: '' // Link do ingresso
  },
  {
    imageUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1730809186/dollmaker/newUpgrade/pcrid2ukbmj8ae39yty0.png',
    date: '17/06/2023',
    festival: 'PROGRESSIVE - PARK ART',
    location: 'Pinhais-PR 🇧🇷',
    ticketLink: '' 
  },
  {
    imageUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1730809186/dollmaker/newUpgrade/dkrwpaqfsdnywi13ijjq.png',
    date: '21/04/2023',
    festival: 'DANGHAI - TIME, EDIÇÃO PROG',
    location: 'Curitiba-PR 🇧🇷',
    ticketLink: ''
  },
  {
    imageUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1730809186/dollmaker/newUpgrade/nu4lkkivdk2k0wfe6k6o.png',
    date: '13/11/2022',
    festival: 'TRIADE TRANCE - POCKET',
    location: 'COLOMBO-PR 🇧🇷',
    ticketLink: ''
  },
  {
    imageUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1730809186/dollmaker/newUpgrade/gdkx6z4c8llu6vsifbvs.png',
    date: '09/04/2022',
    festival: 'PSYCODELICOS VS PESSEGODELIA',
    location: 'Campo Largo-PR 🇧🇷',
    ticketLink: '' 
  },
]

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function Gigs() {
  return (
    <div className={styles.bg}>
      <div className={styles.content}>
        <h2>ACOMPANHE · GIGS</h2>

        <div className={styles.lista}>
          {GIGS.map((gig, index) => (
            <motion.div
              key={index}
              className={styles.gigs}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '0px 0px -200px 0px' }}
              variants={variants}
            >
              <div
                className={styles.fotoGigs}
                style={{ backgroundImage: `url(${gig.imageUrl})` }}
              ></div>

              <div className={styles.info}>
                <div className={styles.dataGigs}>
                  <p>{gig.date}</p>
                  <h2>{gig.festival}</h2>
                </div>

                <div className={styles.localGigs}>
                  <p>{gig.location}</p>
                </div>

                <button className={styles.ticketGigs}>
                  <a
                    href={gig.ticketLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ingressos <Ticket size={32} />
                  </a>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
