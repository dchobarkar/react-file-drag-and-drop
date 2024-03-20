type GalleryProps = {
  imageUrls: Array<string>;
};

export const Gallery = ({ imageUrls }: GalleryProps) => {
  return (
    <div className="gallery">
      {imageUrls.slice(0, 16).map((url) => (
        <div className="gallery-img-container">
          <img src={url} className="gallery-img" />
        </div>
      ))}
    </div>
  );
};
