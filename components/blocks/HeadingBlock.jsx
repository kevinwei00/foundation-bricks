const HeadingBlock = ({ kicker, title, subtitle, classes }) => {
  if (!kicker && !title && !subtitle) {
    return null;
  }

  return (
    <div className={classes ? `heading-block ${classes}` : 'heading-block'}>
      {kicker && <h5 className='kicker' dangerouslySetInnerHTML={{ __html: kicker }}/>}
      {title && <h2 className='title' dangerouslySetInnerHTML={{ __html: title }}/>}
      {subtitle && <h3 className='subtitle' dangerouslySetInnerHTML={{ __html: subtitle }}/>}
    </div>
  );
};

export default HeadingBlock;
