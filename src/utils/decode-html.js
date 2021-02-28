const decodeHtml = (string) => {
  const txt = document.createElement('textarea');
  txt.innerHTML = string;
  return txt.value.replace('<![CDATA[', '').replace(']]>', '');
};

export default decodeHtml;
