let prevId = 0;

const generateId = prefix => {
  prevId++;
  return prefix + prevId;
};

export default generateId;
