import css from '../../styles/base/components/blocks/_media-block.module.scss';

const MediaBlock = ({ image, images, image_alt, video, video_options }) => {
  if (!image && !images && !video) {
    return null;
  }

  return (
    <figure className={`media-block ${css.style}`}>
      {(() => {
        if (image || images) {
          return  <picture>
                    {images
                      && images.map((img, index) =>
                      <source
                        key={index}
                        srcSet={img.src}
                        media={img.max && `(max-width: ${img.max}px)`}/>)}
                    {image
                      ? <img src={image} alt={image_alt ?? ''} />
                      : <img src={images[0].src} alt={image_alt ?? ''}/>}
                  </picture>;
        }
        else if (video) {
          return  <video {...video_options ?? { playsInline: true, muted: true, autoPlay: true, loop: true }}>
                    <source src={video} type='video/mp4'/>
                  </video>;
        }
      })()}
    </figure>
  );
};

export default MediaBlock;
