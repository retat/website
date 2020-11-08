const popupElement = $("#popup")

function toggleSocial() {
    if (popupElement.hasClass("active")) {
        popupElement.fadeOut().html("")
        popupElement.removeClass("active")
    } else {
        popupElement.fadeIn().html(
            "        <div class=\"popupContent\">\n" +
            "        <p>Stalk me on:</p>\n" +
            "        <a href=\"https://twitter.com/Rene__Borner\">Twitter</a><br>\n" +
            "        <a href=\"https://github.com/retat\">Github</a><br>\n" +
            "        <a href=\"https://www.instagram.com/rene__b97/\">Instagram</a>\n" +
            "    </div>").addClass("active")
    }
}

function toggleProjects() {
    if (popupElement.hasClass("active")) {
        popupElement.fadeOut().html("")
        popupElement.removeClass("active")
    } else {
        popupElement.fadeIn().html(
            "        <div class=\"popupContent\">\n" +
            "        <p>Some projects:</p>\n" +
            "        <a href=\"http://ai.reneborner.de\">AI Presentation</a><br>\n" +
            "        <a href=\"https://cs4241-best-group-fp-7.glitch.me/\">Music Recommendations Platform</a><br>\n" +
            "        <a href=\"https://github.com/retat/AI-TranslationModelServer\">English to Java AI Project</a><br>\n" +
            "        <a href=\"https://retat.github.io/audiofile-visualizer/\">Audiofile Visualizer</a>\n" +
            "    </div>").addClass("active")
    }
}

function toggleCV() {
    if (popupElement.hasClass("active")) {
        popupElement.fadeOut().html("")
        popupElement.removeClass("active")
    } else {
        popupElement.fadeIn().html(
            "        <div class=\"popupContent\">\n" +
            "        <p>Résumé:</p>\n" +
            "        <a href=\"assets/documents/CV_en.pdf\">English</a><br>\n" +
            "        <a href=\"assets/documents/CV_de.pdf\">German</a><br>\n" +
            "    </div>").addClass("active")
    }
}
