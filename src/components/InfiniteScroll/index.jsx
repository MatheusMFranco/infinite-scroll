import React, { useEffect, useRef } from 'react';
import P from 'prop-types';

export const InfiniteScroll = ({ showMore }) => {
  const contentRef = useRef();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect();
        showMore();
      }
    }, options);
    observer.observe(contentRef.current);

    return () => {
      observer.disconnect();
    };
  }, [showMore]);

  return <div ref={contentRef} />;
};

InfiniteScroll.propTypes = {
  showMore: P.func.isRequired,
};
