export const If = ({ condition, children }) => {
  if (condition) {
    return children;
  }
};
