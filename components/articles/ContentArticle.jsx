import css from '../../styles/base/components/articles/_content-article.module.scss';
import MediaBlock from '../blocks/MediaBlock';
import HeadingBlock from '../blocks/HeadingBlock';
import TextBlock from '../blocks/TextBlock';
import ListBlock from '../blocks/ListBlock';
import CtaBlock from '../blocks/CtaBlock';

const ContentArticle = ({ media_block, heading_block, text_block, list_block, cta_block, heading_swap, classes, id }) => {
  if (!media_block && !heading_block && !text_block && !list_block && !cta_block) {
    return null;
  }

  return (
    <article
      className={classes ? `content-article ${css.style} ${classes}` : `content-article ${css.style}`}
      id={id ?? null}
    >
      {heading_block
        && (heading_swap
            ? <HeadingBlock {...heading_block} classes={'swap-outer'}/> 
            : null )}

      {media_block && <MediaBlock {...media_block}/>}

      <div className='text-cta-wrapper'>
        <div className='text-wrapper'>
          {heading_block
            && (heading_swap
                ? <HeadingBlock {...heading_block} classes={'swap-inner'}/> 
                : <HeadingBlock {...heading_block}/>)}
          {text_block && <TextBlock text={text_block}/>}
          {list_block && <ListBlock {...list_block}/>}
        </div>
        {cta_block && <CtaBlock {...cta_block}/>}
      </div>
    </article>
  );
};

export default ContentArticle;
