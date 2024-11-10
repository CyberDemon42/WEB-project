document.addEventListener("DOMContentLoaded", function () {
    const popup = document.querySelector('.popup');
    const blurBackground = document.querySelector('.blur-background');
    const submitButton = document.querySelector('.popup .button input[type="submit"]');
    const fullNameInput = document.getElementById('fullName');
    const nicknameInput = document.getElementById('nickname');
    const emailInput = document.getElementById('email');
    const avatarInput = document.getElementById('avatar');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const birthdayInput = document.getElementById('birthday');

    let initialZIndex = -1;
    popup.style.zIndex = initialZIndex;


    function openPopup() {
        popup.style.display = 'block';
        blurBackground.style.display = 'block';
    }


    function closePopup() {
        popup.style.display = 'none';
        blurBackground.style.display = 'none';
    }


    const imageLink = document.querySelector('a.image-link');
    imageLink.addEventListener('click', function (event) {
        event.preventDefault();
        openPopup(); // Открыть попап
    });


    imageLink.addEventListener('click', function (event) {
        event.preventDefault();
        popup.style.zIndex = initialZIndex + 1;
        openPopup();
    });



    submitButton.addEventListener('click', function (event) {
        event.preventDefault();
        popup.style.zIndex = initialZIndex - 1;


        const fullName = fullNameInput.value;
        const nickname = nicknameInput.value;
        const email = emailInput.value;
        const birthday = birthdayInput.value;
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (password !== confirmPassword) {
            alert("Пароли не совпадают!");
            return;
        }

        document.querySelector(".name-surname").innerText = fullName;
        document.querySelector(".user_email").innerText = email;
        document.querySelector('.user_nick').innerText = nickname;
        document.getElementById('birthdayDisplay').textContent = birthday;
        document.querySelector(".profile_img").src = URL.createObjectURL(avatarInput.files[0]);

        closePopup();

    });
});
