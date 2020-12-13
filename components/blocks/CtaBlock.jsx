import React from 'react';
import css from '../../styles/base/components/blocks/_cta-block.module.scss';

const CtaBlock = ({ cta_text, cta_link, cta_rel, cta_target, event_category, event_action }) => {
  return (
    <div className={`cta-block ${css.style}`}>
      <a
        href={cta_link ?? ''}
        className='cta'
        data-event_category={event_category ?? null}
        data-event_action={event_action ?? null}
        rel={cta_rel ?? null}
        target={cta_target ?? null}
        dangerouslySetInnerHTML={{ __html: cta_text ?? '--CTA Text--' }}
      />
    </div>
  );
};

export default CtaBlock;
