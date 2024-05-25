document.addEventListener('DOMContentLoaded', () => {
    const certifications = [
        {
            title: "Data Science & Machine Learning",
            url: "https://programs.edraak.org/learn/course/ds100-v2019sp/issue_certificate/?lang=en",
            issuer: "Edraak.org",
            date: "2020-05-10"
        },
        {
            title: "Protect Systems from Penetrations",
            url: "https://programs.edraak.org/learn/course/kl-vsp-2019/issue_certificate/?lang=en",
            issuer: "Edraak.org",
            date: "2021-06-15"
        },
        {
            title: "Computer Essentials",
            url: "https://programs.edraak.org/learn/course/icdl1-v2019sp/issue_certificate/?lang=en",
            issuer: "Edraak.org",
            date: "2019-08-20"
        },
        {
            title: "Advanced Excel - (2)",
            url: "https://programs.edraak.org/learn/course/ad104-vt1-2021/issue_certificate/?lang=en",
            issuer: "Edraak.org",
            date: "2021-10-05"
        },
        {
            title: "Data Analysis with Python",
            url: "https://courses.cognitiveclass.ai/certificates/6850ae965ffc47308b40fd3d8cf0bb9e",
            issuer: "cognitiveclass.ai",
            date: "2022-03-18"
        },
        {
            title: "Emotional Intelligence",
            url: "https://programs.edraak.org/learn/course/ei-vt2_2018/issue_certificate/?lang=en",
            issuer: "Edraak.org",
            date: "2020-11-22"
        },
        {
            title: "The Upper-Intermediate Level (B2)",
            url: "https://programs.edraak.org/learn/course/b2-vb2/issue_certificate/?lang=en",
            issuer: "Edraak.org",
            date: "2018-12-12"
        }
    ];

    const certList = document.getElementById('cert-list');

    certifications.forEach(cert => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="${cert.url}" target="_blank">${cert.title}</a> - Issued by ${cert.issuer} on ${cert.date}`;
        certList.appendChild(listItem);
    });
});
