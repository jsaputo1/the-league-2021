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
    console.log("input:", userInput);
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

          if (userInput === homeTeam || userInput === awayTeam) {
            generateAllFixtures(final);
          }
        });
      }
    });
  });

  $.ajax({
    url: `https://sheet.best/api/sheets/b6e9e463-5acb-46c6-b1e7-14915d5893ea/tabs/CL`,
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
        round = value.round;
        // awayTotalScore = value.away_total_score;
        // homeTotalScore = value.home_total_score;
        // winner = determineWinner (homeTotalScore, awayTotalScore, homeTeam, awayTeam)
        // winningScore = awayScore
        // losingScore = homeScore
        // if (winner === homeTeam) {
        //   winningScore = homeTotalScore
        //   losingScore = awayto
        // } 
        
        if (homeTeam && awayTeam && gameNumber != null) {
          generateSemi();
        }
      });
    }
  });





});
