document.addEventListener('DOMContentLoaded', () => {
    const certifications = [
        {
            title: "The Upper-Intermediate Level (B2)",
            url: "certificates/Upper_Intermediate_Level_B2.pdf",
            issuer: "Edraak.org",
            date: "2018-12-12"
        },
        {
            title: "Computer Essentials",
            url: "certificates/Computer_Essentials.pdf",
            issuer: "Edraak.org",
            date: "2019-08-20"
        },
        {
            title: "Advanced Excel - (2)",
            url: "certificates/Advanced_Excel_2.pdf",
            issuer: "Edraak.org",
            date: "2022-11-05"
        },
        {
            title: "Data Science & Machine Learning",
            url: "certificates/Data_Science_Machine_Learning.pdf",
            issuer: "Edraak.org",
            date: "2022-11-15"
        },
        {
            title: "Emotional Intelligence",
            url: "certificates/Emotional_Intelligence.pdf",
            issuer: "Edraak.org",
            date: "2022-11-15"
        },
        {
            title: "Protect Systems from Penetrations",
            url: "certificates/Protect_Systems_from_Penetrations.pdf",
            issuer: "Edraak.org",
            date: "2022-11-15"
        },

        {
            title: "Data Analysis with Python",
            url: "certificates/Data_Analysis_with_Python.pdf",
            issuer: "cognitiveclass.ai",
            date: "2023-12-28"
        }
    ];

    const certList = document.getElementById('cert-list');

    certifications.forEach(cert => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="${cert.url}" target="_blank">${cert.title}</a> - Issued by ${cert.issuer} on ${cert.date}`;
        certList.appendChild(listItem);
    });

    const cvButton = document.getElementById('cv-button');
    cvButton.addEventListener('click', () => {
        window.open('certificates/your_cv.pdf', '_blank');
    });
});
