document.addEventListener('DOMContentLoaded', () => {
    const certifications = [
        {
            title: "Data Science & Machine Learning",
            url: "https://programs.edraak.org/learn/course/ds100-v2019sp/issue_certificate/?lang=en",
            issuer: "Edraak.org",
        },
        {
            title: "Protect Systems from Penetrations",
            url: "https://programs.edraak.org/learn/course/kl-vsp-2019/issue_certificate/?lang=en",
            issuer: "Edraak.org",
            
        },
        {
            title: "Computer Essentials",
            url: "https://programs.edraak.org/learn/course/icdl1-v2019sp/issue_certificate/?lang=en",
            issuer: "Edraak.org",
        },
        {
            title: "Advanced Excel - (2)",
            url: "https://programs.edraak.org/learn/course/ad104-vt1-2021/issue_certificate/?lang=en",
            issuer: "Edraak.org",
        },
        {
            title: "Data Analysis with Python",
            url: "https://courses.cognitiveclass.ai/certificates/6850ae965ffc47308b40fd3d8cf0bb9e",
            issuer: "cognitiveclass.ai",
        },
        {
            title: "Emotional Intelligence",
            url: "https://programs.edraak.org/learn/course/ei-vt2_2018/issue_certificate/?lang=en",
            issuer: "Edraak.org",
        },
        {
            title: "The Upper-Intermediate Level (B2)",
            url: "https://programs.edraak.org/learn/course/b2-vb2/issue_certificate/?lang=en",
            issuer: "Edraak.org",
        }
    ];

    const certList = document.getElementById('cert-list');

    certifications.forEach(cert => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="${cert.url}" target="_blank">${cert.title}</a> - Issued by ${cert.issuer} on ${cert.date}`;
        certList.appendChild(listItem);
    });
});
