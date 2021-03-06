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
        teamImage = determineTeamImage(teamName);
        generateStandings();

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
        homeLogo = determineTeamImage(homeTeam);
        awayLogo = determineTeamImage(awayTeam);
        homeResult = '';
        awayResult = '';

        if (homeScore < awayScore) {
          homeResult = 'loser';
        } else if (awayScore < homeScore) {
          awayResult = 'loser';
        }

        if (homeTeam && awayTeam != null && awayScore + homeScore <= 0) {
          generatePending();
        }

        if (homeTeam && awayTeam != null && awayScore || homeScore > 0) {
          generateFinal();
        }
      });
    }
  });


  $(".filter").on("change", function () {
    let userInput = $("select").val();
    $('.fixtures-pending').empty();
    $('.fixtures-final').empty();

    $.ajax({
      url: `https://sheet.best/api/sheets/b6e9e463-5acb-46c6-b1e7-14915d5893ea?raw=1`,
      dataType: 'json',
      success: function (results) {
        $.each(results, function (index, value) {

          awayTeam = value.away_team;
          awayScore = value.away_score;
          homeScore = value.home_score;
          awayTeam = value.away_team;
          homeTeam = value.home_team;
          homeLogo = determineTeamImage(homeTeam);
          awayLogo = determineTeamImage(awayTeam);

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


          if (homeTeam && awayTeam != null) {
            if (userInput === homeTeam || userInput === awayTeam) {
              if (awayScore + homeScore <= 0) {
                generatePending();
              } else {
                generateFinal();
              }
            }
            if (userInput === 'all' && awayScore + homeScore <= 0) {
              generatePending();
            }
            if (userInput === 'all' && awayScore + homeScore > 0) {
              generateFinal();
            }
          }
        });
      }
    });
  });

  $.ajax({
    url: `https://sheet.best/api/sheets/b6e9e463-5acb-46c6-b1e7-14915d5893ea/tabs/CL?_raw=1`,
    dataType: 'json',
    success: function (results) {
      $.each(results, function (index, value) {
        homeTeam = value.home_team;
        awayTeam = value.away_team;
        homeLogo = determineTeamImage(homeTeam);
        awayLogo = determineTeamImage(awayTeam);
        homeScore = value.home_score;
        awayScore = value.away_score;
        gameNumber = value.game_number;
        winner = value.winner;
        winnerScore = value.winner_score;
        loserScore = value.loser_score;
        winnerMessage = `${winner} is winning ${winnerScore}-${loserScore} on aggregate`;

        if (winnerScore === loserScore && winnerScore != null) {
          winnerMessage = `Tied ${winnerScore}-${loserScore} on aggregate`;
        }

        if (winnerScore === null) {
          winnerMessage = `Official Matchups TDB`;
        }

        if (homeTeam && awayTeam && gameNumber != 'total' && gameNumber != 'final') {
          generateSemi();
        }
      });
    }
  });



});
