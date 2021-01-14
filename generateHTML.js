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