import { motion } from 'framer-motion'
import styles from './Discografia.module.css'

// Define o conteúdo das músicas com URL de áudio
const musicData = [
  {
    title: 'Dezko - Ascend',
    production: 'Dollmaker Bootleg',
    imageUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725754329/dollmaker/musicas/az38jkma1l844ohtm2tt.png',
    spotifyUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725753882/dollmaker/reakd3tsuhlxespv5e9s.png',
    soundcloudUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725753882/dollmaker/guwqklp7omf9amvxm3ox.png',
    audioUrl:
      'https://res.cloudinary.com/dio2dnpmn/video/upload/v1725766201/dollmaker/musicas/audio/yuvwxgg3tin318uk22r5.mp3',
    spotify:
      'https://open.spotify.com/intl-pt/artist/7dGmK4sImWkq5ClORKQwIL?si=b6stSiSwR7S57vko92d-YQ',
    sound: 'https://soundcloud.com/dollmakerlive'
  },
  {
    title: 'Just Sound',
    production: 'Dollmaker',
    imageUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725754332/dollmaker/musicas/ks2hsr8pzo5fg6r5nekw.png',
    spotifyUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725753882/dollmaker/reakd3tsuhlxespv5e9s.png',
    soundcloudUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725753882/dollmaker/guwqklp7omf9amvxm3ox.png',
    audioUrl:
      'https://res.cloudinary.com/dio2dnpmn/video/upload/v1725766276/dollmaker/musicas/audio/sqacc8jzidlz2uplluhj.mp3',
    spotify:
      'https://open.spotify.com/intl-pt/artist/7dGmK4sImWkq5ClORKQwIL?si=b6stSiSwR7S57vko92d-YQ',
    sound: 'https://soundcloud.com/dollmakerlive'
  },
  {
    title: 'No Light',
    production: 'Dollmaker',
    imageUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725754329/dollmaker/musicas/e9rk6y1zg5wdltvsrd93.png',
    spotifyUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725753882/dollmaker/reakd3tsuhlxespv5e9s.png',
    soundcloudUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725753882/dollmaker/guwqklp7omf9amvxm3ox.png',
    audioUrl:
      'https://res.cloudinary.com/dio2dnpmn/video/upload/v1725766296/dollmaker/musicas/audio/l8olvchf5vd396wrhkts.mp3',
    spotify:
      'https://open.spotify.com/intl-pt/artist/7dGmK4sImWkq5ClORKQwIL?si=b6stSiSwR7S57vko92d-YQ',
    sound: 'https://soundcloud.com/dollmakerlive'
  },
  {
    title: 'On My Time',
    production: 'Dollmaker - Mashup Project',
    imageUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725754329/dollmaker/musicas/ovsahoym2gxp2zxrkvtx.png',
    spotifyUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725753882/dollmaker/reakd3tsuhlxespv5e9s.png',
    soundcloudUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725753882/dollmaker/guwqklp7omf9amvxm3ox.png',
    audioUrl:
      'https://res.cloudinary.com/dio2dnpmn/video/upload/v1725766314/dollmaker/musicas/audio/mroeas6rfj5fyq24mtsc.mp3',
    spotify:
      'https://open.spotify.com/intl-pt/artist/7dGmK4sImWkq5ClORKQwIL?si=b6stSiSwR7S57vko92d-YQ',
    sound: 'https://soundcloud.com/dollmakerlive'
  },
  {
    title: 'Trust',
    production: 'Dollmaker & Mr Kane',
    imageUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725754329/dollmaker/musicas/takyqfez3vr7fe3p9wdw.png',
    spotifyUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725753882/dollmaker/reakd3tsuhlxespv5e9s.png',
    soundcloudUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725753882/dollmaker/guwqklp7omf9amvxm3ox.png',
    audioUrl:
      'https://res.cloudinary.com/dio2dnpmn/video/upload/v1725766334/dollmaker/musicas/audio/asjlv6jl1bzyijwpmbp8.mp3',
    spotify:
      'https://open.spotify.com/intl-pt/artist/7dGmK4sImWkq5ClORKQwIL?si=b6stSiSwR7S57vko92d-YQ',
    sound: 'https://soundcloud.com/dollmakerlive'
  },
  {
    title: 'Children',
    production: 'Dollmaker Bootleg',
    imageUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725754329/dollmaker/musicas/hw44weqao8m0boso98ch.png',
    spotifyUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725753882/dollmaker/reakd3tsuhlxespv5e9s.png',
    soundcloudUrl:
      'https://res.cloudinary.com/dio2dnpmn/image/upload/v1725753882/dollmaker/guwqklp7omf9amvxm3ox.png',
    audioUrl:
      'https://res.cloudinary.com/dio2dnpmn/video/upload/v1725766357/dollmaker/musicas/audio/tspxtcfmw1o6ymzgudox.mp3',
    spotify:
      'https://open.spotify.com/intl-pt/artist/7dGmK4sImWkq5ClORKQwIL?si=b6stSiSwR7S57vko92d-YQ',
    sound: 'https://soundcloud.com/dollmakerlive'
  }

  // Adicione mais músicas conforme necessário
]

export default function Discografia() {
  // Define a animação para os cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className={styles.content}>
      <div className={styles.hero}>
        <div className={styles.discografia}>
          <div className={styles.spotify}>
            <h2>DISCOGRAFIA</h2>

            <div className={styles.cards}>
              {musicData.map((music, index) => (
                <motion.div
                  key={index}
                  className={styles.card}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  transition={{ duration: 0.5, delay: index * 0.3 }} // Define o atraso entre os cards
                >
                  <div
                    className={styles.fotoMusic}
                    style={{ backgroundImage: `url(${music.imageUrl})` }}
                  ></div>

                  <div className={styles.descMusic}>
                    <h2>{music.title}</h2>
                    <p>{music.production}</p>
                  </div>

                  <audio controls>
                    <source
                      src={music.audioUrl}
                      type="audio/mp3"
                    />
                  </audio>

                  <div className={styles.cta}>
                    <a href={music.spotify}>
                      <img
                        src={music.spotifyUrl}
                        alt="Spotify"
                      />
                    </a>
                    <a href={music.sound}>
                      <img
                        src={music.soundcloudUrl}
                        alt="SoundCloud"
                      />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
