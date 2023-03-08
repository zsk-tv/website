const getScrollPercent = () => {
  const elementHtml = document.documentElement;
  const elementBody = document.body;

  return (
    ((elementHtml.scrollTop || elementBody.scrollTop) /
      ((elementHtml.scrollHeight || elementBody.scrollHeight) -
        elementHtml.clientHeight)) *
    100
  );
};

export { getScrollPercent };
