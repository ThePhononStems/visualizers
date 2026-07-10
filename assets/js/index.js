const library = document.getElementById("library");

const player = document.getElementById("player");

fetch("videos/videos.json")

.then(response => response.json())

.then(videos => {

    videos.forEach(video => {

        const card = document.createElement("div");
        card.className = "videoCard";

        card.innerHTML = `

            <button class="videoButton">

                ${video.title}

            </button>

            <div class="videoInfo">

                <p>

                    ${video.description || ""}

                </p>

            </div>

        `;

        const button = card.querySelector(".videoButton");

        const info = card.querySelector(".videoInfo");

        button.onclick = () => {

            document
                .querySelectorAll(".videoInfo")
                .forEach(box => {

                    if(box !== info){

                        box.classList.remove("open");

                    }

                });

            info.classList.toggle("open");

            player.src = "video.html?id=" + video.id;

        };

        library.appendChild(card);

    });

});