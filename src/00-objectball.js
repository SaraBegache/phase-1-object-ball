const gameObject = () => ({
    home: {
        teamName: "Brooklyn Nets",
        colors: ["Black","White"],
        players: {
            "Alan Anderson": {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1
            },
            "Reggie Evans": {
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7
            },
            "Brook Lopez": {
                number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15
            },
            "Mason Plumlee": {
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5
            },
            "Jason Terry": {
                number: 31,
                shoe: 15,
                points: 19,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1
            }
        }
    },
    away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
            "Jeff Adrien": {
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2
            },
            "Bismak Biyombo": {
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10
            },
            "DeSagna Diop": {
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5
            },
            "Ben Gordon": {
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0
            },
            "Brendan Haywood": {
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12
            }
        }}});

            // console.log(gameObject());

const numPointsScored  = (playerName) => {
    const gameData = gameObject()
  if  (gameData.home.players.hasOwnProperty(playerName)) return  gameData.home.players[playerName].points
  if  (gameData.away.players.hasOwnProperty(playerName)) return  gameData.away.players[playerName].points
    return "Player not found"

}

// console.log(numPointsScored("Jeff Adrien"))

const shoeSize  = (playerName) => {
    const gameData = gameObject()
  if  (gameData.home.players.hasOwnProperty(playerName)) return  gameData.home.players[playerName].shoe
  if  (gameData.away.players.hasOwnProperty(playerName)) return  gameData.away.players[playerName].shoe
    return "Player not found"

}

// console.log(shoeSize("Jeff Adrien"))

const teamColors = (teamName) => {
    const gameData = gameObject()
    if (gameData.home.teamName == teamName) return gameData.home.colors
    if (gameData.away.teamName == teamName) return gameData.away.colors
    return "Team not found"
}

// console.log(teamColors("Charlotte Hornets"))

const teamNames = () => {
    const gameData = gameObject()
    return [gameData.home.teamName,gameData.away.teamName]
} 

// console.log(teamNames())

const playerNumbers = (teamName) =>{
    const gameData = gameObject();

    for (const team in gameData) {
        if (gameData[team].teamName === teamName) {
            const numbers = [];
            for (const player in gameData[team].players) {
                numbers.push(gameData[team].players[player].number);
            }
            return numbers;
        }
    }

    return "Team not found";
}


// console.log(playerNumbers("Charlotte Hornets"))

const playerStats = (playerName) => {
    const gameData = gameObject();

    for (const team in gameData){
        for (const player in gameData[team].players) {
           if (player == playerName) return gameData[team].players[player]
        }
    }
    return "player not found"
}


// console.log(playerStats("Alan Anderson"))


const bigShoeRebounds = () => {
    const gameData = gameObject()
    let largestShoeSize = 0;
    let playerName = '';
    let teamName = '';
    for (const team in gameData){
        for (const player in gameData[team].players){
            const shoeSize = gameData[team].players[player].shoe
            if (shoeSize > largestShoeSize){
                largestShoeSize = shoeSize
                playerName = player
                teamName = team
            }
        }}
    return gameData[teamName].players[playerName].rebounds


}

// console.log(bigShoeRebounds())

//************BONUS****************/

const mostPointsScored = () => {
    const gameData = gameObject()
    let playerName = ''
    let mostPoints = 0
    for (const team in gameData){
        for (const player in gameData[team].players){
            const pointsScored = gameData[team].players[player].points
            if (pointsScored > mostPoints){
                mostPoints = pointsScored
                playerName = player
            }
        }}
        return playerName
}

// console.log(mostPointsScored())

const winningTeam = () => {
    const gameData = gameObject()
    let homeTeamScore = 0
    let awayTeamScore = 0

    for (player in gameData.home.players) {homeTeamScore = homeTeamScore + gameData.home.players[player].points}
    for (player in gameData.away.players) {awayTeamScore = awayTeamScore + gameData.away.players[player].points}

    return homeTeamScore>awayTeamScore ? "HOME team is the winner" :"AWAY team is the winner" 

}


// console.log(winningTeam())

const playerWithLongestName = () => {
    const gameData = gameObject()
    let playerName = ''
    for (const team in gameData){
        for (const player in gameData[team].players){
            if ( player.length> playerName.length){

                playerName = player
            }
        }}
        return playerName
}

// console.log(playerWithLongestName())


//************Super BONUS****************/


const doesLongNameStealATon = () => {
    const gameData = gameObject()
    let playerName = ''
    let mostSteals = 0
    for (const team in gameData){
        for (const player in gameData[team].players){
            const stealsMade = gameData[team].players[player].steals
            if (stealsMade > mostSteals){
                mostSteals = stealsMade
                playerName = player
            }
        }}
        return playerName == playerWithLongestName()
}

console.log(doesLongNameStealATon())