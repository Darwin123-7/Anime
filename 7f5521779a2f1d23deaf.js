export function attack() {
    const allStats = document.querySelectorAll(".stats");

    const stats = [];

    const igrisStats = {
        attack: 20,
        defense: 18,
        magic: 11,
        speed: 27,
        level: 1,
    };

    const sungStats = {
        attack: 49,
        defense: 32,
        magic: 69,
        speed: 55,
        level: 1,
    };

    const beruStats = {
        attack: 32,
        defense: 41,
        magic: 19,
        speed: 55,
        level: 1,
    };

    stats.push(igrisStats, sungStats, beruStats);

    for (let i = 0; i < stats.length; i++) {
        for (const [key, value] of Object.entries(stats[i])) {
            const p = document.createElement("p");
            p.textContent = `${key}: ${value}`;
            allStats[i].appendChild(p);
        }
    }

    return allStats;
}

console.log(attack());