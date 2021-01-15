
const determineTeamImage = (teamName) => {
  teamImage = [];
  if (teamName === 'Inter Duvard CF') {
    teamImage = 'images/ajax.png';
  } else if (teamName === 'Tent City') {
    teamImage = 'images/tfc.png';
  } else if (teamName === 'Camorra Calcio') {
    teamImage = 'images/roma.png';
  } else if (teamName === 'Las Tortugas') {
    teamImage = 'images/turtle.png';
  } else if (teamName === 'Crotonese Calcio') {
    teamImage = 'images/g.png';
  } else if (teamName === 'FC Express III') {
    teamImage = 'images/inter.png';
  } else if (teamName === 'Wei Wei FC') {
    teamImage = 'images/inter.png';
  } else if (teamName === 'Fat Ronaldo City') {
    teamImage = 'images/hertha.png';
  } else if (teamName === 'Red Dick Devils') {
    teamImage = 'images/manu.png';
  } else if (teamName === 'Joga Bonito') {
    teamImage = 'images/roma.png';
  } return teamImage;
};