
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

const generateStandings = () => {
  $("#standings").append(`
    <tr>
       <td class="team-name"><img src="${teamImage}">${teamName}</td>
       <td>${gamesPlayed}</td>
       <td>${wins}-${draw}-${loss}</td>
       <td>${pts}</td>
       <td>${gd}</td>
     </tr>
`);
};

// const determineWinner = (homeScore, awayScore, homeTeam, awayTeam) => {
//   winner = [];
//   winningScore = [];
//   if (homeScore === awayScore) {
//     winner = `Tied`;
//   }
//   else if (homeScore > awayScore) {
//     winner = `${homeTeam} leads`;
//   } else {
//     winner = `${awayTeam} leads`;
//   }
//   return winner;
// };