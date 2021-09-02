import s from "./Gallery.module.css"

const Gallery = ({ photos, onLoadMoreClick }) => (
  <>
    <ul className={s.gallery}>
      {photos.map(({ id, img_src, sol, earth_date }) => (
        <li key={id} className={s.photo}>
          <img src={img_src} alt={earth_date} width="350" height="350" />
          <p>Sol: {sol}</p>
          <p>Earth time: {earth_date}</p>
        </li>
      ))}
    </ul>
    <button type="button" onClick={onLoadMoreClick}>
      Load more photos
    </button>
  </>
)

export default Gallery
