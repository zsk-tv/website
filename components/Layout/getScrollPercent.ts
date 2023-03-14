export const getScrollPercent = () => {
  const { documentElement, body } = document;

  return (
    ((documentElement.scrollTop || body.scrollTop) /
      ((documentElement.scrollHeight || body.scrollHeight) -
        documentElement.clientHeight)) *
    100
  );
};
