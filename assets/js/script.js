const listColors = [
  'red',
  'green',
  'blue',
  'yellow',
  'purple',
  'orange',
  'pink',
  'brown',
  'gray',
  'black',
  'white'
];

function changeColor() {
  listColors.sort(() => Math.random() - 0.5);
  document.body.style.backgroundColor = listColors[0];
}