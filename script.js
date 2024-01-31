const brugere = document.querySelector(".brugere");
const brugerHtml = document.querySelector("template").innerHTML;

const brugereData = [
    {
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2204.264864480908!2d9.405615877141399!3d56.463197937051454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464be46fe28e135b%3A0xd51f375a29c39970!2sH.%20C.%20Andersens%20Vej%205%2C%208800%20Viborg!5e0!3m2!1sen!2sdk!4v1706529286818!5m2!1sen!2sdk",
        imgSrc: "https://i.pravatar.cc/160?img=3",
        imgAlt: "bruger",
        navn: "Jens Hansen",
        login: "jhansen1963",
        email: "jenshansen@yahoo.com",
    },
    {
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d560.9115420189086!2d12.514541673459476!3d55.78201692024785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46524e64f50e1591%3A0xd23f72eb5714a22e!2sAkademivej%2084%2C%202800%20Kongens%20Lyngby!5e0!3m2!1sda!2sdk!4v1706538131210!5m2!1sda!2sdk",
        imgSrc: "https://i.pravatar.cc/160?img=4",
        imgAlt: "bruger",
        navn: "Jens Hansen",
        login: "jhansen1963",
        email: "jenshansen@yahoo.com",
    },
    {
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d560.8726982137274!2d12.53026210043312!3d55.78471521359734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46524e7e8c21884f%3A0x82041269677fd1e0!2sBiologiens%20Vej%208%2C%202800%20Kongens%20Lyngby!5e0!3m2!1sda!2sdk!4v1706538214005!5m2!1sda!2sdk",
        imgSrc: "https://i.pravatar.cc/160?img=5",
        imgAlt: "bruger",
        navn: "Jens Hansen",
        login: "jhansen1963",
        email: "jenshansen@yahoo.com",
    },
    {
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d560.9957049391619!2d12.51577549007587!3d55.7761702282469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46524e70276e66bd%3A0xdcad28566d98b83d!2sMelagervej%2013%2C%202800%20Kongens%20Lyngby!5e0!3m2!1sda!2sdk!4v1706538318341!5m2!1sda!2sdk",
        imgSrc: "https://i.pravatar.cc/160?img=6",
        imgAlt: "bruger",
        navn: "Jens Hansen",
        login: "jhansen1963",
        email: "jenshansen@yahoo.com",
    },
];

brugereData.forEach((bruger) => {
    const brugerTemplate = brugerHtml
        .replace("{{map}}", bruger.map)
        .replace("imgSrc", bruger.imgSrc)
        .replace("imgAlt", bruger.imgAlt)
        .replace("navn", bruger.navn)
        .replace("login", bruger.login)
        .replace("{{email}}", bruger.email)
        .replace("{{email}}", bruger.email);

    brugere.insertAdjacentHTML("beforeend", brugerTemplate);
});
