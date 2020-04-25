const example = () => {
  const fromInput = document.getElementById('example');
  document.getElementById('text').innerText = fromInput.value;
};

document.getElementById('btn').addEventListener('click', example);
