let array = [
    {
        img: `<img src="./assets/img/plan/img1.jpg" alt="">`,
        content: `
        <div class="text">
            <span>A los ingenieros industriales les corresponde desempeñar un importante papel en el desarrollo sostenible, planificando y llevando a cabo proyectos que preserven los recursos naturales, que sean eficientes en la consecución de objetivos y mantengan los ecosistemas naturales y humanos.</span>
        </div>
        <div class="img">
            <img src="./assets/svg/plan/svg1.svg" alt="">
        </div>
        `
    },
    {
        img: `<img src="./assets/img/plan/img2.jpg" alt="">`,
        content: `
        <div class="text">
            <span>La mecatrónica debe desarrollar nuevas tecnologías y técnicas que apoyen el crecimiento y promuevan el desarrollo sustentable, con la finalidad de cumplir con los retos de energía, medio ambiente, alimentación, vivienda, agua, transporte, seguridad, salud, etc.</span>
            <span></span>
        </div>
        <div class="img">
            <img src="./assets/svg/plan/svg2.svg" alt="">
        </div>
        `
    },
    {
        img: `<img src="./assets/img/plan/img3.jpg" alt="">`,
        content: `
        <div class="text">
            <span>La relación entre la mecatrónica y el medio ambiente es bastante estrecha, ya que desde hace unos años con la crisis energética en el mundo, se empezaron a desarrollar artefactos para proteger el medio ambiente utilizando la tecnología, y a el producto de esto lo llamaron, energías renovables. Por lo tanto, incitamos a que las empresas utilicen este tipo de energías.
            </span>
            <span></span>
        </div>
        <div class="img">
            <img src="./assets/svg/plan/svg3.svg" alt="">
        </div>
        `
    },
    {
        img: `<img src="./assets/img/plan/img4.jpg" alt="">`,
        content: `
        <div class="text">
            <span>Entre los diferentes tipos de energías renovables encontramos las siguientes: energía hidráulica, energía eólica, energía solar, energía geotérmica, energía mareomotriz y energía de la biomasa.</span>
            <span></span>
        </div>
        <div class="img">
            <img src="./assets/svg/plan/svg4.svg" alt="">
        </div>
        `
    },
    {
        img: `<img src="./assets/img/plan/img5.jpg" alt="">`,
        content: `
        <div class="text">
            <span>Las energías renovables son recursos abundantes y limpios que no producen gases de efecto invernadero ni otras emisiones dañinas para el medio ambiente, como las emisiones de CO2; algo que sí ocurre con las energías no renovables, como son los combustibles fósiles.
            </span>
            <span></span>
        </div>
        <div class="img">
            <img src="./assets/svg/plan/svg5.svg" alt="">
        </div>
        `
    },
    {
        img: `<img src="./assets/img/plan/img6.jpg" alt="">`,
        content: `
        <div class="text">
            <span>Una de sus principales desventajas es que la producción de algunas energías renovables es intermitente, dependiendo de las condiciones climatológicas; como ocurre, por ejemplo, con la energía eólica y solar.</span>
            <span></span>
        </div>
        <div class="img">
            <img src="./assets/svg/plan/svg6.svg" alt="">
        </div>
        `
    },
    {
        img: `<img src="./assets/img/plan/img7.jpg" alt="">`,
        content: `
        <div class="text">
            <h1></h1>
            <span>Si la mecatronica quiere seguir innovando en su rama, tambien tiene que buscar la creación de alternativas para el uso racional de los recursos disponibles y el desarrollo de sistemas que aprovechan fuentes no convencionales de energía. Si se tiene en cuenta esto, se asegurará un impacto ambiental menor.</span>
        </div>
        <div class="img">
            <img src="./assets/svg/plan/svg7.svg" alt="">
        </div>
        `
    },
    {
        img: `<img src="./assets/img/plan/img8.jpg" alt="">`,
        content: `
        <div class="text">
            <h1></h1>
            <span>Es por estas razones que nuestra solución propone utilizar energías renovables al momento de que la mecatrónica lleve a cabo sus procesos.</span>
        </div>
        <div class="img">
            <img src="./assets/svg/plan/svg8.svg" alt="">
        </div>
        `
    }
]
let events = {
    onPressPhoto: (n) => {
        let backgroundImage = document.getElementsByClassName("background-image")
        backgroundImage[0].innerHTML = array[n].img

        let containerContent = document.getElementsByClassName("container-modal-photos")
        containerContent[0].innerHTML = array[n].content
    }
}

window.addEventListener("load", () => {
    let photos = document.getElementsByClassName("photo")
    for (let i = 0; i < photos.length; i++) {
        photos[i].addEventListener("click", (evt) => {
            
            // console.log(parseInt(evt.target.classList[0].split("p")[1]))
            events.onPressPhoto(parseInt(evt.target.classList[0].split("p")[1]))

            let modalPhotos = document.getElementById("modal-photos")
            let containerModalPhotos = document.getElementById("container-modal-photos")

            if (modalPhotos.classList.contains("active") && modalPhotos.classList.contains("disactive")) {
                modalPhotos.classList.remove("active")
                modalPhotos.classList.remove("disactive")
            }

            modalPhotos.classList.toggle("active")
            containerModalPhotos.classList.toggle("active")
        })
    }

    let closeButton = document.getElementById("close-button")
    closeButton.addEventListener("click", () => {
        let modalPhotos = document.getElementById("modal-photos")
        let containerModalPhotos = document.getElementById("container-modal-photos")
        // containerModalPhotos.classList.toggle("active")    
        modalPhotos.classList.toggle("disactive")
        containerModalPhotos.classList.toggle("active")

    })
})