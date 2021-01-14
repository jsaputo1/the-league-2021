$(function () {

  $.ajax({
    url: `https://sheet.best/api/sheets/b6e9e463-5acb-46c6-b1e7-14915d5893ea/tabs/Table`,
    dataType: 'json',
    success: function (results) {
      $.each(results, function (index, value) {
        gamesPlayed = value.gp;
        teamName = value.team;
        pts = value.pts;
        wins = value.w;
        draw = value.t;
        loss = value.l;
        gd = value.gd;
        teamImage = '';
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
        }

        $("#standings").append(`
             <tr>
                <td class="team-name"><img src="${teamImage}">${teamName}</td>
                <td>${gamesPlayed}</td>
                <td>${wins}-${draw}-${loss}</td>
                <td>${pts}</td>
                <td>${gd}</td>
              </tr>
         `);
      });
    }
  });

  $.ajax({
    url: `https://sheet.best/api/sheets/b6e9e463-5acb-46c6-b1e7-14915d5893ea?raw=1`,
    dataType: 'json',
    success: function (results) {
      $.each(results, function (index, value) {

        //Fixtures
        awayTeam = value.away_team;
        awayScore = value.away_score;
        homeScore = value.home_score;
        awayTeam = value.away_team;
        homeTeam = value.home_team;
        homeLogo = 'images/ajax.png';
        awayLogo = 'images/ajax.png';
        if (homeTeam === 'Inter Duvard CF') {
          homelogo = 'images/ajax.png';
        } else if (homeTeam === 'Tent City') {
          homeLogo = 'images/tfc.png';
        } else if (homeTeam === 'Camorra Calcio') {
          homeLogo = 'images/roma.png';
        } else if (homeTeam === 'Las Tortugas') {
          homeLogo = 'images/turtle.png';
        } else if (homeTeam === 'Crotonese Calcio') {
          homeLogo = 'images/g.png';
        } else if (homeTeam === 'FC Express III') {
          homeLogo = 'images/inter.png';
        } else if (homeTeam === 'Wei Wei FC') {
          homeLogo = 'images/inter.png';
        } else if (homeTeam === 'Fat Ronaldo City') {
          homeLogo = 'images/hertha.png';
        } else if (homeTeam === 'Red Dick Devils') {
          homeLogo = 'images/manu.png';
        } else if (homeTeam === 'Joga Bonito') {
          homeLogo = 'images/roma.png';
        }
        if (awayTeam === 'Inter Duvard CF') {
          awaylogo = 'images/ajax.png';
        } else if (awayTeam === 'Tent City') {
          awayLogo = 'images/tfc.png';
        } else if (awayTeam === 'Camorra Calcio') {
          awayLogo = 'images/roma.png';
        } else if (awayTeam === 'Las Tortugas') {
          awayLogo = 'images/turtle.png';
        } else if (awayTeam === 'Crotonese Calcio') {
          awayLogo = 'images/g.png';
        } else if (awayTeam === 'FC Express III') {
          awayLogo = 'images/inter.png';
        } else if (awayTeam === 'Wei Wei FC') {
          awayLogo = 'images/inter.png';
        } else if (awayTeam === 'Fat Ronaldo City') {
          awayLogo = 'images/hertha.png';
        } else if (awayTeam === 'Red Dick Devils') {
          awayLogo = 'images/manu.png';
        } else if (awayTeam === 'Joga Bonito') {
          awayLogo = 'images/roma.png';
        }
        homeResult = '';
        awayResult = '';

        if (homeScore < awayScore) {
          homeResult = 'loser';
        } else if (awayScore < homeScore) {
          awayResult = 'loser';
        }

        if (homeTeam && awayTeam != null && awayScore + homeScore <= 0) {
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
        }

        if (homeTeam && awayTeam != null && awayScore || homeScore > 0) {
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
        }
      });
    }
  });


  $(".filter").on("change", function () {
    let userInput = $("select").val();
    console.log("input:", userInput);
    $('.fixtures-pending').empty();
    $('.fixtures-final').empty();

    $.ajax({
      url: `https://sheet.best/api/sheets/b6e9e463-5acb-46c6-b1e7-14915d5893ea?raw=1`,
      dataType: 'json',
      success: function (results) {
        $.each(results, function (index, value) {

          //Fixtures
          awayTeam = value.away_team;
          awayScore = value.away_score;
          homeScore = value.home_score;
          awayTeam = value.away_team;
          homeTeam = value.home_team;
          homeLogo = 'images/ajax.png';
          awayLogo = 'images/ajax.png';
          if (homeTeam === 'Inter Duvard CF') {
            homelogo = 'images/ajax.png';
          } else if (homeTeam === 'Tent City') {
            homeLogo = 'images/tfc.png';
          } else if (homeTeam === 'Camorra Calcio') {
            homeLogo = 'images/roma.png';
          } else if (homeTeam === 'Las Tortugas') {
            homeLogo = 'images/turtle.png';
          } else if (homeTeam === 'Crotonese Calcio') {
            homeLogo = 'images/g.png';
          } else if (homeTeam === 'FC Express III') {
            homeLogo = 'images/inter.png';
          } else if (homeTeam === 'Wei Wei FC') {
            homeLogo = 'images/inter.png';
          } else if (homeTeam === 'Fat Ronaldo City') {
            homeLogo = 'images/hertha.png';
          } else if (homeTeam === 'Red Dick Devils') {
            homeLogo = 'images/manu.png';
          } else if (homeTeam === 'Joga Bonito') {
            homeLogo = 'images/roma.png';
          }
          if (awayTeam === 'Inter Duvard CF') {
            awaylogo = 'images/ajax.png';
          } else if (awayTeam === 'Tent City') {
            awayLogo = 'images/tfc.png';
          } else if (awayTeam === 'Camorra Calcio') {
            awayLogo = 'images/roma.png';
          } else if (awayTeam === 'Las Tortugas') {
            awayLogo = 'images/turtle.png';
          } else if (awayTeam === 'Crotonese Calcio') {
            awayLogo = 'images/g.png';
          } else if (awayTeam === 'FC Express III') {
            awayLogo = 'images/inter.png';
          } else if (awayTeam === 'Wei Wei FC') {
            awayLogo = 'images/inter.png';
          } else if (awayTeam === 'Fat Ronaldo City') {
            awayLogo = 'images/hertha.png';
          } else if (awayTeam === 'Red Dick Devils') {
            awayLogo = 'images/manu.png';
          } else if (awayTeam === 'Joga Bonito') {
            awayLogo = 'images/roma.png';
          }
          homeResult = '';
          awayResult = '';
          final = '';

          if (homeScore < awayScore) {
            homeResult = 'loser';
          } else if (awayScore < homeScore) {
            awayResult = 'loser';
          }

          if (awayScore || homeScore > 0) {
            final = 'Final';
          }

          if (userInput === homeTeam || userInput === awayTeam) {

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
          }
        });
      }
    });
  });

});
