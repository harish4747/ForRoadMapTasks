let details = [
    { "18 Nov, 2024" : "AI Roadmaps Improved, Schedule Learning Time"},
    { "16 Oct, 2024": "DevOps Project Ideas, Team Dashboard, Redis Content" },
    { "04 Oct, 2024": "AI Engineer Roadmap, Leaderboards, Editor AI, and more" },
    { "23 Sep, 2024": "Redis Roadmap, Dashboard Changes, Bookmarks" },
    { "17 Sep, 2024": "New Dashboard, Leaderboards and Projects" }
];

let datekey = Object.keys(details[0]);
let contentvalue = Object.values(details[0]);

console.log(Object.keys(details[0])[0]);

let show = _ => {
    for (i = 0; i < Object.keys(details).length; i++) {

        let date = document.createElement("div");
        date.classList.add("date");
        date.innerText = Object.keys(details[i])[0]

        let dot = document.createElement("div");
        dot.classList.add('dot');

        let line = document.createElement('div');
        line.classList.add('line');

        let content = document.createElement("div");
        content.classList.add("content");
        content.innerText = Object.values(details[i])[0];

        document.getElementById("innerdate").append(date);

        document.getElementById("innerparent").append(line);
        document.getElementById("innerparent").append(dot);

        document.getElementById("innercontent").append(content);

        let parentdiv = document.getElementById("parentdiv");
        let increaseheight = parseInt(window.getComputedStyle(parentdiv).height);
        let newheight = increaseheight += 100;
        parentdiv.style.height = newheight + 'px';

    }
}

