import './index.css'

const ThumbnailItem = props => {
  const {thumbnailList, getSelectedImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailList

  const highlightSelectedThumbnail = () => {
    getSelectedImage(id)
  }

  const activateHighlightedThumbnail = isActive ? 'selected-thumbnail-img' : ''

  return (
    <li className="list-item">
      <button
        type="button"
        className="img-button"
        onClick={highlightSelectedThumbnail}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail-img ${activateHighlightedThumbnail}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
