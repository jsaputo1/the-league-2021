const generateFinal = () => {
  $(".fixtures-final").append(
    `
  <div class="matchup">
  <div class="teams">
    <p class="team-name-fixtures ${homeResult}" >
    <img src="${homeLogo}">${homeTeam}</p>
    <p class="team-name-fixtures ${awayResult}">
    <img src="${awayLogo}">${awayTeam}</p>                
  </div>
  <div class="score">
    <p class=${homeResult}>${homeScore}</p>
    <p class=${awayResult}>${awayScore}</p>
  </div>
  <div class="final">
    <p>Final</p>
  </div> 
</div>
<hr>
`);
};

const generatePending = () => {
  $(".fixtures-pending").append(
    `
   <div class="matchup">
   <div class="teams">
     <p class="team-name-fixtures">
     <img src="${homeLogo}">${homeTeam}</p>
     <p class="team-name-fixtures">
     <img src="${awayLogo}">${awayTeam}</p>                
   </div>
   <div class="score">
     <p>${homeScore}</p>
     <p>${awayScore}</p>
   </div>
   <div class="final">
   </div> 
</div>
<hr>
 `);
};

const generateAllFixtures = (final) => {
  $(".fixtures-final").append(
    `
  <div class="matchup">
  <div class="teams">
    <p class="team-name-fixtures ${homeResult}" >
    <img src="${homeLogo}">${homeTeam}</p>
    <p class="team-name-fixtures ${awayResult}">
    <img src="${awayLogo}">${awayTeam}</p>                
  </div>
  <div class="score">
    <p class=${homeResult}>${homeScore}</p>
    <p class=${awayResult}>${awayScore}</p>
  </div>
  <div class="final">
    <p>${final}</p>
  </div> 
</div>
<hr>
`);
};

const generateSemi = () => {
  $(".semi-finals").append(`
    <div class="playoff-matchup">
      <h1 class="game-number">Game ${gameNumber}</h1>
      <div class="playoff-info">
          <div class="playoff-team">
            <figure><img src="${homeLogo}"></figure>
            <div class="playoff-matchup-text">
                <h3>${homeTeam}</h3>
            </div>
          </div>
          <h2 class="score">${homeScore}</h2>
      </div>
      <div class="playoff-info">
        <div class="playoff-team">
          <figure><img src="${awayLogo}"></figure>
          <div class="playoff-matchup-text">
              <h3>${awayTeam}</h3>
          </div>
        </div>
        <h2 class="score">${awayScore}</h2>
      </div>
      <p>${winnerMessage}</p>
    </div>
  `);
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