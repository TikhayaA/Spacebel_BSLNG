document.addEventListener("DOMContentLoaded", () => {
    // modal
    let OpenModalBtn = document.getElementsByClassName("launcher_support-btn");
    let documentationMmodal = document.getElementsByClassName("documentation-modal");
    let closeModalBtn = document.getElementsByClassName("documentation-modal_close-btn");
    function openModal() {
        documentationMmodal[0].classList.add('active');
    }
    function closeModal() {
        documentationMmodal[0].classList.remove('active');
    }
    OpenModalBtn[0].addEventListener('click', openModal);
    closeModalBtn[0].addEventListener('click', closeModal);

    let sidebarOpen = document.querySelector('.sidebar_open-btn');
    let sidebarHeaderContent = document.querySelector('.sidebar_header-content');
    let sidebarHeader = document.querySelector('.sidebar_header');
    let sidebar = document.querySelector('.sidebar');
    let workspaceContainer = document.querySelector('.workspace_container');

    sidebarOpen.addEventListener('click', () => {
        sidebarOpen.classList.toggle('active');
        sidebarHeaderContent.classList.toggle('active');
        sidebarHeader.classList.toggle('active');
        sidebar.classList.toggle('active');
        workspaceContainer.classList.toggle('active');
    });

    let play = document.getElementsByClassName("play");
    let playTransparent = document.getElementsByClassName ("play-transparent");
    let pause = document.getElementsByClassName ("pause");
    let pauseTransparent = document.getElementsByClassName ("pause-transparent");
    play[0].addEventListener('click', () => {
        play[0].classList.toggle('active');
        playTransparent[0].classList.toggle('active');
        pause[0].classList.toggle('active');
        pauseTransparent[0].classList.toggle('active');
    });
    pause[0].addEventListener('click', () => {
        play[0].classList.toggle('active');
        playTransparent[0].classList.toggle('active');
        pause[0].classList.toggle('active');
        pauseTransparent[0].classList.toggle('active');
    });
});
