const TextBlock = ({ text }) => {
  if (!text) {
    return null;
  }

  return (
    <div className='text-block'>
      {(text && typeof text === 'string') && <p className='text' dangerouslySetInnerHTML={{ __html: text }}/>}
      {(text && typeof text !== 'string')
        && text.map((item, index) =>
        <p
          key={index}
          className={`text text-${index + 1}`}
          dangerouslySetInnerHTML={{ __html: item }}/>)
      }
    </div>
  );
};

export default TextBlock;
