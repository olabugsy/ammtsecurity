let i = 0;
let images = [];
let slideTime = 2000; // 2 seconds

images[0] = '/Users/olawalealex-oni/Desktop/AMTSECURITY iINC/images/logo.jpeg';
images[1] = 'https://img.freepik.com/free-photo/portrait-male-security-guard-with-uniform_23-2150368713.jpg?w=2000&t=st=1691444347~exp=1691444947~hmac=0550d8984cc7643ca871d96bad6de542dca591ee5b9cc4b1ff8e1968a3e37a61';
;


function changePicture() {
    document.body.style.backgroundImage = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changePicture()", slideTime);
}

window.onload = changePicture;