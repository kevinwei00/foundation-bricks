import css from '../../styles/base/components/sections/_duo-section.module.scss';
import MediaBlock from '../blocks/MediaBlock';
import ContentArticle from '../articles/ContentArticle';

const DuoSection = ({ media_block, content_article, classes, id }) => {
  if (!media_block && !content_article) {
    return null;
  }

  return (
    <section
      className={classes ? `duo-section ${css.style} ${classes}` : `duo-section ${css.style}`}
      id={id ?? null}
    >
      <div className='container'>
        {media_block && <MediaBlock {...media_block}/>}
        {content_article && <ContentArticle {...content_article}/>}
      </div>
    </section>
  );
};

export default DuoSection;
