let actualState = 0;

let arrayOfInfo = [
    `
    <div class="title">
        <span>Ventaja #1</span>
    </div>
    <div class="subtitle">
        <span>Oportunidades de empleo aseguradas</span>
    </div>
    <div class="comment">
        <span>La ingeniería mecatrónica es una profesión completa, por eso se presenta como una de las opciones más sólidas y con alto potencial de proyección en el campo laboral e internacional.</span>
    </div>
    `,
    `
    <div class="title">
        <span>Ventaja #2</span>
    </div>
    <div class="subtitle">
        <span>El programa académico es muy completo y extenso</span>
    </div>
    <div class="comment">
        <span>El programa de estudio de esta rama es uno de los más completos que existen. Algunas de las asignaturas que estudiarás son: Álgebra, Estadística, Matemática, Química, Electrónica, Termodinámica, Automatización, Robótica, Teoría de máquinas, etc.</span>
    </div>
    `,
    `
    <div class="title">
        <span>Ventaja #3</span>
    </div>
    <div class="subtitle">
        <span>Es una carrera futurista</span>
    </div>
    <div class="comment">
        <span>Todos los días surgen nuevos mecanismos que facilitan la gestión y producción de las compañías. Dichos mecanismos son traídos gracias a la mecatrónica. Por lo tanto, dicho campo llegó para quedarse, y estará en auge durante las próximas decadas.</span>
    </div>
    `,
    `
    <div class="title">
        <span>Ventaja #4</span>
    </div>
    <div class="subtitle">
        <span>El ingeniero es libre de hacer lo que guste</span>
    </div>
    <div class="comment">
        <span>La ingeniería de la mecatrónica permite dar rienda suelta a la imaginación del ingeniero, además de que tiene resultados tangibles al ver sus proyectos en vivo y en directo. Y, siendo la cereza del pastel, además de disfrutar lo que se está haciendo, al mismo tiempo está cambiando el mundo.</span>
    </div>
    `,
    `
    <div class="title">
        <span>Desventaja #1</span>
    </div>
    <div class="subtitle">
        <span>Exige una alta capacitación y competencias</span>
    </div>
    <div class="comment">
        <span>La parte más difícil en el desarrollo de cualquier proyecto de mecatrónica es encontrar al talento humano que pueda administrarlo correctamente.</span>
    </div>
    `,
    `
    <div class="title">
        <span>Desventaja #2</span>
    </div>
    <div class="subtitle">
        <span>Riesgo e incertidumbres del fracaso</span>
    </div>
    <div class="comment">
        <span>Fallar rotundamente es otro de los más grandes problemas para resolver en un proyecto, porque al no hacer los análisis adecuados, se corre el peligro a fracasar. En cualquier gran proyecto cuando se llega a la derrota, siempre hay pérdidas económicas significativas.</span>
    </div>
    `,
    `
    <div class="title">
        <span>Desventaja #3</span>
    </div>
    <div class="subtitle">
        <span>Reemplazan la mano de obra humana</span>
    </div>
    <div class="comment">
        <span>Aunque a nuestra sociedad actual le cueste asimilarlo, conforme avanza la tecnología, el ser humano se va volviendo más obsoleto. Darle el paso a los robots, en vez de hacer las cosas por nosotros mismos, se va haciendo un futuro inevitable.</span>
    </div>
    `,
    `
    <div class="title">
        <span>Desventaja #4</span>
    </div>
    <div class="subtitle">
        <span>Contaminación ambiental exagerada</span>
    </div>
    <div class="comment">
        <span>Existe muy poco cuidado con respecto al impacto ambiental que provocan las empresas de esta rama. Es por esta razón que, queriendo abordar más en este tema, hemos decidido que nuestra problemática sería el impacto ambiental provocado por las empresas de mecatrónica.</span>
    </div>`
]

let events = {
    onClickPreview: (n) => {
        if (n != actualState) {

            //video
            let containerOfVideo = document.getElementsByClassName("container-video")
            containerOfVideo[0].innerHTML = `
            <video id="main-video" src="./assets/videos/a-d/video` + (n + 1) + `.mp4" autoplay muted loop></video>
            <div class="screen-video">
            </div>
            `

            //info
            let containerOfInfo = document.getElementsByClassName("modal")
            containerOfInfo[0].innerHTML = arrayOfInfo[n]

            actualState = n
        }
    },
    onVideoCanPlay: () => {
        // let containerOfInfo = document.getElementsByClassName("modal")
        // if (!containerOfInfo[0].classList.contains("minimize")){
        //     containerOfInfo[0].classList.toggle("minimize")
        // }
    }
}

window.addEventListener("load", () => {
    let previews = document.getElementsByClassName("preview")
    for(let i = 0; i < previews.length; i++) {
        previews[i].addEventListener("click", (evt) => {
            events.onClickPreview(parseInt(evt.target.classList[0].split("pre")[1]))
        })
    }
})